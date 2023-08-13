import logo from './resources/Logo.png'
import menu from "./resources/menu.png"
import github from "./resources/social/githubBlanco.png"
import linkedin from "./resources/social/LinkedinBlanco.png"
import twitter from './resources/social/TwitterBlanco.png'
import githubN from "./resources/social/githubNegro.png"
import linkedinN from "./resources/social/LinkedinNegro.png"
import thiago from  "./resources/thiago.png"
import psh from './resources/Technologies/photoshop.svg'
import figma from './resources/Technologies/figma.svg'
import html from './resources/Technologies/HTML.svg'
import css from './resources/Technologies/css.svg'
import bootstrap from './resources/Technologies/bootstrap.svg'
import react from './resources/Technologies/react.svg'
import redux from './resources/Technologies/redux.svg'
import js from './resources/Technologies/javascript.svg'
import ts from './resources/Technologies/typescript.svg'
import node from './resources/Technologies/node.svg'
import express from './resources/Technologies/express.svg'
import postgre from './resources/Technologies/postgres.svg'
import mongo from './resources/Technologies/mongo.svg'
import ruby from './resources/Technologies/ruby.svg'
import git from './resources/Technologies/git.svg'
import TF from './resources/TFpage.png'
import PL from './resources/Pokelandingpage.png'
import RV from './resources/Rickversepage.png'
import SP from './resources/Steelpage.png'
import GFTA from './resources/GFTApage.png'

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

        // Otros scripts aquí

    }, []);

return (
    <>
        <header className="hero">
        <div className="hero__container  ">
            <nav className="nav " id="navbar">

                <div className="nav__container container">
                    <div className="nav__logocontent">
                        <img src={logo} alt="" className="nav__logo"/>
                    </div>

                    <div className="nav__menu" id="menu">
                        <a href="#aboutme" className="nav__link active"> About Me </a>
                        <a href="#projects" className="nav__link"> Projects </a>
                        <a href="#contact" className="nav__link"> Social </a>
                    </div>
                        
                    <img src={menu} className=" nav__img "/>
                </div>
            </nav>

            <div className="hero__main  container">
                <div className="hero__content  ">
                    <h1 className="hero__name">
                        Thiago Zambonini
                    </h1>
                    <p className="hero__profession">Fullstack Web Developer</p>
                    <p className="hero__paragrahp">
                        Creator of web solutions focused on simplicity and efficiency.
                    </p>

                    <div className="social-icon-box">
                        <a href="https://github.com/Remojs" className="social-icon-link"><img src={githubN} alt="" className="social-icon"/></a>
                        <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" className="social-icon-link"><img src={linkedinN} alt="" className="social-icon"/></a>
                    </div>
                    
                </div>
            </div>
        </div>
    </header>

    <main className="main">
        <div className="main__container">

            <section className="info" id="aboutme">
                <div className="info__container container">
                    <div className="info__texts">
                        <h2 className="title title--mostaza">
                            About Me
                        </h2>
                        <p className="info__paragraph">
                            Hi! My name is Thiago and I am a web developer passionate about creating 
                            innovative and efficient projects. I specialize in web application development 
                            and in creating highly functional and attractive websites.
                        </p>
                    </div>

                    <div className="info__photo">
                        <img src={thiago} className="info__perfil" alt=""/>
                    </div>
                </div>
            </section>

            <section className="experience ">
                <div className="experience__container container">
                    <h2 className="title title--experience" data-aos="fade-up-left">Where have I worked</h2>
                    <div className="experience__content" data-aos="fade-up-right">
                        <div className="experience__enterprises" id="enterprise">
                            <li className="experience__enterprise experience__enterprise--active" data-filter="example_1"> Talent Forgers </li>
                            <li className="experience__enterprise" data-filter="example_2">Henry</li>
                            <li className="experience__enterprise" data-filter="example_3">Freelance</li>
                        </div>

                        <div className="experience__descriptions">
                            <div className="experience__description example_1">
                                <h3 className="experience__work">Full Stack Developer <a href="https://www.linkedin.com/company/talent-forge-latam/" className="link__enterprise">@ Talent Forgers </a></h3>
                                <p className="experience__date">Jul 2023 - act. </p>
                                <p className="experience__paragraph">Group task organization</p>
                                <p className="experience__paragraph">Backend and frontend application development </p>
                                <p className="experience__paragraph">Project database and repository management</p>
                            </div>

                            <div className="experience__description example_2">
                                <h3 className="experience__work">Teaching Assistant <a href="https://www.soyhenry.com/" className="link__enterprise">@ Henry </a> </h3>
                                <p className="experience__date">May 2023 - Jul 2023 </p>
                                <p className="experience__paragraph">Coordinate the group of students with the objective of achieving their adaptation to the program. </p>
                                <p className="experience__paragraph">Guide the students in the first steps of the course and resolve their concerns  </p>
                                <p className="experience__paragraph">Assist and accompany them in the resolution of exercises and promote group collaboration (Pair Programming).  </p>
                                <p className="experience__paragraph">Propose ideas for the improvement of the Bootcamp processes. </p>
                                <p className="experience__paragraph">Promote group cohesion and generate community. </p>
                            </div>

                            <div className="experience__description example_3">
                                <h3 className="experience__work"> Freelance Web solution creator </h3>
                                <p className="experience__date">Sep 2022 - Mar 2023 </p>
                                <p className="experience__paragraph">Build web solutions that solve customer problems </p>
                                <p className="experience__paragraph"> Maintain solutions and scale code as requested by customers </p>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>

            <section className="conocimientos">
                <div className="conocimientos__container container">

                    <div className="conocimientos__content">
                        <div className="conocimientos__texts">
                            <h2 className="title conocimientos__title">
                                Expertise
                            </h2>
                            <p className="conocimientos__paragraph">
                                Throughout my career I have worked on personal and group projects, 
                                from frontend to backend and database management. Focused on capturing 
                                innovation and creativity in every line of code. My goal is to develop 
                                my career in companies that provide me with dynamic growth and learning 
                                environments, allowing me to grow professionally.
                            </p>
                        </div>


                        <div className="conocimientos__lenguajes2">

                            <div className="lenguaje2" style={{"--c":"#EFD81D"}}>
                                <span className="leguaje2__content">
                                    <img src={js} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#1399C4"}}>
                                <span className="leguaje2__content">
                                    <img src={react} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#86BE00"}}>
                                <span className="leguaje2__content">
                                    <img src={node} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#E34D26"}}>
                                <span className="leguaje2__content">
                                    <img src={html} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#264CE3"}}>
                                <span className="leguaje2__content">
                                    <img src={css} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#8411F6"}}>
                                <span className="leguaje2__content">
                                    <img src={bootstrap} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#7E13F8"}}>
                                <span className="leguaje2__content">
                                    <img src={redux} alt="" className="lenguaje__img" />
                                </span>
                            </div>
                        
                            <div className="lenguaje2" style={{"--c":"#2F74C0"}}>
                                <span className="leguaje2__content">
                                    <img src={ts} alt="" className="lenguaje__img" />
                                </span>
                            </div>


                            <div className="lenguaje2" style={{"--c":"#2FA3F7"}}>
                                <span className="leguaje2__content">
                                    <img src={psh} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#FF61F6"}}>
                                <span className="leguaje2__content">
                                    <img src={figma} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#8D8F8E"}}>
                                <span className="leguaje2__content">
                                    <img src={express} alt="" className="lenguaje__img" />
                                </span>
                            </div>
                            
                            <div className="lenguaje2" style={{"--c":"#31648C"}}>
                                <span className="leguaje2__content">
                                    <img src={postgre} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#17AD55"}}>
                                <span className="leguaje2__content">
                                    <img src={mongo} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#AD1C09"}}>
                                <span className="leguaje2__content">
                                    <img src={ruby} alt="" className="lenguaje__img" />
                                </span>
                            </div>

                            <div className="lenguaje2" style={{"--c":"#F05639"}}>
                                <span className="leguaje2__content">
                                    <img src={git} alt="" className="lenguaje__img" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="projects">
                <div className="trabajos__container container">
                    <div className="trabajos__texts">
                        <h2 className="title trabajo__title">Projects</h2>
                    </div>

                    <div className="trabajos__items">

                        <div className="trabajo__item">
                            <img src={TF} className="trabajo__img" alt=""/>
                            <div className="trabajo__description">
                                <a href="" className="pagina__enlace">Talent Forge Site</a>
                                <p> Group Project </p>
                            </div>
                        </div>

                        <div className="trabajo__item">
                            <img src={SP} className="trabajo__img" alt="" />
                            <div className="trabajo__description">
                                <a href="" className="pagina__enlace">Steel Games</a>
                                <p> Personal Website </p>
                            </div>
                        </div>

                        <div className="trabajo__item">
                            <img src={RV} className="trabajo__img" alt="" />
                            <div className="trabajo__description">
                                <a href="" target="_blank" className="pagina__enlace">Rickverse</a>
                                <p> Personal Website </p>
                            </div>
                        </div>

                        <div className="trabajo__item">
                            <img src={PL} className="trabajo__img" alt="" />
                            <div className="trabajo__description">
                                <a href="#" className="pagina__enlace">Pokelanding Gallery</a>
                                <p> Personal Website </p>
                            </div>
                        </div>

                        <div className="trabajo__item">
                            <img src={GFTA} className="trabajo__img" alt="" />
                            <div className="trabajo__description">
                                <a href="#" className="pagina__enlace">Gotta Fetch Them All - API</a>
                                <p> Personal API </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="contact" id="contact">
                <div className="contact__container container">
                    <div className="contacto__content">
                        <h2 className="title contacto__title">Contact Me</h2>
                        <p className="contacto__paragraph ">I am currently looking for new opportunities, my 
                            inbox and my social networks are always open. 
                            If you have any questions or just want to say hi, I ll do my best to get back to you!</p>
                        <a href="mailto:thiagozambonini24@gmail.com" className="contact__cta">Email </a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer className="footer container">
        <div className="footer__socials ">
            <a href="https://github.com/Remojs" className="footer__social footer__social--github"><img src={github} alt="" className="social-item"/></a>
            <a href="https://www.linkedin.com/in/thiago-zambonini-2a279a239/" className="footer__social footer__social--linkedin"><img src={linkedin} alt="" className="social-item" /></a>
            <a href="https://twitter.com/Remocodee" className="footer__social footer__social--twitter"><img src={twitter} alt="" className="social-item"/></a>
        </div>
        <p className="footer__derechos">@<strong id="fecha"></strong> All rights reserved to Remocode </p>
    </footer>
    </>
    )
}

export default App
