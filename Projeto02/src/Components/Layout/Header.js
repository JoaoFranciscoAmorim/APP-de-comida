import {Fragment} from 'react';
import mealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
function Header (props) {
    return <Fragment>
        <header className={classes.header}>
            <h1>Refeições</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage}></img>
        </div>
    </Fragment>
}
export default Header;
/*-o Fragment é um wrapper, para a função retornar apenas uma coisa, que é o correto em JSX.
-o mealsImage, no import, pode ser qualquer nome, que deve ser chamado no img.*/