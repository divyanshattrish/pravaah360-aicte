import matplotlib.pyplot as plt
import matplotlib.patches as patches
import os

def generate_flowchart1(output_path):
    fig, ax = plt.subplots(figsize=(10, 6.2), dpi=300)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 7.5)
    ax.axis('off')

    NAVY = "#0B192C"
    TEAL = "#0D9488"
    ORANGE = "#E65100"
    RED = "#DC2626"
    GREEN = "#16A34A"
    BORDER_COLOR = "#94A3B8"

    # Title Banner
    ax.text(5, 7.1, "FLOWCHART 1: STAGE-WISE APPROVAL ROUTING & COMPLIANCE VERIFICATION", 
            ha='center', va='center', fontsize=11.5, fontweight='bold', color=NAVY)

    # 1. Start Node
    start_box = patches.FancyBboxPatch((3.8, 6.1), 2.4, 0.5, boxstyle="round,pad=0.1,rounding_size=0.25", 
                                       facecolor=NAVY, edgecolor=NAVY, linewidth=1.5)
    ax.add_patch(start_box)
    ax.text(5, 6.35, "Institute Application Submission", ha='center', va='center', fontsize=9, fontweight='bold', color='white')

    ax.annotate('', xy=(5, 5.4), xytext=(5, 6.1), arrowprops=dict(facecolor=NAVY, edgecolor=NAVY, width=1.5, headwidth=6))

    # 2. Automated Validation & Expiry Check
    v_box = patches.FancyBboxPatch((1.5, 4.4), 7.0, 1.0, boxstyle="round,pad=0.1,rounding_size=0.15", 
                                   facecolor="#EFF6FF", edgecolor=BORDER_COLOR, linewidth=1.2)
    ax.add_patch(v_box)
    ax.text(5, 5.15, "Stage 1: Automated Validation & Statutory Expiry Verification", ha='center', va='center', fontsize=9.5, fontweight='bold', color=NAVY)
    ax.text(5, 4.85, "• Land Lease Validity Check (≥ 30-year lease duration) | Fire NOC & Building Stability Expiry", ha='center', va='center', fontsize=8, color="#1E293B")
    ax.text(5, 4.6, "• Mandatory Undertakings Tracked (Anti-Ragging, Faculty Cadre, Fee Regulations)", ha='center', va='center', fontsize=8, color="#1E293B")

    ax.annotate('', xy=(5, 3.7), xytext=(5, 4.4), arrowprops=dict(facecolor=NAVY, edgecolor=NAVY, width=1.5, headwidth=6))

    # 3. Decision Diamond (Deficiencies?)
    diamond = patches.Polygon([[5, 3.7], [6.5, 3.0], [5, 2.3], [3.5, 3.0]], closed=True, 
                              facecolor="#FEF3C7", edgecolor="#F59E0B", linewidth=1.5)
    ax.add_patch(diamond)
    ax.text(5, 3.15, "Deficiencies /", ha='center', va='center', fontsize=8.5, fontweight='bold', color="#92400E")
    ax.text(5, 2.9, "Expired Docs?", ha='center', va='center', fontsize=8.5, fontweight='bold', color="#92400E")

    # YES Branch (Left)
    ax.annotate('', xy=(1.8, 3.0), xytext=(3.5, 3.0), arrowprops=dict(facecolor=RED, edgecolor=RED, width=1.5, headwidth=6))
    ax.text(2.6, 3.15, "YES", ha='center', va='bottom', fontsize=8.5, fontweight='bold', color=RED)

    def_box = patches.FancyBboxPatch((0.2, 2.3), 1.6, 1.4, boxstyle="round,pad=0.1,rounding_size=0.15", 
                                     facecolor="#FEF2F2", edgecolor=RED, linewidth=1.2)
    ax.add_patch(def_box)
    ax.text(1.0, 3.4, "Deficiency Notice", ha='center', va='center', fontsize=8, fontweight='bold', color=RED)
    ax.text(1.0, 3.1, "Automated Alert", ha='center', va='center', fontsize=7.5, color="#7F1D1D")
    ax.text(1.0, 2.85, "(SMS + Email)", ha='center', va='center', fontsize=7.5, color="#7F1D1D")
    ax.text(1.0, 2.55, "College Cures File", ha='center', va='center', fontsize=7.5, color="#7F1D1D")

    # Loopback
    ax.plot([1.0, 1.0, 1.5], [3.7, 4.9, 4.9], color=RED, linestyle='--', linewidth=1.2)
    ax.annotate('', xy=(1.5, 4.9), xytext=(1.3, 4.9), arrowprops=dict(facecolor=RED, edgecolor=RED, width=1.0, headwidth=5))

    # NO Branch (Down)
    ax.annotate('', xy=(5, 1.6), xytext=(5, 2.3), arrowprops=dict(facecolor=GREEN, edgecolor=GREEN, width=1.5, headwidth=6))
    ax.text(5.2, 1.95, "NO (Compliant)", ha='left', va='center', fontsize=8, fontweight='bold', color=GREEN)

    # 4. Scrutiny Committee & EVC Dispatch
    stage2_box = patches.FancyBboxPatch((2.2, 0.9), 5.6, 0.7, boxstyle="round,pad=0.1,rounding_size=0.15", 
                                       facecolor="#F0FDF4", edgecolor=GREEN, linewidth=1.2)
    ax.add_patch(stage2_box)
    ax.text(5, 1.35, "Stage 2: Scrutiny Committee Review & EVC Inspection Trigger", ha='center', va='center', fontsize=9, fontweight='bold', color=GREEN)
    ax.text(5, 1.1, "Case routed to EVC module; inspection committee scheduled automatically", ha='center', va='center', fontsize=8, color="#14532D")

    # Down to Final Officer Decision
    ax.annotate('', xy=(5, 0.45), xytext=(5, 0.9), arrowprops=dict(facecolor=NAVY, edgecolor=NAVY, width=1.5, headwidth=6))

    f_box = patches.FancyBboxPatch((2.2, 0.05), 5.6, 0.4, boxstyle="round,pad=0.1,rounding_size=0.15", 
                                   facecolor=NAVY, edgecolor=NAVY, linewidth=1.2)
    ax.add_patch(f_box)
    ax.text(5, 0.25, "Stage 3: AICTE Officer Final Review & Digital EoA Approval Issuance", ha='center', va='center', fontsize=8.5, fontweight='bold', color='white')

    plt.tight_layout()
    plt.savefig(output_path, dpi=300)
    plt.close()
    print(f"Updated Flowchart 1 saved to {output_path}")

def generate_flowchart2(output_path):
    fig, ax = plt.subplots(figsize=(10, 6.2), dpi=300)
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 7.5)
    ax.axis('off')

    NAVY = "#0B192C"
    TEAL = "#0D9488"
    ORANGE = "#E65100"
    BLUE = "#1D4ED8"
    BORDER_COLOR = "#94A3B8"

    # Title Banner
    ax.text(5, 7.1, "FLOWCHART 2: EVC INSPECTION, PENDENCY MONITORING & ESCALATION ENGINE", 
            ha='center', va='center', fontsize=11.5, fontweight='bold', color=NAVY)

    # Left Box: Native EVC App & Reminders
    b_evc = patches.FancyBboxPatch((0.5, 3.5), 4.3, 3.2, boxstyle="round,pad=0.1,rounding_size=0.15",
                                   facecolor="#EFF6FF", edgecolor=BLUE, linewidth=1.2)
    ax.add_patch(b_evc)
    ax.text(2.65, 6.35, "EVC INSPECTION & REMINDER MODULE", ha='center', va='center', fontsize=9.5, fontweight='bold', color=BLUE)
    
    evc_steps = [
        "1. Conflict-Free Matching (No Alumni/Ex-Emp)",
        "2. Automated Schedule & Reminders (SMS/Email)",
        "3. Native Android App (Kotlin/Flutter):",
        "   • Android isFromMockProvider() anti-spoof check",
        "   • Direct camera live capture of laboratories & ramps",
        "   • Offline caching with auto-sync upon connectivity",
        "4. Inspector submits on-site digital EVC report"
    ]
    for idx, s in enumerate(evc_steps):
        ax.text(0.7, 5.9 - idx*0.36, s, ha='left', va='center', fontsize=8, color="#1E293B")

    # Right Box: Bureau Pendency Dashboard & Escalation
    b_esc = patches.FancyBboxPatch((5.2, 3.5), 4.3, 3.2, boxstyle="round,pad=0.1,rounding_size=0.15",
                                   facecolor="#FEF3C7", edgecolor=ORANGE, linewidth=1.2)
    ax.add_patch(b_esc)
    ax.text(7.35, 6.35, "PENDENCY DASHBOARD & SLA ESCALATION", ha='center', va='center', fontsize=9.5, fontweight='bold', color=ORANGE)

    esc_steps = [
        "1. Real-time Bureau & Regional Pendency Heatmap",
        "2. Active SLA Tracking (e.g. Scrutiny SLA: 7 Days)",
        "3. Multi-Tier Overdue Escalation Engine:",
        "   • Day 5 (T-48h): Warning alert to Assigned Officer",
        "   • Day 7 (Overdue): Escalates to Regional Officer (RO)",
        "   • Day 10: Auto-escalates to Bureau Head & MoE",
        "4. Supreme Court Cutoff (June 30) Countdown Engine"
    ]
    for idx, s in enumerate(esc_steps):
        ax.text(5.4, 5.9 - idx*0.36, s, ha='left', va='center', fontsize=8, color="#78350F")

    # Bottom Merged Box: Final Officer Decision & AICTE Integration
    ax.annotate('', xy=(2.65, 2.5), xytext=(2.65, 3.5), arrowprops=dict(facecolor=NAVY, edgecolor=NAVY, width=1.5, headwidth=6))
    ax.annotate('', xy=(7.35, 2.5), xytext=(7.35, 3.5), arrowprops=dict(facecolor=NAVY, edgecolor=NAVY, width=1.5, headwidth=6))

    b_int = patches.FancyBboxPatch((0.5, 0.4), 9.0, 2.1, boxstyle="round,pad=0.1,rounding_size=0.15",
                                   facecolor="#F8FAFC", edgecolor=TEAL, linewidth=1.5)
    ax.add_patch(b_int)
    ax.text(5, 2.15, "CENTRAL GOVERNANCE: FINAL OFFICER DECISION & AICTE INTEGRATION", ha='center', va='center', fontsize=9.5, fontweight='bold', color=TEAL)
    
    int_points = [
        "• Final Decision Support: AICTE Officer reviews automated deficiency findings, EVC score, and marks Final Approval/Rejection.",
        "• Existing AICTE Systems Integration: Secure RESTful API gateway connects with existing AICTE Web Portal, DigiLocker, and SMS Gateways.",
        "• Statutory Expiry Alerts: Continuous background daemons trigger alerts for 30-year lease expiries, Fire NOC renewals, and FDR maturities.",
        "• Append-Only Audit Logging: Tamper-proof PostgreSQL audit trail with Digital Signature Certificate (DSC) non-repudiation."
    ]
    for idx, p in enumerate(int_points):
        ax.text(0.7, 1.7 - idx*0.36, p, ha='left', va='center', fontsize=8, color="#0F172A")

    plt.tight_layout()
    plt.savefig(output_path, dpi=300)
    plt.close()
    print(f"Updated Flowchart 2 saved to {output_path}")

if __name__ == "__main__":
    generate_flowchart1(r"c:\DEMO\SIH 2026\flowchart_rules_engine.png")
    generate_flowchart2(r"c:\DEMO\SIH 2026\flowchart_blind_inspection.png")
