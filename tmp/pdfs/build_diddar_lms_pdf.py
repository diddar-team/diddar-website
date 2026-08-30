from html import escape
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "output" / "pdf" / "diddar-lms-backend-plan.pdf"

NAVY = colors.HexColor("#0B163F")
BLUE = colors.HexColor("#173FEA")
ORANGE = colors.HexColor("#F36B42")
SLATE = colors.HexColor("#53617A")
MUTED = colors.HexColor("#8490A6")
PANEL = colors.HexColor("#EEF1F7")
STROKE = colors.HexColor("#DDE2EE")
WHITE = colors.white


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverKicker", parent=styles["Normal"], fontName="Courier-Bold",
    fontSize=9, leading=12, textColor=BLUE, tracking=1.5, spaceAfter=8,
))
styles.add(ParagraphStyle(
    name="CoverTitle", parent=styles["Title"], fontName="Courier-Bold",
    fontSize=29, leading=34, textColor=NAVY, alignment=TA_LEFT, spaceAfter=12,
))
styles.add(ParagraphStyle(
    name="CoverSub", parent=styles["Normal"], fontName="Courier",
    fontSize=12, leading=18, textColor=SLATE, spaceAfter=18,
))
styles.add(ParagraphStyle(
    name="H1Doc", parent=styles["Heading1"], fontName="Courier-Bold",
    fontSize=20, leading=24, textColor=NAVY, spaceBefore=10, spaceAfter=10,
))
styles.add(ParagraphStyle(
    name="H2Doc", parent=styles["Heading2"], fontName="Courier-Bold",
    fontSize=13.5, leading=17, textColor=NAVY, spaceBefore=12, spaceAfter=6,
))
styles.add(ParagraphStyle(
    name="H3Doc", parent=styles["Heading3"], fontName="Courier-Bold",
    fontSize=10.5, leading=14, textColor=BLUE, spaceBefore=8, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="BodyDoc", parent=styles["BodyText"], fontName="Courier",
    fontSize=9.2, leading=14, textColor=SLATE, spaceAfter=7,
))
styles.add(ParagraphStyle(
    name="SmallDoc", parent=styles["BodyText"], fontName="Courier",
    fontSize=8, leading=11, textColor=SLATE, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="Callout", parent=styles["BodyText"], fontName="Courier-Bold",
    fontSize=10, leading=15, textColor=NAVY, leftIndent=10, rightIndent=10,
    spaceBefore=4, spaceAfter=4,
))
styles.add(ParagraphStyle(
    name="CodeDoc", parent=styles["Code"], fontName="Courier",
    fontSize=7.5, leading=10.5, textColor=NAVY, leftIndent=0, rightIndent=0,
))
styles.add(ParagraphStyle(
    name="TableHead", parent=styles["Normal"], fontName="Courier-Bold",
    fontSize=8, leading=10, textColor=WHITE,
))
styles.add(ParagraphStyle(
    name="TableCell", parent=styles["Normal"], fontName="Courier",
    fontSize=7.8, leading=10.5, textColor=SLATE,
))


def P(text, style="BodyDoc"):
    return Paragraph(escape(text).replace("\n", "<br/>"), styles[style])


def rich(text, style="BodyDoc"):
    return Paragraph(text, styles[style])


def bullets(items, level=0):
    return ListFlowable(
        [ListItem(P(item, "BodyDoc"), leftIndent=8) for item in items],
        bulletType="bullet", start="circle", leftIndent=16 + level * 10,
        bulletFontName="Helvetica", bulletFontSize=7, bulletColor=BLUE,
        spaceAfter=6,
    )


def code(text):
    return Table(
        [[Preformatted(text.strip("\n"), styles["CodeDoc"])]],
        colWidths=[174 * mm],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), PANEL),
            ("BOX", (0, 0), (-1, -1), 0.5, STROKE),
            ("LEFTPADDING", (0, 0), (-1, -1), 9),
            ("RIGHTPADDING", (0, 0), (-1, -1), 9),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ]),
    )


def callout(text):
    return Table(
        [[P(text, "Callout")]],
        colWidths=[174 * mm],
        style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#E7ECFD")),
            ("LINEBEFORE", (0, 0), (0, -1), 3, BLUE),
            ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#C6D1FA")),
            ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ]),
    )


def table(headers, rows, widths):
    data = [[rich(f"<b>{escape(h)}</b>", "TableHead") for h in headers]]
    for row in rows:
        data.append([P(str(cell), "TableCell") for cell in row])
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("GRID", (0, 0), (-1, -1), 0.35, STROKE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, colors.HexColor("#F8F9FC")]),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return t


def section(title, text=None):
    result = [Paragraph(title, styles["H1Doc"])]
    if text:
        result.append(P(text))
    return result


def subsection(title, text=None):
    result = [Paragraph(title, styles["H2Doc"])]
    if text:
        result.append(P(text))
    return result


def footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(STROKE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 14 * mm, width - 18 * mm, 14 * mm)
    canvas.setFont("Courier", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 9 * mm, "Diddar LMS backend plan")
    canvas.drawRightString(width - 18 * mm, 9 * mm, f"{doc.page}")
    canvas.restoreState()


story = []

# Cover
story.append(Spacer(1, 22 * mm))
story.append(P("BACKEND ARCHITECTURE AND IMPLEMENTATION PLAN", "CoverKicker"))
story.append(Paragraph("Diddar LMS", styles["CoverTitle"]))
story.append(P("A reusable, multi-tenant learning platform starting with Diddar Bootcamp Cohort One.", "CoverSub"))
story.append(Spacer(1, 8 * mm))
story.append(code("Diddar\n  -> Diddar Bootcamp\n      -> Software Engineering Program\n          -> Cohort One\n              -> Tracks -> Stages -> Lessons"))
story.append(Spacer(1, 12 * mm))
story.append(callout("This document covers backend architecture and implementation only. The first release is intentionally bootcamp-focused, but the model is designed to support universities, secondary schools, corporate training, and self-paced course platforms later."))
story.append(Spacer(1, 18 * mm))
story.append(P("Version 1.0 | August 2026", "SmallDoc"))
story.append(P("Status: Proposed implementation blueprint", "SmallDoc"))
story.append(PageBreak())

# Executive summary
story += section("1. Executive Summary", "The product should be built as a hosted LMS platform. Diddar is the first customer organisation, not a hardcoded special case. A platform administrator provisions a private Diddar environment, applies a bootcamp template, and gives Diddar administrators the tools to create programs, cohorts, tracks, stages, lessons, applications, enrolments, and learning activity.")
story.append(callout("The central rule is: the platform owns capabilities, while each tenant configures how those capabilities are used."))
story += subsection("The first release")
story.append(bullets([
    "Create and configure a tenant for Diddar.",
    "Create a default Diddar Bootcamp learning environment.",
    "Create the Software Engineering Program.",
    "Create Cohort One with dates, capacity, instructors, and tracks.",
    "Allow learners to apply, be approved, and enrol.",
    "Deliver lessons, assignments, mentor sessions, progress tracking, notifications, and certificates.",
    "Give Diddar a private branded URL and admin console.",
]))
story += subsection("What is deliberately postponed")
story.append(bullets([
    "Full university student information system replacement.",
    "Marketplace revenue sharing and creator payouts.",
    "Advanced AI tutoring and automated grading.",
    "Dedicated database infrastructure for enterprise tenants.",
    "Every possible school policy and integration.",
]))

# Product model
story += section("2. Product Model", "The system needs a small number of stable concepts. These concepts should be understandable to customers but also flexible enough to support different education models.")
story.append(table(
    ["Concept", "Meaning", "Diddar example"],
    [
        ["Platform", "The SaaS product operated by the LMS owner.", "The reusable LMS platform."],
        ["Tenant", "A customer organisation with isolated data, branding, users, and billing.", "Diddar."],
        ["Learning environment", "The customer-facing area where learning is organised. Internally this can be a workspace.", "Diddar Bootcamp."],
        ["Program", "A reusable learning path or curriculum.", "Software Engineering Bootcamp."],
        ["Offering", "A scheduled or access-controlled instance of a program or course.", "Cohort One."],
        ["Track", "A path or specialisation inside an offering or program.", "Frontend Engineering."],
        ["Stage", "A sequence or milestone inside a track.", "Web Foundations."],
        ["Course", "Reusable learning content that may be used in multiple offerings.", "HTML and CSS Fundamentals."],
        ["Lesson", "A learner-facing unit of content or activity.", "Semantic HTML."],
        ["Enrolment", "The relationship between a learner and an offering.", "Ada enrolled in Frontend, Cohort One."],
    ],
    [31 * mm, 78 * mm, 65 * mm],
))
story += subsection("Recommended customer-facing hierarchy")
story.append(code("Diddar\n  -> Bootcamp\n      -> Program\n          -> Cohort One\n              -> Track\n                  -> Stage\n                      -> Lesson"))
story.append(P("The backend can use more neutral names such as learning environment and offering. The Diddar interface can display simpler labels such as Bootcamp and Cohort.", "SmallDoc"))

# Tenancy
story += section("3. Multi-Tenancy Architecture", "A tenant is the organisation that buys or operates an LMS instance. Each tenant receives isolated data and configurable presentation, but all tenants use the same application and core database model.")
story += subsection("Tenant responsibilities")
story.append(bullets([
    "Organisation identity and branding.",
    "Custom domain or subdomain.",
    "Tenant administrators, instructors, learners, and guardians where relevant.",
    "Programs, courses, cohorts, offerings, and learning records.",
    "Feature configuration and terminology.",
    "Reports, audit history, billing relationship, and integrations.",
]))
story += subsection("Tenant isolation")
story.append(code("Request\n  -> Authenticate user\n  -> Resolve tenant from domain or selected context\n  -> Resolve learning environment\n  -> Check permission\n  -> Execute tenant-scoped query\n  -> Return only authorised data"))
story.append(P("Every tenant-owned table should carry tenant_id. Records that are scoped to a learning environment should also carry environment_id. The application must never accept a tenant identifier from the client as proof of access; it must derive tenant context from the authenticated session and verified domain or membership.", "BodyDoc"))
story += subsection("Database strategy")
story.append(table(
    ["Option", "Use", "Recommendation"],
    [
        ["Shared database and shared schema", "Every tenant-owned record has tenant_id.", "Use for the initial release."],
        ["Shared database with row-level security", "Database policies add a second isolation boundary.", "Add when the data layer is stable."],
        ["Dedicated database per tenant", "Separate infrastructure for enterprise customers.", "Add later for regulated or very large customers."],
    ],
    [47 * mm, 67 * mm, 60 * mm],
))
story.append(callout("Start with one database and strict tenant scoping. Design repository methods so moving a large tenant to a dedicated database later is possible without changing the product model."))

# Architecture
story += section("4. Backend System Architecture", "Use a modular monolith first. This keeps the product easier to develop, test, and deploy while preserving clear boundaries between business capabilities.")
story.append(code("Web applications\n  - Public tenant sites\n  - Student application\n  - Instructor workspace\n  - Tenant admin console\n  - Platform admin console\n\nApplication backend\n  - Authentication and tenant context\n  - Tenant provisioning\n  - Catalog and curriculum\n  - Offerings and cohorts\n  - Applications and enrolments\n  - Learning activity\n  - Assessments\n  - Notifications\n  - Billing and reporting\n\nInfrastructure\n  - PostgreSQL\n  - Object storage\n  - Background job queue\n  - Email and SMS provider\n  - Payment provider\n  - Observability and audit logs"))
story += subsection("Backend modules")
story.append(table(
    ["Module", "Primary responsibility"],
    [
        ["Identity", "Users, authentication, sessions, verification, password reset, SSO later."],
        ["Tenants", "Tenant creation, settings, branding, domains, feature flags, provisioning."],
        ["Membership", "User membership, roles, permission assignments, scope checks."],
        ["Catalog", "Programs, courses, tracks, stages, lessons, content versions."],
        ["Offerings", "Cohorts, academic periods, schedules, capacity, instructors, publishing."],
        ["Admissions", "Applications, approvals, waitlists, eligibility, status changes."],
        ["Enrolment", "Access to offerings, transfers, withdrawals, completion state."],
        ["Learning", "Progress, lesson access, assignments, projects, resources, attendance."],
        ["Assessment", "Quizzes, submissions, grades, rubrics, feedback, certificates."],
        ["Communication", "Announcements, notifications, templates, preferences, delivery."],
        ["Billing", "Tenant plans, payments, invoices, discounts, refunds, payment state."],
        ["Reporting", "Progress, attendance, outcomes, exports, dashboards, analytics."],
    ],
    [39 * mm, 135 * mm],
))
story += subsection("Application layering")
story.append(code("HTTP route / controller\n  -> Request validation\n  -> Tenant context resolver\n  -> Permission guard\n  -> Application service\n  -> Repository / transaction\n  -> Domain event\n  -> Response mapper"))
story.append(P("Route handlers should stay thin. Business rules such as whether a learner can enrol, whether a cohort is full, or whether a certificate can be issued belong in application services and domain rules.", "BodyDoc"))

# Provisioning
story += section("5. Customer Sales and Provisioning", "Diddar should be created through a controlled provisioning process. A sales lead must not automatically become a live tenant until the commercial and configuration work is complete.")
story.append(code("Contact sales\n  -> sales_lead created\n  -> qualification and proposal\n  -> tenant created\n  -> bootcamp template applied\n  -> Diddar owner invited\n  -> branding and domain configured\n  -> program and cohort setup\n  -> tenant launched"))
story += subsection("Sales lead")
story.append(bullets([
    "Organisation name and organisation type.",
    "Primary contact name, email, phone, and role.",
    "Estimated learner count and desired launch date.",
    "Required modules and integrations.",
    "Branding, custom domain, and content migration needs.",
    "Current LMS or student system.",
    "Notes, status, owner, and follow-up history.",
]))
story += subsection("Tenant provisioning record")
story.append(code("tenant\n  id: tenant_diddar\n  name: Diddar\n  type: bootcamp\n  status: setup\n  plan: managed\n\nlearning_environment\n  id: env_diddar_bootcamp\n  tenant_id: tenant_diddar\n  name: Diddar Bootcamp\n  status: setup"))
story += subsection("Provisioning checklist")
story.append(table(
    ["Step", "System action", "Owner"],
    [
        ["1. Create tenant", "Create isolated organisation record and default settings.", "Platform admin"],
        ["2. Apply template", "Create roles, permissions, navigation, and bootcamp defaults.", "System"],
        ["3. Create environment", "Create Diddar Bootcamp learning environment.", "System"],
        ["4. Invite owner", "Send invitation to Diddar's first administrator.", "System"],
        ["5. Configure brand", "Logo, colours, domain, email sender, certificate identity.", "Diddar admin"],
        ["6. Create catalog", "Programs, tracks, stages, courses, lessons, and content.", "Diddar admin"],
        ["7. Create cohort", "Dates, capacity, tracks, instructors, registration rules.", "Diddar admin"],
        ["8. Launch", "Publish tenant and open registration.", "Platform or tenant admin"],
    ],
    [31 * mm, 101 * mm, 42 * mm],
))

# Diddar flow
story.append(PageBreak())
story += section("6. Diddar Bootcamp Cohort One", "This is the concrete first use case that the backend must support end to end.")
story.append(code("Diddar\n  -> Diddar Bootcamp\n      -> Software Engineering Program\n          -> Cohort One\n              -> Frontend Engineering\n              -> Backend Engineering\n              -> Product Design"))
story += subsection("Admin setup workflow")
story.append(table(
    ["Order", "Admin action", "Created or changed"],
    [
        ["1", "Create program", "Software Engineering Program"],
        ["2", "Create tracks", "Frontend, Backend, Product Design"],
        ["3", "Create levels", "Beginner, Intermediate"],
        ["4", "Create stages", "Foundations, Core Skills, Project Build"],
        ["5", "Add courses and lessons", "Curriculum and learning content"],
        ["6", "Create Cohort One", "Dates, capacity, status, registration rules"],
        ["7", "Attach tracks", "The tracks available in Cohort One"],
        ["8", "Assign instructors", "Staff responsible for delivery"],
        ["9", "Publish", "Cohort becomes visible to learners"],
    ],
    [15 * mm, 62 * mm, 97 * mm],
))
story += subsection("Learner workflow")
story.append(code("Public Diddar page\n  -> View Cohort One\n  -> Create account\n  -> Choose track\n  -> Submit application\n  -> Application reviewed\n  -> Approved or waitlisted\n  -> Enrolment created\n  -> Welcome notification\n  -> Learner dashboard\n  -> Lessons, tasks, feedback, progress, certificate"))
story += subsection("Cohort state machine")
story.append(code("draft\n  -> registration_open\n  -> registration_closed\n  -> active\n  -> completed\n  -> archived"))
story.append(P("State transitions must be controlled by service methods. For example, an archived cohort cannot accept applications, and a completed cohort cannot silently have its grading rules changed.", "BodyDoc"))
story += subsection("Application state machine")
story.append(code("started\n  -> submitted\n  -> under_review\n  -> approved\n  -> rejected\n  -> waitlisted\n  -> withdrawn"))
story += subsection("Enrolment rules")
story.append(bullets([
    "A learner cannot have two active enrolments in the same track and cohort.",
    "A closed or archived cohort cannot receive a new enrolment.",
    "Capacity must be checked inside a transaction to prevent over-enrolment.",
    "Approval and payment requirements are tenant-configurable.",
    "A learner may be transferred between tracks only when policy allows it.",
    "Every enrolment status change should be auditable.",
]))

# Data model
story += section("7. Data Model", "The model below is the target domain for the first implementation. It is intentionally more complete than the first migration so future work does not require renaming core concepts.")
story += subsection("Identity and tenancy tables")
story.append(code("users\n  id, email, name, avatar_url, status, created_at\n\ntenants\n  id, name, slug, type, status, plan, created_at\n\ntenant_memberships\n  id, tenant_id, user_id, status\n\nlearning_environments\n  id, tenant_id, name, slug, status\n\nenvironment_memberships\n  id, environment_id, user_id, status\n\nroles\n  id, tenant_id, name, scope\n\npermissions\n  id, key\n\nrole_assignments\n  id, role_id, user_id, tenant_id, environment_id"))
story.append(PageBreak())
story += subsection("Catalog and curriculum tables")
story.append(code("programs\n  id, tenant_id, environment_id, title, description, status\n\ntracks\n  id, tenant_id, program_id, title, description, status\n\nlevels\n  id, tenant_id, environment_id, title, rank\n\nstages\n  id, tenant_id, track_id, title, rank, completion_rule\n\ncourses\n  id, tenant_id, title, description, status\n\ncourse_versions\n  id, course_id, version, status, published_at\n\nmodules\n  id, course_version_id, title, rank\n\nlessons\n  id, module_id, title, type, rank, published_at\n\nlesson_contents\n  id, lesson_id, content_type, storage_key, body_json"))
story.append(PageBreak())
story += subsection("Offering and enrolment tables")
story.append(code("offerings\n  id, tenant_id, environment_id, program_id, title, type, status\n  starts_at, ends_at, registration_opens_at, registration_closes_at\n  capacity, approval_required, payment_required\n\noffering_tracks\n  offering_id, track_id, level_id\n\noffering_instructors\n  offering_id, user_id, role\n\napplications\n  id, tenant_id, offering_id, user_id, track_id, status, submitted_at\n\nenrolments\n  id, tenant_id, offering_id, user_id, track_id, status, enrolled_at\n\nprogress_records\n  id, tenant_id, enrolment_id, lesson_id, status, completed_at"))
story.append(PageBreak())
story += subsection("Assessment and operations tables")
story.append(code("assignments\nsubmissions\ngrades\nquizzes\nquiz_questions\nquiz_attempts\nattendance_records\nnotifications\nnotification_deliveries\nannouncements\ncertificates\naudit_logs\nwebhook_events\nfile_assets"))
story.append(P("All tenant-owned records need tenant_id. Environment-owned records should also carry environment_id where practical. Use foreign keys, unique constraints, and indexes to enforce the rules that matter most.", "BodyDoc"))
story.append(table(
    ["Constraint", "Reason"],
    [
        ["Unique tenant slug", "Stable tenant URL and lookup."],
        ["Unique tenant plus user membership", "A user should not have duplicate memberships."],
        ["Unique offering plus user enrolment", "Prevent duplicate enrolment."],
        ["Index tenant_id on every tenant table", "Fast and safe tenant-scoped queries."],
        ["Index offering_id and status", "Fast cohort dashboards and capacity checks."],
        ["Foreign keys with deliberate delete policy", "Prevent accidental deletion of learning records."],
    ],
    [62 * mm, 112 * mm],
))

# API
story += section("8. API and Service Design", "The API should be organised by business capability. The public site, admin console, student portal, and future mobile clients should use the same backend rules.")
story += subsection("Initial API areas")
story.append(code("/api/auth/*\n/api/platform/*\n/api/tenants/*\n/api/environments/*\n/api/memberships/*\n/api/catalog/*\n/api/programs/*\n/api/courses/*\n/api/offerings/*\n/api/cohorts/*\n/api/applications/*\n/api/enrolments/*\n/api/learning/*\n/api/assessments/*\n/api/notifications/*\n/api/reports/*"))
story += subsection("Representative endpoints")
story.append(table(
    ["Method and route", "Purpose"],
    [
        ["POST /api/platform/tenants", "Provision a tenant from a selected template."],
        ["GET /api/tenant", "Return the current tenant context for an authenticated user."],
        ["POST /api/programs", "Create a program inside the current environment."],
        ["POST /api/offerings", "Create a cohort or other learning offering."],
        ["POST /api/offerings/:id/applications", "Submit a learner application."],
        ["POST /api/applications/:id/approve", "Approve and optionally enrol a learner."],
        ["GET /api/me/learning", "Return the learner dashboard and active enrolments."],
        ["POST /api/lessons/:id/complete", "Record learning progress."],
        ["POST /api/submissions", "Submit an assignment or project."],
        ["GET /api/reports/cohorts/:id", "Return cohort progress and operational metrics."],
    ],
    [78 * mm, 96 * mm],
))
story += subsection("Service boundaries")
story.append(code("TenantService\nProvisioningService\nMembershipService\nProgramService\nCourseService\nOfferingService\nApplicationService\nEnrolmentService\nLearningProgressService\nAssessmentService\nNotificationService\nCertificateService\nReportService"))
story.append(P("Services should expose actions, not raw database operations. For example, approveApplication should validate capacity, eligibility, permissions, payment state, and audit requirements before creating an enrolment.", "BodyDoc"))

# Permissions/security
story += section("9. Permissions, Security, and Compliance", "The platform will contain learner identity data, grades, submissions, payment status, and organisation records. Security is a core feature of the backend, not a later enhancement.")
story += subsection("Roles for the first release")
story.append(table(
    ["Role", "Scope and capabilities"],
    [
        ["Platform administrator", "Provision tenants, support customers, manage platform settings."],
        ["Tenant owner", "Manage Diddar settings, staff, branding, and tenant-level operations."],
        ["Environment administrator", "Manage the Diddar Bootcamp catalog, cohorts, and learners."],
        ["Instructor", "View assigned cohorts, deliver lessons, grade work, send announcements."],
        ["Reviewer", "Review applications and grade assigned submissions."],
        ["Learner", "View enrolled content, submit work, receive feedback, track progress."],
    ],
    [48 * mm, 126 * mm],
))
story += subsection("Permission examples")
story.append(code("tenant.manage_settings\nenvironment.manage_members\nprogram.create\ncourse.publish\noffering.create\noffering.manage_enrolments\napplication.review\nassessment.grade\nreport.view\ncertificate.issue\nbilling.manage"))
story += subsection("Required controls")
story.append(bullets([
    "Resolve tenant context from session and domain, never from an untrusted request field.",
    "Check permission before every write and every sensitive read.",
    "Use signed URLs for private files and submitted work.",
    "Use rate limiting on authentication, applications, and public forms.",
    "Record audit events for provisioning, role changes, enrolment decisions, grading, exports, and deletion.",
    "Use soft deletion or archival for learning records instead of destructive deletion.",
    "Provide tenant data export and a documented tenant offboarding process.",
    "Back up the database and test restoration regularly.",
]))

# Events/jobs
story += section("10. Events, Notifications, and Background Jobs", "Email, reminders, certificate generation, and reports should not block the main request. The backend should publish domain events and process non-critical work asynchronously.")
story.append(code("application.submitted\napplication.approved\napplication.rejected\nenrolment.created\ncohort.published\nlesson.completed\nassignment.submitted\nassignment.graded\ncohort.started\ncohort.completed\ncertificate.issued"))
story += subsection("Example event flow")
story.append(code("ApplicationService.approve()\n  -> create enrolment in transaction\n  -> publish enrolment.created\n  -> notification job sends welcome email\n  -> dashboard job refreshes cohort metrics\n  -> audit job records approval"))
story.append(bullets([
    "Use an outbox table so database changes and emitted events cannot drift apart.",
    "Make jobs idempotent so retries do not send duplicate or conflicting results.",
    "Keep provider-specific email, SMS, and payment code behind integration interfaces.",
    "Store delivery status and provider message identifiers for support investigation.",
]))

# Customization and future
story += section("11. Reusability for Other Customers", "Diddar is the first tenant, but the platform should not assume every customer is a bootcamp. Reuse comes from configuration and extension points, not from making every workflow infinitely generic on day one.")
story += subsection("Tenant configuration")
story.append(bullets([
    "Branding: logo, colours, typography, domain, email identity, certificate identity.",
    "Terminology: cohort can display as intake, semester, term, or class group.",
    "Features: attendance, guardians, payments, certificates, discussions, live sessions.",
    "Workflows: auto-enrolment, approval, payment-before-access, application review.",
    "Custom fields: student ID, matriculation number, house, department, employee ID.",
    "Templates: bootcamp, university, secondary school, corporate training, marketplace.",
]))
story += subsection("Future mapping")
story.append(table(
    ["Customer type", "Tenant", "Environment", "Offering"],
    [
        ["Diddar bootcamp", "Diddar", "Diddar Bootcamp", "Cohort One"],
        ["University", "University of Lagos", "Computer Science", "2026/2027 First Semester"],
        ["Secondary school", "Kings College", "Senior School", "2026 First Term"],
        ["Marketplace", "Platform or creator organisation", "Public Catalog", "Self-paced JavaScript course"],
    ],
    [36 * mm, 48 * mm, 47 * mm, 43 * mm],
))
story.append(P("The core offering model stays the same. What changes is the tenant template, terminology, permissions, fields, and workflow configuration.", "BodyDoc"))

# Implementation phases
story += section("12. Implementation Plan", "Build in vertical slices. Each phase should produce a usable backend capability and should be tested with tenant isolation from the beginning.")
story.append(table(
    ["Phase", "Deliverables", "Exit condition"],
    [
        ["0. Foundation", "Database choice, migrations, configuration, error model, logging, test setup.", "The application can safely connect to a development database."],
        ["1. Identity and tenancy", "Users, login, tenants, environments, memberships, roles, tenant context.", "A user can belong to Diddar and cannot access another tenant."],
        ["2. Provisioning", "Sales leads, tenant creation, bootcamp template, invitations, branding settings.", "A platform admin can provision Diddar without manual database work."],
        ["3. Catalog", "Programs, tracks, levels, stages, courses, modules, lessons, publishing.", "Diddar can build its curriculum through APIs/admin UI."],
        ["4. Cohorts and admissions", "Offerings, cohort state, applications, capacity, approval, enrolment.", "A learner can apply and become enrolled in Cohort One."],
        ["5. Learning engine", "Progress, assignments, submissions, grading, attendance, notifications.", "An instructor can run a real learning week."],
        ["6. Completion", "Certificates, reports, exports, audit review, backups, support tools.", "Diddar can complete a cohort and verify learner outcomes."],
        ["7. Expansion", "University, secondary-school, marketplace templates and integrations.", "A second customer type can be onboarded without changing the core model."],
    ],
    [28 * mm, 80 * mm, 66 * mm],
))
story += subsection("Recommended first engineering backlog")
story.append(bullets([
    "Create the backend application and database package structure.",
    "Add migrations for users, tenants, environments, memberships, roles, and permissions.",
    "Implement authentication and tenant context middleware.",
    "Implement tenant-scoped repository helpers and tests.",
    "Implement platform tenant provisioning from a bootcamp template.",
    "Implement Diddar program, track, stage, course, lesson, and cohort APIs.",
    "Implement application approval and transactional enrolment.",
    "Add audit events and notification jobs before exposing public registration.",
]))

# Repo structure
story += section("13. Suggested Backend Repository Structure", "The current repository is a Next.js marketing site with small API routes. The backend can begin in the same repository, but its domain logic should be separated from the page components.")
story.append(code("app/\n  api/\n    auth/\n    platform/\n    tenants/\n    environments/\n    programs/\n    offerings/\n    applications/\n    enrolments/\n    learning/\n\nsrc/\n  modules/\n    auth/\n    tenancy/\n    membership/\n    catalog/\n    offerings/\n    admissions/\n    enrolment/\n    learning/\n    assessment/\n    communication/\n    reporting/\n  db/\n    client.ts\n    schema/\n    migrations/\n  permissions/\n  events/\n  jobs/\n  integrations/\n  validation/\n  errors/\n\ntests/\n  unit/\n  integration/\n  security/\n  contract/"))
story.append(P("As the product grows, the API can move into a separate service without changing the domain model. The important boundary is between frontend rendering and backend application services.", "BodyDoc"))

# Testing/ops
story += section("14. Testing and Operations", "Every feature that reads or writes tenant data needs isolation tests. Multi-tenancy is not complete until the system proves that a Diddar user cannot read University of Lagos data, even when identifiers are guessed.")
story += subsection("Test layers")
story.append(bullets([
    "Unit tests for domain rules and state transitions.",
    "Repository tests for constraints, indexes, and tenant scoping.",
    "Integration tests for application approval, capacity checks, and enrolment transactions.",
    "Security tests for cross-tenant access, role boundaries, signed URLs, and ID guessing.",
    "Contract tests for public APIs used by the student and admin applications.",
    "End-to-end tests for provisioning Diddar and completing a sample cohort journey.",
]))
story += subsection("Operational baseline")
story.append(bullets([
    "Structured logs with request ID, tenant ID, user ID, and operation name.",
    "Error tracking with sensitive data redaction.",
    "Metrics for signups, applications, enrolments, job failures, and API latency.",
    "Database migration and rollback procedure.",
    "Daily backups and tested restore procedure.",
    "Health checks for database, object storage, email, and queue providers.",
    "Admin support tools for safe investigation and audited impersonation.",
]))

# Decisions
story += section("15. Decisions to Lock Before Coding", "These decisions prevent expensive rewrites while keeping the first version focused.")
story.append(table(
    ["Decision", "Recommended choice"],
    [
        ["Tenant model", "One tenant per customer organisation."],
        ["Environment model", "One default learning environment per tenant, hidden as a technical detail initially."],
        ["First offering type", "Cohort-based offering with dates and capacity."],
        ["Database", "PostgreSQL with tenant_id on tenant-owned tables."],
        ["Architecture", "Modular monolith before microservices."],
        ["Authentication", "Use a trusted provider or well-tested auth package; do not build password security from scratch."],
        ["Files", "Object storage with private signed access."],
        ["Async work", "Outbox plus queue for notifications and reports."],
        ["Customisation", "Tenant settings, templates, feature flags, terminology, and controlled custom fields."],
        ["First customer", "Diddar Bootcamp Cohort One."],
    ],
    [52 * mm, 122 * mm],
))
story.append(callout("The backend should first make Diddar Cohort One operational. Reusability is achieved by making Diddar configurable and tenant-scoped, not by delaying delivery until every education model is perfect."))

# Appendix
story += section("Appendix A. Complete Diddar Example", "This is how the first provisioned tenant should look conceptually in the system.")
story.append(code("Platform\n  Tenant: Diddar\n    type: bootcamp\n    status: active\n    domain: diddar.yourlms.com\n\n    Learning environment: Diddar Bootcamp\n      Program: Software Engineering Bootcamp\n        Tracks:\n          - Frontend Engineering\n          - Backend Engineering\n          - Product Design\n\n        Offering: Cohort One\n          start: 2027-01-12\n          end: 2027-04-05\n          capacity: 50\n          status: registration_open\n\n          Applications\n            - learner A: approved\n            - learner B: under_review\n\n          Enrolments\n            - learner A -> Frontend Engineering\n\n          Curriculum\n            Frontend Engineering\n              Stage: Web Foundations\n                Lesson: Semantic HTML\n                Lesson: CSS Layout\n                Assignment: Build a landing page"))
story.append(P("End of document.", "SmallDoc"))


doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4,
    rightMargin=18 * mm, leftMargin=18 * mm,
    topMargin=18 * mm, bottomMargin=19 * mm,
    title="Diddar LMS Backend Architecture and Implementation Plan",
    author="Diddar",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
