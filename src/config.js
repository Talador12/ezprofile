// config.js
module.exports = {
    github: {
        username: 'Talador12',
        sortBy: 'stars',
        limit: 6,
        exclude: {
            forks: false,
            projects: [
                'WoWAnalyzer',
                'plwbbot',
                'mtszkw',
                'wardrobe-bcc',
                'pgc-admin',
                'proposal',
                'pgc-api',
                'pgc-public',
                'swift-algorithm-club',
                'gomumblesoundboard',
                'risk-of-legends',
                'game'
            ]
        }
    },
    social: {
        linkedin: 'keith-adler',
        twitter: 'Talador12',
        facebook: 'Talador12',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://keithadler.xyz',
        phone: '',
        email: 'adlerkeith12@gmail.com'
    },
    skills: [
        'Data',
        'Kubernetes',
        'Machine Learning',
        'Python',
        'Spark'
    ],
    experiences: [
        { 
            company: 'Cloudflare',
            position: 'Machine Learning Engineer',
            from: 'August 2020',
            to: 'Present'
        }
    ],
    education: [
        { 
            institution: 'Georgia Institute of Technology',
            degree: 'Master of Science: Computer Science',
            from: '2013',
            to: '2016'
        },
        { 
            institution: 'Southern Methodist University',
            degree: 'Bachelor of Science: Computer Science',
            from: '2009',
            to: '2013',
        }
    ],
    blog: {
        source: 'medium',
        username: 'talador12',
        limit: 2
    },
    googleAnalytics: {
        id: 'G-499X8FRS4Q'
    },
    themeConfig: {
        default: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
        themes: [
            'corporate',
            'dark',
            'dracula',
            'halloween',
            'light'
        ]
    }
}
