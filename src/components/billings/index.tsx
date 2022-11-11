import { FlatList, StyleSheet, ListRenderItem } from "react-native";
import { Billing, useCustomContext } from "../../context";
import { Bill } from "../billing";
import { Container } from "./styles";

export const Billings = () => {
  const { billings } = useCustomContext();

  const _renderItem: ListRenderItem<Billing> = ({ item }) => {
    return <Bill id={item.id} name={item.name} value={currencyFormat(item.value)} date={item.date.toLocaleDateString()} />;
  };
  return (
    <Container contentContainerStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <FlatList
        nestedScrollEnabled
        style={styles.list}
        data={billings}
        keyExtractor={(item) => item.id}
        renderItem={_renderItem}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    width: "100%",
  },
  container: {
    width: "100%",
    padding: 10,
  },
});

function currencyFormat(value: Number) {
  return "R$" + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
