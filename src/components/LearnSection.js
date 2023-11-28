import { LitElement, html, css } from "lit";
import learn from "../css/learn-styles";
export class LearnSection extends LitElement {
  static styles = [
    learn
  ];

  render() {
    return html`
        <section class="learn container" id="aprender">
            <h2 class="subtitle">¿ Qie aprenderé en el curso</h2>
            <div class="learn__articles">
                <article class="learn__article">
                  <img src="../assets/laptop-ilustration.svg" alt="" class="learn__img">
                  <h2 class="learn__title">Crear cualquier sitio web.</h2>
                  <p class="paragraph">
                    Aprende a crear el diseño de cualquier sitio web con CSS.
                  </p>
                </article>

                <article class="learn__article">
                <img src="../assets/search.svg" alt="" class="learn__img">
                <h2 class="learn__title">Sube tu sitio web a internet.</h2>
                <p class="paragraph">
                  Aprende a crear el diseño de cualquier sitio web con CSS.
                </p>
              </article>
              <article class="learn__article">
                <img src="../assets/computer-ilustration.svg" alt="" class="learn__img">
                <h2 class="learn__title">Responsive Design.</h2>
                <p class="paragraph">
                  Aprenderas a adaptar todas tus paginas a dispositivos moviles, para que se vean genial en cualquier dispositivo
                </p>
              </article>

            </div>          
        </section>
    `;
  }
}
customElements.define("learn-section", LearnSection);
