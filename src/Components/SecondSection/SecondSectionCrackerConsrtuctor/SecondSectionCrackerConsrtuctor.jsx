import React from 'react';
import styles from "./SecondSectionCrackerConsrtuctor.module.css";
import SecondSectionCrackerConsrtuctorInput
    from './SecondSectionCrackerConsrtuctorInput/SecondSectionCrackerConsrtuctorInput';
import SecondSectionCrackerConstructorPackSizeListItem
    from './SecondSectionCrackerConstructorPackSizeListItem/SecondSectionCrackerConstructorPackSizeListItem';
import packImg from "../../../img/SecondSection_pacage.png"

const SecondSectionCrackerConsrtuctor = (props) => {

    const rangeInputs = props.rangeInputs.map(rI => <SecondSectionCrackerConsrtuctorInput key={rI.id}
        id={rI.id} src={rI.src} alt={rI.alt} value={rI.value} disabled={rI.disabled} type={rI.type}
        rangeInputsTotalValue={props.rangeInputsTotalValue}
        changeInputValue={props.changeInputValue}
        calculateMaximumInputValue={props.calculateMaximumInputValue}
        chooseInputValue={props.chooseInputValue} />)

    const packSizeListItems = props.packSizeListItems.map(pSI => {
        return <SecondSectionCrackerConstructorPackSizeListItem type={pSI.type} itemId={pSI.id} key={pSI.id}
            active={pSI.active} chooseOrderSize={props.chooseOrderSize} />
    })

    const showPackSizeListLocal = () => {
        props.showPackSizeList();
    }

    const showButtonAddToCartLocal = () => {
        props.showButtonAddToCart(true);
    }

    const hideButtonAddToCartLocal = () => {
        props.showButtonAddToCart(false);
    }

    const addOrderLocal = () => {
        props.addOrder();
    }

    return <div className={styles.secondSectionCrackerConsrtuctor}>
        <div className={styles.header}>
            cracker constructor
        </div>
        <div className={styles.currentValue}>
            <div className={styles.currentValueText}>
                current value:
            </div>
            <div className={styles.currentValueOrderPrice}>
                {props.orderPrice} €
            </div>
        </div>
        <div className={styles.crackerConsrtuctorInputs}>
            {rangeInputs}
            <div className={styles.pack}>
                <img className={styles.packImg} src={packImg} alt="Choose your pack img" />
                <div className={styles.packChoosing} onClick={showPackSizeListLocal}>
                    {props.orderType} pack ˅
                </div>
                <></>
            </div>
            {
                props.packSizeListVisible ?
                    <div className={styles.packSizeList}>
                        <div className={styles.packSizeListHeader}>
                            choose your pack
                </div>
                        {packSizeListItems}
                    </div> :
                    <></>
            }
        </div>
        <div className={styles.plusContainer}>
            {
                props.buttonAddToCartVisible ? 
                <button onClick={addOrderLocal} onMouseLeave={hideButtonAddToCartLocal}>
                    add to cart
                </button> :
                <div onMouseEnter={showButtonAddToCartLocal} className={styles.plus}>
                    +
                </div>
            }
        </div>
    </div>
}

export default SecondSectionCrackerConsrtuctor;