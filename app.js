const { createApp } = Vue;

createApp({
    data() {
        return {
            cvData: {
                personal: {
                    name: 'Kerem Esenkaya',
                    address: 'Roland Holststraat 25, Almere Buiten',
                    phone: '06 38 21 05 90',
                    email: 'esenkayakerem@gmail.com',
                    schoolEmail: '2205109@roc-dev.nl',
                    birthdate: '16/11/2006',
                    age: 18,
                    photo: 'kerem.png'
                },
                profile: {
                    description: [
                        'Ik ben Kerem Esenkaya, 18 jaar en tweedejaars Software Development student aan ROC Almere Buiten. Websites bouwen lijkt me interessant omdat je elke keer een nieuwe uitdaging hebt bij het maken ervan. Dat geeft energie en laat me steeds bijleren.',
                        'Ik werk veel met HTML, CSS, JavaScript, PHP en SQL. Ik probeer code netjes te houden, zorg dat pagina\'s op mobiel én desktop logisch blijven en gebruik Git om overzicht te bewaren. In projectgroepen pak ik graag de front-end op, maar ik werk ook graag aan de achterkant van websites.',
                        'Wat mensen aan mij hebben? Ik ben rustig, maak afspraken af en zoek dingen uit tot het klopt. Feedback zie ik als een kans om het beter te maken en ik lever mijn werk graag op met korte notities zodat iedereen snapt wat er gebeurd is.'
                    ],
                    tagline: 'ROC Almere Buiten · Jaar 2',
                    title: 'Webdeveloper in opleiding',
                    subtitle: ''
                },
                languages: [
                    { name: 'Nederlands', level: 'Vloeiend', progress: 95 },
                    { name: 'Engels', level: 'Vloeiend', progress: 85 },
                    { name: 'Turks', level: 'Goed', progress: 70 }
                ],
                education: [{
                    title: 'Software Development – Niveau 4',
                    institution: 'ROC Almere Buiten',
                    period: '',
                    achievements: [
                        'Hbo+ werk-en denkniveau',
                        'Mbo+ werk-en denkniveau',
                        'Focus op responsieve websites en webapplicaties',
                        'Werken met versiebeheer (Git)',
                        'Portfolio\'s en dashboardconcepten ontwikkeld'
                    ]
                }],
                technicalSkills: [
                    { name: 'HTML', rating: 8, progress: 80 },
                    { name: 'CSS', rating: 7, progress: 70 },
                    { name: 'JavaScript', rating: 6, progress: 60 },
                    { name: 'PHP', rating: 7, progress: 70 },
                    { name: 'SQL', rating: 8, progress: 80 },
                    { name: 'Vue.js', rating: 4, progress: 40 },
                    { name: 'Laravel', rating: 2, progress: 20 }
                ],
                softSkills: [
                    'Samenwerken',
                    'Zelfstandig werken',
                    'Leergierig',
                    'Probleemoplossend vermogen',
                    'Verantwoordelijkheid nemen',
                    'Doorzettingsvermogen',
                    'Fouten gebruiken als leerproces',
                    'Stressbestendigheid',
                    'Flexibel',
                    'Tijdmanagement'
                ],
                workExperience: [],
                internship: {
                    description: 'Ik sta open voor een stageplek of junior rol bij een webbureau. Ik wil ervaring opdoen in een team dat pixel-perfect websites oplevert, zodat ik mijn vaardigheden in front-end én backend in de praktijk kan verbeteren. Laat gerust weten waar jullie aan werken; ik reageer snel met mijn beschikbaarheid.',
                    location: 'Almere · beschikbaar voor stages en webprojecten'
                },
                about: {
                    strengths: [
                        {
                            title: 'Front-end en backend',
                            category: 'Technische basis',
                            description: 'Ik kan zowel de voorkant als de achterkant van websites bouwen. HTML en CSS voor de layout, JavaScript voor interactie, en PHP met SQL voor de data. Ik zorg dat alles goed werkt op mobiel en desktop.'
                        },
                        {
                            title: 'Netjes en overzichtelijk werken',
                            category: 'Werkwijze',
                            description: 'Ik gebruik Git om mijn code bij te houden, deel grote taken op in kleinere stukjes en test alles voordat ik het aflever. Zo weet de volgende developer precies wat er gebeurd is.'
                        },
                        {
                            title: 'Goed in teams',
                            category: 'Samenwerking',
                            description: 'Ik stel vragen als ik iets niet snap en leg zelf ook graag uit hoe dingen werken. Nieuwe technieken leer ik snel en ik deel die kennis met anderen.'
                        }
                    ]
                }
            },
            loading: false
        }
    },
    mounted() {
        // Animate progress bars after component is mounted
        this.$nextTick(() => {
            this.animateProgressBars();
        });
    },
    methods: {
        animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width || bar.getAttribute('data-progress') + '%';
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-out';
                    bar.style.width = width;
                }, 100);
            });
        },
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                this.showNotification('Gekopieerd naar klembord!');
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        },
        showNotification(message) {
            // Simple notification (you can enhance this)
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--accent-color);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 6px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }
    }
}).mount('#app');

