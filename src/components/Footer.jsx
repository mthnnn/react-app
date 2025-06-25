import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const textColor = theme === "dark" ? "light" : "dark";

  return (
    <footer
      className={`bg-${theme} text-center text-${textColor} border-top border-body`}
    >
      <div className="container p-4">
        <section className="mb-4">
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="https://www.facebook.com/gsuendustri/"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="https://x.com/Galatasaray_Uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="https://gsu.edu.tr/tr"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            className={`btn btn-outline-${textColor} btn-floating m-1`}
            href="https://www.instagram.com/galatasaray_univ/"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3">
        © 2025 Copyright:
        <a className={`text-${textColor}`} href="#!">
          MtDemiryurek
        </a>
      </div>
    </footer>
  );
}
