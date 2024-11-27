import s from "../inicio/inicio.module.scss";
import community from "../../assets/community.png";
import iconeLeitura from "../../assets/iconeLeitura.png";
import terceiroIcone from "../../assets/terceiroIcone.png";
import balanca from "../../assets/balanca.png";
export default function Inicio() {
  return (
    <main>
      <section className={s.secaoH2}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={s.porqueDoarSection}>
        <h2>Por que devo doar?</h2>
        <section className={s.cardsInicio}>
          <section>
            <img
              src={community}
              alt="Imagem ilustrando círculo social de quatro pessoas"
            />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </section>
          <section>
            <img src={iconeLeitura} alt="Imagem ilustrando pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
            <img
              src={terceiroIcone}
              alt="Imagem ilustrando seis pessoas transformando vidas"
            />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </section>
          <section>
            <img
              src={balanca}
              alt="Imagem ilustrando balança representando igualdade"
            />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
