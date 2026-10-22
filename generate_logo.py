import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.path import Path
import numpy as np
import os

def create_logo_svg_and_png():
    # 1. Main Horizontal Logo with Typography
    fig, ax = plt.subplots(figsize=(8, 2.5), dpi=300)
    ax.set_xlim(0, 8)
    ax.set_ylim(0, 2.5)
    ax.axis('off')

    NAVY = "#0B192C"
    ORANGE = "#E65100"
    TEAL = "#0D9488"
    GOLD = "#F59E0B"

    # Background canvas
    bg = patches.Rectangle((0, 0), 8, 2.5, facecolor="#FFFFFF")
    ax.add_patch(bg)

    # --- Draw the Emblem Icon at (1.25, 1.25) ---
    cx, cy = 1.25, 1.25
    r_outer = 0.85
    r_inner = 0.55

    # Outer Shield / Circle with gradient effect using dual arcs
    theta = np.linspace(np.pi*0.15, np.pi*1.85, 100)
    x_arc = cx + r_outer * np.cos(theta)
    y_arc = cy + r_outer * np.sin(theta)
    ax.plot(x_arc, y_arc, color=ORANGE, linewidth=4.5, solid_capstyle='round')

    # Inner circular flow track
    theta_in = np.linspace(-np.pi*0.2, np.pi*1.5, 100)
    x_in = cx + r_inner * np.cos(theta_in)
    y_in = cy + r_inner * np.sin(theta_in)
    ax.plot(x_in, y_in, color=TEAL, linewidth=3.5, solid_capstyle='round')

    # Stylized "P" & Checkmark in the center
    # Vertical stem of P
    ax.plot([cx - 0.2, cx - 0.2], [cy - 0.35, cy + 0.35], color=NAVY, linewidth=5.5, solid_capstyle='round')
    # Loop of P
    theta_p = np.linspace(-np.pi/2, np.pi/2, 50)
    xp = cx - 0.2 + 0.28 * np.cos(theta_p)
    yp = cy + 0.12 + 0.23 * np.sin(theta_p)
    ax.plot(xp, yp, color=NAVY, linewidth=5.5, solid_capstyle='round')

    # Dynamic Verification Checkmark wing flowing through
    check_x = [cx - 0.05, cx + 0.18, cx + 0.52]
    check_y = [cy - 0.08, cy - 0.25, cy + 0.22]
    ax.plot(check_x, check_y, color=ORANGE, linewidth=4, solid_capstyle='round')

    # Star / Satellite dot representing 360-degree alert
    ax.plot([cx + 0.65], [cy + 0.65], marker='o', markersize=6, color=GOLD)

    # --- Typography ---
    # "PRAVAAH"
    ax.text(2.4, 1.25, "PRAVAAH", fontname='sans-serif', fontsize=32, fontweight='black', color=NAVY, va='center')
    # "-360"
    ax.text(5.55, 1.25, "-360", fontname='sans-serif', fontsize=32, fontweight='black', color=ORANGE, va='center')

    # Subtitle Pill
    badge = patches.FancyBboxPatch((2.4, 0.42), 5.1, 0.42, boxstyle="round,pad=0.05,rounding_size=0.1", 
                                   facecolor="#EFF6FF", edgecolor="#BFDBFE", linewidth=1.0)
    ax.add_patch(badge)
    ax.text(2.55, 0.62, "AICTE APPROVAL WORKFLOW & ESCALATION SYSTEM", fontname='sans-serif', 
            fontsize=8.5, fontweight='bold', color="#1E40AF", va='center')

    # Save PNG and SVG
    png_path = r"c:\DEMO\SIH 2026\pravaah360_logo.png"
    svg_path = r"c:\DEMO\SIH 2026\pravaah360_logo.svg"
    plt.tight_layout()
    plt.savefig(png_path, dpi=300, bbox_inches='tight')
    plt.savefig(svg_path, format='svg', bbox_inches='tight')
    plt.close()

    # Also copy to frontend public directory
    frontend_pub = r"c:\DEMO\SIH 2026\frontend\public"
    if os.path.exists(frontend_pub):
        import shutil
        shutil.copy(png_path, os.path.join(frontend_pub, "logo.png"))
        shutil.copy(svg_path, os.path.join(frontend_pub, "logo.svg"))

    # 2. Icon Badge (Square for Favicon & App Icon)
    fig_icon, ax_icon = plt.subplots(figsize=(3, 3), dpi=300)
    ax_icon.set_xlim(0, 3)
    ax_icon.set_ylim(0, 3)
    ax_icon.axis('off')

    # Rounded background
    icon_bg = patches.FancyBboxPatch((0.15, 0.15), 2.7, 2.7, boxstyle="round,pad=0.1,rounding_size=0.5", 
                                     facecolor=NAVY, edgecolor=ORANGE, linewidth=2.5)
    ax_icon.add_patch(icon_bg)

    cx, cy = 1.5, 1.5
    r_outer = 0.95
    r_inner = 0.65

    theta = np.linspace(np.pi*0.15, np.pi*1.85, 100)
    ax_icon.plot(cx + r_outer * np.cos(theta), cy + r_outer * np.sin(theta), color=ORANGE, linewidth=5.5, solid_capstyle='round')

    theta_in = np.linspace(-np.pi*0.2, np.pi*1.5, 100)
    ax_icon.plot(cx + r_inner * np.cos(theta_in), cy + r_inner * np.sin(theta_in), color=TEAL, linewidth=4.5, solid_capstyle='round')

    # Stylized White P
    ax_icon.plot([cx - 0.22, cx - 0.22], [cy - 0.42, cy + 0.42], color="#FFFFFF", linewidth=6.5, solid_capstyle='round')
    theta_p = np.linspace(-np.pi/2, np.pi/2, 50)
    ax_icon.plot(cx - 0.22 + 0.35 * np.cos(theta_p), cy + 0.15 + 0.28 * np.sin(theta_p), color="#FFFFFF", linewidth=6.5, solid_capstyle='round')

    # Orange Verification Check
    ax_icon.plot([cx - 0.05, cx + 0.22, cx + 0.62], [cy - 0.1, cy - 0.3, cy + 0.28], color=ORANGE, linewidth=5, solid_capstyle='round')
    ax_icon.plot([cx + 0.75], [cy + 0.75], marker='o', markersize=8, color=GOLD)

    icon_png = r"c:\DEMO\SIH 2026\pravaah360_icon.png"
    plt.tight_layout()
    plt.savefig(icon_png, dpi=300, bbox_inches='tight')
    plt.close()

    if os.path.exists(frontend_pub):
        import shutil
        shutil.copy(icon_png, os.path.join(frontend_pub, "favicon.png"))

    print("All logos and badges successfully generated!")

if __name__ == "__main__":
    create_logo_svg_and_png()
