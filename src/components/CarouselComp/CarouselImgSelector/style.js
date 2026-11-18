import styled, {css} from "styled-components"

const ThumbList = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 15px;

    list-style: none;

    justify-content: center;

    & li > label {
        width: 6rem;
        height: 5rem;

        overflow: hidden;
        flex-shrink: 0;
    }

    & li > label > input {
        appearance: none;
    }

    & li > label > img {
        width: 100%;
        height: 100%;
        object-fit: contain;

    }

    & li > label:has(> input:checked) {
        border: 5px red solid;

    }
`

export { ThumbList }