import { FormContext } from "./FormContex";
import React, { useState} from "react";

function FormContextProvider({ children }) {

  const decreaseSize = (id, size) => {
    setSubmittedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.sizes[size] > 0
          ? { ...item, sizes: { ...item.sizes, [size]: item.sizes[size] - 1 } }
          : item
      )
    );
  };
  const [submittedItems, setSubmittedItems] = useState([
    {
      id: 0.0836643379330666,
      name: "Navy Blue Armanis Tshirts",
      description: "100% cotton",
      price: 1299,
      sizes: { l: 98, m: 19, s: 1 },
    },
    {
      id: 0.8596340341905084,
      name: "Gucci Tshirt",
      description: "100% cotton",
      price: 2000,
      sizes: { l: 10, m: 20, s: 19 },
    },
  ]);

  return (
    <FormContext.Provider value={{ submittedItems, setSubmittedItems,decreaseSize }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
