import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import {useRef, useState} from 'react'
function MealItemForm (props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef()
    function submitHandler (event) {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef}
            label='Quantidade' input={{
            id: 'amount' + props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }}></Input>
        <button>
            + Adicionar
        </button>
        {!amountIsValid && <p>Por favor insira um valor válido (1-5).</p>}
    </form>
}
export default MealItemForm;