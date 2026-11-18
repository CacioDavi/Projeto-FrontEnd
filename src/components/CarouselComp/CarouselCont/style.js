import {styled, css} from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Lista = styled.div`
    position: relative;
    width: 35rem;
    height: 30rem;
    padding: 0;
    
    display: grid;

    & > div {
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
}

& > div.fade {
    opacity: 0;
}

`

export { Container, Lista }