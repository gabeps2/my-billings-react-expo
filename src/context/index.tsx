import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "underscore";
export interface Billing {
  id: string;
  name: string;
  value: Number;
  date: Date;
}

interface CustomContextData {
  newBillClick: Boolean;
  setNewBillClick: React.Dispatch<React.SetStateAction<Boolean>>;
  billings: Billing[];
  setBillings: React.Dispatch<React.SetStateAction<Billing[]>>;
  addNewBilling(billing: Billing): void;
  removeBilling(id: string): void;
  getBilling(id: string): Billing | undefined;
  orderBillings(order: Order): void;
}

interface Props {
  children: React.ReactNode;
}

export enum Order {
  DUE,
  PRICE,
}

const CustomContext = createContext<CustomContextData>({} as CustomContextData);

const CustomContextProvider: React.FC<Props> = ({ children }) => {
  const [newBillClick, setNewBillClick] = useState<Boolean>(false);
  const [billings, setBillings] = useState<Billing[]>([]);

  function addNewBilling(billing: Billing) {
    setBillings([...billings, billing]);
    console.log(billings.length);
  }

  function removeBilling(id: string) {
    console.log("teste");
    setBillings(billings.filter((billing) => billing.id !== id));
  }

  function getBilling(id: string): Billing | undefined {
    return billings.find((billing) => billing.id === id);
  }

  function orderBillings(order: Order) {
    setBillings(_.sortBy(billings, order === Order.DUE ? "date" : "value"));
  }

  useEffect(() => {
    const storeData = async (billings: Billing[]) => {
      try {
        await AsyncStorage.setItem("@billings", JSON.stringify(billings));
      } catch (e) {
        console.log(e);
      }
    };
    console.log("save on cache")
    storeData(billings);
  }, [billings]);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@billings");
        if (value !== null) {
          console.log(value)
          setBillings(JSON.parse(value));
        }
      } catch (e) {
        console.log(e);
      }
    };
    console.log("get from cache");
    getData();
  }, []);

  return (
    <CustomContext.Provider
      value={{
        newBillClick,
        setNewBillClick,
        billings,
        setBillings,
        addNewBilling,
        removeBilling,
        getBilling,
        orderBillings,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

function useCustomContext(): CustomContextData {
  const context = useContext(CustomContext);
  return context;
}

export { CustomContextProvider, useCustomContext };
