import { LitElement, html, css } from "lit";
import styles from "../css/navbar-styles";
export class Navbar extends LitElement {
  static styles = [styles];

  static get properties() {
    return {
      isActive: { type: Boolean },
    };
  }
  constructor() {
    super();
    this.isActive = false;
  }
  render() {
    return html`
      <header class="hero">
        <nav class="nav container container--hero">
          <img src="../../assets/logo.svg" alt="logo" />
          <ul
            class="${this.isActive ? "nav__list nav__list--show" : "nav__list"}"
          >
            <li class="nav__item">
              <a href="#nosotros" class="nav__link">Nosotros</a>
            </li>
            <li class="nav__item">
              <a href="#aprender" class="nav__link">¿Qué aprenderé?</a>
            </li>
            <li class="nav__item">
              <a href="#sponsor" class="nav__link">Sponsor</a>
            </li>
            <li class="nav__item">
              <a href="#footer" class="nav__link">Contacto</a>
            </li>
          </ul>
          <img
            src="../assets/icon-menu.svg"
            class="nav__menu"
            alt="menu"
            @click="${this._openClose}"
          />
        </nav>
        <section class="hero__main container container--hero">
          <article class="hero__texts">
            <h1 class="hero__title">¡Domina CSS desde cero!</h1>
            <p class="hero__paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              culpa similique provident iste recusandae inventore officiis,
              possimus qui porro repudiandae repellendus fugiat vero asperiores
              non libero optio! Id, pariatur odio.
            </p>
            <a href="#" class="hero__cta">empieza el curso</a>
          </article>
          <figure class="hero__figure">
            <img src="../assets/ilustration-1.svg" alt="" class="hero__img" />
          </figure>
        </section>
      </header>
    `;
  }
  _openClose() {
    this.isActive = !this.isActive;
  }
}

customElements.define("navbar-main", Navbar);
