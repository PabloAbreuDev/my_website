import { useState } from "react";
import { HomeStyled } from "./styled";
import Lottie from "react-lottie-player";
import lottieJson from "../public/lottieanimation.json";
import HabilityCard from "../components/hability_card";
// Icons
import node_icon from "../public/icons/nodejs-plain.svg";
import express_icon from "../public/icons/express-original.svg";
import firebase_icon from "../public/icons/firebase-plain.svg";
import flutter_icon from "../public/icons/flutter-original.svg";
import mongo_icon from "../public/icons/mongodb-original.svg";
import mysql_icon from "../public/icons/mysql-original.svg";
import nextjs_icon from "../public/icons/nextjs-original.svg";
import react_icon from "../public/icons/react-original.svg";
import wordpress_icon from "../public/icons/wordpress-original.svg";
import postgres_icon from "../public/icons/postgresql-original.svg";

export default function Home() {
  const [active, setActive] = useState<boolean>(true);

  const habilidades = [
    {
      photo: react_icon,
      name: "ReactJS",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: mongo_icon,
      name: "MongoDB",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: firebase_icon,
      name: "Firebase",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: flutter_icon,
      name: "Flutter",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: node_icon,
      name: "Node JS",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: express_icon,
      name: "Express",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: mysql_icon,
      name: "Mysql",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: nextjs_icon,
      name: "NextJS",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
    {
      photo: postgres_icon,
      name: "PostgresSQL",
      text: "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. ",
    },
  ];

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
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Habilidades</a>
              </li>
              <li>
                <a href="#">Experiências</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="home">
        <div className="content">
          <div className="presentation">
            <h1>
              Olá, sou <span>Pablo Abreu </span>
              <br />
              Desenvolvedor Fullstack
            </h1>
            <div>
              <p>
                Trabalho com o ecossistema javascript e estou aqui para
                corrrigir uns bugs, criar soluções e tomar algumas chícaras de
                café!{" "}
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

      <section className="habilidades">
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

      <section className="experiencias">
        <div className="content">
          <div className="title-area">
            <h1 className="title">Experiências</h1>
          </div>
        </div>
      </section>
    </HomeStyled>
  );
}
