import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100%;
`;

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export { ListContainer, Container };