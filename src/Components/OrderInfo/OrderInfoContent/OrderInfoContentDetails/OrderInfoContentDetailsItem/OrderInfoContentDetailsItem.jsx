import React from 'react';
import styles from "./OrderInfoContentDetailsItem.module.css";
import semen from "../../../../../img/details_semen.png";
import deleteOrder from "../../../../../img/details_deleteOrder.png";
import OrderInfoContentDetailsItemPercents from './OrderInfoContentDetailsItemPercents/OrderInfoContentDetailsItemPercents';

const OrderInfoContentDetailsItem = (props) => {

    const percents = props.components.map(
        p => <OrderInfoContentDetailsItemPercents key={p.id} value={p.value} />
        )

    const deleteOrderLocal = () => {
        props.deleteOrder(props.ordreId);
    }

    return <div className={styles.orderInfoDetailsItem}>
        <div className={styles.orderSemen}>
            <img src={semen} alt="Semen img" />
        </div>
        <div className={styles.orderContainer}>
            {percents}
            <div className={styles.orderContainerData}>
                {props.weight} kg
            </div>
            <div className={styles.orderContainerData}>
                {props.price} €
            </div>
        </div>
        <div className={styles.orderDeleteOrder}>
            <img src={deleteOrder} alt="Delete order img" onClick={deleteOrderLocal} />
        </div>
    </div>
}

export default OrderInfoContentDetailsItem;