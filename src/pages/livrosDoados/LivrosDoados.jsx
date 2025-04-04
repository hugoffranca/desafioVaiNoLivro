import LivroProtagonista from "../../assets/livroProtagonista.png";
import s from "../livrosDoados/livrosDoados.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LivrosDoados() {
  const [livros, setLivros] = useState([]);
  const getLivros = async () => {
    const resposta = await axios.get(
      "https://api-vainolivro.onrender.com/livros"
    );
    setLivros(resposta.data);
  };

  useEffect(() => {
    getLivros();
  }, []);
  return (
    <section className={s.livrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        {livros.map((item) => (
          <section>
            <div>
              <h3>{item.titulo}</h3>
              <img src={item.image_url} alt={item.titulo} />
              <h4>{item.autor}</h4>
              <h5>{item.categoria}</h5>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
}
