# Smart India Hackathon 2026 — 5-Minute Rapid Video Presentation & Demo Script
**Problem Statement ID:** SIH26262  
**Problem Statement Title:** Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System  
**Organization:** AICTE (Ministry of Education)  
**Team Name:** Six_In_Denial | **Project Codename:** PRAVAAH-360  
**Live Application URL:** https://frontend-lyart-chi-21.vercel.app/  
**GitHub Repository:** https://github.com/divyanshattrish/pravaah360-aicte  
**Exact Target Duration:** 4:45 – 5:00 Minutes

---

## 5-Minute Timeline Structure

| Time | Slide / Screen | Content Focus |
|:---:|---|---|
| **00:00 – 00:30** | **Slide 1** | Team Intro & Problem Statement |
| **00:30 – 01:15** | **Slide 2** | The 5 Real-World Gaps & Core Solution Concept |
| **01:15 – 02:00** | **Slides 3 & 4** | Workflow Architecture, Tech Stack & Competitive Matrix |
| **02:00 – 04:15** | **Live Browser Demo** | **Interactive Prototype Walkthrough (4 Key Moments)** |
| **04:15 – 05:00** | **Slides 5 & 6** | Measurable Impact, Supreme Court Compliance & Final Pitch |

---

## Word-for-Word Video Script

---

### PART 1: INTRO & PROBLEM STATEMENT (00:00 – 01:15)

#### `[00:00 – 00:30]` Slide 1: Title Page
* **Visual on Screen:** Slide 1 (Full screen).
* **Speaker:**
  > "Respected Jury Members, greetings from **Team Six_In_Denial**. 
  > 
  > We present our solution for **SIH26262**: *Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System*.
  > 
  > Our platform is **PRAVAAH-360** — an enterprise-grade regulatory engine designed to automate AICTE approvals, enforce statutory compliance, and guarantee zero deadline forfeitures."

#### `[00:30 – 01:15]` Slide 2: Key Gaps & Our Idea
* **Visual on Screen:** Slide 2 (Focus on *KEY GAPS* and *NOVELTY*).
* **Speaker:**
  > "Every year, **10,500+ colleges** apply for AICTE approvals, but the process faces five massive operational bottlenecks:
  > 1. Applications move through slow manual file routing with zero stage-wise visibility.
  > 2. Regional delays and committee bottlenecks remain hidden from leadership.
  > 3. 30-year land leases, fire NOCs, and building stability certificates expire unnoticed.
  > 4. EVC inspection visits suffer from clashes and lobbying.
  > 5. Overdue files sit on desks without automatic escalation, risking the **Supreme Court June 30 national cutoff**.
  > 
  > **PRAVAAH-360** solves this with an automated stage-routing engine, a proactive **90-30-0 expiry alert matrix**, smart EVC queue allocation, and an automated multi-tier escalation engine — while keeping final decision authority strictly with AICTE officers."

---

### PART 2: ARCHITECTURE & TECH STACK (01:15 – 02:00)

#### `[01:15 – 02:00]` Slides 3 & 4: System Architecture & Existing vs. PRAVAAH-360
* **Visual on Screen:** Slide 3 (Architecture & Tech Stack), then quick glance at Slide 4.
* **Speaker:**
  > "As shown in our system architecture on Slide 3, PRAVAAH-360 is built with a practical, high-assurance stack:
  > * **Frontend:** React, TypeScript, and Tailwind CSS for responsive multi-role dashboards.
  > * **Backend & Rules:** Python FastAPI and Celery workers for real-time SLA tracking.
  > * **Data & Audit:** PostgreSQL with append-only audit tables and Digital Signature (DSC) support.
  > * **Field Mobility:** A Native Android App using `isFromMockProvider()` to prevent GPS spoofing during campus inspections.
  > 
  > Unlike legacy manual portals, PRAVAAH-360 replaces physical files with automated stage-wise state machines and real-time regional heatmaps.
  > 
  > Let's see this in action on our live working prototype."

---

### PART 3: LIVE PROTOTYPE WALKTHROUGH (02:00 – 04:15)

* **Screen Action:** Switch screen to live web app: **`https://frontend-lyart-chi-21.vercel.app/`**.

#### `[02:00 – 02:40]` 1. Institution Portal & 30-Year Lease Expiry Engine
* **Visual on Screen:** Click tab **`Institution Portal`**.
* **Speaker:**
  > "We are live on our production deployment. At the top is the active **Supreme Court countdown timer** showing days left until June 30.
  > 
  > Here is the **Institution Portal** for *Delhi Institute of Technology & Management*. You can see the 5-stage sequential approval workflow.
  > 
  > Under **Statutory Document Expiry Engine**, the **30-Year Land Lease** has 42 days left, and the **Building Stability Certificate** is blinking red with 18 days left!
  > Watch as we simulate renewal: *(Click 'Upload Renewal' $\rightarrow$ Click 'Simulate Renewal & Verify')*.
  > Instantly, the certificate updates to 365 days valid and turns green — resetting the proactive 90-30-0 alert daemon!"

#### `[02:40 – 03:15]` 2. Live APH Deficiency Scorecard & Remediation
* **Visual on Screen:** Scroll to **Automated APH Deficiency Scorecard**.
* **Speaker:**
  > "Below, the automated rule engine compares college data against APH 2024–27 norms in real-time. 
  > It detects a shortfall in the Faculty Cadre Ratio: *1:1.4:5.1* with 2 Associate Professors missing.
  > 
  > A statutory 7-day cure window is active. Watch what happens when the college submits rectified appointment letters: *(Click 'Upload Recruited Faculty Orders')*.
  > In 1.2 seconds, the ratio recalculates, updating the status to **100% Compliant**, and the file is automatically queued for EVC inspection!"

#### `[03:15 – 03:50]` 3. AICTE Bureau Console: Pendency Heatmap & Auto-Escalation
* **Visual on Screen:** Click tab **`AICTE Bureau Console`**.
* **Speaker:**
  > "Now, we switch to the **AICTE Bureau Console** used by HQ and all 8 Regional Offices.
  > The **Pendency Heatmap** displays real-time application queues and SLA latencies across regions.
  > 
  > In the active cases table, watch our **Hierarchy Escalation Engine**:
  > Application `AICTE/2026-27/1-984210` is currently at Tier 2. Let's simulate an officer delay: *(Click '+3d Delay')*.
  > As the file exceeds the SLA, it automatically escalates to **'Tier 3: Bureau Head Escalated'**!
  > 
  > Now, let's open the file: *(Click 'Review & Action')*.
  > The officer reviews verified documents and the EVC score of 92/100, then clicks **'Grant EoA Approval (DSC Sign)'** *(Click the button)* — digitally signing the approval with hardware DSC token attestation!"

#### `[03:50 – 04:15]` 4. Native Android EVC App & Public Verification
* **Visual on Screen:** Click tab **`Native EVC App`**, then tab **`Public EoA QR`**.
* **Speaker:**
  > "On field visits, inspectors use our **Native Android App**.
  > It verifies `Location.isFromMockProvider(): FALSE`, blocking fake GPS apps. 
  > Clicking **'Capture Live Camera Photo'** stamps the photo with real-time GPS EXIF data and a SHA-256 seal.
  > It also includes **Offline Mode** with local SQLite caching for remote rural campuses!
  > 
  > Finally, in the **Public EoA QR Portal**, entering the Institute ID renders the official **Extension of Approval Letter** with the approved seat matrix and digital signature — preventing fake college rackets."

---

### PART 4: IMPACT & CONCLUSION (04:15 – 05:00)

#### `[04:15 – 05:00]` Slides 5 & 6: Impact & Closing Pitch
* **Visual on Screen:** Return to presentation slides: **Slide 5**, then **Slide 6**.
* **Speaker:**
  > "Returning to Slide 5, PRAVAAH-360 delivers measurable results:
  > * **75% faster turnaround:** Compressing 90-day approvals to under 20 days.
  > * **100% expiry compliance:** Zero unnoticed land lease or fire NOC lapses.
  > * **Zero overdue bottlenecks:** Automated escalation guarantees compliance with the **Supreme Court June 30 cutoff**.
  > * **Complete audit defense:** Tamper-proof DSC audit logs protect AICTE in High Court litigations.
  > 
  > On Slide 6, you can test our production deployment at **`frontend-lyart-chi-21.vercel.app`**, and inspect our full source code on GitHub.
  > 
  > PRAVAAH-360 makes AICTE approvals timely, transparent, and accountable. 
  > Thank you from **Team Six_In_Denial**!"

---

## Recording Tips for a Perfect 5-Minute Video

1. **Keep tabs pre-loaded:**
   * Tab 1: Slide deck in full-screen mode.
   * Tab 2: Live Vercel prototype (`https://frontend-lyart-chi-21.vercel.app/`).
2. **Speed & Clarity:** Speak at a confident, natural pace (~140 words per minute).
3. **One-Take Prototype Clicks:** Follow the 4 interactive clicks in order:
   * *Upload Renewal* $\rightarrow$ *Upload Faculty Orders* $\rightarrow$ *+3d Delay* $\rightarrow$ *Grant EoA Approval (DSC Sign)*.
