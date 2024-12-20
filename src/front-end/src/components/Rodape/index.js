import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <Link to="/" className={styles.footerCompanyName}>
            Passa Ingressos
          </Link>
          <div className={styles.footerIcons}>
            <FaFacebookF className={styles.footerIcon} />
            <FaInstagram className={styles.footerIcon} />
            <FaYoutube className={styles.footerIcon} />
          </div>
        </div>

        <div className={styles.footerCenter}>
          <Link to="/">
            <img
              src="/logoPassaIngressos.png"
              alt="Logo"
              title="Logo"
              className={styles.footerLogo}
            />
          </Link>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerLinks}>
            <Link to="/vender-ingresso" className={styles.footerLink}>
              Vender ingresso
            </Link>
            <Link to="/eventos" className={styles.footerLink}>
              Eventos disponíveis
            </Link>
            <Link to="/como-funciona" className={styles.footerLink}>
              Como funciona
            </Link>
            <Link to="/sobre" className={styles.footerLink}>
              Sobre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
