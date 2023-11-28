import { LitElement, html, css } from "lit";
import styles from '../css/about-styles'
export class NosotrosSection extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <section id="nosotros" class="about">
        <article class="about__container container">
          <figure class="about__figure">
            <img src="../assets/about.svg" alt="" class="about__img" />
          </figure>
          <div class="about__texts">
            <h2 class="subtitle">Hola, Soy Julio Cesar.</h2>
            <p class="paragraph">
              lorem impusun lore lporem lorem ipsum dollr, sit amet consectetur
              adipisicing elit. Ea doloribus unde alias rerum amet veniam.
            </p>
          </div>
        </article>
      </section>
    `;
  }
}
customElements.define("nosotros-section", NosotrosSection);
