import { LitElement, html, css } from "lit";
import "./components/Navbar";
import "./components/NosotrosSection";
import "./components/LearnSection";
export class App extends LitElement {
  static styles = [
    css`
      main{
        padding:0 2.5em;
      }
    `,
  ];
  render() {
    return html`
      <navbar-main></navbar-main>
      
        <nosotros-section></nosotros-section>
        <learn-section></learn-section>
      
    `;
  }
}
customElements.define("app-main", App);
