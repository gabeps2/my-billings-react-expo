import { Button, ButtonContainer, ButtonText, ButtonType, Container, Content, Text, TextContainer } from "./styles";
import { StyleSheet } from "react-native";
import { useCustomContext } from "../../context";
import { useState } from "react";

interface Props {
  id: string;
  name: String;
  value: String;
  date: String;
}

export const Bill = ({ id, name, value, date }: Props) => {
  const { removeBilling } = useCustomContext();
  const [isFinished, setIsFinished] = useState(false);

  return (
    <Container isFinished={isFinished}>
      <Content>
        <TextContainer>
          <Text size="20px" weight="600" isFinished={isFinished}>
            {name}
          </Text>
          <Text color="#41C900" isFinished={isFinished}>
            {value.toString()}
          </Text>
          <Text isFinished={isFinished}>{date}</Text>
        </TextContainer>
        <ButtonContainer style={styles.container}>
          <Button type={ButtonType.CONFIRM} onPress={() => setIsFinished(!isFinished)}>
            <ButtonText>Concluir</ButtonText>
          </Button>
          <Button
            type={ButtonType.CANCEL}
            onPress={() => {
              removeBilling(id);
            }}
          >
            <ButtonText>Excluir</ButtonText>
          </Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
