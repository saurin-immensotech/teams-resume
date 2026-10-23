(function () {
  'use strict';

  // ============ ARTICLE DATA ============
  var articles = [
    {
      firstName: 'PRASHANT',
      lastName: 'BHOIR',
      role: 'Technical Specialist / Mobile & DevOps Engineer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Prashant-B.jpg',
      experience: '12+ years experience',
      about: 'Senior technical leader with strong experience across mobile development, infrastructure, database administration, DevOps, and delivery management. Capable of leading teams, planning technical execution, allocating tasks, reviewing delivery progress, and supporting client-facing technical discussions.',
      personalDetails: [
        { label: 'Experience', value: '12+ years' },
        { label: 'Best Fit', value: 'Technical leadership, delivery management, mobile, DevOps' },
        { label: 'Qualification', value: 'B.Sc. IT' }
      ],
      certification: 'Certified ScrumMaster - CSM + DevOps Expert Certification',

      bestFitTags: [
        'Technical leadership',
        'Delivery management',
        'Mobile',
        'DevOps'
      ],
      coreSkills: ['AWS', 'Sysadmin', 'DBA', 'Angular', 'Android Java', 'React Native', 'IoT / Android Things'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI automation planning', 'AI debugging', 'AI technical documentation'],
      leadershipSkills: ['Team management', 'Project planning', 'Task allocation', 'Delivery tracking', 'Client communication', 'Code review']
    },
    {
      firstName: 'TAMISRA',
      lastName: 'ADAK',
      role: 'Senior Fullstack Engineer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Tamisra.jpg',
      experience: '11+ years experience',
      about: 'Experienced fullstack developer and team lead with strong expertise in modern JavaScript applications, backend systems, frontend architecture, SQL, code review, and technical guidance. Brings senior-level ownership for complex modules and delivery quality.',
      personalDetails: [
        { label: 'Experience', value: '11+ years' },
        { label: 'Best Fit', value: 'Fullstack leadership, architecture support, code quality' },
        { label: 'Qualification', value: 'M.Sc. Computer Science' }
      ],
      certification: 'AWS Certified Developer – Associate + DevOps Foundation Certification',

      bestFitTags: [
        'Fullstack leadership',
        'Architecture support',
        'Code quality'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis', 'SQL'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI code review', 'AI debugging', 'Prompt-based development support'],
      leadershipSkills: ['Team leadership', 'Technical guidance', 'Code review', 'Task planning', 'Architecture support']
    },
    {
      firstName: 'JACKSON',
      lastName: 'DSOUZA',
      role: 'Senior Fullstack Engineer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Jackson.jpg',
      experience: '10+ years experience',
      about: 'Senior fullstack developer and team lead with experience across web applications, backend systems, WordPress, SQL, and client requirement understanding. Strong in execution planning, issue resolution, technical support, and building reliable business-facing software.',
      personalDetails: [
        { label: 'Experience', value: '10+ years' },
        { label: 'Best Fit', value: 'Fullstack development, client coordination, WordPress support' },
        { label: 'Qualification', value: 'B.E. EXTC' }
      ],
      certification: 'Professional Scrum Master',

      bestFitTags: [
        'Fullstack development',
        'Client coordination',
        'WordPress support'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis', 'SQL', 'HTML / jQuery', 'WordPress'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI debugging', 'AI requirement analysis', 'AI code support'],
      leadershipSkills: ['Team leadership', 'Requirement understanding', 'Client coordination', 'Development planning', 'Code review']
    },
    {
      firstName: 'PRASHANT',
      lastName: 'AINKAR',
      role: 'Fullstack & Mobile Application Developer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Prashant-A.jpg',
      experience: '5+ years experience',
      about: 'Fullstack and mobile developer experienced in building application modules across frontend, backend, and mobile platforms. Strong fit for product development work involving React.js, Node.js, Adonis, Angular, Laravel, React Native, and Flutter.',
      personalDetails: [
        { label: 'Experience', value: '5+ years' },
        { label: 'Best Fit', value: 'Fullstack modules, mobile support, feature development' },
        { label: 'Qualification', value: 'M.Sc. Computer Science' }
      ],
      certification: 'AWS Certified Developer – Associate',

      bestFitTags: [
        'Fullstack modules',
        'Mobile support',
        'Feature development'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis', 'Angular', 'Laravel', 'React Native', 'Flutter'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI code generation', 'AI debugging', 'AI implementation support'],
      leadershipSkills: ['Project-level leadership', 'Module ownership', 'Task coordination', 'Technical problem solving']
    },
    {
      firstName: 'VENKATESH',
      lastName: 'NADAR',
      role: 'Fullstack Developer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Venkatesh.jpg',
      experience: '4+ years experience',
      about: 'Fullstack and website developer with hands-on experience in frontend, backend, and PHP-based application work. Supports product modules, web interfaces, APIs, and business application development using modern JavaScript and traditional web technologies.',
      personalDetails: [
        { label: 'Experience', value: '4+ years' },
        { label: 'Best Fit', value: 'Fullstack development, web modules, backend support' },
        { label: 'Qualification', value: 'B.Sc. IT' }
      ],
      certification: 'Microsoft Certified: Azure Developer Associate',

      bestFitTags: [
        'Fullstack development',
        'Web modules',
        'Backend support'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis', 'Angular', 'Laravel', 'PHP', 'CodeIgniter'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI debugging', 'AI code improvement', 'AI documentation support'],
      leadershipSkills: ['Project-level leadership', 'Module ownership', 'Task coordination', 'Implementation planning']
    },
    {
      firstName: 'TALHA',
      lastName: 'KHAN',
      role: 'Fullstack Developer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Talha.jpg',
      experience: '4+ years experience',
      about: 'Fullstack developer focused on JavaScript-based product development. Supports frontend and backend implementation, feature development, bug fixing, and AI-assisted delivery workflows across React.js, Node.js, and Adonis-based applications.',
      personalDetails: [
        { label: 'Experience', value: '4+ years' },
        { label: 'Best Fit', value: 'Fullstack development, feature work, issue fixing' },
        { label: 'Qualification', value: 'B.E. Computer' }
      ],
      certification: 'Meta Front-End Developer Certificate',

      bestFitTags: [
        'Fullstack development',
        'Feature work',
        'Issue fixing'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI code generation', 'AI debugging', 'AI development support']
    },
    {
      firstName: 'RENUKA',
      lastName: 'SHINDE',
      role: 'Fullstack Developer / Application Security Specialist',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Renuka.jpg',
      experience: '4+ years experience',
      about: 'Fullstack developer with experience in IT development and modern JavaScript application work. Supports feature implementation, debugging, frontend/backend tasks, and AI-assisted development workflows.',
      personalDetails: [
        { label: 'Experience', value: '4+ years' },
        { label: 'Best Fit', value: 'Fullstack support, feature implementation, issue fixing' },
        { label: 'Qualification', value: 'B.E. EXTC' }
      ],
      certification: 'Certified Cybersecurity Professional - CEH Security',

      bestFitTags: [
        'Fullstack support',
        'Feature implementation',
        'Issue fixing'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI debugging', 'AI code improvement', 'AI implementation support']
    },
    {
      firstName: 'KAUSHIK',
      lastName: 'SHIGVAN',
      role: 'Fullstack Developer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Kaushik.jpg',
      experience: '2+ years experience',
      about: 'Beginner fullstack developer building experience in JavaScript / TypeScript, React.js, Node.js, and Adonis. Supports basic development tasks, issue fixing, and AI-assisted coding under senior team guidance.',
      personalDetails: [
        { label: 'Experience', value: '1.5+ years' },
        { label: 'Best Fit', value: 'Basic fullstack tasks under senior guidance' },
        { label: 'Qualification', value: 'B.E. Computer' }
      ],
      certification: 'AWS Certified Developer – Associate',

      bestFitTags: [
        'Basic fullstack tasks',
        'Junior implementation',
        'Learning support'
      ],
      coreSkills: ['JavaScript / TypeScript', 'React.js', 'Node.js', 'Adonis'],
      hasExpert: false,
      aiSkills: ['AI-assisted development', 'AI code support', 'AI debugging basics']
    },
    {
      firstName: 'TUSHAR',
      lastName: 'KAMBLE',
      role: 'Fullstack Developer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Tushar.jpg',
      experience: '4+ years experience',
      about: 'Frontend-focused fullstack developer with strong experience in UI implementation, website pages, responsive interfaces, and product screen improvements. Helps convert design requirements into clean frontend output using React.js, JavaScript / TypeScript, HTML, and jQuery.',
      personalDetails: [
        { label: 'Experience', value: '4+ years' },
        { label: 'Best Fit', value: 'UI pages, frontend execution, website interfaces, design-to-code support' },
        { label: 'Qualification', value: 'B.Sc. IT' }
      ],
      certification: 'Node.js Application Developer Certification - OpenJS',

      bestFitTags: [
        'UI pages',
        'Frontend execution',
        'Website interfaces',
        'Design-to-code support'
      ],
      coreSkills: ['React.js', 'JavaScript / TypeScript', 'HTML', 'jQuery', 'Frontend Development', 'UI Implementation', 'Responsive Pages'],
      hasExpert: true,
      aiSkills: ['AI-assisted development', 'AI frontend support', 'AI debugging', 'AI code improvement']
    },
    {
      firstName: 'SAURIN',
      lastName: 'PAKHAD',
      role: 'Frontend Developer',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Saurin.jpg',
      experience: '6+ years experience',
      about: 'Expert WordPress and website developer with strong experience in CMS-based websites, landing pages, WordPress customization, Divi, Elementor, WooCommerce setup, product pages, and website updates. Suitable for business websites, marketing pages, eCommerce support, and content-driven website delivery.',
      personalDetails: [
        { label: 'Experience', value: '6+ years' },
        { label: 'Best Fit', value: 'WordPress websites, WooCommerce stores, CMS pages, landing pages' },
        { label: 'Qualification', value: 'B.Com' }
      ],
      certification: 'WordPress Developer Certification',

      bestFitTags: [
        'WordPress websites',
        'WooCommerce stores',
        'CMS pages',
        'Landing pages'
      ],
      coreSkills: ['WordPress', 'WooCommerce', 'Divi', 'Elementor', 'HTML', 'jQuery', 'CMS Pages', 'Landing Pages'],
      hasExpert: true,
      aiSkills: ['AI-assisted website development', 'AI content support', 'AI debugging', 'AI page improvement'],
      leadershipSkills: ['Store Setup', 'Product Pages', 'Checkout Pages', 'Plugin Configuration', 'Content Updates']
    },
    {
      firstName: 'VISHAL',
      lastName: 'SHIGVAN',
      role: 'UI/UX Design Specialist',
      image: 'https://immensotech.com/wp-content/uploads/2026/05/Vishal.jpg',
      experience: '18+ years experience',
      about: 'Expert designer and design lead with strong experience in UI design, graphic design, creative design, visual direction, and visual support for digital products and marketing assets. Supports design ideation, interface presentation, brand-aligned visuals, and polished visual communication.',
      personalDetails: [
        { label: 'Experience', value: '18+ years' },
        { label: 'Best Fit', value: 'UI design, graphic design, creative direction' },
        { label: 'Qualification', value: 'MBA IT + Diploma in multimedia + BCom' }
      ],
      certification: 'PMP certification + Google UX Design Certificate + Figma UI/UX Masterclass + Human Computer Interaction Fundamentals',

      bestFitTags: [
        'UI design',
        'Graphic design',
        'Creative direction'
      ],
      coreSkills: ['UI Design', 'Graphic Design', 'Creative Direction', 'Visual Design'],
      hasExpert: true,
      aiSkills: ['UI Design', 'UX Design', 'Prototyping', 'Frontend Understanding', 'Collaboration Tools'],
      leadershipSkills: ['User Interface Design', 'User Experience Design', 'Mobile App Design', 'Web Application Design', 'Dashboard Design', 'Responsive Design', 'Design Systems', 'User Research', 'Wireframing & Prototyping']
    }
  ];

  var technicalSkillsByName = {
    'PRASHANT AINKAR': {
      frontend: 'React.js, Next.js, Flutter, Angular, HTML5, CSS3, JavaScript, Bootstrap, REST API Integration',
      backend: 'Node.js, Express.js, Adonis.js, Python, Django, TypeScript, Laravel, PHP, RESTful API Development',
      database: 'MySQL, Firebase',
      tool: 'Grafana, JasperReports, n8n, Git/Github, Docker, Codex, Co-pilot, OpenCode, Insomnia'
    },
    'TALHA KHAN': {
      frontend: 'React.js, JavaScript, Flutter',
      backend: 'Node.js, AdonisJS, REST APIs',
      database: 'MySQL',
      tool: 'Git/GitHub, Docker, Insomnia, Hardware & Software Troubleshooting'
    },
    'TUSHAR KAMBLE': {
      frontend: 'HTML5, CSS3, JS, Wordpress, React.js',
      backend: 'Express.js, Adonis.js, TypeScript',
      database: 'MySQL',
      tool: 'Git/GitHub, Docker, n8n, AWS S3'
    },
    'KAUSHIK SHIGVAN': {
      frontend: 'HTML5, JS, React JS',
      backend: 'Node.js, Adonis.js',
      database: 'Mysql',
      tool: 'Git, Github, codex, copilot'
    },
    'SAURIN PAKHAD': {
      frontend: 'Wordpress, Woocommerec, Webflow, HTML5, CSS3, JS, React.js, Tailwind css',
      backend: '',
      database: '',
      tool: 'Git, Github, OpenCode, Figma'
    },
    'VISHAL SHIGVAN': {
      frontend: 'HTML5, CSS3, Responsive Design, Tailwind CSS',
      backend: '',
      database: '',
      tool: 'Figma, Adobe XD, Photoshop, Illustrator, User Research, Wireframing, User Flow, Information Architecture, Interactive Prototypes, Micro Interactions, Design Systems, Jira, Notion, Slack, Trello'
    },
    'RENUKA SHINDE': {
      frontend: 'React.js, JavaScript, Material UI, HTML, CSS, Axios, Formik, Yup',
      backend: 'Node.js, AdonisJS, Express.js, REST APIs, TypeScript, Core Java',
      database: 'MySQL',
      tool: 'Git, GitHub, GitLab, Postman, Insomnia, N8N, Docker'
    },
    'PRASHANT BHOIR': {
      frontend: 'React.js, JavaScript, Flutter, Angular',
      backend: 'Node.js, AdonisJS, Express.js, REST APIs',
      database: 'MySQL, Firebase',
      tool: 'Git, GitHub, GitLab, Opencode'
    },
    "JACKSON DSOUZA": {
      frontend: 'HTML5, CSS3, Bootstrap, JavaScript, jQuery, WordPress, Tailwind CSS, Angular, React.js, TypeScript',
      backend: 'Node.js, Express.js, AdonisJS',
      database: 'MySQL',
      tool: 'VS Code, Git, GitHub, Insomnia, cPanel, Docker, GitHub Copilot, Codex, Netlify'
    },
    'TAMISRA ADAK': {
      frontend: 'React + Next.js, JavaScript, Angular, Vue.js',
      backend: 'Express.js, Node JS, Adonis JS, TypeScript, JavaScript',
      database: 'mysql, postgres sql',
      tool: 'GitLab/GitHub, Forgejo, Chatgpt, Gemini, Github copilot, Codex, opencode'
    },
    'VENKATESH NADAR': {
      frontend: 'Angular, React.js, Flutter, JavaScript, TypeScript, Tailwind CSS',
      backend: 'PHP, Laravel, Node.js, Express.js, Adonis.js, TypeScript',
      database: 'MySQL, Firestore, OpenSearch',
      tool: 'JasperReports, JasperServer, n8n, Git/GitLab/Github, Docker, Codex, Co-pilot, OpenCode, Firebase'
    }
  };

  // ============ BUILD ARTICLE CARDS ============
  var grid = document.getElementById('lovableArticlesGrid');
  if (grid) {
    articles.forEach(function (a, index) {
      var initials = a.firstName.charAt(0) + a.lastName.charAt(0);
      var avatarHtml = a.image
        ? '<img class="lovable-article-avatar-img" src="' + a.image + '" alt="' + a.firstName + ' ' + a.lastName + '" loading="lazy" />'
        : '<div class="lovable-article-avatar-img lovable-article-avatar-init" style="background:linear-gradient(135deg,#1c1a3b,#36336b)"><span>' + initials + '</span></div>';

      // Extract qualification and best fit from personalDetails
      var qualification = '';
      var bestFit = '';
      a.personalDetails.forEach(function (d) {
        if (d.label === 'Qualification') {
          qualification = d.value;
        }
        if (d.label === 'Best Fit') {
          bestFit = d.value;
        }
      });

      function buildValueTags(value) {
        if (!value) return '';
        function collapseSpaces(str) {
          return str.split(' ').filter(function (part) { return part; }).join(' ');
        }

        function trimEdgeParens(str) {
          var out = str;
          while (out.charAt(0) === '(') out = out.slice(1);
          while (out.charAt(out.length - 1) === ')') out = out.slice(0, -1);
          return out;
        }

        function splitByDelimiters(str) {
          var parts = [];
          var current = '';
          var i;
          for (i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (ch === ',' || ch === '+' || ch === '/') {
              if (current) parts.push(current);
              current = '';
            } else {
              current += ch;
            }
          }
          if (current) parts.push(current);
          return parts;
        }

        function normalizeSkill(item) {
          var s = collapseSpaces(item).trim();
          if (!s || s === '(' || s === ')') return '';
          s = trimEdgeParens(s).trim();
          // Remove ES version marker like "(ES6+)" without regex, safer for WordPress paste/minify.
          var openIdx = s.indexOf('(');
          var closeIdx = s.indexOf(')', openIdx + 1);
          if (openIdx !== -1 && closeIdx !== -1) {
            var inside = s.slice(openIdx + 1, closeIdx).split(' ').join('').toLowerCase();
            if (inside.indexOf('es') === 0) {
              s = collapseSpaces((s.slice(0, openIdx) + ' ' + s.slice(closeIdx + 1)).trim());
            }
          }
          if (!s) return '';

          var key = s.toLowerCase();
          var map = {
            'git': 'Git',
            'react': 'React.js',
            'react js': 'React.js',
            'reactjs': 'React.js',
            'react.js': 'React.js',
            'js': 'JavaScript',
            'javascript': 'JavaScript',
            'node js': 'Node.js',
            'nodejs': 'Node.js',
            'node.js': 'Node.js',
            'adonisjs': 'AdonisJS',
            'adonis js': 'AdonisJS',
            'adonis.js': 'AdonisJS',
            'expressjs': 'Express.js',
            'express js': 'Express.js',
            'express.js': 'Express.js',
            'mysql': 'MySQL',
            'wordpress': 'WordPress',
            'woocommerec': 'WooCommerce',
            'woocommerce': 'WooCommerce',
            'tailwind css': 'Tailwind CSS',
            'tailwindcss': 'Tailwind CSS',
            'github': 'GitHub',
            'gitlab': 'GitLab',
            'opencode': 'OpenCode',
            'chatgpt': 'ChatGPT',
            'copilot': 'Copilot',
            'github copilot': 'GitHub Copilot',
            'next js': 'Next.js',
            'next.js': 'Next.js',
            'vue js': 'Vue.js',
            'vue.js': 'Vue.js',
            'typescript': 'TypeScript',
            'postgres sql': 'PostgreSQL',
            'postgresql': 'PostgreSQL',
            'rest api': 'REST API',
            'rest apis': 'REST API',
            'restful api development': 'REST API Development'
          };
          return map[key] || s;
        }

        var items = splitByDelimiters(value)
          .map(normalizeSkill)
          .filter(Boolean);
        var uniqueItems = [];
        var seen = {};
        items.forEach(function (item) {
          var k = item.toLowerCase();
          if (!seen[k]) {
            seen[k] = true;
            uniqueItems.push(item);
          }
        });
        if (!uniqueItems.length) return '';
        var tags = '';
        uniqueItems.forEach(function (item) {
          tags += '<span class="lovable-skill-tag">' + item + '</span>';
        });
        return tags;
      }

      // Convert bestFit string to array of tags
      var bestFitTags = '';
      if (bestFit) {
        var bestFitArray = bestFit.split(',').map(function (item) {
          return item.trim();
        });
        bestFitArray.forEach(function (s) {
          bestFitTags += '<span class="lovable-skill-tag">' + s + '</span>';
        });
      }

      var memberKey = (a.firstName + ' ' + a.lastName).replace(/'/g, '').toUpperCase();
      var tech = technicalSkillsByName[memberKey] || { frontend: '', backend: '', database: '', tool: '' };
      var frontendTags = buildValueTags(tech.frontend);
      var backendTags = buildValueTags(tech.backend);
      var databaseTags = buildValueTags(tech.database);
      var toolTags = buildValueTags(tech.tool);

      var aiSkillTags = '';
      a.aiSkills.forEach(function (s) {
        aiSkillTags += '<span class="lovable-skill-tag">' + s + '</span>';
      });

      var leadershipHtml = '';
      if (a.leadershipSkills && a.leadershipSkills.length > 0) {
        var tags = '';
        a.leadershipSkills.forEach(function (s) {
          tags += '<span class="lovable-skill-tag">' + s + '</span>';
        });
        leadershipHtml = '<div class="lovable-article-section"><h4 class="lovable-article-section-title">LEADERSHIP SKILLS</h4><div class="lovable-article-section-body lovable-skills-list">' + tags + '</div></div>';
      }

      var experienceStrong = a.experience || '';
      var experienceLight = '';
      var rawExperience = (a.experience || '').trim();
      if (rawExperience) {
        var splitIndex = 0;
        while (splitIndex < rawExperience.length) {
          var ch = rawExperience.charAt(splitIndex);
          if ((ch >= '0' && ch <= '9') || ch === '.' || ch === '+') {
            splitIndex++;
          } else {
            break;
          }
        }
        experienceStrong = rawExperience.slice(0, splitIndex).trim() || rawExperience;
        experienceLight = rawExperience.slice(splitIndex).trim();
      }

      var html =
        '<article class="lovable-article-card" data-article="' + a.firstName + '" data-color-index="' + index + '">' +
        '<div class="lovable-article-top-section">' +
        '<div class="lovable-article-avatar">' + avatarHtml + '</div>' +
        '<div class="lovable-article-download-wrapper">' +
        '<span class="lovable-article-download-text">Download Resume</span>' +
        '<button class="lovable-action-btn lovable-article-download" aria-label="Download PDF">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#505aa0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' +
        '</button>' +
        '</div>' +
        '</div>' +
        '<div class="lovable-article-info">' +
        '<div class="lovable-article-info-top">' +
        '<h3 class="lovable-article-name">' + a.firstName + ' ' + a.lastName + '</h3>' +
        '</div>' +
        '<div class="expirence-role">' +
        '<p class="lovable-article-subtitle">' + a.role + '</p>' +
        '<span class="lovable-experience-badge"><span class="lovable-experience-number">' + experienceStrong + '</span>' +
        (experienceLight ? ' <span class="lovable-experience-label">' + experienceLight + '</span>' : '') +
        '</span>' +
        '</div>' +
        '</div>' +
        '<div class="lovable-article-content-card">' +
        '<div class="lovable-article-content-divider"></div>' +
        '<p class="lovable-article-about">' + a.about + '</p>' +
        '<div class="lovable-article-section">' +

        '<h4 class="lovable-article-section-title">EDUCATION</h4>' +

        '<div class="lovable-article-section-body lovable-skills-list lovable-education-value">' +
        buildValueTags(qualification) +
        '</div>' +

        (a.certification
          ? '<div class="lovable-certification-block">' +

          '<div class="lovable-certification-subtitle">' +
          'OTHER CERTIFICATION' +
          '</div>' +

          '<div class="lovable-article-section-body lovable-skills-list lovable-education-value">' +
          buildValueTags(a.certification) +
          '</div>' +

          '</div>'
          : '') +

        '</div>' +
        '<div class="lovable-article-collapsible">' +
        /* (bestFitTags ? '<div class="lovable-article-section">' +
          '<h4 class="lovable-article-section-title">BEST FIT</h4>' +
          '<div class="lovable-article-section-body lovable-skills-list">' + bestFitTags + '</div>' +
          '</div>' : '') + */
        '' +
        (frontendTags ? '<div class="lovable-article-section">' +
          '<h4 class="lovable-article-section-title">FRONTEND</h4>' +
          '<div class="lovable-article-section-body lovable-skills-list">' + frontendTags + '</div>' +
          '</div>' : '') +
        (backendTags ? '<div class="lovable-article-section">' +
          '<h4 class="lovable-article-section-title">BACKEND</h4>' +
          '<div class="lovable-article-section-body lovable-skills-list">' + backendTags + '</div>' +
          '</div>' : '') +
        (databaseTags ? '<div class="lovable-article-section">' +
          '<h4 class="lovable-article-section-title">DATABASE</h4>' +
          '<div class="lovable-article-section-body lovable-skills-list">' + databaseTags + '</div>' +
          '</div>' : '') +
        (toolTags ? '<div class="lovable-article-section">' +
          '<h4 class="lovable-article-section-title">TOOL</h4>' +
          '<div class="lovable-article-section-body lovable-skills-list">' + toolTags + '</div>' +
          '</div>' : '') +
        '<div class="lovable-article-section">' +
        '<h4 class="lovable-article-section-title">AI SKILLS</h4>' +
        '<div class="lovable-article-section-body lovable-skills-list">' + aiSkillTags + '</div>' +
        '</div>' +
        leadershipHtml +
        '</div>' +
        '<button class="lovable-article-expand" aria-label="Expand">Read more <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg></button>' +
        '</div>' +
        '</article>';

      grid.insertAdjacentHTML('beforeend', html);
    });
  }

  // ============ NAV SCROLL STATE ============
  var nav = document.getElementById('lovableNav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 20) nav.classList.add('lovable-scrolled');
    else nav.classList.remove('lovable-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ============ FOOTER YEAR ============
  var y = document.getElementById('lovableYear');
  if (y) y.textContent = new Date().getFullYear();

  // ============ SMOOTH ANCHOR SCROLL ============
  var heroScrollBtn = document.querySelector('.lovable-hero-scroll');

  function updateHeroScrollButtonVisibility() {
    if (!heroScrollBtn) return;
    var homeSection = document.getElementById('home');
    if (!homeSection) return;
    var homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    if (window.scrollY + 20 < homeBottom) {
      heroScrollBtn.classList.remove('lovable-hidden');
    } else {
      heroScrollBtn.classList.add('lovable-hidden');
    }
  }

  function smoothScrollTo(targetY, duration) {
    var startY = window.scrollY || window.pageYOffset;
    var diff = targetY - startY;
    if (Math.abs(diff) < 2) return;
    var startTime = performance.now();
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    function step(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + diff * eased);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.querySelectorAll('.lovable-wp-page a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();

      // Hide hero down-arrow immediately after click (desktop hero only).
      if (a.classList.contains('lovable-hero-scroll')) {
        a.classList.add('lovable-hidden');
      }

      // Keep "Our Team" pinned to the top on hero-arrow click.
      var offset = (id === '#work') ? 0 : 60;
      var targetY = target.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(targetY, 700);
    });
  });
  window.addEventListener('scroll', updateHeroScrollButtonVisibility, { passive: true });
  updateHeroScrollButtonVisibility();

  // ============ SCROLL REVEAL ============
  function setupReveal() {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    var revealEls = document.querySelectorAll(
      '.lovable-project-card, .lovable-stack-card, .lovable-meta-card, .lovable-article-card,' +
      '.lovable-section-head h2, .lovable-section-head p, .lovable-contact-inner h2, .lovable-contact-inner .lovable-eyebrow,' +
      '.lovable-hero-copy-main .lovable-hero-desc, .lovable-reveal-delay-1, .lovable-reveal-delay-2'
    );
    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'opacity .9s ease, transform .9s cubic-bezier(0.19,1,0.22,1)';
    });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
    }
  }

  // ============ ARTICLE EXPAND/COLLAPSE (mobile) ============
  function setupExpand() {
    function setOpenHeight(collapsible) {
      var targetHeight = collapsible.scrollHeight;
      collapsible.style.setProperty('--lovable-collapsible-max', targetHeight + 'px');
      collapsible.style.maxHeight = targetHeight + 'px';
    }

    document.querySelectorAll('.lovable-article-expand').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.lovable-article-card');
        if (!card) return;
        var collapsible = card.querySelector('.lovable-article-collapsible');
        if (!collapsible) return;
        var isOpen = collapsible.classList.contains('lovable-open');
        if (isOpen) {
          collapsible.style.maxHeight = '0px';
          collapsible.classList.remove('lovable-open');
          btn.classList.remove('lovable-expanded');
        } else {
          collapsible.classList.add('lovable-open');
          setOpenHeight(collapsible);
          btn.classList.add('lovable-expanded');
        }
      });
    });

    window.addEventListener('resize', function () {
      document.querySelectorAll('.lovable-article-collapsible.lovable-open').forEach(function (collapsible) {
        setOpenHeight(collapsible);
      });
    });
  }

  // ============ PDF DOWNLOAD ============
  function setupDownload() {
    document.querySelectorAll('.lovable-article-download').forEach(function (btn) {

      btn.addEventListener('click', async function () {

        var card = btn.closest('.lovable-article-card');
        if (!card) return;
        var collapsible = card.querySelector('.lovable-article-collapsible');
        var wasCollapsed = false;
        if (collapsible && !collapsible.classList.contains('lovable-open')) {
          wasCollapsed = true;
          collapsible.classList.add('lovable-open');
          collapsible.style.maxHeight = collapsible.scrollHeight + 'px';
        }

        // ================= GET DATA =================
        var name = card.querySelector('.lovable-article-name')?.textContent || '';
        var role = card.querySelector('.lovable-article-subtitle')?.textContent || '';
        var exp = card.querySelector('.lovable-experience-badge')?.textContent || '';
        var about = card.querySelector('.lovable-article-about')?.textContent || '';

        var avatar = card.querySelector('.lovable-article-avatar-img');
        var avatarSrc = avatar ? avatar.src : '';

        // Personal Details
        var detailsHTML = '';
        card.querySelectorAll('.lovable-article-detail-row').forEach(function (row) {

          var label = row.querySelector('.lovable-detail-label')?.textContent || '';
          var value = row.querySelector('.lovable-detail-value')?.textContent || '';

          detailsHTML += `
          <div class="pdf-detail-row">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `;
        });

        // Skill tags helper
        function getTags(sectionTitle) {

          var tagsHTML = '';

          card.querySelectorAll('.lovable-article-section').forEach(function (section) {

            var title = section.querySelector('.lovable-article-section-title');

            if (title && title.textContent.trim() === sectionTitle) {

              section.querySelectorAll('.lovable-skill-tag').forEach(function (tag) {

                tagsHTML += `<span class="pdf-tag">${tag.textContent}</span>`;
              });
            }
          });

          return tagsHTML;
        }

        var frontendSkills = getTags('FRONTEND');
        var backendSkills = getTags('BACKEND');
        var databaseSkills = getTags('DATABASE');
        var toolSkills = getTags('TOOL');
        var aiSkills = getTags('AI SKILLS');
        var leadershipSkills = getTags('LEADERSHIP SKILLS');

        // ================= CREATE PDF ELEMENT =================
        var pdfWrapper = document.createElement('div');

        pdfWrapper.innerHTML = `
  <div class="pdf-resume">

    <div class="pdf-header">

      <div class="pdf-header-content">
        <h1>${name}</h1>
        <p class="pdf-role">${role}</p>
        <div class="pdf-exp">${exp}</div>
      </div>

    </div>

    <div class="pdf-section">
      <h2>About</h2>
      <p>${about}</p>
    </div>

    ${detailsHTML
            ? `
          <div class="pdf-section">
            <h2>Personal Details</h2>
            ${detailsHTML}
          </div>
        `
            : ''
          }

    <div class="pdf-section">

      <h2>Education</h2>

      ${(() => {

            let qualificationHTML = '';
            let certificationHTML = '';

            card.querySelectorAll('.lovable-article-section').forEach(function (section) {

              var title = section.querySelector('.lovable-article-section-title');

              if (title && title.textContent.trim() === 'EDUCATION') {

                var values = section.querySelectorAll('.lovable-education-value');

                if (values[0]) {

                  qualificationHTML = `
                <div class="pdf-education-card">
                  <div class="pdf-education-label">
                    Qualification
                  </div>

                  <div class="pdf-education-text">
                    ${values[0].textContent}
                  </div>
                </div>
              `;
                }

                if (values[1]) {

                  certificationHTML = `
                <div class="pdf-education-card">
                  <div class="pdf-education-label">
                    Other Certification
                  </div>

                  <div class="pdf-education-text">
                    ${values[1].textContent}
                  </div>
                </div>
              `;
                }
              }
            });

            return qualificationHTML + certificationHTML;

          })()}

    </div>

    ${(() => {

            let bestFitTags = '';

            card.querySelectorAll('.lovable-article-section').forEach(function (section) {

              var title = section.querySelector('.lovable-article-section-title');

              if (title && title.textContent.trim() === 'BEST FIT') {

                section.querySelectorAll('.lovable-skill-tag').forEach(function (tag) {

                  bestFitTags += `<span class="pdf-tag">${tag.textContent}</span>`;

                });
              }
            });

            if (!bestFitTags) return '';

            return `
        <div class="pdf-section">
          <h2>Best Fit</h2>

          <div class="pdf-tags">
            ${bestFitTags}
          </div>
        </div>
      `;

          })()}

    ${frontendSkills
            ? `
          <div class="pdf-section">
            <h2>Frontend</h2>

            <div class="pdf-tags">
              ${frontendSkills}
            </div>
          </div>
        `
            : ''
          }

    ${backendSkills
            ? `
          <div class="pdf-section">
            <h2>Backend</h2>

            <div class="pdf-tags">
              ${backendSkills}
            </div>
          </div>
        `
            : ''
          }

    ${databaseSkills
            ? `
          <div class="pdf-section">
            <h2>Database</h2>

            <div class="pdf-tags">
              ${databaseSkills}
            </div>
          </div>
        `
            : ''
          }

    ${toolSkills
            ? `
          <div class="pdf-section">
            <h2>Tool</h2>

            <div class="pdf-tags">
              ${toolSkills}
            </div>
          </div>
        `
            : ''
          }

    ${aiSkills
            ? `
          <div class="pdf-section">
            <h2>AI Skills</h2>

            <div class="pdf-tags">
              ${aiSkills}
            </div>
          </div>
        `
            : ''
          }

    ${leadershipSkills
            ? `
          <div class="pdf-section">
            <h2>Leadership Skills</h2>

            <div class="pdf-tags">
              ${leadershipSkills}
            </div>
          </div>
        `
            : ''
          }

  </div>
`;

        document.body.appendChild(pdfWrapper);

        // ================= PDF OPTIONS =================
        var opt = {

          margin: [8, 8, 8, 8],

          filename: name.replace(/\s+/g, '_') + '_Profile.pdf',

          image: {
            type: 'jpeg',
            quality: 1
          },

          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',

            scrollX: 0,
            scrollY: 0,

            windowHeight: document.body.scrollHeight
          },

          jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
          },

          pagebreak: {
            mode: ['css', 'legacy'],
            avoid: [
              '.pdf-section',
              '.pdf-detail-row',
              '.pdf-tags',
              '.pdf-header'
            ]
          }
        };

        // ================= GENERATE =================
        try {

          if (typeof html2pdf === 'undefined') {
            console.error('html2pdf library not loaded');
            return;
          }

          await html2pdf()
            .set(opt)
            .from(pdfWrapper)
            .save();

        } catch (err) {

          console.error('PDF Error:', err);

        }

        // cleanup
        document.body.removeChild(pdfWrapper);
        if (collapsible && wasCollapsed) {
          collapsible.style.maxHeight = '0px';
          collapsible.classList.remove('lovable-open');
        }

      });

    });
  }

  // Initialize everything after cards are rendered
  setupReveal();
  setupExpand();
  setupDownload();
})();
