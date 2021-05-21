import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import {useContext} from 'react'
import CartContext from './cart-context'
import CartItem from './CartItem'
function Cart (props) {
    const cartCtx = useContext(CartContext)
    const totalAmount = `R$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const cartItemRemoveHandler = id => {}
    const cartItemAddHandler = item => {}
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map((item) => (<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
        ))}
        </ul>
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Quantidade Total</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Fechar</button>
            {hasItems && <button classname={classes.button}>Fazer pedido</button>}
        </div>
    </Modal>
}
export default Cart;