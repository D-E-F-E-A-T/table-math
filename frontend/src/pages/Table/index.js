import React, { useState } from 'react';

import './styles.css';

import sum from '../../assets/Soma.svg';

import decrease from '../../assets/Diminuicao.svg';

import division from '../../assets/Divisao.svg';

import multiplication from '../../assets/Multiplicacao.svg';

import tableMath from '../../assets/Table.svg';

export default function Table() {
    const [userNumber, setUserNumber] = useState('');
    const [operation, setOperation] = useState('');

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let calculationResult = [];

    const [calculationNumber, setCalculationNumber] = useState([]);
    const [result, setResult] = useState([]);
    
    function addResult() {
        setResult(calculationResult);
    };

    function calculateOperation(operation) {
        switch(operation){
            case "+":
                numbers.forEach((item, index) => {
                    calculationResult.splice(index, 1, parseInt(userNumber)+item);
                });
                
                break;
            case "-":
                numbers.forEach((item, index) => {
                    calculationResult.splice(index, 1, item-parseInt(userNumber));
                });

                break;
            case "x":
                numbers.forEach((item, index) => {
                    calculationResult.splice(index, 1, parseInt(userNumber)*item);
                });

                break;
            case "÷":
                numbers.forEach((item, index) => {
                    calculationResult.splice(index, 1, item/parseInt(userNumber));
                });

                break;
            default:
                console.log("Error in choosing the operation, try again.");
                
        }
    };

    function changeCalculationNumbers() {
            setCalculationNumber(numbers);
    };

    function changeNumbers(operation) {
        if(operation === "+" || operation === "x") {
            numbers.forEach((item, index) => {
                numbers[index] = index;
            });
        } else if(operation === "÷") {
            numbers.forEach((item, index) => {
                numbers[index] = parseInt(userNumber) * item;
            });    
        } else {
            numbers.forEach((item, index) => {
                numbers[index] = parseInt(userNumber) + item;
            });
        }
    };

    function addOperation(operation){
        setOperation(operation);
    };

    function chooseOperation(operation) {       

        if(userNumber >= 0 && userNumber <= 1000) {
            addOperation(operation);

            changeNumbers(operation);
            
            changeCalculationNumbers();

            calculateOperation(operation);

            addResult();
        } else {
            alert("Escolha um número maior que 0 e menor que 1000 ;)");
        }

    };

    return (
        <div className="table-container">
            <div className="content">
                <div className="content-main">
                    <img src={tableMath} className="table-math" alt="Logo do Table Math" />
                    
                    <section className="body">
                        <input 
                        placeholder="Digite um número"
                        value={userNumber}
                        onChange={e => setUserNumber(e.target.value)}
                        />
                        <p>Escolha uma operação:</p>
                        <div className="buttons-container">
                            <button className="button-calc" onClick={() => chooseOperation("+")} type="button"><img src={sum} alt="Simbolo de somar"/></button>
                            <button className="button-calc" onClick={() => chooseOperation("-")} type="button"><img src={decrease} alt="Simbolo de diminuir"/></button>
                            <button className="button-calc" onClick={() => chooseOperation("÷")} type="button"><img src={division} alt="Simbolo de dividir"/></button>
                            <button className="button-calc" onClick={() => chooseOperation("x")} type="button"><img src={multiplication} alt="Simbolo de multiplicar"/></button>
                        </div>
                    </section>
                </div>
                <div className="result">
                    <h1>Tabuada</h1>
                    <div className="result-container">
                        <div>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[0]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[0]} = {result[0]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[1]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[1]} = {result[1]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[2]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[2]} = {result[2]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[3]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[3]} = {result[3]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[4]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[4]} = {result[4]}</p>
                        </div>
                        <div>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[5]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[5]} = {result[5]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[6]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[6]} = {result[6]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[7]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[7]} = {result[7]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[8]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[8]} = {result[8]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[9]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[9]} = {result[9]}</p>
                            <p>{ operation === "+" || operation === "x" ? userNumber : calculationNumber[10]} { operation } { operation === "-" || operation === "÷" ? userNumber : calculationNumber[10]} = {result[10]}</p>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    );
}