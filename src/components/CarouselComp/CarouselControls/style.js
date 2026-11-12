import {styled, css} from "styled-components";

const ControlsContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: space-between;
`

const CarButton = styled.button`
    width: 5rem;
    height: 100%;

    background-color: unset;
    border: none;
`

const ButtonImg = styled.img`
    width: 100%;
    color: white;
`

export { ControlsContainer, CarButton, ButtonImg }