import React, { useContext, useState } from "react";
import { createContext } from "react";

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
}

interface Props {
  children: React.ReactNode;
}

const CustomContext = createContext<CustomContextData>({} as CustomContextData);

const CustomContextProvider: React.FC<Props> = ({ children }) => {
  const [newBillClick, setNewBillClick] = useState<Boolean>(false);
  const [billings, setBillings] = useState<Billing[]>([]);

  function addNewBilling(billing: Billing) {
    setBillings([...billings, billing]);
  }

  function removeBilling(id: string) {
    setBillings(billings.filter((billing) => billing.id != id));
  }

  function getBilling(id: string): Billing | undefined {
    return billings.find((billing) => billing.id === id);
  }

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
