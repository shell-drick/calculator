import styled from "styled-components";
import $ from "jquery";

const CalcButtonBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
`

const CalcButton = styled.button`
    height: 60px;
    background-color: var(--darkblue);
    color: var(--white);
`

export const calcInput = {
    display: "0",
    lastInput: [],
    currentInput: [],
    operator: null
};

function handleEntry(entry) {
    switch (entry) {
        case "+":
        case "-":
        case "/":
        case "*":
            calcInput.operator = entry;
            calcInput.lastInput = calcInput.currentInput;
            calcInput.currentInput = [];
            calcInput.display = "0";
            break;
        case "=":
            // TODO computer clear & display
            let output = eval(`${calcInput.lastInput.join('')} ${calcInput.operator} ${calcInput.currentInput.join('')}`);
            calcInput.display = output;
            calcInput.currentInput = output;
            break;
        
        case "AC":
            calcInput.display = "0";
            calcInput.currentInput = [];
            calcInput.lastInput = [];
            calcInput.operator = null;
            break;
        default:
            calcInput.currentInput.push(entry);
            calcInput.display = calcInput.currentInput.join('');
    }
    $('#screen').val(calcInput.display);
}

function CalculatorButton(entry) {
    
    return (
        <>
            <CalcButton onClick={() => handleEntry(entry)} id={entry}>{entry}</CalcButton>
        </>
    )
}

export const CalculatorButtonBox = () => {
    const buttons = [ "+", "-", "*", "/", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "AC", "=" ];

    return (
        <>
            <CalcButtonBox>
                {buttons.map((e) => CalculatorButton(e))}

            </CalcButtonBox>
        </>
    )
}