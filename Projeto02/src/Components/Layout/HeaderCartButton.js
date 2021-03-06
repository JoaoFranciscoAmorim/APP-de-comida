import {useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../Cart/cart-context'
import classes from './HeaderCartButton.module.css'
function HeaderCartButton (props) {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>
            Seu Carrinho
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}
export default HeaderCartButton