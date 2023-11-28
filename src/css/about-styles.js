import { css } from "lit";
export default css`
    /* About Styles */
    .about{
        background-color: var(--background);
    }
    .about__container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        
    }
    .about__img{
        display: block;
        width: 90%;
        aspect-ratio: 1/1;
        max-width: 280px;
        margin: 0 auto;
        object-fit: cover;
        object-position: top;
        border-radius: 50%;
    }
    .about__texts{
        text-align: center;
        display: grid;
        gap: 1.5rem;
    }
    .subtitle{
        text-align: center;
        font-size: 2.1rem;
    }
    .paragraph{
        line-height: 1.5;
        font-weight: 300;
        padding: 1em;
    }
`;