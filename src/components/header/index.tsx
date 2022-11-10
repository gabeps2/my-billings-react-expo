import React from "react";
import { View } from "react-native";
import { useCustomContext } from "../../context";
import {
  Container,
  HeaderText,
  ButtonsContainer,
  FilterButton,
  NewBillingButton,
  HeaderTextContainer,
  ButtonText,
} from "./styles";
import { styles } from "./styles";

import SortIcon from "react-native-vector-icons/FontAwesome";
import PlusIcon from "react-native-vector-icons/Entypo";

export const Header = () => {
  const { newBillClick, setNewBillClick } = useCustomContext();

  return (
    <Container>
      <HeaderTextContainer>
        <HeaderText> Minhas Contas </HeaderText>
      </HeaderTextContainer>
      <ButtonsContainer>
        <FilterButton>
          <SortIcon name="sort" size={16} color="#3D424A" />
          <ButtonText>Data de vencimento</ButtonText>
        </FilterButton>
        <NewBillingButton
          onPress={() => {
            setNewBillClick(!newBillClick);
          }}
        >
          <PlusIcon name="plus" size={32} color="#fff" />
        </NewBillingButton>
      </ButtonsContainer>
    </Container>
  );
};
