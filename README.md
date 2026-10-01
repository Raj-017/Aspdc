# Apex Institute of Science & Technology (AIST) - College Web Portal

A modern, responsive, high-performance college website built with semantic HTML5, CSS3 custom properties, and vanilla JavaScript. Features a straightforward institutional introduction and an interactive College Dashboard.

---

## 🌟 Key Features

### 1. Straightforward College Introduction
- **Institutional Identity & Stature**: Established 1988, NAAC A++ (CGPA 3.84), NBA Tier-1 accredited, and NIRF Top 20 ranking badges.
- **Concise, Direct Overview**: Clear institutional mission, academic philosophy, and research impact without marketing clutter.
- **Key Metric Counters**: Real-time counter strip highlighting 9,800+ scholars, 430+ faculty (88% Ph.D), 98.4% placement record, and ₹54.2 LPA highest package.
- **Core Pillars Matrix**: Direct breakdown of Curriculum & Pedagogy, Research & Innovation, and Campus & Student Life.

### 2. Interactive College Dashboard
A unified multi-tab dashboard providing instant access to:

1. **🎓 Admission & Intake Information**:
   - Live seat matrix with progress visualizers (Total seats, seats filled, remaining vacancies).
   - Quota breakdown (Merit, Entrance Exam CET/JEE, Sports/NRI).
   - Program filter by degree level (Undergraduate B.Tech, Postgraduate M.Tech & MBA).
   - Search bar across courses and specializations.
   - Annual tuition fees and eligibility requirements.
   - Step-by-step admission procedure flowchart.
   - Interactive **Apply Online** modal with instant application receipt generation (`AIST-XXXXXX`).

2. **👨‍🏫 Distinguished Faculty Directory**:
   - Filter by department (CSE, AI & Data Science, ECE, Mechanical, Biotechnology, Management).
   - Live search by professor name, research domain, or degree.
   - Detailed faculty cards with experience, published papers count, and patents.
   - Interactive **View Full Profile** modal with education, biography, courses taught, and direct email link.

3. **🏛️ Campus Insights & Infrastructure**:
   - Category filtering: Academic & Labs, Residential Hostels, Auditoriums, Startup Incubator, Health & Wellness.
   - Deep-dive specs (Central Digital Library with 350k volumes, NVIDIA GPU Supercluster, 4,200-bed hostels, Apollo-partnered medical hospital).
   - Interactive **Facility Specs** modal with location, operational timings, and amenities.

4. **⚽ Sports Facility & Athletics**:
   - 18-acre sports arena overview with Athletics Director credentials and recent championship achievements.
   - Detailed facilities: FIFA-standard floodlit football stadium, Olympic 50m swimming complex, Sir Vivian Richards cricket arena & automated nets, indoor wooden badminton & squash courts, high-performance gymnasium, basketball & Decoturf tennis courts.
   - Interactive **Book Court / Slot** modal simulator that generates a verified Court Reservation Pass (`SPORT-XXXX`).

5. **💼 Placements & Career Hub ("etc.")**:
   - Key statistics (₹54.20 LPA highest package, ₹12.60 LPA average CTC, 98.4% placement rate, 1,420+ offers).
   - Recruiting partners grid (Google, Microsoft, Amazon, NVIDIA, Qualcomm, Bosch, Deloitte, Goldman Sachs).

6. **📢 Official Notices & Academic Circulars ("etc.")**:
   - Real-time notice bulletin with category tags, urgency indicators, and PDF download triggers.

### 3. Modern UX & Accessibility
- **Light & Dark Theme Toggle**: Easily switch between crisp academic light mode and sleek dark theme (persisted in `localStorage`).
- **Responsive Layout**: Designed for seamless viewing across smartphones, tablets, and wide desktop screens.
- **Zero External Dependencies**: Works completely offline without needing Node, npm, or Python. All icons are embedded SVGs.

---

## 📂 File Structure

```text
AntiGravity_1/
├── index.html       # Semantic HTML5 layout, hero introduction, dashboard sections & modals
├── styles.css       # Master stylesheet (CSS variables, responsive grid/flexbox, glassmorphism, themes)
├── app.js           # Interactive UI logic (tabs, filters, search, modal controllers, form handling)
├── data.js          # Centralized data store (programs, faculty, campus insights, sports, placements)
└── README.md        # Documentation and customization guide
```

---

## 🚀 How to Run

1. Open the project folder:
   ```
   c:\Users\rajth\OneDrive\Desktop\AntiGravity_1
   ```
2. Simply double-click **`index.html`** to open it in your web browser (Google Chrome, Microsoft Edge, Firefox, Brave, Safari, etc.).
3. Alternatively, launch it via PowerShell:
   ```powershell
   Start-Process "index.html"
   ```

---

## 🛠️ How to Customize

- **Add or edit programs / courses**: Open `data.js` and edit the `admissions.programs` array.
- **Add or edit faculty members**: Open `data.js` and modify `faculties`.
- **Add campus facilities**: Open `data.js` and update `campusInsights`.
- **Add sports grounds or equipment**: Open `data.js` and edit `sports.facilities`.
- **Update branding / colors**: Open `styles.css` and adjust `:root` variables (`--primary`, `--accent`, `--bg-main`, etc.).
