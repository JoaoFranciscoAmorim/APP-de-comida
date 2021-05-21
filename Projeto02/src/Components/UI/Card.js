import classes from './Card.module.css'
function Card (props) {
    return <div className={classes.card}>{props.children}</div>
}
export default Card;
/*-Este Card foi criado para "embrulhar" todos os itens da lista mealsList, no AvailableMeals, usando o props.children.*/