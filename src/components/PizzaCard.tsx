import React from 'react';
import {Button} from "react-bootstrap";
import {IProps} from "./IProps";
import classes from "./pizzacard.module.css"
const PizzaCard = (pizza:IProps) => {
    return (
        <div className={classes.card}>
            <h5> {pizza.PizzaName}</h5>
            <img alt={pizza.PizzaName} src={pizza.PizzaImg}  className={classes.img}/>
            <p className={classes.price}> {pizza.PizzaPrice}тг</p>
            <button>Купить </button>
        </div>
    );
};

export default PizzaCard;