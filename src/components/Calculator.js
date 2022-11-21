import styled from "styled-components";
import { CalculatorButtonBox } from "./Button";

export const CalculatorBox = styled.div`
    border: 1px solid var(--darkblue);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 20px;
`

export const CalculatorScreen = styled.input`
    width: 100%;
    font-size: 5rem;
    height: 80px;
    border: none;
    background-color: var(--darkblue);
    color: var(--white);
    text-align: right;
    padding-right: 0px;
    padding-left: 10px;
`

export const Calculator = () => {

    return (
        <>
            <CalculatorBox>
                <CalculatorScreen id="screen" disabled></CalculatorScreen>
                <CalculatorButtonBox></CalculatorButtonBox>
            </CalculatorBox> 
        </>
    )
}