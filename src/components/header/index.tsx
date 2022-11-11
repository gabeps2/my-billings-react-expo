import React, { useEffect, useState } from "react";
import { Order, useCustomContext } from "../../context";
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
  const { newBillClick, setNewBillClick, orderBillings } = useCustomContext();
  const [orderBy, setOrderBy] = useState<Order>(Order.DUE);

  useEffect(() => {
    orderBillings(orderBy);
  }, [orderBy]);

  return (
    <Container>
      <HeaderTextContainer>
        <HeaderText> Minhas Contas </HeaderText>
      </HeaderTextContainer>
      <ButtonsContainer>
        <FilterButton onPress={() => setOrderBy(orderBy === Order.DUE ? Order.PRICE : Order.DUE)}>
          <SortIcon name="sort" size={16} color="#3D424A" />
          <ButtonText>{orderBy === Order.DUE ? "Data de vencimento" : "Valor"}</ButtonText>
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
