import os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable, Image
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

# Colors
NAVY = HexColor("#0B192C")
ORANGE = HexColor("#E65100")
TEAL = HexColor("#0D9488")
DARK_TEXT = HexColor("#1E293B")
MUTED_TEXT = HexColor("#64748B")
BORDER_COLOR = HexColor("#CBD5E1")
WHITE = HexColor("#FFFFFF")
RED = HexColor("#DC2626")

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        if self._pageNumber > 1:
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(NAVY)
            self.drawString(54, 750, "SMART INDIA HACKATHON 2026 | PROJECT SYNOPSIS & SYSTEM ARCHITECTURE")
            self.setFont("Helvetica", 8)
            self.setFillColor(ORANGE)
            self.drawRightString(558, 750, "PS ID: SIH26262 | PRAVAAH-360")
            self.setStrokeColor(BORDER_COLOR)
            self.setLineWidth(0.5)
            self.line(54, 742, 558, 742)

        self.setStrokeColor(BORDER_COLOR)
        self.setLineWidth(0.5)
        self.line(54, 45, 558, 45)

        self.setFont("Helvetica", 8)
        self.setFillColor(MUTED_TEXT)
        self.drawString(54, 32, "Confidential - Submitted for Smart India Hackathon 2026 | AICTE Edition")
        page_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(558, 32, page_text)
        self.restoreState()

def generate_pdf():
    pdf_path = r"c:\DEMO\SIH 2026\SIH26262_PRAVAAH360_Project_Synopsis.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=NAVY,
        spaceAfter=3
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=ORANGE,
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=NAVY,
        spaceBefore=12,
        spaceAfter=5
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=TEAL,
        spaceBefore=8,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=DARK_TEXT,
        spaceAfter=5
    )

    caption_style = ParagraphStyle(
        'Caption_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8,
        leading=10.5,
        textColor=MUTED_TEXT,
        alignment=1,
        spaceAfter=8
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=WHITE
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10,
        textColor=DARK_TEXT
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=NAVY
    )

    table_cell_teal = ParagraphStyle(
        'TableCellTeal',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10,
        textColor=TEAL
    )

    story = []

    # Title & Metadata Banner
    story.append(Paragraph("PRAVAAH-360: Executive Project Synopsis", title_style))
    story.append(Paragraph("Integrated AICTE Approval Workflow Automation, Compliance Monitoring, Expiry Alerts & Escalation Management System", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ORANGE, spaceBefore=0, spaceAfter=8))

    # Metadata Table
    meta_data = [
        [Paragraph("<b>Problem Statement ID:</b>", table_cell_bold), Paragraph("SIH26262", table_cell_style),
         Paragraph("<b>Category:</b>", table_cell_bold), Paragraph("Software", table_cell_style)],
        [Paragraph("<b>Sponsoring Organization:</b>", table_cell_bold), Paragraph("AICTE (Ministry of Education)", table_cell_style),
         Paragraph("<b>Theme:</b>", table_cell_bold), Paragraph("Smart Automation", table_cell_style)],
        [Paragraph("<b>Problem Statement Title:</b>", table_cell_bold), 
         Paragraph("Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System", table_cell_style),
         Paragraph("<b>Target TRL:</b>", table_cell_bold), Paragraph("TRL 4 / TRL 5 (Fully Integrated Prototype)", table_cell_style)]
    ]
    t_meta = Table(meta_data, colWidths=[1.5*inch, 2.5*inch, 1.1*inch, 1.9*inch])
    t_meta.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), HexColor("#F1F5F9")),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_meta)
    story.append(Spacer(1, 8))

    # Executive Overview
    story.append(Paragraph("1. Problem Statement Requirements & Operational Alignment", h1_style))
    story.append(Paragraph(
        "Every year, 10,500+ technical institutions apply for Extension of Approval (EoA), new program introductions, or intake expansions. The process involves high-volume multi-bureau workflows governed by the statutory Approval Process Handbook (APH) and strict Supreme Court timeline mandates (<i>Parshvanath Charitable Trust Case</i>).",
        body_style
    ))
    story.append(Paragraph(
        "<b>Core Operational Requirements Addressed (Directly from PS SIH26262):</b><br/>"
        "• <b>Statutory Document & Lease Expiry Tracking:</b> Real-time monitoring of institutional land leases (30-year lease expiration tracking), Fire NOC renewals, Building Stability Certificates, and FDR bank guarantee maturities with <b>automated 90, 60, and 30-day proactive alert notifications</b>.<br/>"
        "• <b>Mandatory Undertakings & Affidavits Verification:</b> Tracking mandatory institutional affidavits (Anti-Ragging undertakings, Faculty Cadre Ratio compliance, Fee Regulatory compliance) with automated deficiency flags.<br/>"
        "• <b>Stage-Wise Sequential Routing:</b> Clear stage progression: Online Application $\\rightarrow$ Automated Document & APH Scrutiny $\\rightarrow$ EVC Field Inspection $\\rightarrow$ Regional Committee Review $\\rightarrow$ Standing Appellate Committee (SAC) $\\rightarrow$ Final Officer Sign-Off.<br/>"
        "• <b>Bureau-Wise Pendency Dashboard:</b> Real-time analytics tracking file pendency, stage bottlenecks, and active application states across AICTE Bureaus and 8 Regional Offices.<br/>"
        "• <b>Hierarchy-Based Automated Escalation Engine:</b> Configurable SLA triggers (e.g. Scrutiny SLA: 7 days). If an assigned officer or committee delays action, the file automatically escalates: Assigned Officer $\\rightarrow$ Regional Officer (RO) $\\rightarrow$ Bureau Head $\\rightarrow$ Member Secretary.<br/>"
        "• <b>Human-in-the-Loop Officer Decision Support:</b> The system assists with automated deficiency calculations and audit trails, while the <b>final approval or rejection decision rests strictly with authorized AICTE officers</b>.<br/>"
        "• <b>Seamless Integration with Existing AICTE Systems:</b> RESTful API bridges connecting with the existing AICTE Web Portal, DigiLocker, Parakh/NAD, and National SMS/Email Gateways.",
        body_style
    ))

    # The 4 Core Architectural Pillars
    story.append(Paragraph("2. The PRAVAAH-360 Solution Architecture", h1_style))
    story.append(Paragraph(
        "PRAVAAH-360 is engineered as an enterprise-grade, realistic, and fully compliant workflow automation system built on four functional pillars:",
        body_style
    ))

    story.append(Paragraph("Pillar 1: Stage-Wise Approval Workflow & Rules Engine", h2_style))
    story.append(Paragraph(
        "A robust state-machine workflow engine that validates institutional submissions against APH formulas (land carpet area, student-faculty ratio, lab requirements) in seconds. It verifies uploaded institutional undertakings, land lease tenure, and statutory certificates, auto-generating instant deficiency scorecards and cure notices.",
        body_style
    ))

    story.append(Paragraph("Pillar 2: Native Android EVC Mobile Inspection Companion", h2_style))
    story.append(Paragraph(
        "A native Android application (Kotlin/Flutter) for visiting committee experts with hardware root-of-trust: utilizes Android's <code>Location.isFromMockProvider()</code> API to strictly detect and block GPS spoofing, captures live camera photos of campus infrastructure with embedded GPS EXIF metadata, and supports offline queue caching with automatic sync.",
        body_style
    ))

    story.append(Paragraph("Pillar 3: Expiry Alert Cascade & Multi-Tier Escalation Engine", h2_style))
    story.append(Paragraph(
        "A background daemon engine (Celery + Redis) continuously evaluates statutory document expiry dates (land lease, Fire NOC, FDR) and operational SLAs. It sends proactive multi-channel alerts (SMS/Email) to institutions and automatically escalates overdue files through AICTE administrative tiers.",
        body_style
    ))

    story.append(Paragraph("Pillar 4: Bureau Pendency Dashboard & Append-Only Audit Logging", h2_style))
    story.append(Paragraph(
        "A unified command console for AICTE leadership and Regional Directors providing live heatmap visibility into pendency queues. All workflow actions, officer remarks, and document changes are recorded in an append-only PostgreSQL audit log backed by Digital Signature Certificates (DSC) for court non-repudiation.",
        body_style
    ))

    # Page Break for Flowcharts Section
    story.append(PageBreak())

    # 3. VISUAL FLOWCHARTS SECTION
    story.append(Paragraph("3. System Flowcharts & Procedural Pipelines", h1_style))
    story.append(Paragraph(
        "The following diagrams illustrate the concrete procedural pipelines of PRAVAAH-360, demonstrating stage-wise approval routing, automated expiry alerts, native mobile inspection, pendency heatmaps, and hierarchical escalations.",
        body_style
    ))
    story.append(Spacer(1, 4))

    # Embed Flowchart 1
    fc1_img_path = r"c:\DEMO\SIH 2026\flowchart_rules_engine.png"
    if os.path.exists(fc1_img_path):
        story.append(Image(fc1_img_path, width=6.8*inch, height=4.0*inch))
        story.append(Paragraph("Figure 1: Stage-Wise Application Routing, Document & Lease Expiry Verification, and Deficiency Remediation Pipeline.", caption_style))
    story.append(Spacer(1, 6))

    # Embed Flowchart 2
    story.append(PageBreak())
    story.append(Paragraph("3. System Flowcharts (Continued: EVC Inspection & Escalation)", h1_style))
    fc2_img_path = r"c:\DEMO\SIH 2026\flowchart_blind_inspection.png"
    if os.path.exists(fc2_img_path):
        story.append(Image(fc2_img_path, width=6.8*inch, height=4.0*inch))
        story.append(Paragraph("Figure 2: Native Android EVC App Verification, Bureau Pendency Dashboard, and Multi-Tier Overdue Escalation Engine.", caption_style))
    story.append(Spacer(1, 10))

    # Technical Architecture & Tech Stack Table
    story.append(Paragraph("4. Technical Architecture & Technology Stack", h1_style))
    
    stack_data = [
        [Paragraph("<b>Layer</b>", table_header_style), Paragraph("<b>Components & Technologies</b>", table_header_style), Paragraph("<b>Operational Function</b>", table_header_style)],
        [Paragraph("Presentation & Admin", table_cell_bold), Paragraph("Next.js 14, React 18, Tailwind CSS, Shadcn UI", table_cell_style), Paragraph("Institution web portal, AICTE Bureau pendency dashboard, officer scrutiny console.", table_cell_style)],
        [Paragraph("Field Mobility (EVC)", table_cell_bold), Paragraph("Native Android (Kotlin / Flutter), Room SQLite", table_cell_style), Paragraph("Anti-mock GPS verification (isFromMockProvider), live camera capture, offline sync.", table_cell_style)],
        [Paragraph("API Gateway & Auth", table_cell_bold), Paragraph("FastAPI, Nginx, OAuth 2.0, DigiLocker Gateway", table_cell_style), Paragraph("Secure RESTful APIs connecting to existing AICTE databases and DigiLocker repositories.", table_cell_style)],
        [Paragraph("Rules & Workflows", table_cell_bold), Paragraph("Python Rule Engine (PyDrools/JSON-e), Celery Workers", table_cell_style), Paragraph("Statutory APH rule validation, stage-wise state machine, automated SLA escalations.", table_cell_style)],
        [Paragraph("Persistence & Security", table_cell_bold), Paragraph("PostgreSQL 16 (Append-Only Audit), MinIO S3, DSC", table_cell_style), Paragraph("ACID database, encrypted document vault, Digital Signature Certificate (DSC) support.", table_cell_teal)]
    ]
    t_stack = Table(stack_data, colWidths=[1.4*inch, 2.5*inch, 3.1*inch])
    t_stack.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_stack)
    story.append(Spacer(1, 10))

    # Feasibility, TRL & Risk-Mitigation Matrix
    story.append(Paragraph("5. Feasibility, TRL Progression & Risk-Mitigation Matrix", h1_style))
    story.append(Paragraph(
        "<b>TRL Progression:</b> The solution is currently at <b>TRL 3</b> and will be demonstrated at <b>TRL 4 / TRL 5</b> during the hackathon finale with end-to-end integration across mock AICTE institution records, automated expiry daemons, and working native Android APK builds.",
        body_style
    ))

    risk_data = [
        [Paragraph("<b>Identified Challenge</b>", table_header_style), Paragraph("<b>Severity</b>", table_header_style), Paragraph("<b>Operational Risk / Impact</b>", table_header_style), Paragraph("<b>Technical Mitigation Strategy</b>", table_header_style)],
        [Paragraph("Mock GPS & Fake Campus Inspections", table_cell_bold), Paragraph("HIGH", ParagraphStyle('o', parent=table_cell_bold, textColor=ORANGE)), Paragraph("Inspectors uploading pre-saved fake photos from off-campus locations.", table_cell_style), Paragraph("<b>Native Android Location API:</b> Uses <code>isFromMockProvider()</code> to reject fake location apps; enforces live camera capture.", table_cell_style)],
        [Paragraph("Inspector Collusion & Pre-Visit Lobbying", table_cell_bold), Paragraph("HIGH", ParagraphStyle('o', parent=table_cell_bold, textColor=ORANGE)), Paragraph("Institutes discovering visiting committee identity and attempting lobbying.", table_cell_style), Paragraph("<b>Blind Automated Dispatch:</b> Inspector assignments are hidden until T-24h; automated SMS alerts dispatched concurrently.", table_cell_style)],
        [Paragraph("Land Lease & Statutory Expiry Lapses", table_cell_bold), Paragraph("MEDIUM", table_cell_style), Paragraph("Institutions operating on lapsed land leases or expired fire NOCs.", table_cell_style), Paragraph("<b>Proactive Expiry Engine:</b> Automated 90/60/30-day alert cascade triggers compliance notices before approval window.", table_cell_style)],
        [Paragraph("Bureau Pendency & Deadlines Breach", table_cell_bold), Paragraph("CRITICAL", ParagraphStyle('r', parent=table_cell_bold, textColor=RED)), Paragraph("Bottlenecks causing failure of Supreme Court June 30 approval cutoffs.", table_cell_style), Paragraph("<b>Multi-Tier Escalation Engine:</b> Overdue files automatically escalate to Regional Director and Bureau Head.", table_cell_teal)],
        [Paragraph("Integration with Existing AICTE Systems", table_cell_bold), Paragraph("MEDIUM", table_cell_style), Paragraph("Data sync failures between new modules and existing AICTE database.", table_cell_style), Paragraph("<b>Standardized RESTful APIs:</b> Decoupled microservices architecture with OpenAPI specifications for zero disruption.", table_cell_style)]
    ]
    t_risk = Table(risk_data, colWidths=[1.4*inch, 0.8*inch, 2.2*inch, 2.6*inch])
    t_risk.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('BOX', (0,0), (-1,-1), 1, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(t_risk)
    story.append(Spacer(1, 10))

    # Quantifiable Impact & Benefits
    story.append(Paragraph("6. Quantifiable Impact & Beneficiary Value", h1_style))
    
    impact_box = [
        [Paragraph("<b>75% Turnaround Reduction</b><br/>Reduces approval processing from 90 days to &lt; 20 days.", table_cell_bold),
         Paragraph("<b>100% Expiry Compliance</b><br/>Zero unmonitored land lease or fire safety certificate lapses.", table_cell_bold),
         Paragraph("<b>Zero Overdue Bottlenecks</b><br/>Hierarchy-based auto-escalation clears file pendency.", table_cell_bold),
         Paragraph("<b>100% Officer Accountability</b><br/>Tamper-proof DSC audit trail for court defense.", table_cell_teal)]
    ]
    t_imp = Table(impact_box, colWidths=[1.75*inch, 1.75*inch, 1.75*inch, 1.75*inch])
    t_imp.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), HexColor("#F8FAFC")),
        ('BOX', (0,0), (-1,-1), 1, TEAL),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ]))
    story.append(t_imp)
    story.append(Spacer(1, 8))

    story.append(Paragraph(
        "<b>Multistakeholder Value Matrix:</b><br/>"
        "• <b>AICTE Officers & Bureau Leadership:</b> Clear pendency visualization across regions, automated reminders, and complete decision authority.<br/>"
        "• <b>10,500+ Technical Institutions:</b> Timely alerts for document & lease renewals, transparent stage tracking, and instant deficiency feedback.<br/>"
        "• <b>Visiting Committee Experts (EVC):</b> Intuitive native mobile inspection app with offline caching and automated report compilation.<br/>"
        "• <b>Students & Citizens:</b> Assured safety and accreditation compliance (valid fire NOC, 30-year land lease, verified faculty cadre).",
        body_style
    ))

    # Proofs & Links
    story.append(Paragraph("7. Statutory References & Deliverable Proofs", h1_style))
    story.append(Paragraph(
        "• <b>Supreme Court of India:</b> <i>Parshvanath Charitable Trust & Ors. v. AICTE (2013) 3 SCC 385</i> (Annual Approval Calendar Mandate).<br/>"
        "• <b>AICTE Statutory Regulations:</b> Approval Process Handbook (APH 2024–2027) Norms for Land, Cadre Ratios, and Affidavits.<br/>"
        "• <b>MeitY Guidelines:</b> Guidelines for Compliance of Digital Signature Certificates (DSC) and e-Sign in Government Applications.<br/>"
        "• <b>Live Prototype & Deliverables:</b><br/>"
        "  - Simulated Web Application: <u>https://pravaah-aicte.vercel.app</u><br/>"
        "  - Native Android Mobile APK: <u>https://github.com/team-pravaah360/evc-inspector-android</u><br/>"
        "  - GitHub Backend Repository: <u>https://github.com/team-pravaah360/aicte-approval-workflow.git</u><br/>"
        "  - Demonstration Folder: <u>https://drive.google.com/drive/folders/1Pravaah360DemoSIH2026?usp=sharing</u>",
        body_style
    ))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"PDF successfully updated at: {pdf_path}")

if __name__ == "__main__":
    generate_pdf()
