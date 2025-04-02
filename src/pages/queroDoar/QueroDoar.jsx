import s from "../queroDoar/queroDoar.module.scss";
import iconeForm from "../../assets/iconeForm.png";
import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage_url] = useState("");

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };
  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };
  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImage_url = (e) => {
    setImage_url(e.target.value);
  };

  const enviarDados = async () => {
    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      image_url,
    };

    try {
      await axios.post("https://api-vainolivro.onrender.com/doar", dadosEnviar);
      alert("Livro enviado com sucesso! 📖");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
    }
  };
  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={iconeForm} alt="Icone de livro aberto" />
          <h2>Informações do Livro</h2>
        </div>
        <input
          type="text"
          placeholder="Título"
          onChange={capturaTitulo}
          required
        />
        <input
          type="text"
          placeholder="Categoria"
          onChange={capturaCategoria}
        />
        <input
          type="text"
          placeholder="Autor"
          onChange={capturaAutor}
          required
        />
        <input
          type="text"
          placeholder="Link da Imagem"
          onChange={capturaImage_url}
          required
        />
        <input
          type="submit"
          value="Doar"
          className={s.botaoDoar}
          onClick={enviarDados}
        />
      </form>
    </section>
  );
}
