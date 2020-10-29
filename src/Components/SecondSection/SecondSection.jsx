import React from 'react';
import styles from "./SecondSection.module.css";
import SecondSectionCracerInfo from './SecondSectionCrackerInfo/SecondSectionCrackerInfo';
import SecondSectionCrackerConsrtuctor 
    from './SecondSectionCrackerConsrtuctor/SecondSectionCrackerConsrtuctor';

const SecondSection = (props) => {
    return <div className={styles.secondSection}>
        <SecondSectionCracerInfo />
        <SecondSectionCrackerConsrtuctor
            rangeInputs={props.rangeInputs}
            rangeInputsTotalValue={props.rangeInputsTotalValue}
            orderPrice={props.orderPrice}
            packSizeListItems={props.packSizeListItems}
            orderType={props.orderType}
            packSizeListVisible={props.packSizeListVisible}
            buttonAddToCartVisible={props.buttonAddToCartVisible}
            changeInputValue={props.changeInputValue}
            calculateMaximumInputValue={props.calculateMaximumInputValue}
            chooseInputValue={props.chooseInputValue}
            chooseOrderSize={props.chooseOrderSize}
            showPackSizeList={props.showPackSizeList}
            showButtonAddToCart={props.showButtonAddToCart}
            addOrder={props.addOrder} />
    </div>
}

export default SecondSection;