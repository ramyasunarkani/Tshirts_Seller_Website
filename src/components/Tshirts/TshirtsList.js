import { useContext } from "react";
import { FormContext } from "../../store/FormContext/FormContex";
import  "./TshirtsList.css";
import CartContext from "../../store/CartContext/CartContext";

function TshirtsList() {
    const { submittedItems, decreaseSize } = useContext(FormContext);
    const { cartItems, setCartItems } = useContext(CartContext);

    function AddCartItems(id, name, price, size) {
        setCartItems((prevCartItems) => {
            const existingItemIndex = prevCartItems.findIndex((item) => item.id === id);

            if (existingItemIndex !== -1) {
                return prevCartItems.map((item, index) =>
                    index === existingItemIndex
                        ? {
                              ...item,
                              sizes: {
                                  ...item.sizes,
                                  [size]: (item.sizes?.[size] || 0) + 1,
                              },
                          }
                        : item
                );
            } else {
                return [
                    ...prevCartItems,
                    {
                        id,
                        name,
                        price,
                        sizes: { [size]: 1 },
                    },
                ];
            }
        });

        decreaseSize(id, size); 
    }

    return (
        <ul className="list">
            {submittedItems.map((item) => {
                const sizes = item.sizes || {};
                return (
                    <li key={item.id} className="tshirt-item">
                        <div className="tshirt-info">
                            <h4 className="tshirt-name">{item.name}</h4>
                            <p className="tshirt-description">{item.description}</p>
                            <p className="tshirt-price">${item.price}</p>
                        </div>
                        <div className="tshirt-actions">
                            { sizes.l >0 &&(<button
                                className="buy"
                                onClick={() => AddCartItems(item.id, item.name, item.price, "l")}
                                disabled={sizes.l === 0}
                            >
                                Buy Large ({sizes.l})
                            </button>)}
                            {sizes.m >0 && (
                                <button
                                    className="buy"
                                    onClick={() => AddCartItems(item.id, item.name, item.price, "m")}
                                    disabled={sizes.m === 0}
                                >
                                    Buy Medium ({sizes.m})
                                </button>
                            )}

                            {sizes.s >0 &&(<button
                                className="buy"
                                onClick={() => AddCartItems(item.id, item.name, item.price, "s")}
                                disabled={sizes.s === 0}
                            >
                                Buy Small ({sizes.s})
                            </button>)}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default TshirtsList;
