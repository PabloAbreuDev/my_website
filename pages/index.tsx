import { useState } from "react";
import { HomeStyled } from "./styled";
import Lottie from "react-lottie-player";
import lottieJson from "../public/lottieanimation.json";
import HabilityCard from "../components/hability_card";
import ExperienceCard from "../components/experience_card";

// Icons
import node_icon from "../public/icons/nodejs-plain.svg";
import express_icon from "../public/icons/express-original.svg";
import firebase_icon from "../public/icons/firebase-plain.svg";
import flutter_icon from "../public/icons/flutter-original.svg";
import mongo_icon from "../public/icons/mongodb-original.svg";
import mysql_icon from "../public/icons/mysql-original.svg";
import nextjs_icon from "../public/icons/nextjs-original.svg";
import react_icon from "../public/icons/react-original.svg";
import postgres_icon from "../public/icons/postgresql-original.svg";
import smartphone_icon from "../public/icons/smartphone.svg";
import mail_icon from "../public/icons/mail.svg";
import linkedin_icon from "../public/icons/in.svg";
import github_icon from "../public/icons/hub.svg";

import ProjectCard from "../components/project_card";
import ContactCard from "../components/contact_card";

export default function Home() {
  const [active, setActive] = useState<boolean>(false);

  const habilidades = [
    {
      photo: react_icon,
      alt: "Ícone do ReactJS",
      name: "ReactJS",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: mongo_icon,
      alt: "Ícone do MongoDB",
      name: "MongoDB",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: firebase_icon,
      alt: "Ícone do Firebase",
      name: "Firebase",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: flutter_icon,
      alt: "Ícone do Flutter",
      name: "Flutter",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: node_icon,
      alt: "Ícone do NodeJS",
      name: "Node JS",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: express_icon,
      alt: "Ícone do ExpressJS",
      name: "Express",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: mysql_icon,
      alt: "Ícone do MySQL",
      name: "Mysql",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: nextjs_icon,
      alt: "Ícone do NextJS",
      name: "NextJS",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: postgres_icon,
      alt: "Ícone do PostgreSQL",
      name: "PostgresSQL",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
  ];

  const experiencias = [{
    logo: react_icon,
    name: "SECAP - MA",
    period: "De Janeiro 2021 - Dezembro 2022",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"
  }, {
    logo: react_icon,
    name: "SECAP - MA",
    period: "De Janeiro 2021 - Dezembro 2022",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"
  }]

  const projetos = [{
    photo: react_icon,
    alt: "Ícone do ReactJS",
    name: "Nome do Projeto",
    type: "Fullstack",
    text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
  }, {
    photo: react_icon,
    alt: "Ícone do ReactJS",
    name: "ReactJS",
    type: "Fullstack",
    text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
  }, {
    photo: react_icon,
    alt: "Ícone do ReactJS",
    name: "ReactJS",
    type: "Fullstack",
    text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
  }, {
    photo: react_icon,
    alt: "Ícone do ReactJS",
    name: "ReactJS",
    type: "Fullstack",
    text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
  }, {
    photo: react_icon,
    alt: "Ícone do ReactJS",
    name: "ReactJS",
    type: "Fullstack",
    text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
  }, {
    photo: react_icon,
    alt: "Ícone do ReactJS",
    name: "ReactJS",
    type: "Fullstack",
    text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
  },]

  const contacts = [
    {
      icon: smartphone_icon,
      name: "Whatsapp",
      content: "(98) 98125-3423",
      link: "https://api.whatsapp.com/send?phone=5598981253423"
    },
    {
      icon: mail_icon,
      name: "Email",
      content: "pabloabreudev@gmail.com",
      link: "mailto:pabloabreudev@gmail.com"
    },
    {
      icon: linkedin_icon,
      name: "Linkedin",
      content: "pablodev95",
      link: "https://www.linkedin.com/in/pablodev95/"
    },
    {
      icon: github_icon,
      name: "Github",
      content: "PabloAbreuDev",
      link: "https://github.com/PabloAbreuDev"
    },]

  return (
    <HomeStyled active={active}>
      <header>
        <nav className="navbar">
          <div className="brand-title">{"<PabloAbreu/>"}</div>
          <a
            href="#"
            className="toggle-button"
            onClick={() => setActive(!active)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="navbar-links">
            <ul onClick={() => setActive(false)}>
              <li>
                <a href="#home" >Home</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#experiencias">Experiências</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contatos">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="home" className="home">
        <div className="content">
          <div className="presentation">
            <h1>
              Olá, sou <span>Pablo Abreu </span>
              <br />
              Desenvolvedor Fullstack
            </h1>
            <div>
              <p>
                Atualmente estou focado em NodeJS e NextJS, tenho um bom conjunto de habilidades técnicas, paixão por código limpo e boa performance.
              </p>
            </div>

            <button>Download Currículo</button>
          </div>
          <div className="animation">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 450, height: 450 }}
            />
          </div>
        </div>
      </section>

      <section id="habilidades" className="habilidades">
        <div className="content">
          <div className="title-area">
            <h1 className="title">Habilidades</h1>
          </div>
          <div className="cards">
            {habilidades.map((item, index) => (
              <HabilityCard key={index} props={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="experiencias" className="experiencias">
        <div className="content">
          <div className="title-area">
            <h1 className="title">Experiências</h1>
          </div>
          <div className="experiences">
            {experiencias.map((item, index) => (
              <ExperienceCard key={index} props={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="projetos">
        <div className="content">
          <div className="title-area">
            <h1 className="title">Projetos</h1>
          </div>
          <div className="projetos-area">
            {projetos.map((item, index) => (
              <ProjectCard key={index} props={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="contatos" className="contatos">
        <div className="content">
          <div className="title-area">
            <h1 className="title">Contatos</h1>
          </div>

          <div className="contatos-area">
            {contacts.map((item, index) => (
              <ContactCard key={index} props={item} />
            ))}
          </div>




        </div>
      </section>

    </HomeStyled>
  );
}
