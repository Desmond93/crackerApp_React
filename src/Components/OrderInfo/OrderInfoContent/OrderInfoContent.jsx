import React from 'react';
import styles from "./OrderInfoContent.module.css";
import logo from "../../../img/OrderInfo_semen.png";
import OrderInfoContentDetails from './OrderInfoContentDetails/OrderInfoContentDetails';

const OrderInfoContent = (props) => {

    const showOrderDetailsLocal = () => {
        props.showOrderDetails(true);
    }

    return <div>
        <div className={styles.orderInfoContent}>
            <div className={styles.semenContainer}>
                <img className={styles.semen} src={logo} alt="Order info semen" />
                {
                    props.orders.length ?
                        <div className={styles.ordersQuantity}>
                            {props.orders.length}
                        </div> :
                        <></>
                }
            </div>
            <div className={`${styles.orderInfoContentItem} ${styles.orderInfoContentItemTotal}`}>
                <div className={styles.contentItemLeftPart}>
                    total:
            </div>
                <div className={styles.contentItemRightPart}>
                    {props.totalPrice} €
            </div>
            </div>
            <div className={`${styles.orderInfoContentItem} ${styles.orderInfoContentItemDetails}`}
                onMouseEnter={showOrderDetailsLocal}>
                <div className={styles.contentItemLeftPart}>
                    details
            </div>
                <div className={styles.contentItemRightPart}>
                    ˅
            </div>
            </div>
        </div>
        {
            (props.orderDetailsVisible && props.orders.length) ?
                <OrderInfoContentDetails orders={props.orders}
                    deleteOrder={props.deleteOrder}
                    totalValue={props.totalPrice}
                    showOrderDetails={props.showOrderDetails} /> :
                <></>
        }
    </div>
}

export default OrderInfoContent;