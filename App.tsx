import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform, Image } from "react-native";
import { Billings } from "./src/components/billings";
import { Header } from "./src/components/header";
import { NewBill } from "./src/components/newbill";
import { CustomContextProvider, useCustomContext } from "./src/context";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <CustomContextProvider>
        <View style={styles.container}>
          <Header />
          <NewBill />
          <Billings />
          <StatusBar style="auto" />
        </View>
      </CustomContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
  },
});
