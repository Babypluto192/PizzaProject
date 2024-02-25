import React from 'react';
import PizzaList from "./PizzaList";
import classes from "./main.module.css"
const MainComponent = () => {
    return (
        <div>
            <h3 className={classes.h3}> Choose your pizza</h3>
           <PizzaList />
        </div>
    );
};

export default MainComponent;