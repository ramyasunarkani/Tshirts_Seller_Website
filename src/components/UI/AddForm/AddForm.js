import React, { useContext, useState } from "react";
import "./AddForm.css";
import Button from "../Button/Button";
import { FormContext } from "../../../store/FormContext/FormContex";

function AddForm() {
  const { submittedItems, setSubmittedItems } = useContext(FormContext);
  const [isEditing, setIsEditing] = useState(false);
  

  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: 0,
    sizes: { l: 0, m: 0, s: 0 },
  });

  function handleChange(event) {
    const { id, value } = event.target;
    setFormState((prev) => ({ ...prev, [id]: id === "price" ? Number(value) : value }));
  }

  function handleSizeChange(event) {
    const { id, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      sizes: { ...prev.sizes, [id]: Number(value) },
    }));
  }

  
  
  function formSubmitHandler(event) {
    event.preventDefault();
  
    if (!formState.name.trim() || !formState.description.trim() || formState.price <= 0) return;
    if (formState.sizes.l <= 0 && formState.sizes.m <= 0 && formState.sizes.s <= 0) return;

    setSubmittedItems(prev=>[...prev, {...formState,id:parseFloat(Math.random().toString())}]);
    console.log(submittedItems);
  
    setFormState({
      name: "",
      description: "",
      price: '',
      sizes: { l: '', m: '', s: '' },
    });
  
    setIsEditing(false);
  }
  return (
    <div className="condition">
      {!isEditing && <Button onClick={() => setIsEditing(true)}>Add Items</Button>}
      {isEditing && (
        <form onSubmit={formSubmitHandler}>
          <div className="form_control">
            <label htmlFor="name">T-shirt Name</label>
            <input type="text" id="name" value={formState.name} onChange={handleChange} />
            
          </div>
          <div className="form_control">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={formState.description} onChange={handleChange} />
            
          </div>
          <div className="form_control">
            <label htmlFor="price">Amount :</label>
            <input type="number" id="price" value={formState.price} onChange={handleChange} />
            
          </div>
          <div className="form_control">
            <div className="sizes">Quantity Available</div>
            <label htmlFor="l">L :</label>
            <input type="number" id="l" value={formState.sizes.l} onChange={handleSizeChange} />
            <label htmlFor="m">M :</label>
            <input type="number" id="m" value={formState.sizes.m} onChange={handleSizeChange} />
            <label htmlFor="s">S :</label>
            <input type="number" id="s" value={formState.sizes.s} onChange={handleSizeChange} />
          </div>
          <div>
            <Button type="submit">Add Items</Button>
            <Button type="button" onClick={() => setIsEditing(false)}>Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddForm;
