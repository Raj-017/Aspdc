# Adani University (AU) - Official College Web Portal

A premier, modern, responsive academic web portal for **Adani University (Shantigram, Ahmedabad)**, built with semantic HTML5, modern CSS3 variables, and vanilla JavaScript. Features the iconic Adani signature color palette (**Blue `#0B74B0`**, **Purple `#75479C`**, and **Pink/Magenta `#BD3861`**), subtle animations, an ambient moving campus video showcase, a term-wise **Top Rankers** honor roll, and a built-in **CGPA / SGPA Calculator** in the dashboard.

---

## 🌟 What's New in this Update

### 1. 🏛️ Rebranded to "Adani University"
- **Location**: Adani Shantigram, S.G. Highway, Ahmedabad - 382421, Gujarat.
- **Accreditation**: NAAC A+ Accredited State Private University, UGC Recognized, AICTE Approved, NIRF Top Ranked.
- **Core Focus**: Computer Science & Artificial Intelligence, Civil & Mega-Infrastructure Engineering, Energy Science & Renewable Systems, and Management Sciences.

### 2. 🎨 Adani Signature Color Palette
- **Primary Blue**: `#0B74B0`
- **Secondary Purple**: `#75479C`
- **Accent Pink / Magenta**: `#BD3861`
- **Dynamic Gradients**: Smooth 3-stop Adani linear gradients applied across navigation bars, buttons, ranker ribbons, and radial score dials.

### 3. 🥇 Top Rankers in Each Term (Dean's Honor Roll)
- **Term-by-Term Filtering**: Instant tab/pill switching between **Term 1 (Sem I)** to **Term 6 (Sem VI)**.
- **Podium Ranker Cards**:
  - **Rank 1 • Gold Medalist** 🥇 (e.g. 9.98 CGPA, Chancellor's Gold Medal, 100% Scholarship)
  - **Rank 2 • Silver Medalist** 🥈
  - **Rank 3 • Bronze Medalist** 🥉
- **Student Details**: Real student avatars, roll numbers, departments, completed credits, student testimonials, and honors awards.

### 4. 🧮 Interactive CGPA & SGPA Calculator (Dashboard Option)
- Built directly into the **College Dashboard**.
- **Two Flexible Calculation Modes**:
  1. **Semester SGPA Mode**: Add courses, set credit hours (1-6), and select letter grades (O = 10, A+ = 9, A = 8, B+ = 7, B = 6, C = 5, P = 4, F = 0).
  2. **Cumulative CGPA Mode**: Enter completed term credits and term GPAs to calculate cumulative CGPA.
- **Live Radial Meter & Scorecard**:
  - Instant radial animation of calculated SGPA / CGPA.
  - Total credit points ($\Sigma \text{CP}$) and total credits.
  - Equivalent percentage conversion formula (`CGPA × 9.5`).
  - University Classification badge (e.g. *First Class with Distinction (Honors)*).

### 5. 🎥 Moving Video Showcase & Ambient Animations
- **Moving Campus Video**: High-definition looping video showcase in the Hero section capturing real student life, walking quadrangles, and lecture halls.
- **Interactive Controls**: Ambient live indicator dot and audio mute/unmute toggle.
- **Subtle Image Animations**:
  - Floating keyframe animations (`@keyframes subtleFloat`) on ranker cards and avatars.
  - Ambient pulse glow (`@keyframes pulseGlow`) with Adani blue and magenta illumination.
  - Smooth scale transitions on campus facility cards.

---

## 🗂️ Project Structure

```text
AntiGravity_1/
├── index.html       # Semantic HTML5 layout, hero section with video, dashboard tabs & modals
├── styles.css       # Stylesheet with Adani Blue, Purple & Magenta variables, animations & responsive grid
├── app.js           # Dynamic JavaScript logic (Top Rankers term filter, CGPA calculator, video controls)
├── data.js          # Central store (Adani University info, terms rankers, admissions, faculty, sports)
└── README.md        # Documentation and feature guide
```

---

## 🚀 How to Open and Test

1. Open the project folder on your computer:
   ```
   c:\Users\rajth\OneDrive\Desktop\AntiGravity_1
   ```
2. Double-click **`index.html`** or launch via PowerShell:
   ```powershell
   Start-Process "index.html"
   ```
3. Test the new features:
   - Click on **"Top Rankers (Terms)"** in the dashboard sidebar or header to switch through Terms 1 to 6.
   - Click on **"CGPA / SGPA Calculator"** in the dashboard to add courses, tweak grades, and watch your live GPA calculate in real-time.
   - Toggle audio on the campus video in the hero section.
