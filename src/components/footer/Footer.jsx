import logoFacebook from "../../assets/logoFacebook.png";
import logoTwitter from "../../assets/logoTwitter.png";
import logoYouTube from "../../assets/logoYoutube.png";
import logoLinkedin from "../../assets/logoLinkedin.png";
import logoInstagram from "../../assets/logoInstagram.png";
import s from "../../components/footer/footer.module.scss";
export default function Footer() {
  return (
    <footer>
      <section className={s.contatosFooter}>
        <p>4002-8922</p>
        <nav>
          <a href="">
            <img src={logoFacebook} alt="" />
          </a>
          <a href="">
            <img src={logoTwitter} alt="" />
          </a>
          <a href="">
            <img src={logoYouTube} alt="" />
          </a>
          <a href="">
            <img src={logoLinkedin} alt="" />
          </a>
          <a href="">
            <img src={logoInstagram} alt="" />
          </a>
        </nav>
      </section>
      <section className={s.copyright}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
