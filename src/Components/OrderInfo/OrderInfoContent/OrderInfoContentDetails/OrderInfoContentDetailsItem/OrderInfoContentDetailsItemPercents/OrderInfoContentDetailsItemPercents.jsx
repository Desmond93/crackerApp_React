import React from 'react';
import styles from "./OrderInfoContentDetailsItemPercents.module.css";

const OrderInfoContentDetailsItemPercents = (props) => {
    return <div className={styles.orderInfoContentDetailsItemPercents}>
        {props.value}%
    </div>
}

export default OrderInfoContentDetailsItemPercents;