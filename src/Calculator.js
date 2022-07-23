import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import svgone from './svg/1.svg';
import svgtwo from './svg/2.svg';
import svgthree from './svg/3.svg';
import svgfour from './svg/4.svg';
import svgfive from './svg/5.svg';
import svgsix from './svg/6.svg';
import svgseven from './svg/7.svg';
import svgeight from './svg/8.svg';
import svgnine from './svg/9.svg';
import svgten from './svg/10.svg';
import svgelevan from './svg/11.svg';
import svgtwele from './svg/12.svg';
import svgsevenfive from './svg/75.svg';

const Calculator = () => {
    const [current, setCurrent] = useState("");
    const [prevoius, setPrevoius] = useState("");
    const [operations, setOperations] = useState("");

    const appendValueHandler = (el) => {
        const value = el.target.getAttribute("data");
        if (value === "." && current.includes(".")) return;
        setCurrent(current + value);
    };

    const deleteHandler = () => {
        setCurrent(String(current).slice(0, -1));
    };

    const allClearHandler = () => {
        setCurrent("");
        setOperations("");
        setPrevoius("");
    };

    const chooseOperationHandler = (el) => {
        if (current === "") return;
        if (prevoius !== "") {
            let value = compute();
            setPrevoius(value);
        } else {
            setPrevoius(current);
        }
        setCurrent("");
        setOperations(el.target.getAttribute("data"));
    };

    const equalHandler = () => {
        let value = compute();
        if (value === undefined || value == null) return;
        setCurrent(value);
        setPrevoius("");
        setOperations("");
    };
    const compute = () => {
        let result;
        let previousNumber = parseFloat(prevoius);
        let currentNumber = parseFloat(current);
        if (isNaN(previousNumber) || isNaN(currentNumber)) return;
        switch (operations) {
            case "÷":
                result = previousNumber / currentNumber;
                break;
            case "x":
                result = previousNumber * currentNumber;
                break;
            case "+":
                result = previousNumber + currentNumber;
                break;
            case "-":
                result = previousNumber - currentNumber;
                break;
            default:
                return;
        }
        return result;
    };

    return (
        <div className='cal-container'>
            <div className='result output'>
                <div className='prev'>{prevoius} {operations}</div>
                <div className='curr'>{current}</div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <button className='numb-box numbox-color' >
                        <img src={svgone} />
                    </button>
                </div>
                <div className='col-3'>
                    <button onClick={allClearHandler} className='numb-box numbox-color' >
                        <img src={svgtwo} />
                    </button>
                </div>
                <div className='col-3'>
                    <button value="c" className='numb-box numbox-color' >
                        <img src={svgthree} />
                    </button>
                </div>
                <div className='col-3'>
                    <button onClick={deleteHandler} className='numb-box numbox-color' >
                        <img src={svgfour} />
                    </button>
                </div>
                <div className='col-3'>
                    <button className='numb-box numbox-color' >
                        <img src={svgfive} />
                    </button>
                </div>
                <div className='col-3'>
                    <button className='numb-box numbox-color' >
                        <img src={svgsix} />
                    </button>
                </div>
                <div className='col-3'>
                    <button className='numb-box numbox-color' >
                        <img src={svgseven} />
                    </button>
                </div>
                <div className='col-3'>
                    <button className='numb-box numbox-color' data={"÷"} onClick={chooseOperationHandler} operation>
                        <img src={svgsevenfive} />
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={7} onClick={appendValueHandler} >
                        7
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={8} onClick={appendValueHandler}>
                        8
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={9} onClick={appendValueHandler}>
                        9
                    </button>
                </div>
                <div className=' col-3'>
                    <button data={"x"} operation onClick={chooseOperationHandler} className='numb-box numbox-color'>
                        <img src={svgeight} />
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={4} onClick={appendValueHandler} >
                        4
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={5} onClick={appendValueHandler}>
                        5
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={6} onClick={appendValueHandler}>
                        6
                    </button>
                </div>
                <div className=' col-3'>
                    <button data={"-"} operation onClick={chooseOperationHandler} className='numb-box numbox-color'>
                        <img src={svgnine} />
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={1} onClick={appendValueHandler}>
                        1
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={2} onClick={appendValueHandler}>
                        2
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={3} onClick={appendValueHandler}>
                        3
                    </button>
                </div>
                <div className=' col-3'>
                    <button data={"+"} operation onClick={chooseOperationHandler} className='numb-box numbox-color'>
                        <img src={svgten} />
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color'>
                        <img src={svgtwele} />
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={0} onClick={appendValueHandler}>
                        0
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box numbox-color number-color' data={"."} onClick={appendValueHandler} decimal>
                        .
                    </button>
                </div>
                <div className=' col-3'>
                    <button className='numb-box btn-equal' equals  onClick={equalHandler}>
                        <img src={svgelevan} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator