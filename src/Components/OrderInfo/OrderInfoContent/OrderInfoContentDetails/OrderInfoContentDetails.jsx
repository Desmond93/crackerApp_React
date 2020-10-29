import React from 'react';
import styles from "./OrderInfoContentDetails.module.css";
import soybean from "../../../../img/details_soybean.png";
import sesame from "../../../../img/details_sesame.png";
import wheat from "../../../../img/details_wheat.png";
import corn from "../../../../img/details_corn.png";
import cancel from "../../../../img/details_cancel.png";
import OrderInfoContentDetailsItem from './OrderInfoContentDetailsItem/OrderInfoContentDetailsItem';

const OrderInfoContentDetails = (props) => {

    const orders = props.orders.map(o => {
        return <OrderInfoContentDetailsItem ordreId={o.id} key={o.id} components={o.components}
        weight={o.weight} price={o.price} deleteOrder={props.deleteOrder} />
    })

    const hideOrderDetails = () => {
        props.showOrderDetails(false);
    }

    return <div className={styles.orderInfoDetails}>
        <div className={styles.imgContainer}>
            <div></div>
            <div className={styles.imgContainerItem}>
                <img src={soybean} alt="Soybean img" />
            </div>
            <div className={styles.imgContainerItem}>
                <img src={sesame} alt="Sesame img" />
            </div>
            <div className={styles.imgContainerItem}>
                <img src={wheat} alt="Wheat img" />
            </div>
            <div className={styles.imgContainerItem}>
                <img src={corn} alt="Corn img" />
            </div>
            <div className={`${styles.imgContainerItem} ${styles.imgContainerItemCancel}`}
                onClick={hideOrderDetails} >
                <img src={cancel} alt="Cancel img" />
            </div>
        </div>
        {orders}
        <div className={styles.detailsFooter}>
            <div className={styles.detailsFooterTotal}>
                total:
            </div>
            <div className={styles.detailsFooterValue}>
                {props.totalValue} €
            </div>
            <div className={styles.detailsFooterCheckout}>
                checkout
            </div>
        </div>
    </div>
}

export default OrderInfoContentDetails;