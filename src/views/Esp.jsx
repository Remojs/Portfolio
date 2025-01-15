//Multimedia
import * as icons from '../assets/icons'
import * as media from '../assets/media'
import * as social from '../assets/images/social'
import * as tech from '../assets/images/tech'

//Data
import projectsData from '../data/projects.json';
import techData from '../data/tech.json';

//Components
import ProjectCard from '../components/projectCard/projectCard'

//React Imports
import { useEffect } from 'react';
import $ from 'jquery';


function App() {
    useEffect(() => {
    const header = document.querySelector("nav");
        window.addEventListener("scroll", () => {
            header.classList.toggle("nav__abajo", window.scrollY);
        });

        let ubicacionPrincipal = window.pageYOffset;
        window.onscroll = () => {
            let desplazamientoActual = window.pageYOffset;
            if (ubicacionPrincipal >= desplazamientoActual) {
                document.getElementById('navbar').style.top = '0';
            } else {
                document.getElementById('navbar').style.top = '-100px';
            }
            ubicacionPrincipal = desplazamientoActual;
        };

        $(".experience__enterprise").click(function () {
            $(this).addClass("experience__enterprise--active").siblings().removeClass("experience__enterprise--active");

            $(".experience__descriptions").fadeOut();
            setTimeout(() => {
                $(".experience__descriptions").fadeIn();
            });

            let value = $(this).attr("data-filter");

            setTimeout(() => {
                if (value === "example_1") {
                    $(".experience__description").not(".example_1").hide("500");
                    $(".experience__description.example_1").show("500");
                } else {
                    $(".experience__description").not("." + value).hide("500");
                    $(".experience__description." + value).show("500");
                }
            }, 350);
        });
    }, []);



return (
<>
    {/* Navbar */}
    <header className="hero">
    <div className="hero__container">

        <nav className="nav " id="navbar">
            <div className="nav__container container">
                <div className="nav__logocontent"><img src={media.logo} alt="" className="nav__logo"/></div>

                <div className="nav__menu" id="menu">
                    <a href="#aboutme" className="nav__link active"> Sobre mi </a>
                    <a href="#projects" className="nav__link"> Projectos </a>
                    <a href="#contact" className="nav__link"> Social </a>
                    <a href="/eng" className="nav__link"> Ingles </a>
                </div>
                            
                <img src={icons.menu} className=" nav__img "/>
            </div>
        </nav>

        <div className="hero__main  container">
            <div className="hero__content  ">
                <h1 className="hero__name">Thiago Zambonini</h1>
                <p className="hero__profession">Desarrollador Web Fullstack</p>
                <p className="hero__paragrahp">Creador de soluciones web centradas en la sencillez y la eficacia.</p>
                <div className="social-icon-box">
                    <a href="https://github.com/Remojs" className="social-icon-link"><img src={social.ghWhite} alt="" className="social-icon"/></a>
                    <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" className="social-icon-link"><img src={social.ldBlack} alt="" className="social-icon"/></a>
                </div>
            </div>
        </div>
    </div>
    </header>

    {/* Main Content */}
    <main className="main">
        <div className="main__container">
                    
            {/* About Me */}       
            <section className="info" id="aboutme">
                <div className="info__container container">
                    <div className="info__texts">
                        <h2 className="title title--mostaza">Sobre mi</h2>
                        <p className="info__paragraph">Hola, mi nombre es Thiago Zambonini y soy un desarrollador web apasionado por el mundo de la tecnologia. Me especializo en el desarrollo de aplicaciones web altamente funcionales y atractivas.</p>
                    </div>
                    <div className="info__photo">
                        <img src={media.thiago} className="info__perfil" alt=""/>
                    </div>
                </div>
            </section>

            {/* Experiencia */}
            <section className="experience ">
                        <div className="experience__container container">
                            <h2 className="title title--experience" data-aos="fade-up-left">Donde he trabajado?</h2>
                            <div className="experience__content" data-aos="fade-up-right">
                                <div className="experience__enterprises" id="enterprise">
                                    <li className="experience__enterprise experience__enterprise--active" data-filter="example_1">Smart Racoon</li>
                                    <li className="experience__enterprise" data-filter="example_2"> Talent Forgers </li>
                                    <li className="experience__enterprise" data-filter="example_3">Henry</li>
                                    <li className="experience__enterprise" data-filter="example_4">Freelance</li>
                                </div>

                                <div className="experience__descriptions">
                                <div className="experience__description example_1">
                                        <h3 className="experience__work">Jefe de Desarrollo <a className="link__enterprise">@ Smart Racoon </a></h3>
                                        <p className="experience__date">Feb. 24 - act. </p>
                                        <p className="experience__paragraph">Coordinación eficaz del personal en proyectos clave, asegurando una ejecución fluida.  </p>
                                        <p className="experience__paragraph">Gestión integral de proyectos y optimización de la comunicación interna.</p>
                                        <p className="experience__paragraph">Organización estratégica de tareas para maximizar la eficiencia operativa.</p>
                                        <p className="experience__paragraph">Implantación de prácticas ágiles de gestión de proyectos.</p>
                                    </div>

                                    <div className="experience__description example_1">
                                        <h3 className="experience__work">Desarrollador Fullstack <a className="link__enterprise">@ Smart Racoon </a></h3>
                                        <p className="experience__date">Sep. 23 - Ene. 24 </p>
                                        <p className="experience__paragraph">Diseño y creación de frontend de calidad para grandes proyectos</p>
                                        <p className="experience__paragraph">Soporte y desarrollo de backend para garantizar el rendimiento y la escalabilidad </p>
                                        <p className="experience__paragraph">Diseño de estrategias para mejorar la experiencia de usuario.</p>
                                    </div>

                                    <div className="experience__description example_2">
                                        <h3 className="experience__work"> Co-Owner <a href="https://www.linkedin.com/company/talent-forge-latam/" className="link__enterprise">@ Talent Forgers </a></h3>
                                        <p className="experience__date">Jul. 23 - Nov. 23</p>
                                        <p className="experience__paragraph">Organizacion del trabajo</p>
                                        <p className="experience__paragraph">Desarrollo de aplicaciones backend y frontend </p>
                                        <p className="experience__paragraph">Gestión de bases de datos y repositorios de proyectos</p>
                                    </div>

                                    <div className="experience__description example_3">
                                        <h3 className="experience__work"> Auxiliar de Enseñanza  <a href="https://www.soyhenry.com/" className="link__enterprise">@ Henry </a> </h3>
                                        <p className="experience__date">May. 23 - Jul. 23 </p>
                                        <p className="experience__paragraph">Coordinar al grupo de alumnos con el objetivo de lograr su adaptación al programa.  </p>
                                        <p className="experience__paragraph">Guiar a los alumnos en los primeros pasos del curso y resolver sus dudas  </p>
                                        <p className="experience__paragraph">Asistir y acompañar en la resolución de ejercicios y fomentar la colaboración grupal. </p>
                                        <p className="experience__paragraph">Proponer ideas para la mejora de los procesos del Bootcamp.</p>
                                        <p className="experience__paragraph">Promover la cohesión del grupo y generar comunidad. </p>
                                    </div>

                                    <div className="experience__description example_4">
                                        <h3 className="experience__work"> Creador de soluciones web freelance </h3>
                                        <p className="experience__date">Sep. 22 - Mar. 23 </p>
                                        <p className="experience__paragraph">Construir soluciones web que resuelvan los problemas de los clientes </p>
                                        <p className="experience__paragraph"> Mantenimiento y mejora el código según lo solicitado por los clientes </p>
                                    </div>
                                </div>
                            </div>
                            </div>
            </section>

            {/* Tecnologias */}
            <section className="conocimientos"> 
            <div className="conocimientos__container container">
                <div className="conocimientos__content">
                <div className="conocimientos__texts">
                    <h2 className="title conocimientos__title">Experiencia</h2>
                    <p className="conocimientos__paragraph">
                    A lo largo de mi carrera he trabajado en diversidad de proyectos de todo tipo. Soy un desarrollador
                    centrado en innovar para generar proyectos creativos y altamente eficientes. Me interesa impulsar mi
                    carrera en empresas que me proporcionen entornos dinámicos de crecimiento y aprendizaje que me permitan
                    crecer profesionalmente.
                    </p>
                </div>

                <div className="conocimientos__lenguajes2">
                    {techData.map((item, index) => (
                    <div
                        className="lenguaje2"
                        key={index}
                        style={{ '--c': item.color }} // Usa el color desde el JSON
                    >
                        <span className="leguaje2__content">
                        <img src={tech[item.src]} alt={item.src} className="lenguaje__img" /> {/* Usa el nombre del src */}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </section>

            {/* Projectos */}
            <div className="projects-section">
                <h2 className="title trabajo__title">Projectos</h2>
                    <div className='projects-box'>
                    {projectsData.map((project) => (
                        <ProjectCard
                        title={project.title}
                        desc={project.desc}
                        videoLink={project.videoLink}
                        codeLink={project.codeLink}
                        pageLink={project.pageLink}
                        cover={project.cover}
                        name={project.name}
                        icon={project.icon}
                        />
                    ))}
                    
                    </div>
            </div>

            {/* Contacto */}
            <div className="contact" id="contact">
                <div className="contact__container container">
                    <div className="contacto__content">
                        <h2 className="title contacto__title">Contacto</h2>
                        <p className="contacto__paragraph "> Siempre estoy abierto a nuevas oportunidades, mis redes sociales están siempre a disposicion y puedes contactarme por ahi ¡haré todo lo posible por responderte!</p>
                        <a href="mailto:thiagozambonini24@gmail.com" className="contact__cta">Email </a>
                    </div>
                </div>
            </div>

        </div>
    </main>

    {/* Footer */}
    <footer className="footer container">
        <div className="footer__socials ">
            <a href="https://github.com/Remojs" className="footer__social footer__social--github"><img src={social.ghWhite} alt="" className="social-item"/></a>
            <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" className="footer__social footer__social--linkedin"><img src={social.ldBlack} alt="" className="social-item" /></a>
            <a href="https://twitter.com/Remocodee" className="footer__social footer__social--twitter"><img src={social.twWhite} alt="" className="social-item"/></a>
        </div>
        <p className="footer__derechos">@<strong id="fecha"></strong> Todos los derechos reservados a Remocode </p>
    </footer>
</>
)

}

export default App
