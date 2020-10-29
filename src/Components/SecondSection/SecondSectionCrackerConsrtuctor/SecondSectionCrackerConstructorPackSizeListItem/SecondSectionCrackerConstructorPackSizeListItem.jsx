import React from 'react';
import styles from "./SecondSectionCrackerConstructorPackSizeListItem.module.css";

const SecondSectionCrackerConstructorPackSizeListItem = (props) => {
    
    const chooseOrderSizeLocal = () => {
        props.chooseOrderSize(props.itemId, props.type)
    }

    return <div className={`${styles.packSizeListItem} ${props.active ? styles.packSizeListItemActive : null}`}
        onClick={chooseOrderSizeLocal}>
        {props.type} pack
    </div>
}

export default SecondSectionCrackerConstructorPackSizeListItem;