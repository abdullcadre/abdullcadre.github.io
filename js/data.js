window.PORTFOLIO_DATA = {
  "meta": {
    "defaultLang": "en",
    "availableLangs": ["pt", "en"]
  },

  "en": {
    "brandName": "Abdul Cadre",
    "brandLocation": "Mozambique",

    "nav": [
      { "id": "hero",      "label": "Home",      "icon": "house" },
      { "id": "skills",    "label": "Skills",    "icon": "layers" },
      { "id": "projects",  "label": "Projects",  "icon": "folder-git-2" },
      { "id": "education", "label": "Education", "icon": "graduation-cap" },
      { "id": "contact",   "label": "Contact",   "icon": "mail" }
    ],

    "actions": {
      "contact": "Get in touch",
      "downloadCV": "Download CV",
      "cvUrl": "https://drive.google.com/file/d/1k19gc77YrECmLnP6qAKEe-o22ovPdIRk/view?usp=drive_link"
    },

    "hero": {
      "name": "Abdul Cadre",
      "subtitle": "Front-end and Back-end Developer",
      "inspector": {
        "location": "Moçambique",
        "email": "abdullcadre@gmail.com",
        "stack": ["Laravel", "Python FastAPI", ".NET", "UI/UX", "Figma", "GitHub"],
        "university": "Licungo University",
        "year": "2021"
      }
    },

    "skills": {
      "tag": "Technical skills",
      "title": "Skills & Specialties",
      "subtitle": "Competencies developed in academic and professional contexts.",
      "list": [
        {"icon": "smartphone", "tag": "Mobile", "title": "Mobile Dev", "description": "Mobile applications focused on usability and performance.", "certificate": {"image": "certificates/google-associate-android-developer-java-2019.jpg", "title": "Associate Android Developer (Java)", "issuer": "Google Developers", "date": "1 Aug 2019 – 1 Aug 2022"}},
        {"icon": "palette", "tag": "UI/UX", "title": "UI/UX", "description": "Clear, consistent interfaces designed around the user.", "certificate": {"image": "certificates/figma-ui-ux-design-essentials-udemy-2023.jpg", "title": "Figma UI UX Design Essentials", "issuer": "Udemy", "date": "11 Mar 2023"}},
        {"icon": "github", "tag": "Tools", "title": "GitHub", "description": "Version control with Git and collaboration on projects.", "certificate": {"image": "certificates/git-github-dio-2023.jpg", "title": "Introdução ao Git e ao GitHub", "issuer": "Digital Innovation One (DIO)", "date": "14 Nov 2023"}},
        {"icon": "square-kanban", "tag": "Scrum", "title": "Agile Projects", "description": "Agile project management with Scrum.", "certificate": {"image": "certificates/scrum-projectos-ageis-dio-2022.jpg", "title": "Projetos ágeis com SCRUM", "issuer": "Digital Innovation One (DIO)", "date": "27 Aug 2022"}},
        {"icon": "code-xml", "tag": "Code", "title": "C, C# & Java", "description": "Programming knowledge in C, C# and Java."},
        {"icon": "image", "tag": "Design", "title": "Photoshop", "description": "Image editing and graphic design with Photoshop."},
        {"icon": "users", "tag": "Training", "title": "ICT Training", "description": "Training in information and communication technologies."},
        {"icon": "git-merge", "tag": "Software", "title": "Software Engineering", "description": "Planning, developing and maintaining software systems.", "certificate": {"image": "certificates/licenciatura-informatica-unilicungo-2021-pagina-1.jpg", "pages": ["certificates/licenciatura-informatica-unilicungo-2021-pagina-1.jpg", "certificates/licenciatura-informatica-unilicungo-2021-pagina-2.jpg"], "title": "BSc in Computer Science · Systems Development Engineering", "issuer": "Licungo University", "date": "2021"}},
        {"icon": "wrench", "tag": "Support", "title": "Maintenance", "description": "Diagnostics, repair and optimization of systems and equipment."}
      ]
    },

    "projects": {
      "tag": "Portfolio",
      "title": "Selected Projects",
      "subtitle": "Mobile and full-stack applications built for real-world use, including apps published on Google Play.",
      "b4xLink": "View all my work",
      "b4xUrl": "https://www.b4x.com/android/forum/forums/share-your-creations.33/?starter_id=115614",
      "storeLink": "View my Google Play developer profile",
      "storeUrl": "https://play.google.com/store/apps/dev?id=8265678583658672495&hl=pt",
      "list": [
        { "icon": "bot", "tag": "Education", "title": "ABC Moz", "description": "Educational literacy app for learners in Mozambique, published on Google Play.", "tech": "Android app", "status": "Google Play", "storeUrl": "https://play.google.com/store/apps/details?id=com.abdullcadre.abcmoz&hl=pt" },
        { "icon": "clock", "tag": "Productivity", "title": "LaborLog Lite", "description": "Work-hours logging and lookup for Android.", "tech": "Android", "status": "Google Play", "storeUrl": "https://play.google.com/store/apps/details?id=com.abdullcade.lobarloglite&hl=pt" },
        { "icon": "message-square", "tag": "Lifestyle", "title": "Quotey", "description": "Android app for quotes and everyday phrases, published on Google Play.", "tech": "Android app", "status": "Google Play", "storeUrl": "https://play.google.com/store/apps/details?id=com.abdullcade.Quotey&hl=pt" },
        { "icon": "message-square", "tag": "Messaging", "title": "ChatApp v1.1", "description": "Real-time chat built for Android with PHP and MySQL, suited to simple conversations.", "tech": "Android + PHP + MySQL", "status": "Full-stack" },
        { "icon": "user-check", "tag": "HR", "title": "Employee Attendance", "description": "Attendance tracking with selfie capture, timestamp and location.", "tech": "Cross-platform", "status": "GPS tracking" },
        { "icon": "wallet", "tag": "Finance", "title": "Financial Mobile App", "description": "Card and transaction management with local SQLite storage.", "tech": "Android + SQLite", "status": "Offline-first" },
        { "icon": "bot", "tag": "AI", "title": "OpenAI API Integration", "description": "Integration of the GPT-3 API into Android apps.", "tech": "Android · OpenAI", "status": "AI integration" },
        { "icon": "send", "tag": "Messaging", "title": "Bulk SMS Sender", "description": "Sends SMS messages to multiple recipients at once, built for Android.", "tech": "Android", "status": "SMS" }
      ]
    },

    "education": {
      "tag": "Academic background",
      "title": "Education",
      "subtitle": "Academic background oriented towards information technology.",
      "list": [
        { "year": "2021", "level": "Higher Education", "icon": "graduation-cap", "description": "BSc in Computer Science at Licungo University, final grade 14/20." },
        { "year": "2016", "level": "High School", "icon": "book-open", "description": "12th grade at Hamdan Bin Rashid Pre-University School." },
        { "year": "2014", "level": "Secondary Education", "icon": "school", "description": "10th grade at Chimundo Secondary School." },
        { "year": "2011", "level": "Primary Education", "icon": "pencil", "description": "7th grade at Macunene Complete Primary School." }
      ]
    },

    "contact": {
      "tag": "Contact",
      "title": "Get in Touch",
      "subtitle": "",
      "items": [
        { "icon": "mail",  "label": "Email",     "value": "abdullcadre@gmail.com", "url": "mailto:abdullcadre@gmail.com" },
        { "icon": "phone", "label": "WhatsApp",  "value": "+258 84 012 2758",      "url": "https://wa.me/258840122758" },
        { "icon": "phone", "label": "Phone",     "value": "+258 86 812 2758",      "url": "tel:+258868122758" }
      ],
      "socials": [
        { "icon": "linkedin",  "label": "LinkedIn",  "url": "https://www.linkedin.com/in/abdullcadre/" },
        { "icon": "facebook",  "label": "Facebook",  "url": "https://www.facebook.com/abdulllcadre" },
        { "icon": "instagram", "label": "Instagram", "url": "https://www.instagram.com/abdulllcadre/" },
        { "icon": "code-xml",    "label": "Forum", "url": "https://www.b4x.com/android/forum/forums/share-your-creations.33/?starter_id=115614" }
      ]
    },

    "footer": {
      "rights": "All rights reserved",
      "tag": "Front-end · Back-end · Mobile"
    }
  },

  "pt": {
    "brandName": "Abdul Cadre",
    "brandLocation": "Moçambique",

    "nav": [
      { "id": "hero",      "label": "Início",       "icon": "house" },
      { "id": "skills",    "label": "Competências", "icon": "layers" },
      { "id": "projects",  "label": "Projectos",     "icon": "folder-git-2" },
      { "id": "education", "label": "Formação",     "icon": "graduation-cap" },
      { "id": "contact",   "label": "Contacto",     "icon": "mail" }
    ],

    "actions": {
      "contact": "Entrar em contacto",
      "downloadCV": "Descarregar CV",
      "cvUrl": "https://drive.google.com/file/d/1k19gc77YrECmLnP6qAKEe-o22ovPdIRk/view?usp=drive_link"
    },

    "hero": {
      "name": "Abdul Cadre",
      "subtitle": "Programador Front-end e Back-end",
      "inspector": {
        "location": "Moçambique",
        "email": "abdullcadre@gmail.com",
        "stack": ["Laravel", "Python FastAPI", ".NET", "UI/UX", "Figma", "GitHub"],
        "university": "Universidade Licungo",
        "year": "2021"
      }
    },

    "skills": {
      "tag": "Competências técnicas",
      "title": "Especialidades",
      "subtitle": "Competências desenvolvidas em contextos académicos e profissionais.",
      "list": [
        {"icon": "smartphone", "tag": "Mobile", "title": "Mobile Dev", "description": "Aplicações móveis com foco em usabilidade e desempenho.", "certificate": {"image": "certificates/google-associate-android-developer-java-2019.jpg", "title": "Associate Android Developer (Java)", "issuer": "Google Developers", "date": "01/08/2019 – 01/08/2022"}},
        {"icon": "palette", "tag": "UI/UX", "title": "UI/UX", "description": "Interfaces claras e consistentes, pensadas para o utilizador.", "certificate": {"image": "certificates/figma-ui-ux-design-essentials-udemy-2023.jpg", "title": "Figma UI UX Design Essentials", "issuer": "Udemy", "date": "11/03/2023"}},
        {"icon": "github", "tag": "Ferramentas", "title": "GitHub", "description": "Controlo de versões com Git e colaboração em projectos.", "certificate": {"image": "certificates/git-github-dio-2023.jpg", "title": "Introdução ao Git e ao GitHub", "issuer": "Digital Innovation One (DIO)", "date": "14/11/2023"}},
        {"icon": "square-kanban", "tag": "Scrum", "title": "Projectos Ágeis", "description": "Gestão ágil de projectos com Scrum.", "certificate": {"image": "certificates/scrum-projectos-ageis-dio-2022.jpg", "title": "Projetos ágeis com SCRUM", "issuer": "Digital Innovation One (DIO)", "date": "27/08/2022"}},
        {"icon": "code-xml", "tag": "Código", "title": "C, C# & Java", "description": "Conhecimentos de programação em C, C# e Java."},
        {"icon": "image", "tag": "Design", "title": "Photoshop", "description": "Edição de imagem e design gráfico com Photoshop."},
        {"icon": "users", "tag": "Formação", "title": "Formação em TIC", "description": "Formação em tecnologias de informação e comunicação."},
        {"icon": "git-merge", "tag": "Software", "title": "Engenharia de Software", "description": "Planeamento, desenvolvimento e manutenção de sistemas de software.", "certificate": {"image": "certificates/licenciatura-informatica-unilicungo-2021-pagina-1.jpg", "pages": ["certificates/licenciatura-informatica-unilicungo-2021-pagina-1.jpg", "certificates/licenciatura-informatica-unilicungo-2021-pagina-2.jpg"], "title": "Licenciatura em Informática · Engenharia de Desenvolvimento de Sistemas", "issuer": "Universidade Licungo", "date": "2021"}},
        {"icon": "wrench", "tag": "Suporte", "title": "Manutenção", "description": "Diagnóstico, reparação e optimização de sistemas e equipamentos."}
      ]
    },

    "projects": {
      "tag": "Portfólio",
      "title": "Projectos Seleccionados",
      "subtitle": "Aplicações móveis e web desenvolvidas para uso real, incluindo apps publicadas na Google Play.",
      "b4xLink": "Ver todos os trabalhos",
      "b4xUrl": "https://www.b4x.com/android/forum/forums/share-your-creations.33/?starter_id=115614",
      "storeLink": "Ver o meu perfil de programador na Google Play",
      "storeUrl": "https://play.google.com/store/apps/dev?id=8265678583658672495&hl=pt",
      "list": [
        { "icon": "bot", "tag": "Educação", "title": "ABC Moz", "description": "Aplicação educativa de alfabetização para estudantes em Moçambique, publicada na Google Play.", "tech": "Aplicação Android", "status": "Google Play", "storeUrl": "https://play.google.com/store/apps/details?id=com.abdullcadre.abcmoz&hl=pt" },
        { "icon": "clock", "tag": "Produtividade", "title": "LaborLog Lite", "description": "Registo e consulta de horas de trabalho para Android.", "tech": "Android", "status": "Google Play", "storeUrl": "https://play.google.com/store/apps/details?id=com.abdullcade.lobarloglite&hl=pt" },
        { "icon": "message-square", "tag": "Lazer", "title": "Quotey", "description": "Aplicação Android de citações e frases do dia-a-dia, publicada na Google Play.", "tech": "Aplicação Android", "status": "Google Play", "storeUrl": "https://play.google.com/store/apps/details?id=com.abdullcade.Quotey&hl=pt" },
        { "icon": "message-square", "tag": "Mensagens", "title": "ChatApp v1.1", "description": "Chat em tempo real desenvolvido para Android com PHP e MySQL, adequado a conversas simples.", "tech": "Android + PHP + MySQL", "status": "Full-stack" },
        { "icon": "user-check", "tag": "Recursos Humanos", "title": "Employee Attendance", "description": "Controlo de presenças com captura de selfie, hora e localização.", "tech": "Multiplataforma", "status": "Rastreio GPS" },
        { "icon": "wallet", "tag": "Finanças", "title": "Financial Mobile App", "description": "Gestão de cartões e transacções com armazenamento local em SQLite.", "tech": "Android + SQLite", "status": "Offline-first" },
        { "icon": "bot", "tag": "IA", "title": "Integração da API OpenAI", "description": "Integração da API GPT-3 em aplicações Android.", "tech": "Android · OpenAI", "status": "Integração IA" },
        { "icon": "send", "tag": "Mensagens", "title": "Envio de SMS em Massa", "description": "Envio de mensagens SMS a vários destinatários em simultâneo, desenvolvido para Android.", "tech": "Android", "status": "SMS" }
      ]
    },

    "education": {
      "tag": "Formação académica",
      "title": "Formação Académica",
      "subtitle": "Percurso académico orientado para as tecnologias de informação.",
      "list": [
        { "year": "2021", "level": "Ensino Superior", "icon": "graduation-cap", "description": "Licenciatura em Informática na Faculdade de Ciência e Tecnologia da Universidade Licungo, com classificação final de 14 valores." },
        { "year": "2016", "level": "Nível Médio", "icon": "book-open", "description": "12.ª Classe na Escola Pré-universitária Hamdan Bin Rashid." },
        { "year": "2014", "level": "Ensino Secundário", "icon": "school", "description": "10.ª Classe na Escola Secundária de Chimundo." },
        { "year": "2011", "level": "Ensino Primário", "icon": "pencil", "description": "7.ª Classe na Escola Primária Completa de Macunene." }
      ]
    },

    "contact": {
      "tag": "Contactos",
      "title": "Entrar em Contacto",
      "subtitle": "",
      "items": [
        { "icon": "mail",  "label": "Email",     "value": "abdullcadre@gmail.com", "url": "mailto:abdullcadre@gmail.com" },
        { "icon": "phone", "label": "WhatsApp",  "value": "+258 84 012 2758",      "url": "https://wa.me/258840122758" },
        { "icon": "phone", "label": "Telefone",  "value": "+258 86 812 2758",      "url": "tel:+258868122758" }
      ],
      "socials": [
        { "icon": "linkedin",  "label": "LinkedIn",  "url": "https://www.linkedin.com/in/abdullcadre/" },
        { "icon": "facebook",  "label": "Facebook",  "url": "https://www.facebook.com/abdulllcadre" },
        { "icon": "instagram", "label": "Instagram", "url": "https://www.instagram.com/abdulllcadre/" },
        { "icon": "code-xml",    "label": "Fórum", "url": "https://www.b4x.com/android/forum/forums/share-your-creations.33/?starter_id=115614" }
      ]
    },

    "footer": {
      "rights": "Todos os direitos reservados",
      "tag": "Front-end · Back-end · Mobile"
    }
  }
};
