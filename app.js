// ===================================================================
// Adani University - Interactive Logic
// Theme: Blue (#0B74B0), Purple (#75479C), Magenta (#BD3861)
// Handles: Dashboard navigation, Top Rankers, CGPA Calculator,
//          Video controls, live search/filtering, and modal dialogs.
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
  if (!window.CollegeData) {
    console.error("CollegeData is not loaded. Ensure data.js is included before app.js.");
    return;
  }

  const data = window.CollegeData;

  // Global Application State
  const state = {
    currentTab: 'admissions', // Default active dashboard tab is Admissions & Intake
    activeRankerTerm: 'term-1',
    admissionDegreeFilter: 'all',
    admissionSearchQuery: '',
    facultyDeptFilter: 'all',
    facultySearchQuery: '',
    campusCategoryFilter: 'all',
    campusSearchQuery: '',
    sportsTypeFilter: 'all',
    sportsSearchQuery: '',
    isDarkTheme: localStorage.getItem('aist_theme') === 'dark',
    calcMode: 'sgpa' // 'sgpa' or 'cgpa'
  };

  // Grade point mapping standard
  const GRADE_POINTS = {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'P': 4,
    'F': 0
  };

  // Initialize all modules
  initTheme();
  initDashboardTabs();
  renderTopRankers(state.activeRankerTerm);
  initCgpaCalculator();
  renderAdmissions();
  renderFaculties();
  renderCampusInsights();
  renderSportsFacilities();
  renderPlacements();
  renderNotices();
  initModals();
  initMobileNav();
  initVideoPlayer();
  setupEventListeners();

  // =================================================================
  // 1. Theme Toggle (Dark / Light Mode)
  // =================================================================
  function initTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (state.isDarkTheme) {
      document.body.classList.add('dark-theme');
      updateThemeIcon(true);
    } else {
      document.body.classList.remove('dark-theme');
      updateThemeIcon(false);
    }

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        state.isDarkTheme = !state.isDarkTheme;
        document.body.classList.toggle('dark-theme', state.isDarkTheme);
        localStorage.setItem('aist_theme', state.isDarkTheme ? 'dark' : 'light');
        updateThemeIcon(state.isDarkTheme);
      });
    }
  }

  function updateThemeIcon(isDark) {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (!themeBtn) return;
    themeBtn.innerHTML = isDark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }

  // =================================================================
  // 2. Video Player Ambient Controls
  // =================================================================
  function initVideoPlayer() {
    const video = document.getElementById('campusMovingVideo');
    const audioBtn = document.getElementById('videoAudioToggle');
    if (!video || !audioBtn) return;

    audioBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        audioBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
        audioBtn.title = "Unmute video";
      } else {
        audioBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
        audioBtn.title = "Mute video";
      }
    });
  }

  // =================================================================
  // 3. Dashboard Navigation & Header Sync
  // =================================================================
  function initDashboardTabs() {
    const tabButtons = document.querySelectorAll('.dash-tab-btn');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        switchDashboardTab(targetTab);
      });
    });

    document.querySelectorAll('[data-jump-tab]').forEach(el => {
      el.addEventListener('click', (e) => {
        const tab = el.getAttribute('data-jump-tab');
        if (tab) {
          switchDashboardTab(tab);
          const dashSection = document.getElementById('dashboard');
          if (dashSection) {
            dashSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Handle Introduction nav link click
    const introLink = document.querySelector('a[href="#intro"]');
    if (introLink) {
      introLink.addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        introLink.classList.add('active');
      });
    }

    // Scroll spy: if user scrolls back to top/intro, activate Intro link and deactivate dashboard links
    window.addEventListener('scroll', () => {
      const dashSection = document.getElementById('dashboard');
      if (!dashSection) return;
      const rect = dashSection.getBoundingClientRect();
      const introNav = document.querySelector('a[href="#intro"]');

      if (rect.top > 250) {
        // User is viewing the Introduction / Hero section
        document.querySelectorAll('.nav-link').forEach(l => {
          if (l.getAttribute('href') === '#intro') {
            l.classList.add('active');
          } else {
            l.classList.remove('active');
          }
        });
      } else if (rect.top <= 250 && rect.bottom > 100) {
        // User is inside the Dashboard section
        if (introNav) introNav.classList.remove('active');
        document.querySelectorAll('.nav-link[data-jump-tab]').forEach(l => {
          l.classList.toggle('active', l.getAttribute('data-jump-tab') === state.currentTab);
        });
      }
    }, { passive: true });
  }

  function switchDashboardTab(tabId) {
    state.currentTab = tabId;

    // 1. Update Dashboard Sidebar Buttons
    document.querySelectorAll('.dash-tab-btn').forEach(b => {
      const isActive = b.getAttribute('data-tab') === tabId;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // 2. Update Dashboard Content Panels
    document.querySelectorAll('.dashboard-panel').forEach(p => {
      p.classList.toggle('active', p.id === `panel-${tabId}`);
    });

    // 3. Update Header Navigation Links: highlight ONLY the selected tab!
    document.querySelectorAll('.nav-link').forEach(link => {
      const jumpTab = link.getAttribute('data-jump-tab');
      if (jumpTab) {
        link.classList.toggle('active', jumpTab === tabId);
      } else {
        link.classList.remove('active');
      }
    });
  }

  // =================================================================
  // 4. TOP RANKERS IN EACH TERM / SEMESTER (New Requirement)
  // =================================================================
  function renderTopRankers(termId = 'term-1') {
    state.activeRankerTerm = termId;
    const container = document.getElementById('rankersGrid');
    const termTitleDisplay = document.getElementById('rankersTermHeading');
    if (!container) return;

    const termObj = data.topRankers.terms.find(t => t.id === termId);
    if (termTitleDisplay && termObj) {
      termTitleDisplay.textContent = `Dean's Honor Roll - ${termObj.name}`;
    }

    const rankersList = data.topRankers.rankers.filter(r => r.termId === termId);

    if (rankersList.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:3rem 1rem; color:var(--text-muted);">
          <p style="font-weight:700;">Rank list for this term will be published after the academic board council meeting.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = rankersList.map(r => {
      let medalLabel = "Rank 1 • Gold Medalist";
      let medalIcon = "🥇";
      if (r.rank === 2) {
        medalLabel = "Rank 2 • Silver Medalist";
        medalIcon = "🥈";
      } else if (r.rank === 3) {
        medalLabel = "Rank 3 • Bronze Medalist";
        medalIcon = "🥉";
      }

      return `
        <div class="ranker-card rank-${r.rank} animate-float" style="animation-delay: ${(r.rank - 1) * 0.4}s;">
          <div class="ranker-card-header">
            <span class="ranker-medal-badge">
              <span>${medalIcon}</span>
              <span>${medalLabel}</span>
            </span>
            <div class="ranker-avatar-wrap">
              <img src="${r.avatar}" alt="${r.name}" class="ranker-avatar" loading="lazy">
            </div>
          </div>

          <div class="ranker-card-body">
            <h4 class="ranker-name">${r.name}</h4>
            <div class="ranker-roll">${r.rollNo}</div>
            <div class="ranker-dept">${r.department}</div>

            <div class="ranker-score-row">
              <div class="cgpa-display-box">
                <span class="cgpa-score-val">${r.cgpa}</span>
                <span class="cgpa-score-lbl">Term CGPA</span>
              </div>
              <div class="ranker-credits-val">
                <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Credits Completed</div>
                <div>${r.credits}</div>
              </div>
            </div>

            <div class="ranker-award-tag">
              🏆 ${r.award}
            </div>

            <p class="ranker-quote">
              "${r.quote}"
            </p>
          </div>
        </div>
      `;
    }).join('');
  }

  // =================================================================
  // 5. CGPA & SGPA CALCULATOR (New Requirement)
  // =================================================================
  function initCgpaCalculator() {
    const container = document.getElementById('subjectRowsContainer');
    const addSubjectBtn = document.getElementById('btnAddSubject');
    const calcExecuteBtn = document.getElementById('btnCalcExecute');
    const calcResetBtn = document.getElementById('btnCalcReset');
    const modeSgpaBtn = document.getElementById('modeSgpaBtn');
    const modeCgpaBtn = document.getElementById('modeCgpaBtn');

    if (!container) return;

    // Initial default subjects
    const defaultSubjects = [
      { name: "Artificial Intelligence & Algorithms", credits: 4, grade: "O" },
      { name: "Distributed Cloud Infrastructure", credits: 4, grade: "A+" },
      { name: "Renewable Energy & Smart Grids", credits: 3, grade: "O" },
      { name: "Infrastructure Modeling Lab", credits: 3, grade: "A" },
      { name: "Engineering Design Project", credits: 2, grade: "A+" }
    ];

    function renderSubjectRows(subjects) {
      container.innerHTML = subjects.map((s, idx) => createSubjectRowHTML(s.name, s.credits, s.grade, idx)).join('');
      attachRowEvents();
      calculateSGPA();
    }

    function createSubjectRowHTML(name = '', credits = 3, selectedGrade = 'O', index = 0) {
      const gradeOptions = Object.keys(GRADE_POINTS).map(g => `
        <option value="${g}" ${g === selectedGrade ? 'selected' : ''}>${g} (${GRADE_POINTS[g]} pts)</option>
      `).join('');

      return `
        <div class="subject-row" data-row-id="${index}">
          <input type="text" class="form-control sub-name-input" placeholder="Subject Name" value="${name}">
          <input type="number" class="form-control sub-credits-input" min="1" max="6" value="${credits}">
          <select class="form-control sub-grade-select">
            ${gradeOptions}
          </select>
          <button type="button" class="btn-remove-row" title="Remove Subject" aria-label="Remove Subject">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `;
    }

    function attachRowEvents() {
      container.querySelectorAll('.btn-remove-row').forEach(btn => {
        btn.onclick = () => {
          if (container.querySelectorAll('.subject-row').length <= 1) {
            alert("At least one subject is required to compute SGPA.");
            return;
          }
          btn.closest('.subject-row').remove();
          calculateSGPA();
        };
      });

      container.querySelectorAll('.sub-credits-input, .sub-grade-select').forEach(input => {
        input.onchange = calculateSGPA;
        input.oninput = calculateSGPA;
      });
    }

    if (addSubjectBtn) {
      addSubjectBtn.addEventListener('click', () => {
        const rowCount = container.querySelectorAll('.subject-row').length;
        const newRowHTML = createSubjectRowHTML(`Elective Subject ${rowCount + 1}`, 3, 'A+', rowCount);
        container.insertAdjacentHTML('beforeend', newRowHTML);
        attachRowEvents();
        calculateSGPA();
      });
    }

    if (calcExecuteBtn) {
      calcExecuteBtn.addEventListener('click', calculateSGPA);
    }

    if (calcResetBtn) {
      calcResetBtn.addEventListener('click', () => {
        renderSubjectRows(defaultSubjects);
      });
    }

    // Mode Toggle (SGPA vs CGPA across Terms)
    if (modeSgpaBtn && modeCgpaBtn) {
      modeSgpaBtn.addEventListener('click', () => {
        modeSgpaBtn.classList.add('active');
        modeCgpaBtn.classList.remove('active');
        state.calcMode = 'sgpa';
        document.getElementById('calcHeaderLabel').textContent = "Term Subjects & Credits";
        renderSubjectRows(defaultSubjects);
      });

      modeCgpaBtn.addEventListener('click', () => {
        modeCgpaBtn.classList.add('active');
        modeSgpaBtn.classList.remove('active');
        state.calcMode = 'cgpa';
        document.getElementById('calcHeaderLabel').textContent = "Completed Terms / Semesters";
        renderSubjectRows([
          { name: "Term 1 (Semester I)", credits: 22, grade: "O" },
          { name: "Term 2 (Semester II)", credits: 24, grade: "A+" },
          { name: "Term 3 (Semester III)", credits: 25, grade: "A+" },
          { name: "Term 4 (Semester IV)", credits: 24, grade: "O" }
        ]);
      });
    }

    function calculateSGPA() {
      const rows = container.querySelectorAll('.subject-row');
      let totalCreditPoints = 0;
      let totalCredits = 0;

      rows.forEach(row => {
        const credits = parseFloat(row.querySelector('.sub-credits-input').value) || 0;
        const grade = row.querySelector('.sub-grade-select').value;
        const points = GRADE_POINTS[grade] !== undefined ? GRADE_POINTS[grade] : 0;

        totalCreditPoints += (credits * points);
        totalCredits += credits;
      });

      const gpa = totalCredits > 0 ? (totalCreditPoints / totalCredits) : 0;
      const formattedGpa = gpa.toFixed(2);
      const equivalentPercentage = totalCredits > 0 ? ((gpa * 9.5).toFixed(1) + '%') : '0%';

      let academicClass = "First Class with Distinction (Honors)";
      if (gpa < 5.0) academicClass = "Re-appear Required (Fail)";
      else if (gpa < 6.0) academicClass = "Second Class";
      else if (gpa < 7.5) academicClass = "First Class";

      // Update Result Display
      const scoreNumber = document.getElementById('calcScoreNumber');
      const scoreTotalCredits = document.getElementById('calcTotalCredits');
      const scoreGradePoints = document.getElementById('calcTotalPoints');
      const scorePercent = document.getElementById('calcPercentage');
      const classBadge = document.getElementById('calcClassBadge');
      const resultTitle = document.getElementById('calcResultTitle');

      if (scoreNumber) scoreNumber.textContent = formattedGpa;
      if (scoreTotalCredits) scoreTotalCredits.textContent = totalCredits;
      if (scoreGradePoints) scoreGradePoints.textContent = totalCreditPoints.toFixed(1);
      if (scorePercent) scorePercent.textContent = equivalentPercentage;
      if (classBadge) classBadge.textContent = academicClass;
      if (resultTitle) resultTitle.textContent = state.calcMode === 'sgpa' ? "Semester SGPA" : "Cumulative CGPA";
    }

    // Initial render
    renderSubjectRows(defaultSubjects);
  }

  // =================================================================
  // 6. Admission & Intake Rendering
  // =================================================================
  function renderAdmissions() {
    const container = document.getElementById('intakeGrid');
    if (!container) return;

    let programs = data.admissions.programs;

    if (state.admissionDegreeFilter !== 'all') {
      programs = programs.filter(p => p.level.toLowerCase() === state.admissionDegreeFilter.toLowerCase());
    }

    if (state.admissionSearchQuery.trim() !== '') {
      const q = state.admissionSearchQuery.toLowerCase();
      programs = programs.filter(p => 
        p.specialization.toLowerCase().includes(q) ||
        p.degree.toLowerCase().includes(q) ||
        p.departmentId.toLowerCase().includes(q)
      );
    }

    if (programs.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.1rem; font-weight: 700;">No programs matching your search criteria.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = programs.map(prog => {
      const seatsLeft = prog.totalIntake - prog.enrolledSeats;
      const percentFilled = Math.round((prog.enrolledSeats / prog.totalIntake) * 100);
      const isAlmostFull = percentFilled >= 80;

      return `
        <div class="intake-card">
          <div class="intake-card-top">
            <div class="intake-meta-row">
              <span class="intake-degree-badge">${prog.degree} • ${prog.level}</span>
              <span class="intake-duration">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                ${prog.duration}
              </span>
            </div>
            <h4 class="intake-course-title">${prog.specialization}</h4>
            <p class="intake-eligibility"><strong>Eligibility:</strong> ${prog.eligibility}</p>

            <!-- Seat Matrix Visualizer -->
            <div class="seat-matrix-box">
              <div class="seat-matrix-labels">
                <span class="seat-count-filled">Filled: ${prog.enrolledSeats} / ${prog.totalIntake} Seats</span>
                <span class="seat-count-left" style="${isAlmostFull ? 'color: var(--danger);' : ''}">${seatsLeft} Seats Open</span>
              </div>
              <div class="seat-progress-track">
                <div class="seat-progress-bar" style="width: ${percentFilled}%; background: ${isAlmostFull ? 'linear-gradient(90deg, #75479C, #BD3861)' : 'linear-gradient(90deg, #0B74B0, #75479C)'};"></div>
              </div>
              <div class="seat-quota-tags">
                <span>Merit: ${prog.intakeBreakdown.meritQuota}</span>
                <span>Entrance/GUJCET: ${prog.intakeBreakdown.entranceExamQuota}</span>
                <span>Sports/NRI: ${prog.intakeBreakdown.sportsNriQuota}</span>
              </div>
            </div>

            <!-- Program Highlights -->
            <ul style="list-style: none; margin-bottom: 0.5rem; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.78rem; color: var(--text-secondary);">
              ${prog.highlights.map(h => `
                <li style="display:flex; align-items:center; gap:0.4rem;">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--primary); flex-shrink:0;"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>${h}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="intake-card-footer">
            <div class="fee-wrap">
              <span class="fee-label">Annual Tuition Fee</span>
              <span class="fee-amount">${prog.tuitionFeePerYear}</span>
            </div>
            <button class="btn-card-apply" data-apply-course="${prog.id}" data-course-title="${prog.degree} in ${prog.specialization}">
              Apply Online
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('[data-apply-course]').forEach(btn => {
      btn.addEventListener('click', () => {
        const courseTitle = btn.getAttribute('data-course-title');
        openApplyModal(courseTitle);
      });
    });
  }

  // =================================================================
  // 7. Faculties Rendering
  // =================================================================
  function renderFaculties() {
    const container = document.getElementById('facultyGrid');
    if (!container) return;

    let faculties = data.faculties;

    if (state.facultyDeptFilter !== 'all') {
      faculties = faculties.filter(f => f.departmentId === state.facultyDeptFilter);
    }

    if (state.facultySearchQuery.trim() !== '') {
      const q = state.facultySearchQuery.toLowerCase();
      faculties = faculties.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.specialization.toLowerCase().includes(q) ||
        f.qualification.toLowerCase().includes(q) ||
        f.departmentName.toLowerCase().includes(q)
      );
    }

    if (faculties.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.1rem; font-weight: 700;">No faculty members found.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = faculties.map(fac => `
      <div class="faculty-card">
        <div class="faculty-header-photo">
          <span class="faculty-dept-pill">${fac.departmentName}</span>
          <img src="${fac.avatar}" alt="${fac.name}" class="faculty-avatar" loading="lazy">
        </div>
        <div class="faculty-card-content">
          <h4 class="faculty-name">${fac.name}</h4>
          <span class="faculty-designation">${fac.designation}</span>
          <p class="faculty-qualification">${fac.qualification}</p>

          <div class="faculty-specialization-tags">
            ${fac.specialization.split(',').map(s => `<span class="spec-tag">${s.trim()}</span>`).join('')}
          </div>

          <div class="faculty-stats-row">
            <div class="faculty-stat-cell">
              <strong>${fac.experience}</strong>
              <span>Experience</span>
            </div>
            <div class="faculty-stat-cell">
              <strong>${fac.publications}</strong>
              <span>Papers</span>
            </div>
            <div class="faculty-stat-cell">
              <strong>${fac.patents}</strong>
              <span>Patents</span>
            </div>
          </div>

          <div class="faculty-card-actions">
            <button class="btn-view-faculty" data-faculty-id="${fac.id}">View Full Profile</button>
            <a href="mailto:${fac.email}" class="btn-email-faculty" title="Email ${fac.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-faculty-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-faculty-id');
        openFacultyModal(id);
      });
    });
  }

  // =================================================================
  // 8. Campus Insights
  // =================================================================
  function renderCampusInsights() {
    const container = document.getElementById('campusInsightsGrid');
    if (!container) return;

    let insights = data.campusInsights;

    if (state.campusCategoryFilter !== 'all') {
      insights = insights.filter(c => c.category === state.campusCategoryFilter);
    }

    if (state.campusSearchQuery.trim() !== '') {
      const q = state.campusSearchQuery.toLowerCase();
      insights = insights.filter(c =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q)
      );
    }

    container.innerHTML = insights.map(item => `
      <div class="campus-insight-card">
        <div class="campus-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="campus-badge-overlay">${item.badge}</span>
        </div>
        <div class="campus-card-body">
          <h4 class="campus-card-title">${item.title}</h4>
          <p class="campus-card-desc">${item.description}</p>

          <ul class="campus-specs-list">
            ${item.keySpecs.slice(0, 3).map(spec => `
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${spec}</span>
              </li>
            `).join('')}
          </ul>

          <div class="campus-card-footer">
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; vertical-align:middle; margin-right:3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${item.location}
            </span>
            <button class="btn-explore-insight" data-insight-id="${item.id}">
              Facility Specs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-insight-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-insight-id');
        openCampusModal(id);
      });
    });
  }

  // =================================================================
  // 9. Sports Facilities
  // =================================================================
  function renderSportsFacilities() {
    const container = document.getElementById('sportsFacilityGrid');
    if (!container) return;

    let facilities = data.sports.facilities;

    if (state.sportsTypeFilter !== 'all') {
      facilities = facilities.filter(f => f.type.toLowerCase().includes(state.sportsTypeFilter.toLowerCase()));
    }

    if (state.sportsSearchQuery.trim() !== '') {
      const q = state.sportsSearchQuery.toLowerCase();
      facilities = facilities.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.specs.toLowerCase().includes(q) ||
        f.activities.some(act => act.toLowerCase().includes(q))
      );
    }

    container.innerHTML = facilities.map(sport => `
      <div class="sports-card">
        <div class="sports-img-wrap">
          <img src="${sport.image}" alt="${sport.name}" loading="lazy">
          <span class="sports-type-tag">${sport.type}</span>
        </div>
        <div class="sports-card-body">
          <h4 class="sports-card-name">${sport.name}</h4>
          <p class="sports-card-specs">${sport.specs}</p>

          <div style="font-size: 0.75rem; font-weight: 750; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.35rem;">Key Activities</div>
          <div class="sports-activities-wrap">
            ${sport.activities.map(act => `<span class="activity-tag">${act}</span>`).join('')}
          </div>

          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            <strong>Available Gear:</strong> ${sport.equipmentAvailable}
          </div>

          <div class="sports-card-footer">
            <span style="font-size: 0.78rem; color: var(--text-muted);">Daily 05:30 AM - 09:30 PM</span>
            <button class="btn-book-slot" data-sport-id="${sport.id}" data-sport-name="${sport.name}">
              Book Court / Slot
            </button>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-sport-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sportName = btn.getAttribute('data-sport-name');
        openSportsModal(sportName);
      });
    });
  }

  // =================================================================
  // 10. Placements & Notices
  // =================================================================
  function renderPlacements() {
    const recruitersContainer = document.getElementById('recruitersGrid');
    if (!recruitersContainer) return;

    recruitersContainer.innerHTML = data.placements.topRecruiters.map(rec => `
      <div class="recruiter-card">
        <div>
          <h4 class="recruiter-name">${rec.name}</h4>
          <p class="recruiter-role">${rec.role}</p>
        </div>
        <span class="recruiter-package">Offered: ${rec.package}</span>
      </div>
    `).join('');
  }

  function renderNotices() {
    const noticesContainer = document.getElementById('noticesList');
    if (!noticesContainer) return;

    noticesContainer.innerHTML = data.notices.map(n => `
      <div class="notice-item-card ${n.important ? 'important' : ''}">
        <div class="notice-content-wrap">
          <div class="notice-badge-line">
            <span class="notice-category-badge">${n.category}</span>
            <span class="notice-date">${n.date}</span>
            ${n.important ? '<span style="color:var(--danger); font-weight:800;">[Urgent Notice]</span>' : ''}
          </div>
          <h4 class="notice-title">${n.title}</h4>
          <p class="notice-desc">${n.description}</p>
        </div>
        <button class="btn-download-notice" onclick="alert('Downloading official circular PDF: ${n.title}');">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download PDF
        </button>
      </div>
    `).join('');
  }

  // =================================================================
  // 11. Event Listeners Setup
  // =================================================================
  function setupEventListeners() {
    // Top Rankers Term Pills
    document.querySelectorAll('.term-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.term-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const termId = btn.getAttribute('data-term');
        renderTopRankers(termId);
      });
    });

    // Admission Degree Filter
    document.querySelectorAll('.degree-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.degree-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.admissionDegreeFilter = btn.getAttribute('data-level');
        renderAdmissions();
      });
    });

    const admissionSearch = document.getElementById('admissionSearch');
    if (admissionSearch) {
      admissionSearch.addEventListener('input', (e) => {
        state.admissionSearchQuery = e.target.value;
        renderAdmissions();
      });
    }

    // Faculty Department Filter
    const facultyDeptFilter = document.getElementById('facultyDeptSelect');
    if (facultyDeptFilter) {
      facultyDeptFilter.addEventListener('change', (e) => {
        state.facultyDeptFilter = e.target.value;
        renderFaculties();
      });
    }

    const facultySearch = document.getElementById('facultySearch');
    if (facultySearch) {
      facultySearch.addEventListener('input', (e) => {
        state.facultySearchQuery = e.target.value;
        renderFaculties();
      });
    }

    // Campus Category Filter
    document.querySelectorAll('.campus-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.campus-pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.campusCategoryFilter = btn.getAttribute('data-cat');
        renderCampusInsights();
      });
    });

    const campusSearch = document.getElementById('campusSearch');
    if (campusSearch) {
      campusSearch.addEventListener('input', (e) => {
        state.campusSearchQuery = e.target.value;
        renderCampusInsights();
      });
    }

    // Sports Type Filter
    const sportsSelect = document.getElementById('sportsTypeSelect');
    if (sportsSelect) {
      sportsSelect.addEventListener('change', (e) => {
        state.sportsTypeFilter = e.target.value;
        renderSportsFacilities();
      });
    }

    const sportsSearch = document.getElementById('sportsSearch');
    if (sportsSearch) {
      sportsSearch.addEventListener('input', (e) => {
        state.sportsSearchQuery = e.target.value;
        renderSportsFacilities();
      });
    }
  }

  // =================================================================
  // 12. Modal Controllers
  // =================================================================
  function initModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal.id);
        }
      });
    });

    document.querySelectorAll('.modal-close-btn, [data-modal-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        if (modal) {
          closeModal(modal.id);
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
          closeModal(modal.id);
        });
      }
    });

    // Admission Form Submit
    const admissionForm = document.getElementById('admissionApplyForm');
    if (admissionForm) {
      admissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentName = document.getElementById('appFullName').value;
        const studentCourse = document.getElementById('appCourseSelect').value;
        const randomId = 'AU-' + Math.floor(100000 + Math.random() * 900000);

        const modalBody = document.getElementById('applyModalBody');
        modalBody.innerHTML = `
          <div class="confirmation-box">
            <div class="confirm-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 850; margin-bottom: 0.5rem; color: var(--text-primary);">Application Received!</h3>
            <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 0.5rem;">
              Thank you, <strong>${studentName}</strong>. Your provisional application for <strong>${studentCourse}</strong> has been logged with the Adani University Admissions Council.
            </p>
            <div class="confirm-id-tag">Application Reference: ${randomId}</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.5rem;">
              Our counselors will contact you regarding document submission and scholarship evaluation.
            </p>
            <button class="btn-primary-apply" style="margin: 0 auto;" onclick="document.getElementById('applyModal').classList.remove('active'); location.reload();">
              Done & Return
            </button>
          </div>
        `;
        document.getElementById('applyModalFooter').style.display = 'none';
      });
    }

    // Sports Booking Submit
    const sportsForm = document.getElementById('sportsBookingForm');
    if (sportsForm) {
      sportsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const facilityName = document.getElementById('sportsFacilityNameInput').value;
        const slotTime = document.getElementById('sportsSlotTime').value;
        const slotDate = document.getElementById('sportsDate').value;
        const passId = 'AU-SPORT-' + Math.floor(1000 + Math.random() * 9000);

        const modalBody = document.getElementById('sportsModalBody');
        modalBody.innerHTML = `
          <div class="confirmation-box">
            <div class="confirm-icon" style="background-color: var(--adani-magenta-subtle); color: var(--adani-magenta);">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 850; margin-bottom: 0.5rem; color: var(--text-primary);">Court Slot Confirmed!</h3>
            <p style="color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 0.5rem;">
              Your reservation for <strong>${facilityName}</strong> on <strong>${slotDate}</strong> at <strong>${slotTime}</strong> is confirmed.
            </p>
            <div class="confirm-id-tag" style="border-color: var(--adani-magenta); color: var(--adani-magenta);">Court Pass: ${passId}</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1.5rem;">
              Present this digital pass to the Shantigram Sports Ground Attendant on arrival.
            </p>
            <button class="btn-primary-apply" style="margin: 0 auto;" onclick="document.getElementById('sportsModal').classList.remove('active');">
              Close Pass
            </button>
          </div>
        `;
        document.getElementById('sportsModalFooter').style.display = 'none';
      });
    }
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openApplyModal(preselectedCourse = '') {
    const modal = document.getElementById('applyModal');
    if (!modal) return;

    const select = document.getElementById('appCourseSelect');
    if (select) {
      select.innerHTML = data.admissions.programs.map(p => {
        const title = `${p.degree} in ${p.specialization}`;
        const selected = preselectedCourse && title.toLowerCase().includes(preselectedCourse.toLowerCase()) ? 'selected' : '';
        return `<option value="${title}" ${selected}>${title} (${p.duration})</option>`;
      }).join('');
    }

    openModal('applyModal');
  }

  function openFacultyModal(facultyId) {
    const fac = data.faculties.find(f => f.id === facultyId);
    if (!fac) return;

    const modalTitle = document.getElementById('facultyModalTitle');
    const modalBody = document.getElementById('facultyModalBody');

    if (modalTitle) modalTitle.textContent = `${fac.name} - Faculty Profile`;

    if (modalBody) {
      modalBody.innerHTML = `
        <div style="display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap;">
          <img src="${fac.avatar}" alt="${fac.name}" style="width: 110px; height: 110px; border-radius: 16px; object-fit: cover; border: 2px solid var(--border-medium);">
          <div style="flex: 1; min-width: 240px;">
            <h3 style="font-size: 1.35rem; font-weight: 850; color: var(--text-primary); margin-bottom: 0.25rem;">${fac.name}</h3>
            <div style="color: var(--primary); font-weight: 750; font-size: 0.95rem; margin-bottom: 0.4rem;">${fac.designation}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">${fac.departmentName}</div>
            <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: var(--adani-blue-subtle); color: var(--primary); font-size: 0.78rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 99px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              ${fac.email}
            </div>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 0.35rem;">Educational Qualifications</h5>
          <p style="font-size: 0.9rem; color: var(--text-primary);">${fac.qualification}</p>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 0.35rem;">Academic & Research Contributions</h5>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${fac.bio}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; background: var(--bg-main); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; text-align: center;">
          <div>
            <span style="font-size: 1.25rem; font-weight: 850; color: var(--primary);">${fac.experience}</span>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Teaching & R&D</div>
          </div>
          <div>
            <span style="font-size: 1.25rem; font-weight: 850; color: var(--adani-purple);">${fac.publications}</span>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Journal Papers</div>
          </div>
          <div>
            <span style="font-size: 1.25rem; font-weight: 850; color: var(--adani-magenta);">${fac.patents}</span>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Granted Patents</div>
          </div>
        </div>

        <div>
          <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 0.5rem;">Courses Taught Currently</h5>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${fac.courses.map(c => `
              <span style="font-size: 0.78rem; font-weight: 650; background: var(--bg-surface); border: 1px solid var(--border-medium); padding: 0.3rem 0.65rem; border-radius: var(--radius-sm); color: var(--text-primary);">
                ${c}
              </span>
            `).join('')}
          </div>
        </div>
      `;
    }

    openModal('facultyModal');
  }

  function openCampusModal(insightId) {
    const item = data.campusInsights.find(c => c.id === insightId);
    if (!item) return;

    const modalTitle = document.getElementById('campusModalTitle');
    const modalBody = document.getElementById('campusModalBody');

    if (modalTitle) modalTitle.textContent = item.title;

    if (modalBody) {
      modalBody.innerHTML = `
        <div style="border-radius: var(--radius-lg); overflow: hidden; height: 260px; margin-bottom: 1.5rem;">
          <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="display: flex; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <span class="badge-tag highlight">${item.badge}</span>
          <span class="badge-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; margin-right:3px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${item.location}
          </span>
          <span class="badge-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline; margin-right:3px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${item.timings}
          </span>
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.5rem;">${item.description}</p>
        <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.5px; margin-bottom: 0.75rem;">Key Specifications & Infrastructure</h5>
        <ul class="campus-specs-list" style="margin-bottom: 1rem;">
          ${item.keySpecs.map(spec => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${spec}</span>
            </li>
          `).join('')}
        </ul>
      `;
    }

    openModal('campusModal');
  }

  function openSportsModal(sportName) {
    const input = document.getElementById('sportsFacilityNameInput');
    if (input) input.value = sportName;

    const dateInput = document.getElementById('sportsDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      dateInput.value = today;
    }

    openModal('sportsModal');
  }

  function initMobileNav() {
    const toggleBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('mainNavMenu');

    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', () => {
        const isOpen = navMenu.style.display === 'flex';
        navMenu.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) {
          navMenu.style.position = 'absolute';
          navMenu.style.top = 'var(--header-height)';
          navMenu.style.left = '0';
          navMenu.style.right = '0';
          navMenu.style.backgroundColor = 'var(--bg-surface)';
          navMenu.style.flexDirection = 'column';
          navMenu.style.padding = '1.25rem';
          navMenu.style.borderBottom = '1px solid var(--border-light)';
          navMenu.style.boxShadow = 'var(--shadow-lg)';
        }
      });
    }
  }

  window.openApplyModal = openApplyModal;
  window.switchDashboardTab = switchDashboardTab;
});
