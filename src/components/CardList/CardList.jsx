import { ListContainer, Container } from "./style";

export function CardList({children}) {
  return (
    <Container>
        <ListContainer>
            {children}
        </ListContainer>
    </Container>
  );
}
