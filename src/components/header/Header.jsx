import logoLivro from "../../assets/logoLivro.png";
import lupaHeader from "../../assets/lupaHeader.png";
import Inicio from "../../pages/inicio/Inicio.jsx";
import QueroDoar from "../../pages/queroDoar/QueroDoar.jsx";
import LivrosDoados from "../../pages/livrosDoados/LivrosDoados.jsx";
import s from "../header/header.module.scss";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section className={s.logoHeader}>
          <Link to="/">
            <img
              src={logoLivro}
              alt="Imagem de um livro azul aberto, com as paginas sendo trocadas, logo do projeto"
            />
          </Link>

          <Link to="/">
            <h1>Livros Vai Na Web</h1>
          </Link>
        </section>

        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Início
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/livrosDoados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/queroDoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>

        <section className={s.barraDeBusca}>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img
              src={lupaHeader}
              alt="Imagem de uma lupa branca com serventia de ser um botão para pesquisa"
            />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosDoados" element={<LivrosDoados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
