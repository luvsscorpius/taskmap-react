import styled from "styled-components";

export const buttonContent = styled.div`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
    margin: 10px;

    input {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2; // Tendo certeza que o input está em cima do slider
        cursor: pointer;
    }

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 30px;

        &:before {
            position: absolute;
            content: '';
            height: 22px;
            width: 22px;
            left: 4px;
            bottom: 4px;
            background-color: #000;
            transition: .4s;
            border-radius: 50%;
        }
    }

    input:checked + .slider:before {
        transform: translateX(30px);
    }

    .icons {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
        box-sizing: border-box;

        svg {
            width: 20px;
            height: 20px;
        }
`