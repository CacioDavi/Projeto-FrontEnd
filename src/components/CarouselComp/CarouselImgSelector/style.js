import styled, {css} from "styled-components"

const ThumbList = styled.ul`
    display: flex;
    flex-direction: row;
    padding: 0;

    list-style: none;

    justify-content: space-between;

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

        border: 1px blue solid;
    }

    & li > label:has(> input:checked) {
        border: 5px red solid;

    }
`

export { ThumbList }