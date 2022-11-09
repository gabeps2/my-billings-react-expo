import { Container, HeaderText, ButtonsContainer, FilterButton, NewBillingButton, HeaderTextContainer } from "./styles";

export const Header = () => {
  return (
    <Container>
      <HeaderTextContainer>
        <HeaderText> Minhas Contas </HeaderText>
      </HeaderTextContainer>
      <ButtonsContainer>
        <FilterButton title="Data de vencimento" />
        <NewBillingButton title="" />
      </ButtonsContainer>
    </Container>
  );
};
