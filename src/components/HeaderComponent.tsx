import React from 'react';
import classes from './header.module.css'
const HeaderComponent = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.h1}> HomemadePizza </h1>
            <nav>
                <ul className={classes.ul}>
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>
                            Buy
                        </span>
                    </li>
                    <li>
                        <span>
                            Delivery
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;