import React, {useState} from 'react';
import c from './Counter.module.css';

const Counter = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [evenValue, setEvenValue] = useState('0');
    const [disabled, setDisabled] = useState(true)

    function onDecrease() {
        setCurrentValue(pr => pr - 1)
        forEvenValue()
        if (currentValue === 1) {
            setDisabled(true)
            setEvenValue('0')
        }
    }

    function onIncrease() {
        setCurrentValue(pr => pr + 1)
        setDisabled(false)
        forEvenValue()
    }

    function onReset() {
        setCurrentValue(0)
        setDisabled(true)
        setEvenValue('0')
    }

    function forEvenValue() {
        if (currentValue % 2 === 0) {
            setEvenValue('the entered number is not even')
        } else if (currentValue % 2 !== 0) {
            setEvenValue('the entered number is even')
        }
    }

    let classEvenValueS = (currentValue % 2) ? c.message__even : c.message__uneven;

    return (
        <div className={c.counter}>
            <div className={c.counter__value}>{currentValue}</div>
            <div className={classEvenValueS}>{evenValue}</div>
            <div>
                <button className={c.button__counter} onClick={onDecrease} disabled={disabled}>-</button>
                <button className={c.button__counter} onClick={onReset}>reset</button>
                <button className={c.button__counter} onClick={onIncrease}>+</button>
            </div>
        </div>
    );
};

export default Counter;