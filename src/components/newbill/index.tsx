import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import MaskInput, { Masks } from "react-native-mask-input";
import { useCustomContext } from "../../context";
import uuid from "react-native-uuid";
import { Button, ButtonsContainer, ButtonType, ButtonText, Container, Input, InputContainer, Title, Content } from "./styles";

export const NewBill = () => {
  const { billings, newBillClick, setNewBillClick, addNewBilling } = useCustomContext();

  const [name, setName] = useState("");
  const [value, setValue] = useState<Number>(-1);
  const [date, setDate] = useState("");

  function validateValueInput(text: String) {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert("Digite apenas números");
      }
    }
    setValue(Number(newText));
  }
  function toDate(text: string): Date {
    return new Date(text);
  }

  function validateForm() {
    if (name.length > 0 && value !== -1 && date.length > 0) {
      addNewBilling({ id: uuid.v1().toString(), name: name, value: value, date: toDate(date) });
    }
  }

  return (
    <Container isVisible={newBillClick}>
      <Content>
        <Title>Adicionar nova conta</Title>
        <InputContainer>
          <Input placeholder="Nome" onChangeText={(e) => setName(e)} keyboardType="numeric" />
          <Input placeholder="Valor" onChangeText={(e) => validateValueInput(e)} />
          <MaskInput
            value={date}
            style={style.inputDateStyle}
            placeholder="Data de vencimento"
            onChangeText={(masked, unmasked) => setDate(masked)}
            mask={Masks.DATE_DDMMYYYY}
          />
          <ButtonsContainer>
            <Button type={ButtonType.CONFIRM} onPress={validateForm}>
              <ButtonText>Confirmar</ButtonText>
            </Button>
            <Button
              type={ButtonType.CANCEL}
              onPress={() => {
                setNewBillClick(!newBillClick);
              }}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
          </ButtonsContainer>
        </InputContainer>
      </Content>
    </Container>
  );
};

const style = StyleSheet.create({
  inputDateStyle: {
    display: "flex",
    height: 40,
    margin: 5,
    paddingLeft: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
  },
});
