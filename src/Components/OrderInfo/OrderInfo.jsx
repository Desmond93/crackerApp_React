import React from 'react';
import styles from "./OrderInfo.module.css";
import OrderInfoLogo from './OrderInfoLogo/OrderInfoLogo';
import OrderInfoContent from './OrderInfoContent/OrderInfoContent';

const OrderInfo = (props) => {
    return <div className={styles.orderInfo}>
        <OrderInfoLogo />
        <OrderInfoContent totalPrice={props.totalPrice} orders={props.orders} 
        orderDetailsVisible={props.orderDetailsVisible} deleteOrder={props.deleteOrder}
        showOrderDetails={props.showOrderDetails} />
    </div>
}

export default OrderInfo;