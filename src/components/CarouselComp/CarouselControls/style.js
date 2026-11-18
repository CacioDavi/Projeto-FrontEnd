
import styled from "styled-components";

const ControlsContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    justify-content: space-between;
`;

const CarButton = styled.button`
    width: 5rem;
    height: 100%;

    background-color: transparent;
    border: none;
    cursor: pointer;

    transition: transform 0.3s ease, opacity 0.3s ease;

    &:hover {
    opacity: 0.8;
    }

    &:active {
    transform: scale(0.95);
    }
`;

const ButtonImg = styled.img`
    width: 100%;
    transition: opacity 0.3s ease;

    ${CarButton}:hover & {
        opacity: 0.7;
    }
`;

export { ControlsContainer, CarButton, ButtonImg };
