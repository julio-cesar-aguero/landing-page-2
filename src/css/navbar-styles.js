import { css } from "lit";
export default css`
  .container {
    width: auto;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
  }
  .container--hero {
    padding: 0;
  }
  .nav {
    background-color: #ededed;
    position: relative;
    width: 100%;
    height: 80px;
    overflow: visible;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    cursor: pointer;
    z-index: 100;
    border-radius: 1px;
    margin: 1em;
    
  }
  .nav__list {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: -20%;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--blue);
    padding: 80px 0;
    display: grid;
    place-content: center;
    text-align: center;
    gap: 2.5rem;
    list-style: none;
    transform: translate(-100%);
    transition: transform 0.3s;
  }
  .nav__list--show {
    transform: translate(0);
  }
  .nav__link {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
  /* hero main */
  .hero__main {
    padding-top: 80px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .hero__figure {
    order: -1;

  }
  .hero__img {
    display: block;
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
  }
  .hero__texts {
    display: grid;
    gap: 1.5rem;
    text-align: center;
    padding-bottom: 70px;
  }
  .hero__title {
    font-size: 3rem;
  }
  .hero__paragraph {
    line-height: 1.5;
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  .hero__cta {
    background-color: var(--blue);
    color: #fff;
    text-decoration: none;
    padding: 1em 3em;
    justify-self: center;
    border-radius: 6px;
  }
`;
