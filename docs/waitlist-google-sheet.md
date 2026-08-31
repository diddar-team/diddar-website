# Waitlist → Google Sheet setup

The site posts every waitlist and newsletter submission to `POST /api/waitlist`.
That route forwards a clean JSON payload to a **Google Apps Script web app**,
which appends a row to a Google Sheet you own. No third-party service, no cost.

You only have to do this once.

---

## 1. Create the Sheet

1. Create a new Google Sheet — name it e.g. **Diddar Waitlist**.
2. Add two tabs (bottom-left): rename `Sheet1` to **Waitlist**, add a second
   tab named **Newsletter**.
3. On **Waitlist**, put these headers in row 1 (A1:K1):

   ```
   timestamp | kind | name | email | track | level | mode | timezone | goal | hearAbout | source
   ```

4. On **Newsletter**, put these headers in row 1 (A1:D1):

   ```
   timestamp | kind | email | source
   ```

## 2. Add the Apps Script

1. In the Sheet: **Extensions → Apps Script**.
2. Delete the placeholder and paste:

   ```js
   const SHEETS = { waitlist: 'Waitlist', newsletter: 'Newsletter' };

   function doPost(e) {
     try {
       const body = JSON.parse(e.postData.contents);
       const ss = SpreadsheetApp.getActiveSpreadsheet();
       const tabName = SHEETS[body.kind] || SHEETS.waitlist;
       const sheet = ss.getSheetByName(tabName);

       if (body.kind === 'newsletter') {
         sheet.appendRow([
           body.timestamp || new Date().toISOString(),
           body.kind,
           body.email || '',
           body.source || 'website',
         ]);
       } else {
         sheet.appendRow([
           body.timestamp || new Date().toISOString(),
           body.kind || 'waitlist',
           body.name || '',
           body.email || '',
           body.track || '',
           body.level || '',
           body.mode || '',
           body.timezone || '',
           body.goal || '',
           body.hearAbout || '',
           body.source || 'website',
         ]);
       }

       return ContentService
         .createTextOutput(JSON.stringify({ ok: true }))
         .setMimeType(ContentService.MimeType.JSON);
     } catch (err) {
       return ContentService
         .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
         .setMimeType(ContentService.MimeType.JSON);
     }
   }
   ```

3. **Save** (disk icon).

## 3. Deploy as a web app

1. **Deploy → New deployment**.
2. Type: **Web app**.
3. Description: `Diddar waitlist intake`.
4. Execute as: **Me**.
5. Who has access: **Anyone**.
6. **Deploy**, authorise when prompted, and copy the **Web app URL**
   (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

## 4. Wire it into the site

1. Copy `.env.example` to `.env.local`.
2. Set:

   ```
   WAITLIST_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```

3. For production, add the same variable in your host's environment settings
   (e.g. Vercel → Project → Settings → Environment Variables).

## 5. Test

- `pnpm dev`, open `/waitlist`, submit the form.
- A new row should appear on the **Waitlist** tab within a second or two.
- Submitting the footer newsletter form adds a row to **Newsletter**.

> If `WAITLIST_WEBHOOK_URL` is empty, the API still returns success and logs the
> payload to the server console — handy for local development.

## Updating the script later

If you change the Apps Script code, redeploy: **Deploy → Manage deployments →
edit (pencil) → Version: New version → Deploy**. The URL stays the same.

---

## Reading the demand signal

On the **Waitlist** tab:

- Select the `track` and `level` columns → **Insert → Pivot table** to see
  counts per track and per level.
- The `goal` column is free text — skim it for recurring themes when planning
  cohorts.
