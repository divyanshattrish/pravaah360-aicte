# Smart India Hackathon 2026 — Official Video Presentation & Prototype Walkthrough Script
**Problem Statement ID:** SIH26262  
**Problem Statement Title:** Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System  
**Organization:** All India Council for Technical Education (AICTE), Ministry of Education  
**Team Name:** Six_In_Denial  
**Project Codename:** PRAVAAH-360  
**Live Application URL:** https://frontend-lyart-chi-21.vercel.app/  
**GitHub Repository:** https://github.com/divyanshattrish/pravaah360-aicte  
**Target Video Duration:** 8:30 – 9:45 Minutes (Maximum Limit: 10:00 Minutes)

---

## Video Structure Overview

| Section | Timeline | Focus Area | Visual on Screen |
|---|:---:|---|---|
| **Part 1: Introduction & Problem Context** | `00:00 - 01:45` | Team Intro, Problem Statement, Ground Reality & Key Gaps | Slide 1 & Slide 2 |
| **Part 2: Solution Architecture & Novelty** | `01:45 - 03:30` | 4 Foundational Pillars, Tech Stack, Existing vs. PRAVAAH-360 | Slide 2, 3 & 4 |
| **Part 3: Live Interactive Prototype Walkthrough** | `03:30 - 07:30` | Deep Demo of all 4 Live Working Modules + Audit Ledger | Live Web App (`localhost:5173` or Vercel) |
| **Part 4: Impact, Benefits & Conclusion** | `07:30 - 09:15` | Measurable KPIs, Supreme Court Compliance, Closing Pitch | Slide 5 & Slide 6 |

---

## Detailed Minute-by-Minute Script

---

### PART 1: INTRODUCTION & PROBLEM CONTEXT (00:00 – 01:45)

#### `[00:00 – 00:35]` Slide 1: Title Page & Team Intro
* **Visual on Screen:** Full-screen display of **Slide 1 (Title Page)**. Camera in picture-in-picture (PiP) in top-right corner with the speaker looking confident and professional.
* **Speaker 1 (Team Leader):**
  > "Respected Evaluators and Jury Members, greetings from **Team Six_In_Denial**. 
  > 
  > Today, we present our solution for Smart India Hackathon 2026, **Problem Statement SIH26262**: *Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System*, under the theme *Smart Automation*.
  > 
  > We call our platform **PRAVAAH-360** — an enterprise-grade regulatory engine designed to make AICTE's annual approval cycle transparent, predictable, and legally defensible."

#### `[00:35 – 01:45]` Slide 2: Key Gaps & The Core Problem
* **Visual on Screen:** Transition to **Slide 2**. Highlight the left box (*KEY GAPS*) with smooth zoom or cursor focus.
* **Speaker 1:**
  > "Every year between January and June, more than **10,500 technical institutions** across India apply to AICTE for Extension of Approval, new courses, or seat variation. 
  > 
  > But beneath this massive process lie five critical operational bottlenecks:
  > 1. **Manual File Routing:** Applications move manually across bureaus with zero stage-wise visibility or clear ownership.
  > 2. **Hidden Pendency:** Regional delays and committee bottlenecks remain invisible to council leadership until deadlines are missed.
  > 3. **Unmonitored Statutory Expiries:** 30-year land leases, municipal fire safety NOCs, and building stability certificates expire unnoticed, creating immense regulatory and student safety risks.
  > 4. **Inefficient EVC Allocation:** Expert Visiting Committee schedules clash, and pre-visit leaks enable lobbying.
  > 5. **Absent Escalation:** Overdue files sit indefinitely on officer desks without automated escalation.
  > 
  > Furthermore, the Supreme Court of India in the landmark *Parshvanath Charitable Trust* case mandated strict national approval cutoffs by June 30. Missing these deadlines triggers contempt petitions and legal injunctions."

---

### PART 2: THE PRAVAAH-360 SOLUTION ARCHITECTURE (01:45 – 03:30)

#### `[01:45 – 02:40]` Slide 2 & 3: Our Idea & Core Novelty
* **Visual on Screen:** Highlight center and right sections of **Slide 2**, then transition to **Slide 3 (Application Workflow & Routing Architecture)**.
* **Speaker 2 (Technical Architect):**
  > "To solve this, **PRAVAAH-360** introduces an autonomous workflow and compliance framework built around five key innovations:
  > 
  > * First, a **Rule-Based Dynamic Routing Engine** that automatically passes each application through sequential APH stages: Application Ingestion $\rightarrow$ Document Scrutiny $\rightarrow$ EVC Field Inspection $\rightarrow$ Regional Committee $\rightarrow$ and Standing Appellate Committee.
  > * Second, an **Automated 90-30-0 Expiry Matrix** that proactively alerts institutions at 90, 30, and 0 days before land lease, fire NOC, or FDR guarantee lapses.
  > * Third, an **Interactive Time-Travel Simulator** that allows AICTE administrators to fast-forward time to test SLA thresholds and escalation triggers.
  > * Fourth, an **Intelligent EVC Queue Optimization Engine** with conflict-of-interest filters to ensure clean, timely inspection assignments.
  > * And crucially: **Human-in-the-Loop Governance**. The system automates deficiency checks and alerts, but the **final approval decision rests strictly with authorized AICTE officers** using Digital Signature Certificates."

#### `[02:40 – 03:30]` Slide 3 & 4: Tech Stack & Competitive Matrix
* **Visual on Screen:** Show **Slide 3 Tech Stack** (FastAPI, React, PostgreSQL, Docker) and **Slide 4 (Existing Solutions vs. PRAVAAH-360 Table)**.
* **Speaker 2:**
  > "Our architecture is engineered for zero-disruption and high feasibility:
  > * **Frontend:** Built with React, TypeScript, and Tailwind CSS for responsive dashboards.
  > * **Backend & Rules:** Powered by Python FastAPI and Celery background workers for non-blocking SLA monitoring.
  > * **Data & Audit:** PostgreSQL with append-only audit tables and Digital Signature (DSC) support.
  > * **Field Mobility:** A Native Android Companion using Android's `isFromMockProvider()` location API to block GPS spoofing and enable offline rural caching.
  > 
  > As shown on Slide 4, while legacy portals rely on static forms and isolated spreadsheets, PRAVAAH-360 provides dynamic state transitions, automated 90-30-0 alerts, and pan-India bottleneck heatmaps.
  > 
  > Now, let us move from theory to reality — let's explore our live working prototype."

---

### PART 3: LIVE INTERACTIVE PROTOTYPE WALKTHROUGH (03:30 – 07:30)

* **Screen Recording Note:** Switch screen to browser showing the live deployed app: **`https://frontend-lyart-chi-21.vercel.app`** (or `http://localhost:5173`). Have the cursor clearly visible.

#### `[03:30 – 04:30]` Module 1: Institution Portal & Expiry Engine
* **Visual on Screen:** Click on **`Institution Portal`** tab.
* **Speaker 3 (Product & Demo Lead):**
  > "Here is our live production deployment. At the very top, you see the active **Supreme Court (*Parshvanath Case*) countdown timer**, tracking days left until the statutory June 30 cutoff.
  > 
  > Right now, we are in the **Institution Portal** for *Delhi Institute of Technology & Management (AICTE ID: 1-459201931)*.
  > 
  > Below the profile, the **Sequential Stage-Wise Approval Workflow** shows the live progress of the application from Stage 1 Ingestion to Stage 2 Document Scrutiny.
  > 
  > Now look at the left card: **Statutory Document & Lease Expiry Engine**.
  > * The **30-Year Land Lease Deed** has only 42 days remaining — the system automatically flags an amber warning and schedules T-60 alerts to the college Chairman and Registrar.
  > * The **Building Stability Certificate** has only 18 days left — marked as a blinking red critical alert!
  > 
  > Let's simulate an institution renewing their document: *(Click 'Upload Renewal' on Building Stability Certificate $\rightarrow$ Modal opens $\rightarrow$ Click 'Simulate Renewal & Verify')*.
  > Instantly, the certificate updates to 365 days valid and turns green, resetting the alert daemon!"

#### `[04:30 – 05:20]` Module 2: Mandatory Undertakings & Live Deficiency Cure
* **Visual on Screen:** Scroll down to **Mandatory Undertakings & Affidavits** and the **Deficiency Scorecard**.
* **Speaker 3:**
  > "On the right, the **Mandatory Undertakings Ledger** tracks non-judicial stamp paper affidavits for Anti-Ragging, Divyangjan Ramps, and Faculty Cadre ratios.
  > 
  > Notice the bottom card: **Automated APH Deficiency Scorecard**.
  > The rule engine evaluates the institute's data against the APH 2024–27 norms in real time. It flags a shortfall: *'Faculty Cadre Ratio is 1:1.4:5.1 — shortfall of 2 Associate Professors in Mechanical Engineering'*.
  > 
  > A statutory 7-day cure window is active. Watch what happens when the college cures the deficiency: *(Click 'Upload Recruited Faculty Orders (Cure Deficiency)')*.
  > The system simulates document intake, re-evaluates the APH ratio in 1.2 seconds, and the card updates to: **'All Deficiencies Resolved — 100% Compliant'**. The file is now clean and automatically queued for EVC inspection!"

#### `[05:20 – 06:15]` Module 3: AICTE Bureau Command Console & Auto-Escalation
* **Visual on Screen:** Click on **`AICTE Bureau Console`** tab in the navbar.
* **Speaker 3:**
  > "Now, let's switch hats and enter the **AICTE Bureau Command Console**, used by council officials at HQ in New Delhi and across 8 Regional Offices.
  > 
  > The top widget is the **Bureau-Wise Pendency Heatmap**. It displays total ingested applications, pending scrutiny, pending EVC visits, and average SLA latency per region. Notice the Western Region showing an average SLA of 6.8 days with 28 overdue files.
  > 
  > Below is the **Active Approval Cases Table**. 
  > Let's observe our automated hierarchy escalation engine in action:
  > Look at application `AICTE/2026-27/1-984210`. It is at *Tier 2: Regional Officer Alert*.
  > Let's simulate an officer delay by clicking the **`+3d Delay`** button: *(Click '+3d Delay')*.
  > Immediately, the SLA increases past 10 days, and the file automatically escalates to **'Tier 3: Bureau Head Escalated'** with an automated escalation event pushed to the audit log!
  > 
  > Now, let's open the file for final review: *(Click 'Review & Action')*.
  > The **Human-in-the-Loop Officer Modal** displays the verified land lease, fire NOC, APH cadre compliance, and the EVC score of 92/100.
  > As an authorized AICTE Regional Officer, I click **'Grant EoA Approval (DSC Sign)'**: *(Click the button)*.
  > The system simulates hardware DSC token signing, issues the approval, and records an immutable cryptographic event!"

#### `[06:15 – 07:00]` Module 4: Native Android EVC Mobile Inspection Companion
* **Visual on Screen:** Click on **`Native EVC App`** tab in the navbar. The phone frame simulator appears.
* **Speaker 4 (Mobile & Field Engineering):**
  > "Next is our **Native Android EVC Mobile Inspection Companion**, designed for visiting committee professors conducting on-site campus visits.
  > 
  > At the top, the app displays **Hardware Root-of-Trust Attestation**:
  > * Android API `Location.isFromMockProvider()` is verified as **`FALSE`**, guaranteeing that fake GPS apps cannot spoof the inspector's location.
  > * The inspector is confirmed inside the campus geo-polygon with $\pm 3.8\text{m}$ accuracy and connected to local cell tower beacons.
  > 
  > Notice the inspection checklist: gallery uploads are disabled to prevent pre-saved fake photos. Let's capture the Central Computing Lab: *(Click 'Capture Live Camera Photo')*.
  > The camera sandbox captures the photo, stamps live GPS coordinates, and seals the EXIF metadata with a SHA-256 cryptographic hash!
  > 
  > Now, let's test a remote rural campus with zero internet: *(Click 'Offline Mode (No 4G)')*.
  > The status bar updates to offline. When the inspector clicks **'Submit Final EVC Inspection Dossier'**, the report is safely stored in the local SQLite queue. 
  > As soon as the inspector reconnects: *(Click 'Online (4G/5G)' $\rightarrow$ Click 'Sync Queued Report Now')*, the report synchronizes with AICTE servers in one click!"

#### `[07:00 – 07:30]` Module 5: Public Verifiable Credential QR & Audit Trail
* **Visual on Screen:** Click **`Public EoA QR`** tab, then click **`DSC Audit Trail`** in the top navbar.
* **Speaker 4:**
  > "For students and citizens, the **Public EoA Verifier** allows anyone to verify genuine college approvals by entering the Institute ID (`1-459201931`) or scanning the QR code.
  > 
  > It renders the official **Extension of Approval Letter for 2026–27**, displaying the exact approved course intake matrix: *Computer Science (180 seats), AI & Data Science (60 seats), ECE (120 seats)*, signed digitally by the Member Secretary, eliminating fake college rackets permanently.
  > 
  > Finally, clicking **'DSC Audit Trail'** in the top right opens the **Append-Only Statutory Audit Ledger**, showing second-by-second microsecond timestamps of every document renewal, deficiency cured, escalation triggered, and DSC approval signed during this demonstration!"

---

### PART 4: IMPACT, BENEFITS & CONCLUSION (07:30 – 09:15)

#### `[07:30 – 08:30]` Slide 5: Quantifiable Impact & Multistakeholder Benefits
* **Visual on Screen:** Return to presentation slides, displaying **Slide 5 (Impact and Benefits)**.
* **Speaker 1 (Team Leader):**
  > "Returning to our presentation on **Slide 5**, let us review the tangible, quantifiable impact PRAVAAH-360 delivers:
  > 
  > * **75% Turnaround Reduction:** Compressing the traditional 90-day approval cycle to under 20 days.
  > * **100% Expiry Compliance:** Zero unmonitored 30-year land leases or fire safety certificate lapses.
  > * **Zero Overdue Bottlenecks:** Hierarchy auto-escalation ensures no file lingers silently on an officer's desk.
  > * **100% Supreme Court SLA Adherence:** Complete legal immunity against June 30 national cutoff forfeitures.
  > * **Complete Audit Defense:** Tamper-proof DSC audit trail protecting AICTE in High Court delay litigations.
  > 
  > As shown on the right:
  > * **AICTE Leadership** gets national heatmap visibility and uncompromised decision authority.
  > * **10,500+ Institutions** receive transparent tracking and timely renewal alerts.
  > * **Visiting Inspectors** get an intuitive, offline-ready mobile tool.
  > * And **Students & Parents** gain guaranteed verification of genuine approved courses."

#### `[08:30 – 09:15]` Slide 6 & Final Pitch: Project Deliverables & Wrap-Up
* **Visual on Screen:** Transition to **Slide 6 (Prototype & Deliverable Proofs)**, showing the Vercel link and GitHub QR code.
* **Speaker 1:**
  > "To conclude, **Team Six_In_Denial** has not just conceptualized an idea — we have built, verified, and deployed a fully functional prototype.
  > 
  > * You can test our production web application live at **`https://frontend-lyart-chi-21.vercel.app`**.
  > * Our complete source code and technical documentation are published at **`github.com/divyanshattrish/pravaah360-aicte`**.
  > * All regulations strictly align with the **AICTE Approval Process Handbook (2024–2027)** and the **Supreme Court's *Parshvanath Case*** mandate.
  > 
  > **PRAVAAH-360** transforms AICTE approvals from a seasonal bureaucratic crunch into a proactive, transparent, and seamless national standard.
  > 
  > Thank you, and we welcome your questions!"

---

## Screen Recording & Shooting Checklist for the Team

1. **Browser Tab Setup:**
   * Open Tab 1: PowerPoint Slides / PDF full screen (Slide 1 to 6).
   * Open Tab 2: Live Web Prototype at `https://frontend-lyart-chi-21.vercel.app/`.
2. **Audio Setup:**
   * Use a clean USB microphone or headset with noise suppression (OBS Studio / Loom / Clipchamp).
   * Ensure voice volume is consistent between speakers.
3. **Pacing Guidelines:**
   * Aim for ~130–140 words per minute.
   * Pause for 1 second during tab transitions so the viewer's eyes can adjust to the new interface.
4. **Interactive Actions to Show During Prototype Demo:**
   * [x] Click *Upload Renewal* on the Building Stability card $\rightarrow$ show it turn green.
   * [x] Click *Upload Recruited Faculty Orders* $\rightarrow$ show deficiency cured to 100%.
   * [x] Click *+3d Delay* on application row $\rightarrow$ watch it escalate to Tier 3 Bureau Head.
   * [x] Click *Review & Action* $\rightarrow$ click *Grant EoA Approval (DSC Sign)*.
   * [x] In EVC App: toggle *Offline Mode*, click *Capture Live Camera Photo*, then click *Sync*.
   * [x] Open *DSC Audit Trail* drawer from top navbar.
