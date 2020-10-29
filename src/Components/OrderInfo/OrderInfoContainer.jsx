import React from 'react';
import OrderInfo from './OrderInfo';
import { connect } from 'react-redux';
import { deleteOrderAC, showOrderDetailsAC } from '../../redux/crackerReducer';

const OrderInfoContainer = (props) => {
    return <OrderInfo totalPrice={props.totalPrice} orders={props.orders}
    orderDetailsVisible={props.orderDetailsVisible} deleteOrder={props.deleteOrder}
    showOrderDetails={props.showOrderDetails} />
}

const mapStateToProps = (state) => {
    return {
        totalPrice: state.cracker.totalPrice,
        orders: state.cracker.orders,
        orderDetailsVisible: state.cracker.orderDetailsVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteOrder: (orderId) => dispatch(deleteOrderAC(orderId)),
        showOrderDetails: (orderId) => dispatch(showOrderDetailsAC(orderId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderInfoContainer);