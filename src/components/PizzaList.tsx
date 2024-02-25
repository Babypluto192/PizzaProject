import React, { useEffect, useState } from 'react';
import PizzaCard from "./PizzaCard";
import { IProps } from "./IProps";
import classes from "./pizzalist.module.css"
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const PizzaList = () => {
    const [pizzas, setPizzas] = useState<IProps[]>([]);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function getPizzas() {
            try {

                const res = await fetch("https://66264ca9052332d553226157.mockapi.io/pizzas/Pizza");
                const data = await res.json();
                setPizzas(data);
            } catch (e) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        getPizzas();
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorComponent />;
    }

    return (
        <div className={classes.pizzaList}>
            {pizzas.map((el) =>  (
                <PizzaCard Index={el.Index} key = {el.Index} PizzaImg={el.PizzaImg} PizzaName={el.PizzaName} PizzaPrice={el.PizzaPrice}/>
            ))}
        </div>
    );
};

export default PizzaList;
