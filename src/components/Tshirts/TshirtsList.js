import  { useContext } from 'react';
import { FormContext } from '../../store/FormContext/FormContex';
import Button from '../UI/Button/Button';
import styles from './TshirtsList.module.css';
import CartContext from '../../store/CartContext/CartContext';

function TshirtsList() {
    const { submittedItems } = useContext(FormContext);
    const { cartItems, setCartItems } = useContext(CartContext);

    function AddCartItems(id, name, price, size) {
        setCartItems(prevCartItems => {
            const existingItemIndex = prevCartItems.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                return prevCartItems.map((item, index) =>
                    index === existingItemIndex
                        ? { 
                            ...item, 
                            sizes: { 
                                ...item.sizes, 
                                [size]: (item.sizes?.[size] || 0) + 1  
                            } 
                          }
                        : item
                );
            } else {
                return [...prevCartItems, { 
                    id, 
                    name, 
                    price, 
                    sizes: { [size]: 1 }  
                }];
            }
        });
        console.log(cartItems);
    }

    return (
        <ul className={styles.list}>
            {submittedItems.map(item => {
                const sizes = item.sizes || {}; 
                return (
                    <li key={item.id} className={styles["tshirt-item"]}>
                        <div className={styles["tshirt-info"]}>
                            <h4 className={styles["tshirt-name"]}>{item.name}</h4>
                            <p className={styles["tshirt-description"]}>{item.description}</p>
                            <p className={styles["tshirt-price"]}>${item.price}</p>
                        </div>
                        <div className="tshirt-actions">
                            <Button className={styles.buy} onClick={() => AddCartItems(item.id, item.name, item.price, "L")}>
                                Buy Large ({sizes.l}) 
                            </Button>
                            <Button className={styles.buy} onClick={() => AddCartItems(item.id, item.name, item.price, "M")}>
                                Buy Medium ({sizes.m})
                            </Button>
                            <Button className={styles.buy} onClick={() => AddCartItems(item.id, item.name, item.price, "S")}>
                                Buy Small ({sizes.s})
                            </Button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default TshirtsList;
