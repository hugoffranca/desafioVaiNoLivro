import LivroProtagonista from "../../assets/livroProtagonista.png";
import s from "../livrosDoados/livrosDoados.module.scss";
export default function LivrosDoados() {
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section>
          <img src={LivroProtagonista} alt="Imagem do livro 'O protagonista'" />
          <div>
            <h3>O Protagonista</h3>
            <p>Susane Andrade</p>
            <p>Ficção</p>
          </div>
        </section>
      </section>
    </section>
  );
}
