import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { APP_NAME, APP_TAGLINE } from '@/lib/site';

export const alt = `${APP_NAME} — ${APP_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const mark = await readFile(join(process.cwd(), 'public/diddar-mark.png'));
  const markSrc = `data:image/png;base64,${mark.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#FCFBF8',
          padding: '84px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          <img src={markSrc} height={148} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: '#0B163F',
                letterSpacing: '-0.02em',
              }}
            >
              {APP_NAME}
            </div>
            <div style={{ fontSize: 30, fontWeight: 600, color: '#173FEA' }}>
              {APP_TAGLINE}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
          <div
            style={{
              width: '84px',
              height: '6px',
              background: '#F36B42',
              borderRadius: '999px',
            }}
          />
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              color: '#0B163F',
              lineHeight: 1.25,
              maxWidth: '940px',
            }}
          >
            A practical, mentor-led tech bootcamp. Add your name to the list.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
