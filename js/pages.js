// All page content as JavaScript template literals
const pages = {
  home: `
        <div class="page active" id="home">

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-bg">
            <div class="hero-bg-blobs blob-1"></div>
            <div class="hero-bg-blobs blob-2"></div>
            <div class="hero-bg-blobs blob-3"></div>
        </div>

        <div class="container">
            <div class="hero-content">

                <!-- LEFT TEXT -->
                <div class="hero-text">

                    <div class="hero-badge">
                        <i data-lucide="sparkles"></i>
                        <span>Welcome to my Academic Portfolio</span>
                    </div>

                    <div>
                        <h1 class="hero-title">Dr. Snehankita Majalekar</h1>
                        <div class="hero-subtitle">
                            <div class="hero-subtitle-item">
                                <i data-lucide="shield"></i>
                                <span>Assistant Professor</span>
                            </div>
                            <p style="color: #6b7280; margin-left: 1.75rem;">School of Computer Applications</p>
                            <p style="color: #6b7280; margin-left: 1.75rem;">Pimpri Chinchwad University (PCU)</p>
                        </div>
                    </div>

                    <p class="hero-description">
                        Ph.D. holder, NET-qualified, specializing in 
                        <span class="highlight">Cyber Security</span>, 
                        <span class="highlight-pink">Ethical Hacking</span>, and 
                        <span class="highlight-blue">Advanced Networking (4G/5G)</span>.  
                        Passionate about emerging security challenges.
                    </p>

                    <!-- QUICK LINKS -->
                    <div class="quick-links">
                        <a data-page="#research" class="quick-link-card">

                            <div class="quick-link-gradient" style="background: linear-gradient(to right, #9333ea, #ec4899);"></div>
                            <div class="quick-link-icon">
                                <i data-lucide="flask-conical"></i>
                            </div>
                            <span class="quick-link-text">Research</span>
                        </a>

                        <a data-page="#research" class="quick-link-card">

                            <div class="quick-link-gradient" style="background: linear-gradient(to right, #3b82f6, #06b6d4);"></div>
                            <div class="quick-link-icon">
                                <i data-lucide="book-open"></i>
                            </div>
                            <span class="quick-link-text">Publications</span>
                        </a>

                        <a href="#teaching" class="quick-link-card">
                            <div class="quick-link-gradient" style="background: linear-gradient(to right, #10b981, #14b8a6);"></div>
                            <div class="quick-link-icon">
                                <i data-lucide="graduation-cap"></i>
                            </div>
                            <span class="quick-link-text">Teaching</span>
                        </a>

                        <a href="#contact" class="quick-link-card">
                            <div class="quick-link-gradient" style="background: linear-gradient(to right, #f97316, #ef4444);"></div>
                            <div class="quick-link-icon">
                                <i data-lucide="mail"></i>
                            </div>
                            <span class="quick-link-text">Contact</span>
                        </a>
                    </div>
                </div>

                <!-- RIGHT PHOTO -->
                <div class="hero-photo" style="pointer-events: none;">
                    <div class="photo-wrapper">
                        <div class="photo-blur"></div>
                        <div class="photo-container">
                            <div class="photo-placeholder">
                                <img src="/assect/profileIMG.png" alt="Dr. Snehankita Majalekar" />
                            </div>
                            <div class="photo-overlay">
                                <p class="photo-overlay-title">Ph.D. | NET Qualified</p>
                                <p class="photo-overlay-subtitle">Cyber Security Expert</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <!-- STATS SECTION -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">

                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(to right, #9333ea, #ec4899);">
                        <i data-lucide="award"></i>
                    </div>
                    <div class="stat-value">3+</div>
                    <div class="stat-label">Patents</div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(to right, #3b82f6, #06b6d4);">
                        <i data-lucide="book-open"></i>
                    </div>
                    <div class="stat-value">10+</div>
                    <div class="stat-label">Publications</div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(to right, #10b981, #14b8a6);">
                        <i data-lucide="users"></i>
                    </div>
                    <div class="stat-value">100+</div>
                    <div class="stat-label">Students Guided</div>
                </div>

                <div class="stat-card">
                    <div class="stat-icon" style="background: linear-gradient(to right, #f97316, #ef4444);">
                        <i data-lucide="trending-up"></i>
                    </div>
                    <div class="stat-value">15+</div>
                    <div class="stat-label">Years Experience</div>
                </div>

            </div>
        </div>
    </section>


    <!-- ABOUT WORK -->
    <section class="section gradient-bg">
        <div class="container">
            <div style="max-width: 56rem; margin: 0 auto;">
                <div class="section-header">
                    <h2 class="section-title">About My Work</h2>
                    <div class="section-divider"></div>
                </div>

                <div class="card" style="padding: 3rem;">
                    <div style="display: flex; flex-direction: column; gap: 1.5rem; color: #374151; font-size: 1.125rem;">

                        <p>
                            I am a <span class="highlight">Ph.D. holder</span> and 
                            <span class="highlight-pink">NET-qualified</span> academic 
                            professional currently serving as an Assistant Professor at PCU. 
                        </p>

                        <p>
                            My specialization includes Cyber Security, Ethical Hacking, Malware Analysis,
                            and Advanced Networking technologies including 4G/5G.
                        </p>

                        <p>
                            I guide students, conduct workshops, and research network security,
                            intrusion detection, digital forensics, cyber threat intelligence, etc.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- EXPERTISE -->
    <section class="section" style="background: white;">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Areas of Expertise</h2>
                <div class="section-divider"></div>
            </div>

            <div class="grid-3" style="gap: 1.5rem;">

    <div class="expertise-card">
        <div class="expertise-icon">
            <div class="expertise-icon-bg" style="background: linear-gradient(to right, #faf5ff, #fce7f3);">
                <i data-lucide="shield-check"></i>
            </div>
        </div>
        <p class="expertise-title">Cyber Security</p>
    </div>

    <div class="expertise-card">
        <div class="expertise-icon">
            <div class="expertise-icon-bg" style="background: linear-gradient(to right, #fce7f3, #fef2f2);">
                <i data-lucide="key-round"></i>
            </div>
        </div>
        <p class="expertise-title">Ethical Hacking</p>
    </div>

    <div class="expertise-card">
        <div class="expertise-icon">
            <div class="expertise-icon-bg" style="background: linear-gradient(to right, #eff6ff, #dbeafe);">
                <i data-lucide="file-search"></i>
            </div>
        </div>
        <p class="expertise-title">Digital Forensics</p>
    </div>

    <div class="expertise-card">
        <div class="expertise-icon">
            <div class="expertise-icon-bg" style="background: linear-gradient(to right, #ecfeff, #cffafe);">
                <i data-lucide="radio-tower"></i>
            </div>
        </div>
        <p class="expertise-title">4G/5G Networks</p>
    </div>

    <div class="expertise-card">
        <div class="expertise-icon">
            <div class="expertise-icon-bg" style="background: linear-gradient(to right, #f0fdf4, #dcfce7);">
                <i data-lucide="link"></i>
            </div>
        </div>
        <p class="expertise-title">Blockchain</p>
    </div>

    <div class="expertise-card">
        <div class="expertise-icon">
            <div class="expertise-icon-bg" style="background: linear-gradient(to right, #f0fdfa, #ccfbf1);">
                <i data-lucide="cpu"></i>
            </div>
        </div>
        <p class="expertise-title">IoT & ML</p>
    </div>
</div>



            </div>
        </div>
    </section>


    <!-- RESEARCH HIGHLIGHTS -->
    <section class="section gradient-bg">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Research Highlights</h2>
                <div class="section-divider"></div>
            </div>

            <div class="highlights-grid">

                <div class="highlight-card">
                    <div class="highlight-accent" style="background: linear-gradient(135deg, #9333ea, #ec4899);"></div>
                    <div class="highlight-content">
                        <div class="highlight-icon-wrapper" style="background: linear-gradient(to right, #9333ea, #ec4899);">
                            <i data-lucide="award"></i>
                        </div>
                        <h3 class="highlight-title">Patents & Innovation</h3>
                        <p class="highlight-description">
                            Holder of patents including Wireless Sensor Networks and Mobile Payment Systems.
                        </p>
                    </div>
                </div>

                <div class="highlight-card">
                    <div class="highlight-accent" style="background: linear-gradient(135deg, #3b82f6, #06b6d4);"></div>
                    <div class="highlight-content">
                        <div class="highlight-icon-wrapper" style="background: linear-gradient(to right, #3b82f6, #06b6d4);">
                            <i data-lucide="book-open"></i>
                        </div>
                        <h3 class="highlight-title">Publications</h3>
                        <p class="highlight-description">
                            Research on MANETs, DeFi security, IoT, and 6G Communication.
                        </p>
                    </div>
                </div>

                <div class="highlight-card">
                    <div class="highlight-accent" style="background: linear-gradient(135deg, #10b981, #14b8a6);"></div>
                    <div class="highlight-content">
                        <div class="highlight-icon-wrapper" style="background: linear-gradient(to right, #10b981, #14b8a6);">
                            <i data-lucide="users"></i>
                        </div>
                        <h3 class="highlight-title">Editorial Board</h3>
                        <p class="highlight-description">
                            Editorial board member for international engineering journals.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

</div>
`,

  about: `
        <div class="page" id="about">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <div class="hero-badge" style="margin: 0 auto 1rem;">
                            <i data-lucide="sparkles"></i>
                            <span>Academic Profile</span>
                        </div>
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            About Me
                        </h1>
                        <div class="section-divider"></div>
                    </div>

                    <!-- Biography -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="star" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    My Journey
                                </h2>
                                <div style="width:100%; display:flex; justify-content:flex-end; margin-top:0.5rem;">
                                    <a href="/assect/Dr._SnehankitaM_Resume.pdf" download="Resume_Dr_Snehankita_Majalekar.pdf" aria-label="Download Journey PDF" style="display:inline-flex; align-items:center; gap:0.6rem; padding:0.6rem 0.9rem; background: linear-gradient(90deg,#9333ea,#ec4899); color:#fff; border-radius:8px; font-weight:600; text-decoration:none; box-shadow:0 6px 18px rgba(147,51,234,0.18); transition:transform .12s ease, box-shadow .12s ease;">
                                        <i data-lucide="download" style="width:1rem; height:1rem;"></i>
                                        <span style="font-size:0.95rem;">Download Resume (PDF)</span>
                                    </a>
                                </div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem; color: #374151; font-size: 1.125rem; line-height: 1.75;">
                                <p>
                                    I am a <span style="color: #9333ea; font-weight: 600;">Ph.D. holder</span>, <span style="color: #ec4899; font-weight: 600;">NET-qualified</span>, 
                                    and currently working as an Assistant Professor at Pimpri Chinchwad University. My specialization areas include 
                                    Cyber Security, Ethical Hacking, Malware Analysis, and Advanced Networking (4G/5G). My passion lies in exploring 
                                    emerging security challenges and developing innovative strategies to protect digital ecosystems.
                                </p>
                                <p>
                                    With a strong research background, I focus on creating practical, hands-on learning environments that bridge 
                                    academic concepts with real-world applications. I have guided several students through cybersecurity projects, 
                                    workshops, and expert sessions, fostering technical curiosity and critical thinking.
                                </p>
                                <p>
                                    My research interests include network security, intrusion detection, digital forensics, cyber threat intelligence, 
                                    and secure communication systems. I am committed to advancing the field of cybersecurity through innovative 
                                    research, quality teaching, and active industry collaboration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Research Interests -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="target" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Research Interests
                                </h2>
                            </div>
                            <div class="grid-3">
                                ${[
                                  "Cyber Security & Ethical Hacking|<i data-lucide='shield-check'></i>|#9333ea,#ec4899",
                                  "Digital Forensics|<i data-lucide='file-search'></i>|#3b82f6,#06b6d4",
                                  "Intrusion Detection Systems|<i data-lucide='shield'></i>|#10b981,#14b8a6",
                                  "MANETs (Mobile Ad Hoc Networks)|<i data-lucide='radio-tower'></i>|#f97316,#ef4444",
                                  "Blockchain & Metaverse|<i data-lucide='link'></i>|#ec4899,#9333ea",
                                  "Energy Optimization|<i data-lucide='bolt'></i>|#eab308,#f97316",
                                  "IoT with ML Techniques|<i data-lucide='cpu'></i>|#06b6d4,#3b82f6",
                                  "6G Communication Systems|<i data-lucide='wifi'></i>|#6366f1,#9333ea",
                                  "Cyber Threat Intelligence|<i data-lucide='target'></i>|#ef4444,#ec4899",
                                ]

                                  .map((item) => {
                                    const [name, icon, colors] =
                                      item.split("|");
                                    return `
                                        <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 1.25rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; transition: all 0.3s;">
                                            <div style="position: absolute; top: 0; right: 0; width: 5rem; height: 5rem; background: linear-gradient(to right, ${colors
                                              .split(",")
                                              .map((c) => c.trim())
                                              .join(
                                                ", "
                                              )}); border-bottom-left-radius: 9999px; opacity: 0.1;"></div>
                                            <div style="position: relative; display: flex; align-items: center; gap: 0.75rem;">
                                                <div style="font-size: 1.875rem;">${icon}</div>
                                                <p style="color: #1f2937;">${name}</p>
                                            </div>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Education -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #14b8a6); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="graduation-cap" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #10b981, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Educational Qualifications
                                </h2>
                            </div>
                            <div class="grid-2">
                                ${[
                                  {
                                    degree: "PhD – Computer Science",
                                    university: "JJT University",
                                    class: "—",
                                    year: "2024",
                                    icon: "<i data-lucide='graduation-cap'></i>",
                                  },
                                  {
                                    degree: "NET Qualified",
                                    university: "Joint CSIR-UGC",
                                    class: "—",
                                    year: "2019",
                                    icon: "<i data-lucide='trophy'></i>",
                                  },
                                  {
                                    degree: "M.Sc Computer Science",
                                    university: "SPPU",
                                    class: "First Class",
                                    year: "2006–2008",
                                    icon: "<i data-lucide='library'></i>",
                                  },
                                  {
                                    degree: "B.Sc Computer Science",
                                    university: "SPPU",
                                    class: "First Class",
                                    year: "2003–2006",
                                    icon: "<i data-lucide='book-open'></i>",
                                  },
                                  {
                                    degree: "H.S.C",
                                    university: "Maharashtra State Board",
                                    class: "First Class",
                                    year: "2003",
                                    icon: "<i data-lucide='file-text'></i>",
                                  },
                                  {
                                    degree: "S.S.C",
                                    university: "Maharashtra State Board",
                                    class: "First Class",
                                    year: "2001",
                                    icon: "<i data-lucide='pencil'></i>",
                                  },
                                ]

                                  .map(
                                    (edu) => `
                                    <div style="background: linear-gradient(to right, #faf5ff, #fce7f3); padding: 1.5rem; border-radius: 1rem; border: 1px solid #e9d5ff; transition: all 0.3s;">
                                        <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                            <div style="font-size: 2.5rem;">${edu.icon}</div>
                                            <div style="flex-grow: 1;">
                                                <h3 style="font-size: 1.125rem; color: #1f2937; margin-bottom: 0.25rem; font-weight: 600;">${edu.degree}</h3>
                                                <p style="color: #6b7280; margin-bottom: 0.25rem;">${edu.university}</p>
                                                <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #6b7280;">
                                                    <span>${edu.class}</span>
                                                    <span>•</span>
                                                    <span>${edu.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Employment History -->
                    <div>
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #f97316, #ef4444); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="briefcase" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #f97316, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Professional Experience
                                </h2>
                            </div>
                            <div class="timeline">
                                ${[
                                  {
                                    organization:
                                      "Pimpri Chinchwad University (PCU)",
                                    position:
                                      "Assistant Professor, School of Computer Applications",
                                    duration: "Currently Working",
                                    color: "#9333ea,#ec4899",
                                  },
                                  {
                                    organization:
                                      "Indira College of Commerce & Science",
                                    position: "Assistant Professor",
                                    duration: "Dec 2017 – 2023",
                                    color: "#3b82f6,#06b6d4",
                                  },
                                  {
                                    organization:
                                      "SCT College of Engineering, Bangalore",
                                    position: "Assistant Professor",
                                    duration: "June 2016 – Sept 2017",
                                    color: "#10b981,#14b8a6",
                                  },
                                  {
                                    organization: "Tech Mahindra",
                                    position: "Software Engineer",
                                    duration: "May 2013 – June 2014",
                                    color: "#f97316,#ef4444",
                                  },
                                  {
                                    organization:
                                      "Sasken Communication Technologies",
                                    position: "Software Engineer",
                                    duration: "Aug 2010 – April 2013",
                                    color: "#ec4899,#9333ea",
                                  },
                                  {
                                    organization: "Sungard Technology Services",
                                    position: "Software Engineer",
                                    duration: "Jan 2009 – March 2010",
                                    color: "#06b6d4,#3b82f6",
                                  },
                                ]
                                  .map(
                                    (job) => `
                                    <div class="timeline-item">
                                        <div class="timeline-icon" style="background: linear-gradient(to right, ${job.color
                                          .split(",")
                                          .join(", ")});">
                                            <i data-lucide="award"></i>
                                        </div>
                                        <div class="timeline-content">
                                            <h3 class="timeline-title">${
                                              job.position
                                            }</h3>
                                            <p class="timeline-subtitle">${
                                              job.organization
                                            }</p>
                                            <p class="timeline-meta">${
                                              job.duration
                                            }</p>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

  research: `
        <div class="page" id="research">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <div class="hero-badge" style="margin: 0 auto 1rem;">
                            <i data-lucide="sparkles"></i>
                            <span>Academic Contributions</span>
                        </div>
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            Research & Publications
                        </h1>
                        <div class="section-divider"></div>
                        <p class="section-description">
                            My research focuses on advancing cybersecurity, network technologies, and emerging digital ecosystems 
                            through innovative approaches and practical applications.
                        </p>
                    </div>

                    <!-- Research Interests -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="star" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Research Focus Areas
                                </h2>
                            </div>
                            <div class="grid-3">
                                ${[
                                  "Cyber Security & Ethical Hacking|🔒|#9333ea,#ec4899",
                                  "Digital Forensics|🔍|#3b82f6,#06b6d4",
                                  "Intrusion Detection Systems|🛡️|#10b981,#14b8a6",
                                  "MANETs|📡|#f97316,#ef4444",
                                  "Blockchain & Metaverse|⛓️|#ec4899,#9333ea",
                                  "Energy Optimization|⚡|#eab308,#f97316",
                                  "IoT with ML Techniques|🤖|#06b6d4,#3b82f6",
                                  "6G Communication Systems|📶|#6366f1,#9333ea",
                                  "Cyber Threat Intelligence|🎯|#ef4444,#ec4899",
                                ]
                                  .map((item) => {
                                    const [name, icon, colors] =
                                      item.split("|");
                                    return `
                                        <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; transition: all 0.3s;">
                                            <div style="position: absolute; inset: 0; background: linear-gradient(to right, ${colors
                                              .split(",")
                                              .map((c) => c.trim())
                                              .join(", ")}); opacity: 0;"></div>
                                            <div style="position: relative; display: flex; align-items: center; gap: 0.75rem;">
                                                <div style="font-size: 2.5rem; width: 4rem; height: 4rem; background: linear-gradient(to right, ${colors
                                                  .split(",")
                                                  .map((c) => c.trim())
                                                  .join(
                                                    ", "
                                                  )}); background-opacity: 0.1; border-radius: 1rem; display: flex; align-items: center; justify-content: center;">${icon}</div>
                                                <p style="color: #1f2937; flex-grow: 1;">${name}</p>
                                            </div>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Patents & Copyrights -->
                    <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem;">
                        <!-- Patents -->
                        <div class="card" style="padding: 2rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="trophy" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Patents
                                </h2>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                ${[
                                  {
                                    title:
                                      "Human Centric Wireless Sensor Networks",
                                    country: "India",
                                    year: "2024",
                                  },
                                  {
                                    title:
                                      "Management System for Mobile Payment Applications",
                                    country: "Germany",
                                    year: "2024",
                                  },
                                ]
                                  .map(
                                    (patent) => `
                                    <div style="background: linear-gradient(to right, #eff6ff, #ecfeff); padding: 1.5rem; border-radius: 1rem; border: 1px solid #bfdbfe; transition: all 0.3s;">
                                        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                            <i data-lucide="award" style="color: #3b82f6; margin-top: 0.25rem; width: 1.5rem; height: 1.5rem;"></i>
                                            <div>
                                                <h3 style="color: #1f2937; margin-bottom: 0.25rem; font-weight: 600;">${patent.title}</h3>
                                                <div style="display: flex; gap: 0.75rem; font-size: 0.875rem; color: #6b7280;">
                                                    <span>${patent.country} Patent</span>
                                                    <span>•</span>
                                                    <span>${patent.year}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>

                        <!-- Copyrights -->
                        <div class="card" style="padding: 2rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #14b8a6); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="file-text" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.5rem; background: linear-gradient(to right, #10b981, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Copyrights
                                </h2>
                            </div>
                            <div style="background: linear-gradient(to right, #f0fdf4, #f0fdfa); padding: 1.5rem; border-radius: 1rem; border: 1px solid #bbf7d0; transition: all 0.3s;">
                                <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                    <i data-lucide="file-text" style="color: #10b981; margin-top: 0.25rem; width: 1.5rem; height: 1.5rem;"></i>
                                    <div>
                                        <h3 style="color: #1f2937; margin-bottom: 0.25rem; font-weight: 600;">Aadhar Card Based Smart Shopping System (ACS3)</h3>
                                        <div style="display: flex; gap: 0.75rem; font-size: 0.875rem; color: #6b7280;">
                                            <span>Indian Copyright</span>
                                            <span>•</span>
                                            <span>2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Publications -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #f97316, #ef4444); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="book-open" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #f97316, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Publications
                                </h2>
                            </div>
                            
                            <!-- Journal Publications -->
                            <div style="margin-bottom: 2rem;">
                                <h3 style="font-size: 1.25rem; color: #1f2937; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 9999px;"></div>
                                    Journal Publications
                                </h3>
                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    ${[
                                      {
                                        title:
                                          "MANET Routing Protocols – OPNET Simulator",
                                        year: "2024",
                                      },
                                      {
                                        title:
                                          "MANET Comparative Study – Journal of Renewable Energy Exchange",
                                        year: "2024",
                                      },
                                      {
                                        title:
                                          "Intelligent Attack Detection – JREE",
                                        year: "2024",
                                      },
                                      {
                                        title:
                                          "Energy Optimization for Blockchain in Metaverse",
                                        year: "2025",
                                      },
                                      {
                                        title:
                                          "AI-driven Multicloud Optimization",
                                        year: "2025",
                                      },
                                    ]
                                      .map(
                                        (journal) => `
                                        <div style="background: linear-gradient(to right, #faf5ff, #fce7f3); padding: 1.25rem; border-radius: 1rem; border: 1px solid #e9d5ff; transition: all 0.3s;">
                                            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;">
                                                <div style="display: flex; align-items: flex-start; gap: 0.75rem; flex-grow: 1;">
                                                    <div style="width: 0.5rem; height: 0.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 9999px; margin-top: 0.5rem;"></div>
                                                    <p style="color: #1f2937;">${journal.title}</p>
                                                </div>
                                                <span style="font-size: 0.875rem; color: #9333ea; background: white; padding: 0.25rem 0.75rem; border-radius: 9999px; white-space: nowrap;">${journal.year}</span>
                                            </div>
                                        </div>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>

                            <!-- Conference Publications -->
                            <div>
                                <h3 style="font-size: 1.25rem; color: #1f2937; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                    <div style="width: 0.5rem; height: 0.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); border-radius: 9999px;"></div>
                                    Conference Publications
                                </h3>
                                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                    ${[
                                      {
                                        title: "Cybersecurity Risks in DeFi",
                                        year: "2025",
                                      },
                                      {
                                        title: "IoT for Agricultural Precision",
                                        year: "2025",
                                      },
                                      {
                                        title: "6G Integration with MANETs",
                                        year: "2025",
                                      },
                                      {
                                        title: "DDoS Attack Mitigation in 5G",
                                        year: "2025",
                                      },
                                    ]
                                      .map(
                                        (conference) => `
                                        <div style="background: linear-gradient(to right, #eff6ff, #ecfeff); padding: 1.25rem; border-radius: 1rem; border: 1px solid #bfdbfe; transition: all 0.3s;">
                                            <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem;">
                                                <div style="display: flex; align-items: flex-start; gap: 0.75rem; flex-grow: 1;">
                                                    <div style="width: 0.5rem; height: 0.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); border-radius: 9999px; margin-top: 0.5rem;"></div>
                                                    <p style="color: #1f2937;">${conference.title}</p>
                                                </div>
                                                <span style="font-size: 0.875rem; color: #3b82f6; background: white; padding: 0.25rem 0.75rem; border-radius: 9999px; white-space: nowrap;">${conference.year}</span>
                                            </div>
                                        </div>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Editorial Board -->
                    <div>
                        <div class="card" style="padding: 2rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #ec4899, #9333ea); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="users" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.5rem; background: linear-gradient(to right, #ec4899, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Editorial Board Memberships
                                </h2>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                ${[
                                  "International Journal of Research in Engineering & Technology",
                                  "International Research for Engineering and Management Journal",
                                ]
                                  .map(
                                    (board) => `
                                    <div style="background: linear-gradient(to right, #fce7f3, #faf5ff); padding: 1.5rem; border-radius: 1rem; border: 1px solid #fbcfe8; transition: all 0.3s;">
                                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                                            <i data-lucide="users" style="color: #ec4899; width: 1.5rem; height: 1.5rem;"></i>
                                            <p style="color: #1f2937; font-weight: 600;">${board}</p>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

  books: `
        <div class="page" id="books">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <div class="hero-badge" style="margin: 0 auto 1rem;">
                            <i data-lucide="sparkles"></i>
                            <span>Academic Publications</span>
                        </div>
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            Books & Textbooks
                        </h1>
                        <div class="section-divider"></div>
                        <p class="section-description">
                            Academic publications and textbooks authored to support student learning and professional development.
                        </p>
                    </div>

                    <!-- Books Grid -->
                    <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
                        <!-- Book Card -->
                        <div style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border-radius: 1.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); overflow: hidden; border: 1px solid #f3e8ff; transition: all 0.3s;">
                            <!-- Book Cover -->
                            <div style="position: relative; height: 20rem; background: linear-gradient(135deg, #9333ea, #ec4899); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <div style="position: absolute; inset: 0; opacity: 0.2;">
                                    <div style="position: absolute; top: 2.5rem; left: 2.5rem; width: 10rem; height: 10rem; background: white; border-radius: 9999px; filter: blur(64px);"></div>
                                    <div style="position: absolute; bottom: 2.5rem; right: 2.5rem; width: 10rem; height: 10rem; background: white; border-radius: 9999px; filter: blur(64px);"></div>
                                </div>
                                <div style="position: relative; text-align: center; padding: 2rem; color: white;">
                                    <i data-lucide="book-open" style="width: 5rem; height: 5rem; margin: 0 auto 1.5rem; display: block;"></i>
                                    <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">fOcuS – Operating System</h3>
                                    <p style="color: rgba(255, 255, 255, 0.8);">Academic Textbook</p>
                                </div>
                            </div>

                            <!-- Book Details -->
                            <div style="padding: 1.5rem;">
                                <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(to right, #eff6ff, #ecfeff); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
                                            <i data-lucide="calendar" style="color: #3b82f6; width: 1.25rem; height: 1.25rem;"></i>
                                        </div>
                                        <div>
                                            <p style="font-size: 0.875rem; color: #6b7280;">Publication Year</p>
                                            <p style="color: #1f2937; font-weight: 600;">2021</p>
                                        </div>
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                                        <div style="width: 2.5rem; height: 2.5rem; background: linear-gradient(to right, #faf5ff, #fce7f3); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
                                            <i data-lucide="hash" style="color: #9333ea; width: 1.25rem; height: 1.25rem;"></i>
                                        </div>
                                        <div>
                                            <p style="font-size: 0.875rem; color: #6b7280;">ISBN</p>
                                            <p style="color: #1f2937; font-weight: 600;">978-93-5457-583-9</p>
                                        </div>
                                    </div>
                                </div>
                                <p style="color: #374151; line-height: 1.75;">
                                    A comprehensive guide to Operating Systems, designed for students and professionals. This book covers fundamental concepts, 
                                    practical implementations, and advanced topics in operating system design.
                                </p>
                            </div>
                        </div>

                        <!-- Coming Soon Card -->
                        <div style="background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(10px); border-radius: 1.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); overflow: hidden; border: 2px dashed #e9d5ff; display: flex; align-items: center; justify-content: center; padding: 3rem;">
                            <div style="text-align: center;">
                                <i data-lucide="book-open" style="color: #d8b4fe; width: 4rem; height: 4rem; margin: 0 auto 1rem; display: block;"></i>
                                <h3 style="font-size: 1.25rem; color: #6b7280; margin-bottom: 0.5rem;">More Books Coming Soon</h3>
                                <p style="color: #9ca3af;">Working on new publications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

  teaching: `
        <div class="page" id="teaching">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <div class="hero-badge" style="margin: 0 auto 1rem;">
                            <i data-lucide="sparkles"></i>
                            <span>Professional Development</span>
                        </div>
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            Teaching & Learning
                        </h1>
                        <div class="section-divider"></div>
                        <p class="section-description">
                            Committed to excellence in teaching, continuous learning, and professional development through 
                            courses, workshops, and certifications.
                        </p>
                    </div>

                    <!-- Subjects Taught -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="book-open" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Subjects Taught
                                </h2>
                            </div>
                            <div class="grid-4">
                                ${[
                                  "C Programming|💻|#9333ea,#ec4899",
                                  "Data Structures|🌳|#3b82f6,#06b6d4",
                                  "Operating Systems|⚙️|#10b981,#14b8a6",
                                  "Computer Networks|🌐|#f97316,#ef4444",
                                  "Software Engineering|🏗️|#ec4899,#9333ea",
                                  "Assembly Language|⚡|#eab308,#f97316",
                                  "VAPT|🔒|#ef4444,#ec4899",
                                  "Digital Forensics|🔍|#06b6d4,#3b82f6",
                                  "Ethical Hacking|🎯|#6366f1,#9333ea",
                                  "Cyber Security Fundamentals|🛡️|#10b981,#06b6d4",
                                  "Digital Marketing|📱|#ec4899,#ef4444",
                                  "Data Science|📊|#9333ea,#3b82f6",
                                  "R Programming|📈|#3b82f6,#10b981",
                                  "Research & Projects|🔬|#f97316,#ec4899",
                                ]
                                  .map((item) => {
                                    const [name, icon, colors] =
                                      item.split("|");
                                    return `
                                        <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 1.25rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; transition: all 0.3s;">
                                            <div style="position: absolute; top: 0; right: 0; width: 5rem; height: 5rem; background: linear-gradient(to right, ${colors
                                              .split(",")
                                              .map((c) => c.trim())
                                              .join(
                                                ", "
                                              )}); border-bottom-left-radius: 9999px; opacity: 0.1;"></div>
                                            <div style="position: relative; display: flex; align-items: center; gap: 0.75rem;">
                                                <div style="font-size: 1.875rem;">${icon}</div>
                                                <p style="color: #1f2937; font-size: 0.875rem;">${name}</p>
                                            </div>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Guest Lectures -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 2rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="presentation" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Guest Lectures & Courses Conducted
                                </h2>
                            </div>
                            <div class="grid-2">
                                ${[
                                  {
                                    title: "40-hour Web Marketing Course",
                                    type: "Course",
                                    icon: "📚",
                                  },
                                  {
                                    title: "Ethical Hacking Tools",
                                    type: "Guest Lecture",
                                    icon: "🎤",
                                  },
                                  {
                                    title: "Cyber Security",
                                    type: "Guest Lecture",
                                    icon: "🎤",
                                  },
                                  {
                                    title: "VAPT Workshop",
                                    type: "Workshop",
                                    icon: "🛠️",
                                  },
                                ]
                                  .map(
                                    (lecture) => `
                                    <div style="background: linear-gradient(to right, #eff6ff, #ecfeff); padding: 1.25rem; border-radius: 1rem; border: 1px solid #bfdbfe; transition: all 0.3s;">
                                        <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                            <div style="font-size: 1.875rem;">${lecture.icon}</div>
                                            <div>
                                                <h3 style="color: #1f2937; margin-bottom: 0.25rem; font-weight: 600;">${lecture.title}</h3>
                                                <p style="font-size: 0.875rem; color: #3b82f6;">${lecture.type}</p>
                                            </div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Workshops & FDPs -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #14b8a6); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="graduation-cap" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #10b981, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Workshops, FDPs & Seminars
                                </h2>
                            </div>
                            <div class="grid-2">
                                ${[
                                  {
                                    title: "I-FEEP4",
                                    duration: "30 hours",
                                    organizer: "HRDC Pune",
                                    year: "2021–22",
                                    color: "#9333ea,#ec4899",
                                  },
                                  {
                                    title: "State-level NAAC-IQAC Seminar",
                                    duration: "Full Day",
                                    organizer: "NAAC",
                                    year: "2022–23",
                                    color: "#3b82f6,#06b6d4",
                                  },
                                  {
                                    title: "I-FEEP",
                                    duration: "15 hours",
                                    organizer: "FDP",
                                    year: "2019",
                                    color: "#10b981,#14b8a6",
                                  },
                                  {
                                    title: "ATAL FDP on AI & ML",
                                    duration: "Multi-day",
                                    organizer: "Python, MATLAB",
                                    year: "2020",
                                    color: "#f97316,#ef4444",
                                  },
                                  {
                                    title: "Statistical Data Analytics using R",
                                    duration: "Workshop",
                                    organizer: "International",
                                    year: "2021",
                                    color: "#ec4899,#9333ea",
                                  },
                                  {
                                    title:
                                      "Redefining Institutional Perspective",
                                    duration: "Seminar",
                                    organizer: "NEP 2020",
                                    year: "2020",
                                    color: "#06b6d4,#3b82f6",
                                  },
                                ]
                                  .map(
                                    (workshop) => `
                                    <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                                        <div style="position: absolute; top: 0; right: 0; width: 8rem; height: 8rem; background: linear-gradient(to right, ${workshop.color
                                          .split(",")
                                          .map((c) => c.trim())
                                          .join(
                                            ", "
                                          )}); border-bottom-left-radius: 9999px; opacity: 0.1;"></div>
                                        <div style="position: relative;">
                                            <h3 style="font-size: 1.125rem; color: #1f2937; margin-bottom: 0.75rem; font-weight: 600;">${
                                              workshop.title
                                            }</h3>
                                            <div style="display: flex; flex-direction: column; gap: 0.25rem; font-size: 0.875rem; color: #6b7280;">
                                                <p style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <span style="width: 0.5rem; height: 0.5rem; background: #9333ea; border-radius: 9999px;"></span>
                                                    Duration: ${
                                                      workshop.duration
                                                    }
                                                </p>
                                                <p style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <span style="width: 0.5rem; height: 0.5rem; background: #9333ea; border-radius: 9999px;"></span>
                                                    ${workshop.organizer}
                                                </p>
                                                <p style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <span style="width: 0.5rem; height: 0.5rem; background: #9333ea; border-radius: 9999px;"></span>
                                                    ${workshop.year}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Certifications -->
                    <div>
                        <div class="card" style="padding: 2rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #f97316, #ef4444); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="trophy" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.5rem; background: linear-gradient(to right, #f97316, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Professional Certifications
                                </h2>
                            </div>
                            <div class="grid-3">
                                ${[
                                  {
                                    name: "Cyber Warrior",
                                    issuer: "Hackingflix Academy",
                                    icon: "🏆",
                                  },
                                  {
                                    name: "Digital Marketing Certified",
                                    issuer: "Industry Standard",
                                    icon: "📱",
                                  },
                                  {
                                    name: "Computer System Security & MANETs",
                                    issuer: "IIT Kanpur",
                                    icon: "🎓",
                                  },
                                  {
                                    name: "5G Technology",
                                    issuer: "Industry Certification",
                                    icon: "📡",
                                  },
                                  {
                                    name: "Penetration Testing",
                                    issuer: "Professional",
                                    icon: "🔒",
                                  },
                                  {
                                    name: "BurpSuite Essentials",
                                    issuer: "PortSwigger",
                                    icon: "🛠️",
                                  },
                                  {
                                    name: "Metasploit PenTesting",
                                    issuer: "Rapid7",
                                    icon: "⚔️",
                                  },
                                  {
                                    name: "Literature Search",
                                    issuer: "SPPU",
                                    icon: "📚",
                                  },
                                  {
                                    name: "Microsoft Innovative Educator",
                                    issuer: "Microsoft",
                                    icon: "💡",
                                  },
                                ]
                                  .map(
                                    (cert) => `
                                    <div style="background: linear-gradient(to right, #fff7ed, #fee2e2); padding: 1.25rem; border-radius: 1rem; border: 1px solid #fed7aa; transition: all 0.3s;">
                                        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                            <div style="font-size: 1.5rem;">${cert.icon}</div>
                                            <div>
                                                <h3 style="color: #1f2937; margin-bottom: 0.25rem; font-weight: 600;">${cert.name}</h3>
                                                <p style="font-size: 0.875rem; color: #6b7280;">${cert.issuer}</p>
                                            </div>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

  responsibilities: `
        <div class="page" id="responsibilities">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <div class="hero-badge" style="margin: 0 auto 1rem;">
                            <i data-lucide="sparkles"></i>
                            <span>Professional Contributions</span>
                        </div>
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            Responsibilities & Achievements
                        </h1>
                        <div class="section-divider"></div>
                        <p class="section-description">
                            Administrative roles, program coordination, and significant contributions to the academic and research community.
                        </p>
                    </div>

                    <!-- Responsibilities -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="shield" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Key Roles at PCU
                                </h2>
                            </div>
                            <div class="grid-2">
                                ${[
                                  "Installed AWS Cloud Lab for Cyber Security|☁️|#9333ea,#ec4899",
                                  "NAAC Files Management|📁|#3b82f6,#06b6d4",
                                  "Admission Cell Member|🎓|#10b981,#14b8a6",
                                  "College Website SEO (5+ years)|🌐|#f97316,#ef4444",
                                ]
                                  .map((item) => {
                                    const [title, icon, colors] =
                                      item.split("|");
                                    return `
                                        <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; transition: all 0.3s;">
                                            <div style="position: absolute; top: 0; right: 0; width: 6rem; height: 6rem; background: linear-gradient(to right, ${colors
                                              .split(",")
                                              .map((c) => c.trim())
                                              .join(
                                                ", "
                                              )}); border-bottom-left-radius: 9999px; opacity: 0.1;"></div>
                                            <div style="position: relative; display: flex; align-items: center; gap: 1rem;">
                                                <div style="font-size: 2.5rem;">${icon}</div>
                                                <p style="color: #1f2937; font-weight: 600;">${title}</p>
                                            </div>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Programs Coordinated -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 2rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="users" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.5rem; background: linear-gradient(to right, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Programs Coordinated
                                </h2>
                            </div>
                            <div class="grid-3">
                                ${[
                                  "Foreign Language Programs|🌍|#9333ea,#ec4899",
                                  "Cryptocurrency Training|₿|#3b82f6,#06b6d4",
                                  "Skill Development Programs|🎯|#10b981,#14b8a6",
                                ]
                                  .map((item) => {
                                    const [name, icon, colors] =
                                      item.split("|");
                                    return `
                                        <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
                                            <div style="position: absolute; inset: 0; background: linear-gradient(to right, ${colors
                                              .split(",")
                                              .map((c) => c.trim())
                                              .join(", ")}); opacity: 0;"></div>
                                            <div style="position: relative; text-align: center;">
                                                <div style="font-size: 3rem; margin-bottom: 0.75rem;">${icon}</div>
                                                <p style="color: #1f2937; font-weight: 600;">${name}</p>
                                            </div>
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Achievements -->
                    <div style="margin-bottom: 3rem;">
                        <div class="card" style="padding: 3rem;">
                            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                                <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #10b981, #14b8a6); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                    <i data-lucide="trophy" style="color: white;"></i>
                                </div>
                                <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #10b981, #14b8a6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Key Achievements
                                </h2>
                            </div>
                            <div class="grid-2">
                                ${[
                                  {
                                    title: "Cyber Security Club – CREST",
                                    description:
                                      "Initiated and helped structure PCU's official Cyber Security Club, focusing on hands-on learning, collaboration, innovation, and cybersecurity culture.",
                                    icon: "🔐",
                                    color: "#9333ea,#ec4899",
                                  },
                                  {
                                    title: "Mastercard VAPT Workshop",
                                    description:
                                      "Organized an impactful industry-level workshop with Mastercard on VAPT & Mobile Security Pentesting, enhancing student awareness of real-world security methodologies.",
                                    icon: "🛡️",
                                    color: "#3b82f6,#06b6d4",
                                  },
                                  {
                                    title: "Research Publications",
                                    description:
                                      "Published multiple research papers in international journals and conferences on cybersecurity, MANETs, and emerging technologies.",
                                    icon: "📚",
                                    color: "#10b981,#14b8a6",
                                  },
                                  {
                                    title: "Patent Holder",
                                    description:
                                      "Received patents for innovations in Wireless Sensor Networks and Mobile Payment Systems.",
                                    icon: "🏆",
                                    color: "#f97316,#ef4444",
                                  },
                                  {
                                    title: "AWS Cloud Lab Setup",
                                    description:
                                      "Successfully established and configured AWS Cloud Lab infrastructure for hands-on cybersecurity training and practical learning.",
                                    icon: "☁️",
                                    color: "#ec4899,#9333ea",
                                  },
                                  {
                                    title: "Student Mentorship",
                                    description:
                                      "Guided 100+ students through research projects, career guidance, and technical skill development in cybersecurity domain.",
                                    icon: "👥",
                                    color: "#06b6d4,#3b82f6",
                                  },
                                ]
                                  .map(
                                    (achievement) => `
                                    <div style="position: relative; overflow: hidden; background: white; border-radius: 1rem; padding: 2rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; transition: all 0.3s;">
                                        <div style="position: absolute; top: 0; right: 0; width: 8rem; height: 8rem; background: linear-gradient(to right, ${achievement.color
                                          .split(",")
                                          .map((c) => c.trim())
                                          .join(
                                            ", "
                                          )}); border-bottom-left-radius: 9999px; opacity: 0.1;"></div>
                                        <div style="position: relative;">
                                            <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
                                                <div style="width: 4rem; height: 4rem; background: linear-gradient(to right, ${achievement.color
                                                  .split(",")
                                                  .map((c) => c.trim())
                                                  .join(
                                                    ", "
                                                  )}); border-radius: 1rem; display: flex; align-items: center; justify-content: center; font-size: 1.875rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                                    ${achievement.icon}
                                                </div>
                                                <div style="flex-grow: 1;">
                                                    <h3 style="font-size: 1.25rem; color: #1f2937; margin-bottom: 0.5rem; font-weight: 600;">${
                                                      achievement.title
                                                    }</h3>
                                                </div>
                                            </div>
                                            <p style="color: #374151; line-height: 1.75;">${
                                              achievement.description
                                            }</p>
                                        </div>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>

                    <!-- Impact Summary -->
                    <div>
                        <div style="background: linear-gradient(to right, #9333ea, #ec4899, #3b82f6); border-radius: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); padding: 3rem; color: white;">
                            <div style="text-align: center; margin-bottom: 2rem;">
                                <i data-lucide="star" style="width: 3rem; height: 3rem; margin: 0 auto 1rem; display: block;"></i>
                                <h2 style="font-size: 1.875rem; margin-bottom: 1rem;">Impact Summary</h2>
                                <p style="color: #e9d5ff; font-size: 1.125rem; max-width: 32rem; margin: 0 auto; line-height: 1.75;">
                                    Through dedicated service and innovative initiatives, creating lasting impact in education, 
                                    research, and student development.
                                </p>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 2rem;">
                                <div style="text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 1rem; padding: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                                    <i data-lucide="target" style="width: 2rem; height: 2rem; margin: 0 auto 0.75rem; display: block;"></i>
                                    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">15+</div>
                                    <p style="color: #e9d5ff;">Years of Experience</p>
                                </div>
                                <div style="text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 1rem; padding: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                                    <i data-lucide="users" style="width: 2rem; height: 2rem; margin: 0 auto 0.75rem; display: block;"></i>
                                    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">100+</div>
                                    <p style="color: #e9d5ff;">Students Mentored</p>
                                </div>
                                <div style="text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 1rem; padding: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                                    <i data-lucide="award" style="width: 2rem; height: 2rem; margin: 0 auto 0.75rem; display: block;"></i>
                                    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">10+</div>
                                    <p style="color: #e9d5ff;">Major Initiatives</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

  events: `
        <div class="page" id="events">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <div class="hero-badge" style="margin: 0 auto 1rem;">
                            <i data-lucide="sparkles"></i>
                            <span>Academic Events</span>
                        </div>
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            Events & Gallery
                        </h1>
                        <div class="section-divider"></div>
                        <p class="section-description">
                            Highlights of major events, workshops, and initiatives organized to enhance student learning 
                            and industry collaboration.
                        </p>
                    </div>

                    <!-- Major Events -->
                    <div style="display: flex; flex-direction: column; gap: 2rem; margin-bottom: 3rem;">
                        <!-- Event 1 -->
                        <div class="card" style="padding: 0; overflow: hidden;">
                            <div style="display: grid; grid-template-columns: 1fr;">
                                <!-- Event Image Section -->
                                <div style="position: relative; height: 20rem; background: linear-gradient(135deg, #9333ea, #ec4899); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                    <div style="position: absolute; inset: 0; opacity: 0.2;">
                                        <div class="animate-float" style="position: absolute; top: 2.5rem; left: 2.5rem; width: 10rem; height: 10rem; background: white; border-radius: 9999px; filter: blur(64px);"></div>
                                        <div class="animate-float" style="position: absolute; bottom: 2.5rem; right: 2.5rem; width: 10rem; height: 10rem; background: white; border-radius: 9999px; filter: blur(64px); animation-delay: 2s;"></div>
                                    </div>
                                    <div style="position: relative; text-align: center; color: white; padding: 2rem;">
                                        <div style="font-size: 5rem; margin-bottom: 1rem;">🔐</div>
                                        <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); padding: 0.5rem 1rem; border-radius: 9999px;">
                                            <p style="color: white;">Club Launch</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Event Details Section -->
                                <div style="padding: 2.5rem;">
                                    <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                                        <h2 style="font-size: 1.5rem; color: #1f2937; flex-grow: 1; font-weight: 700;">Launch of Cyber Security Club – CREST</h2>
                                        <span style="background: linear-gradient(to right, #faf5ff, #fce7f3); color: #7e22ce; padding: 0.5rem 1rem; border-radius: 9999px; white-space: nowrap;">2024</span>
                                    </div>

                                    <p style="color: #374151; font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.75;">
                                        Initiated and helped structure PCU's official Cyber Security Club. The club focuses on hands-on learning, collaboration, innovation, and building a strong cybersecurity culture among students.
                                    </p>

                                    <div style="border-top: 1px solid #e5e7eb; padding-top: 1.5rem;">
                                        <h3 style="font-size: 1.125rem; color: #1f2937; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 600;">
                                            <i data-lucide="zap" style="color: #9333ea; width: 1.25rem; height: 1.25rem;"></i>
                                            Key Highlights
                                        </h3>
                                        <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                                            ${[
                                              "Hands-on learning environment",
                                              "Student collaboration platform",
                                              "Innovation in cybersecurity",
                                              "Building security awareness culture",
                                              "Industry-aligned curriculum",
                                            ]
                                              .map(
                                                (highlight) => `
                                                <div style="display: flex; align-items: flex-start; gap: 0.75rem; background: linear-gradient(to right, #faf5ff, #fce7f3); padding: 0.75rem; border-radius: 0.75rem; border: 1px solid #e9d5ff;">
                                                    <i data-lucide="award" style="color: #9333ea; margin-top: 0.25rem; width: 1rem; height: 1rem;"></i>
                                                    <p style="color: #374151; font-size: 0.875rem;">${highlight}</p>
                                                </div>
                                            `
                                              )
                                              .join("")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Event 2 -->
                        <div class="card" style="padding: 0; overflow: hidden;">
                            <div style="display: grid; grid-template-columns: 1fr;">
                                <!-- Event Image Section -->
                                <div style="position: relative; height: 20rem; background: linear-gradient(135deg, #3b82f6, #06b6d4); display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                    <div style="position: absolute; inset: 0; opacity: 0.2;">
                                        <div class="animate-float" style="position: absolute; top: 2.5rem; left: 2.5rem; width: 10rem; height: 10rem; background: white; border-radius: 9999px; filter: blur(64px);"></div>
                                        <div class="animate-float" style="position: absolute; bottom: 2.5rem; right: 2.5rem; width: 10rem; height: 10rem; background: white; border-radius: 9999px; filter: blur(64px); animation-delay: 2s;"></div>
                                    </div>
                                    <div style="position: relative; text-align: center; color: white; padding: 2rem;">
                                        <div style="font-size: 5rem; margin-bottom: 1rem;">🛡️</div>
                                        <div style="display: inline-block; background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); padding: 0.5rem 1rem; border-radius: 9999px;">
                                            <p style="color: white;">Industry Workshop</p>
                                        </div>
                                    </div>
                                </div>

                                <!-- Event Details Section -->
                                <div style="padding: 2.5rem;">
                                    <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
                                        <h2 style="font-size: 1.5rem; color: #1f2937; flex-grow: 1; font-weight: 700;">Mastercard VAPT & Mobile Security Workshop</h2>
                                        <span style="background: linear-gradient(to right, #faf5ff, #fce7f3); color: #7e22ce; padding: 0.5rem 1rem; border-radius: 9999px; white-space: nowrap;">2024</span>
                                    </div>

                                    <p style="color: #374151; font-size: 1.125rem; margin-bottom: 1.5rem; line-height: 1.75;">
                                        Organized an impactful industry-level workshop in collaboration with Mastercard and Shyamkumar Nair Sir. The workshop provided deep insights into VAPT (Vulnerability Assessment & Penetration Testing) and Mobile Security Pentesting.
                                    </p>

                                    <div style="border-top: 1px solid #e5e7eb; padding-top: 1.5rem;">
                                        <h3 style="font-size: 1.125rem; color: #1f2937; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem; font-weight: 600;">
                                            <i data-lucide="zap" style="color: #9333ea; width: 1.25rem; height: 1.25rem;"></i>
                                            Key Highlights
                                        </h3>
                                        <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                                            ${[
                                              "Industry collaboration with Mastercard",
                                              "VAPT methodologies",
                                              "Mobile Security Pentesting",
                                              "Real-world security practices",
                                              "Expert guidance from industry professionals",
                                              "Hands-on penetration testing exercises",
                                            ]
                                              .map(
                                                (highlight) => `
                                                <div style="display: flex; align-items: flex-start; gap: 0.75rem; background: linear-gradient(to right, #faf5ff, #fce7f3); padding: 0.75rem; border-radius: 0.75rem; border: 1px solid #e9d5ff;">
                                                    <i data-lucide="award" style="color: #9333ea; margin-top: 0.25rem; width: 1rem; height: 1rem;"></i>
                                                    <p style="color: #374151; font-size: 0.875rem;">${highlight}</p>
                                                </div>
                                            `
                                              )
                                              .join("")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event Gallery -->
                    <div class="card" style="padding: 3rem;">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 2rem;">
                            <div style="width: 3.5rem; height: 3.5rem; background: linear-gradient(to right, #9333ea, #ec4899); border-radius: 1rem; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                                <i data-lucide="calendar" style="color: white;"></i>
                            </div>
                            <h2 style="font-size: 1.875rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                Event Gallery
                            </h2>
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                            ${[
                              {
                                title: "CREST Club Launch",
                                color: "#9333ea,#ec4899",
                                icon: "🔐",
                              },
                              {
                                title: "VAPT Workshop",
                                color: "#3b82f6,#06b6d4",
                                icon: "🛡️",
                              },
                              {
                                title: "Student Training",
                                color: "#10b981,#14b8a6",
                                icon: "👨‍🎓",
                              },
                              {
                                title: "Industry Collaboration",
                                color: "#f97316,#ef4444",
                                icon: "🤝",
                              },
                              {
                                title: "Technical Seminar",
                                color: "#ec4899,#9333ea",
                                icon: "💡",
                              },
                              {
                                title: "Research Presentation",
                                color: "#06b6d4,#3b82f6",
                                icon: "📊",
                              },
                            ]
                              .map(
                                (item) => `
                                <div style="position: relative; overflow: hidden; border-radius: 1rem; height: 16rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); transition: all 0.3s;">
                                    <div style="position: absolute; inset: 0; background: linear-gradient(135deg, ${item.color
                                      .split(",")
                                      .map((c) => c.trim())
                                      .join(", ")});"></div>
                                    <div style="position: absolute; inset: 0; opacity: 0.2;">
                                        <div class="animate-float" style="position: absolute; top: 1.25rem; left: 1.25rem; width: 8rem; height: 8rem; background: white; border-radius: 9999px; filter: blur(48px);"></div>
                                        <div class="animate-float" style="position: absolute; bottom: 1.25rem; right: 1.25rem; width: 8rem; height: 8rem; background: white; border-radius: 9999px; filter: blur(48px); animation-delay: 1s;"></div>
                                    </div>
                                    <div style="position: relative; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: white; padding: 1.5rem;">
                                        <div style="font-size: 3.75rem; margin-bottom: 1rem; transition: transform 0.3s;">${
                                          item.icon
                                        }</div>
                                        <h3 style="font-size: 1.25rem;">${
                                          item.title
                                        }</h3>
                                        <p style="color: rgba(255, 255, 255, 0.8); font-size: 0.875rem; margin-top: 0.5rem;">Photo Placeholder</p>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>

                        <div style="margin-top: 2rem; background: linear-gradient(to right, #faf5ff, #fce7f3); border-radius: 1rem; padding: 1.5rem; border: 1px solid #e9d5ff;">
                            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                                <i data-lucide="users" style="color: #9333ea; margin-top: 0.25rem; width: 1.5rem; height: 1.5rem;"></i>
                                <div>
                                    <h3 style="color: #1f2937; margin-bottom: 0.5rem; font-weight: 600;">More Events Coming Soon</h3>
                                    <p style="color: #374151; line-height: 1.75;">
                                        Stay tuned for upcoming workshops, seminars, and collaborative events aimed at 
                                        enhancing cybersecurity education and research.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Impact Section -->
                    <div style="margin-top: 3rem;">
                        <div style="background: linear-gradient(to right, #9333ea, #ec4899, #3b82f6); border-radius: 1.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); padding: 3rem; color: white;">
                            <div style="text-align: center; margin-bottom: 2rem;">
                                <i data-lucide="target" style="width: 3rem; height: 3rem; margin: 0 auto 1rem; display: block;"></i>
                                <h2 style="font-size: 1.875rem; margin-bottom: 1rem;">Event Impact</h2>
                                <p style="color: #e9d5ff; font-size: 1.125rem; max-width: 32rem; margin: 0 auto; line-height: 1.75;">
                                    Our events and initiatives have reached hundreds of students, providing them with 
                                    industry insights and practical cybersecurity skills.
                                </p>
                            </div>
                            <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
                                <div style="text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 1rem; padding: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                                    <i data-lucide="users" style="width: 2rem; height: 2rem; margin: 0 auto 0.75rem; display: block;"></i>
                                    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">200+</div>
                                    <p style="color: #e9d5ff;">Students Participated</p>
                                </div>
                                <div style="text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 1rem; padding: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                                    <i data-lucide="shield" style="width: 2rem; height: 2rem; margin: 0 auto 0.75rem; display: block;"></i>
                                    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">5+</div>
                                    <p style="color: #e9d5ff;">Major Events</p>
                                </div>
                                <div style="text-align: center; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border-radius: 1rem; padding: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
                                    <i data-lucide="award" style="width: 2rem; height: 2rem; margin: 0 auto 0.75rem; display: block;"></i>
                                    <div style="font-size: 1.875rem; margin-bottom: 0.5rem;">100%</div>
                                    <p style="color: #e9d5ff;">Positive Feedback</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

  contact: `
        <div class="page" id="contact">
            <div class="section gradient-bg" style="padding: 3rem 0;">
                <div class="container">
                    <!-- Page Header -->
                    <div class="section-header">
                        <h1 style="font-size: 3rem; font-weight: 700; margin-bottom: 1rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                            Get In Touch
                        </h1>
                        <div class="section-divider"></div>
                        <p class="section-description">
                            Feel free to reach out for research collaboration, academic inquiries, or any professional discussions.
                        </p>
                    </div>

                    <div class="contact-grid">
                        <!-- Contact Information -->
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <!-- Contact Details Cards -->
                            <div class="card" style="padding: 2rem; transition: all 0.3s;">
                                <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Contact Information
                                </h2>
                                
                                <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                                    <div class="contact-info-card">
                                        <div class="contact-info-icon" style="background: linear-gradient(to right, #9333ea, #ec4899);">
                                            <i data-lucide="mail"></i>
                                        </div>
                                        <div>
                                            <p class="contact-info-label">Email Address</p>
                                            <a href="mailto:snehankitamajalekar@yahoo.com" class="contact-info-value" style="text-decoration: none;">
                                                snehankitamajalekar@yahoo.com
                                            </a>
                                        </div>
                                    </div>

                                    <div class="contact-info-card">
                                        <div class="contact-info-icon" style="background: linear-gradient(to right, #3b82f6, #06b6d4);">
                                            <i data-lucide="phone"></i>
                                        </div>
                                        <div>
                                            <p class="contact-info-label">Phone / WhatsApp</p>
                                            <a href="tel:7057371098" class="contact-info-value" style="text-decoration: none;">
                                                +91 7057371098
                                            </a>
                                        </div>
                                    </div>

                                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                                        <div class="contact-info-icon" style="background: linear-gradient(to right, #10b981, #14b8a6);">
                                            <i data-lucide="map-pin"></i>
                                        </div>
                                        <div>
                                            <p class="contact-info-label">Office Address</p>
                                            <p style="font-size: 1.125rem; color: #1f2937;">
                                                School of Computer Applications<br>
                                                Pimpri Chinchwad University<br>
                                                Pune, Maharashtra, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- WhatsApp Quick Contact -->
                            <div class="whatsapp-card">
                                <div class="whatsapp-header">
                                    <div class="whatsapp-icon">
                                        <i data-lucide="message-circle"></i>
                                    </div>
                                    <div>
                                        <h3 class="whatsapp-title">WhatsApp Direct</h3>
                                        <p class="whatsapp-subtitle">Get instant response</p>
                                    </div>
                                </div>
                                <p class="whatsapp-description">
                                    Send me a message on WhatsApp for quick communication and instant responses to your queries.
                                </p>
                                <button onclick="handleWhatsAppClick()" class="btn btn-whatsapp" style="width: 100%; background: white; color: #059669;">
                                    <i data-lucide="message-circle"></i>
                                    <span>Chat on WhatsApp</span>
                                </button>
                            </div>

                            <!-- Academic Profiles -->
                            <div class="card" style="padding: 2rem; transition: all 0.3s;">
                                <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    Academic & Social Profiles
                                </h2>
                                
                                <div class="social-links-grid">
                                    ${[
                                      {
                                        name: "LinkedIn",
                                        url: "https://www.linkedin.com/in/dr-snehankita-majalekar-a41b31381/",
                                        color: "#3b82f6,#2563eb",
                                      },
                                      {
                                        name: "Vidwan",
                                        url: "https://vidwan.inflibnet.ac.in/profile/659540",
                                        color: "#9333ea,#7e22ce",
                                      },
                                      {
                                        name: "ORCID",
                                        url: "https://orcid.org/0009-0007-2748-9853",
                                        color: "#10b981,#059669",
                                      },
                                      {
                                        name: "Google Scholar",
                                        url: "https://scholar.google.com/citations?user=BCErzFQAAAAJ",
                                        color: "#ef4444,#dc2626",
                                      },
                                      {
                                        name: "ResearchGate",
                                        url: "https://www.researchgate.net/profile/Snehankita-Majalekar",
                                        color: "#06b6d4,#0891b2",
                                      },
                                    ]
                                      .map(
                                        (link) => `
                                        <a href="${
                                          link.url
                                        }" target="_blank" rel="noopener noreferrer" class="social-link">
                                            <div class="social-link-content">
                                                <div class="social-link-icon" style="background: linear-gradient(to right, ${link.color
                                                  .split(",")
                                                  .map((c) => c.trim())
                                                  .join(", ")});">
                                                    <i data-lucide="external-link"></i>
                                                </div>
                                                <span style="color: #1f2937; font-weight: 600;">${
                                                  link.name
                                                }</span>
                                            </div>
                                            <div class="social-link-arrow">
                                                <i data-lucide="external-link"></i>
                                            </div>
                                        </a>
                                    `
                                      )
                                      .join("")}
                                </div>

                                <div style="margin-top: 1.5rem; padding: 1rem; background: linear-gradient(to right, #faf5ff, #fce7f3); border-radius: 1rem; border: 1px solid #e9d5ff;">
                                    <p style="color: #374151; display: flex; align-items: center; gap: 0.5rem;">
                                        <span style="color: #7e22ce;">📋 APAR ID:</span>
                                        <span style="color: #1f2937; font-weight: 600;">266-672-828-736</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Form -->
                        <div class="card" style="padding: 2rem; transition: all 0.3s;">
                            <h2 style="font-size: 1.5rem; margin-bottom: 1.5rem; background: linear-gradient(to right, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                Send a Message
                            </h2>
                            
                            <form onsubmit="handleFormSubmit(event)" style="display: flex; flex-direction: column; gap: 1.5rem;">
                                <div class="form-group">
                                    <label for="name" class="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        class="form-input"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        class="form-input"
                                    />
                                </div>

                                <div class="form-group">
                                    <label for="message" class="form-label">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Write your message here..."
                                        required
                                        class="form-textarea"
                                        rows="6"
                                    ></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary" style="width: 100%;">
                                    <i data-lucide="send"></i>
                                    Send Message
                                </button>
                            </form>

                            <div style="margin-top: 1.5rem; padding: 1rem; background: linear-gradient(to right, #eff6ff, #faf5ff); border-radius: 1rem; border: 1px solid #e9d5ff;">
                                <p style="color: #6b7280; font-size: 0.875rem;">
                                    💡 <span style="color: #7e22ce; font-weight: 600;">Note:</span> This is a demo contact form. In production, 
                                    messages would be sent to the email address or stored in a database.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
};
