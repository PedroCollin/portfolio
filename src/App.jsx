import React from 'react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.713c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.713h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);


// ========= DADOS DO PORTFÓLIO =========
const portfolioData = {
    name: "Pedro Henrique Cavalcante Collin",
    role: "Software Engineer",
    contact: {
        email: "pedrocollintkd@gmail.com",
        linkedin: "https://www.linkedin.com/in/pedro-collin-b5a624203/",
        github: "https://github.com/PedroCollin",
    },
    summary: "Engenheiro de Software Full-Stack com forte foco em Back-End, especializado em Java e Spring Boot, e experiente em Angular e Flutter para soluções front-end e mobile. Hábil na entrega de sistemas escaláveis e seguros usando arquitetura de microsserviços e ambientes em nuvem com Kubernetes e Docker.",
    experience: [
        {
            company: "CI&T",
            role: "Full-Stack Developer",
            period: "Nov 2024 - Presente",
            description: "Desenvolvimento de aplicações financeiras nos ecossistemas Pix, PDPJ e Open Banking, entregando soluções bancárias digitais seguras e escaláveis em uma equipe multifuncional."
        },
        {
            company: "Bosch LTDA",
            role: "Full-Stack Developer",
            period: "Fev 2023 - Nov 2024",
            description: "Liderei o desenvolvimento de uma plataforma de gestão de frotas, projetando e implantando microsserviços e micro-frontends com Java, Angular e Flutter. Gerenciei a infraestrutura em nuvem com Kubernetes e Docker."
        },
        {
            company: "Bosch LTDA",
            role: "Estagiário (Intern)",
            period: "Jul 2022 - Fev 2023",
            description: "Desenvolvi soluções web inovadoras para diversos projetos da empresa, utilizando tecnologias como Django, Vue.js e Vercel."
        }
    ],
    projects: [
        {
            title: "Soluções para o Setor Bancário Digital",
            description: "Participei do desenvolvimento de aplicações financeiras seguras e escaláveis para os ecossistemas Pix e Open Banking. O foco era construir e manter microsserviços robustos.",
            technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "JUnit", "Mockito"],
            githubLink: "#"
        },
        {
            title: "Plataforma de Gestão de Frotas",
            description: "Liderei o desenvolvimento de uma plataforma completa que integra back-end, front-end e mobile. O sistema foi projetado com microsserviços e micro-frontends para garantir escalabilidade e uma experiência de usuário fluida.",
            technologies: ["Java", "Angular", "Flutter", "Kubernetes", "Docker", "CI/CD"],
            githubLink: "#"
        },
        {
            title: "Aplicações Web Inovadoras",
            description: "Como estagiário, atuei na criação de diversas soluções web para projetos de inovação, utilizando uma stack de tecnologia moderna para prototipagem e desenvolvimento ágil.",
            technologies: ["Django", "Vue.js", "Vercel", "Python"],
            githubLink: "#"
        }
    ],
    skills: {
        "Back-End": ["Java", "Spring Boot", "JPA", "REST APIs", "SQL", "NoSQL"],
        "Front-End & Mobile": ["Angular", "Flutter", "Firebase", "HTML5", "CSS3"],
        "DevOps & Cloud": ["Docker", "Kubernetes", "CI/CD", "Git", "SonarQube"],
        "Testes & Qualidade": ["JUnit", "Mockito", "Selenium", "JMeter"],
        "Princípios & Padrões": ["Agile", "SOLID", "DDD", "Design Patterns"],
    }
};

// ========= COMPONENTES DA UI =========

const Header = ({ onNavClick }) => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
                    {portfolioData.name}
                </a>
                <nav className="hidden md:flex space-x-6">
                    <a href="#experience" onClick={(e) => onNavClick(e, 'experience')} className="text-gray-300 hover:text-cyan-400 transition-colors">Experiência</a>
                    <a href="#projects" onClick={(e) => onNavClick(e, 'projects')} className="text-gray-300 hover:text-cyan-400 transition-colors">Projetos</a>
                    <a href="#skills" onClick={(e) => onNavClick(e, 'skills')} className="text-gray-300 hover:text-cyan-400 transition-colors">Habilidades</a>
                    <a href="#contact" onClick={(e) => onNavClick(e, 'contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">Contato</a>
                </nav>
            </div>
        </header>
    );
};

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-gray-900 text-white">
            <div className="container mx-auto px-6 text-center md:text-left">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                        Olá, eu sou <span className="text-cyan-400">{portfolioData.name.split(' ')[0]} Collin</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6">{portfolioData.role}</h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
                        {portfolioData.summary}
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110">
                            <LinkedinIcon className="w-8 h-8" />
                        </a>
                        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110">
                            <GithubIcon className="w-8 h-8" />
                        </a>
                        <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110">
                            <MailIcon className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Section = ({ id, title, children }) => (
    <section id={id} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
                {title}
                <div className="w-24 h-1 bg-cyan-400 mx-auto mt-2"></div>
            </h2>
            {children}
        </div>
    </section>
);

const ExperienceSection = () => {
    return (
        <Section id="experience" title="Experiência Profissional">
            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
                {portfolioData.experience.map((item, index) => (
                    <div key={index} className="mb-8 flex justify-between items-center w-full">
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8 text-right'}`}>
                            {index % 2 !== 0 && (
                                <>
                                    <h3 className="text-xl font-bold text-cyan-400">{item.role}</h3>
                                    <p className="text-md font-semibold text-gray-300">{item.company}</p>
                                    <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                                    <p className="text-gray-400">{item.description}</p>
                                </>
                            )}
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full z-10"></div>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-left'}`}>
                            {index % 2 === 0 && (
                                <>
                                    <h3 className="text-xl font-bold text-cyan-400">{item.role}</h3>
                                    <p className="text-md font-semibold text-gray-300">{item.company}</p>
                                    <p className="text-sm text-gray-500 mb-2">{item.period}</p>
                                    <p className="text-gray-400">{item.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const ProjectsSection = () => {
    return (
        <Section id="projects" title="Projetos Destacados">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300">
                        <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                        <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                            ))}
                        </div>
                         <div className="mt-auto">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors inline-flex items-center">
                                Ver no GitHub <GithubIcon className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const SkillsSection = () => {
    return (
        <Section id="skills" title="Habilidades Técnicas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(portfolioData.skills).map(([category, skills]) => (
                    <div key={category} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                        <ul className="space-y-2">
                            {skills.map(skill => (
                                <li key={skill} className="text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const ContactSection = () => {
    return (
        <Section id="contact" title="Contato">
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg text-gray-400 mb-8">
                    Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através das minhas redes ou por e-mail.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110 p-2">
                        <LinkedinIcon className="w-10 h-10" />
                    </a>
                    <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110 p-2">
                        <GithubIcon className="w-10 h-10" />
                    </a>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-300 hover:text-cyan-400 transition-transform hover:scale-110 p-2">
                        <MailIcon className="w-10 h-10" />
                    </a>
                </div>
                 <div className="mt-8">
                    <a href={`mailto:${portfolioData.contact.email}`} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 text-lg">
                        Enviar um E-mail
                    </a>
                </div>
            </div>
        </Section>
    );
};


const Footer = () => (
    <footer className="bg-gray-950 text-center py-6">
        <div className="container mx-auto px-6">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
        </div>
    </footer>
);

// ========= COMPONENTE PRINCIPAL =========

export default function App() {
    
    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70, // Ajuste para o header fixo
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-gray-900 font-sans leading-normal tracking-tight">
            <Header onNavClick={handleNavClick} />
            <main>
                <HeroSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
