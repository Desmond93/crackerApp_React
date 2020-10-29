import soebean from "../img/SecondSection_soybean.png";
import sesame from "../img/SecondSection_sesame.png";
import wheat from "../img/SecondSection_wheat.png";
import corn from "../img/SecondSection_corn.png";

const CHANGE_INPUT_VALUE = "CHANGE-INPUT-VALUE";
const CHOOSE_INPUT_VALUE = "CHOOSE-INPUT-VALUE";
const CALCULATE_MAXIMUM_INPUT_VALUE = "CALCULATE-MAXIMUM-INPUT-VALUE";
const CHOOSE_ORDER_SIZE = "CHOOSE-ORDER-SIZE";
const SHOW_PACK_SIZE_LIST = "SHOW-PACK-SIZE-LIST";
const SHOW_BUTTON_ADD_TO_CART = "SHOW-BUTTON-ADD-TO-CART";
const SHOW_ORDER_DETAILS = "SHOW-ORDER-DETAILS";
const ADD_ORDER = "ADD-ORDER";
const DELETE_ORDER = "DELETE-ORDER";

const initialState = {
    cracckerConstructorRangeInputs: [
        {
            id: 0, type: "soebean", src: soebean, alt: "Cracker constructor soebean img",
            value: 0, disabled: false, maxValue: 100, price: 10, weight: 0.8
        },
        {
            id: 1, type: "sesame", src: sesame, alt: "Cracker constructor sesame img",
            value: 0, disabled: false, maxValue: 100, price: 15, weight: 0.9
        },
        {
            id: 2, type: "wheat", src: wheat, alt: "Cracker constructor wheat img",
            value: 0, disabled: false, maxValue: 100, price: 20, weight: 1.1
        },
        {
            id: 3, type: "corn", src: corn, alt: "Cracker constructor corn img",
            value: 0, disabled: true, price: 5, weight: 0.6
        }
    ],
    cracckerConstructorRangeInputsTotalValue: 0,
    packSizeListItems: [
        { id: 0, type: 'small', value: 0.5, active: true },
        { id: 1, type: 'medium', value: 1, active: false },
        { id: 2, type: 'large', value: 2, active: false }
    ],
    orderType: "small",
    orderPrice: (0).toFixed(2),
    orderWeight: (0).toFixed(2),
    orderSize: 0.5,
    packSizeListVisible: false,
    buttonAddToCartVisible: false,
    orderDetailsVisible: false,
    totalPrice: (0).toFixed(2),
    orders: [],
    orderId: 0
}

const crackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                cracckerConstructorRangeInputs: state.cracckerConstructorRangeInputs.map(cCRI => {
                    if ((cCRI.id === action.inputId) &&
                        (cCRI.maxValue >= action.newValue) &&
                        (!cCRI.disabled)) {
                        cCRI.value = action.newValue;
                    }
                    return cCRI;
                })
            };
        case CALCULATE_MAXIMUM_INPUT_VALUE:
            let maxinputValue = 100;
            state.cracckerConstructorRangeInputs.forEach(cCRI => {
                if ((cCRI.id !== action.inputId) && (!cCRI.disabled)) {
                    maxinputValue -= cCRI.value;
                }
            });
            return {
                ...state,
                cracckerConstructorRangeInputs: state.cracckerConstructorRangeInputs.map(cCRI => {
                    if ((cCRI.id === action.inputId) && (!cCRI.disabled)) {
                        cCRI.maxValue = maxinputValue;
                    };
                    return cCRI;
                })
            };
        case CHOOSE_INPUT_VALUE:
            let totalInputValue = 0;
            let orderPriceLocal = 0;
            let orderWeightLocal = 0;
            return {
                ...state,
                cracckerCpackSizeListItemsonstructorRangeInputs: state.cracckerConstructorRangeInputs.map(cCRI => {
                    if (!cCRI.disabled) {
                        totalInputValue += cCRI.value;
                    } else {
                        cCRI.value = totalInputValue === 0 ? 0 : 100 - totalInputValue;
                    }
                    orderPriceLocal += (cCRI.price / 100) * cCRI.value;
                    orderWeightLocal += (cCRI.weight / 100) * cCRI.value;
                    return cCRI;
                }),
                cracckerConstructorRangeInputsTotalValue: totalInputValue,
                orderPrice: (orderPriceLocal * state.orderSize).toFixed(2),
                orderWeight: (orderWeightLocal * state.orderSize).toFixed(2)
            };
        case CHOOSE_ORDER_SIZE:
            let orderSizeLocal = 0;
            let orderPriceNewLocal = 0;
            let orderWeightNewLocal = 0;
            state.cracckerConstructorRangeInputs.forEach(cCRI => {
                orderPriceNewLocal += (cCRI.price / 100) * cCRI.value;
                orderWeightNewLocal += (cCRI.weight / 100) * cCRI.value;
            })
            return {
                ...state,
                packSizeListItems: state.packSizeListItems.map(cCRI => {
                    if (cCRI.id === action.itemId) {
                        cCRI.active = true;
                        orderSizeLocal = cCRI.value;
                    } else {
                        cCRI.active = false;
                    }
                    return cCRI;
                }),
                orderSize: orderSizeLocal,
                orderPrice: (orderPriceNewLocal * orderSizeLocal).toFixed(2),
                orderWeight: (orderWeightNewLocal * orderSizeLocal).toFixed(2),
                orderType: action.itemType,
                packSizeListVisible: false
            };
        case SHOW_PACK_SIZE_LIST:
            return {
                ...state,
                packSizeListVisible: !state.packSizeListVisible
            };
        case SHOW_BUTTON_ADD_TO_CART:
            return {
                ...state,
                buttonAddToCartVisible: action.buttonVisible
            };
        case SHOW_ORDER_DETAILS:
            if(state.orders.length === 0) {
                return state;
            } 
            return {
                ...state,
                orderDetailsVisible: action.orderDetailsVisible
            };
        case ADD_ORDER:
            if (!state.cracckerConstructorRangeInputsTotalValue) {
                return state;
            }
            let newOrder = {
                id: state.orderId,
                components: state.cracckerConstructorRangeInputs.map(cCRI => {
                    return {
                        id: cCRI.id,
                        value: cCRI.value 
                    }
                }),
                weight: state.orderWeight,
                price: state.orderPrice
            }
            return {
                ...state,
                orders: [...state.orders, newOrder],
                totalPrice: ((+state.totalPrice) + (+state.orderPrice)).toFixed(2),
                cracckerConstructorRangeInputs: state.cracckerConstructorRangeInputs.map(cCRI => {
                    cCRI.value = 0;
                    return cCRI;
                }),
                packSizeListItems: state.packSizeListItems.map(pSI => {
                    if(pSI.id === 0) {
                        pSI.active = true;
                    }
                    else {
                        pSI.active = false
                    }
                    return pSI;
                }),
                cracckerConstructorRangeInputsTotalValue: 0,
                orderType: "small",
                orderPrice: (0).toFixed(2),
                orderSize: 0.5,
                packSizeListVisible: false,
                buttonAddToCartVisible: false,
                orderId: state.orderId + 1
            }
        case DELETE_ORDER:
            let priceDeleteOrder = 0;
            state.orders.forEach(o => {
                if(o.id === action.orderId) {
                    priceDeleteOrder = o.price; 
                }
            });
            return {
                ...state,
                totalPrice: (state.totalPrice - priceDeleteOrder).toFixed(2),
                orders: state.orders.filter(o => (o.id !== action.orderId))
            }
        default:
            return state;
    }
}

export const changeInputValueAC = (inputId, newValue) => {
    return { type: CHANGE_INPUT_VALUE, inputId, newValue }
}

export const calculateMaximumInputValueAC = (inputId) => {
    return { type: CALCULATE_MAXIMUM_INPUT_VALUE, inputId }
}

export const chooseInputValueAC = () => {
    return { type: CHOOSE_INPUT_VALUE }
}

export const chooseOrderSizeAC = (itemId, itemType) => {
    return { type: CHOOSE_ORDER_SIZE, itemId, itemType }
}

export const showPackSizeListAC = () => {
    return { type: SHOW_PACK_SIZE_LIST }
}

export const showButtonAddToCartAC = (buttonVisible) => {
    return { type: SHOW_BUTTON_ADD_TO_CART, buttonVisible }
}

export const showOrderDetailsAC = (orderDetailsVisible) => {
    return { type: SHOW_ORDER_DETAILS, orderDetailsVisible }
}

export const addOrderAC = () => {
    return { type: ADD_ORDER }
}

export const deleteOrderAC = (orderId) => {
    return { type: DELETE_ORDER, orderId }
}

export default crackerReducer;