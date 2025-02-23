import { FormContext } from "./FormContex";
import React, { useState, useEffect } from "react";

function FormContextProvider({ children }) {
  const [submittedItems, setSubmittedItems] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("submittedItems"));
    if (storedItems) {
      setSubmittedItems(storedItems);
    }
  }, []);

  // Save data to localStorage whenever the submittedItems state changes
  useEffect(() => {
    if (submittedItems.length > 0) {
      localStorage.setItem("submittedItems", JSON.stringify(submittedItems));
    }
  }, [submittedItems]);

  return (
    <FormContext.Provider value={{ submittedItems, setSubmittedItems }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
