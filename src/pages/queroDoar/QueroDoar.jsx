import s from "../queroDoar/queroDoar.module.scss";
import iconeForm from "../../assets/iconeForm.png";
export default function QueroDoar() {
  return (
    <section className={s.queroDoarSection}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form action="">
        <div>
          <img src={iconeForm} alt="Icone de livro aberto" />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" name="" id="" placeholder="Título" />
        <input type="text" name="" id="" placeholder="Categoria" />
        <input type="text" name="" id="" placeholder="Autor" />
        <input type="text" name="" id="" placeholder="Título" />
        <input type="text" name="" id="" placeholder="Link da Imagem" />
        <input type="submit" value="Doar" className={s.botaoDoar} />
      </form>
    </section>
  );
}
