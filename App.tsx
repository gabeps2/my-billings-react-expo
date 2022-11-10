import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { Billing } from "./src/components/billing";
import { Header } from "./src/components/header";
import { NewBill } from "./src/components/newbill";
import { CustomContextProvider, useCustomContext } from "./src/context";

export default function App() {
  const { newBillClick } = useCustomContext();

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <CustomContextProvider>
        <View style={styles.container}>
          <Header />
          <NewBill />
          <Billing/>
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
});
