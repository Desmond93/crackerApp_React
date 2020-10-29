import React from 'react';
import styles from "./SecondSectionCrackerConsrtuctorInput.module.css";

const SecondSectionCrackerConsrtuctorInput = (props) => {

    const inputIsChanging = (event) => {
        props.changeInputValue(props.id, event.target.valueAsNumber);        
    }

    const inputWasClick = () => {
        props.calculateMaximumInputValue(props.id)
    }

    const inputWasChange = () => {
        props.chooseInputValue();
    }

    return <div className={styles.secondSectionCrackerConsrtuctorInput}>
        <img className={styles.rangeInputImg} src = {props.src} alt = {props.alt}/>
        <input className={
            `${styles.rangeInput}
            ${props.type === "soebean"?styles.soebean:null}
            ${props.type === "sesame"?styles.sesame:null}
            ${props.type === "wheat"?styles.wheat:null}
            ${props.type === "corn"?styles.corn:null}`} 
            onChange={inputIsChanging} 
            onMouseDown={inputWasClick} 
            onMouseUp={inputWasChange} 
            type="range" value={props.value}>
        </input>
        <div className={styles.rangeInputValue}>
            {props.value} %
        </div>
    </div>
}

export default SecondSectionCrackerConsrtuctorInput;