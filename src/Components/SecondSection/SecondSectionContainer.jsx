import React from 'react';
import { connect } from 'react-redux';
import { changeInputValueAC, chooseInputValueAC, calculateMaximumInputValueAC, chooseOrderSizeAC,
    showPackSizeListAC, showButtonAddToCartAC, addOrderAC} from '../../redux/crackerReducer';
import SecondSection from './SecondSection';

const SecondSectionContainer = (props) => {
    return <SecondSection 
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
}

const mapStateToProps = (state) => {
    return {
        rangeInputs: state.cracker.cracckerConstructorRangeInputs,
        rangeInputsTotalValue: state.cracker.cracckerConstructorRangeInputsTotalValue,
        orderPrice: state.cracker.orderPrice,
        packSizeListItems: state.cracker.packSizeListItems,
        orderType: state.cracker.orderType,
        packSizeListVisible: state.cracker.packSizeListVisible,
        buttonAddToCartVisible: state.cracker.buttonAddToCartVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue: (inputId, newValue) => dispatch(changeInputValueAC(inputId, newValue)),
        chooseInputValue: () => dispatch(chooseInputValueAC()),
        calculateMaximumInputValue: (inputId) => dispatch(calculateMaximumInputValueAC(inputId)),
        chooseOrderSize: (itemId, itemType) => dispatch(chooseOrderSizeAC(itemId, itemType)),
        showPackSizeList: () => dispatch(showPackSizeListAC()),
        showButtonAddToCart: (buttonVisible) => dispatch(showButtonAddToCartAC(buttonVisible)),
        addOrder: () => dispatch(addOrderAC())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondSectionContainer);