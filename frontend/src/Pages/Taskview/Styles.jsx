import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
    }

    body {
        transition: all 0.25s linear;
    }
`

export const component = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s linear;

    @media (max-width: 700px) {
        height: 90vh;
    }
`

export const contents = styled.div`
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid ${(props) => props.theme.colors.maincolor};
    box-shadow: 4px 4px ${(props) => props.theme.colors.maincolor};
    color: ${(props) => props.theme.colors.fontcolor};
    transition: all 0.25s linear;

    @media (max-width: 700px) {
        width: 90%;
        height: 405px;
    }

    .paginate { 
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        text-decoration: none;
        list-style-type: none;
        gap: 10px;
        width: 30%;

        li {
            border-radius: 50%;
            width: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        li:hover {
            background-color: #bbb;
        }
    }

    .page-item {
        background-color: ${(props) => props.theme.colors.content};
    }

    .active {
        background-color: ${(props) => props.theme.colors.btnColor};
        color: #fff;
    }
`

export const title = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    padding-top: 10px;
    transition: all 0.25s linear;

    p {
        font-size: 18px;
    }

    @media (max-width: 700px) {
        height: 70px;
    }
` 

export const inputsContent = styled.form`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
    transition: all 0.25s linear;
    
    input { 
        display: flex;
        width: 75%;
        height: 25px;
        padding-left: 5px;
        background-color: #DDEBFE;
        border: 2px solid ${(props) => props.theme.colors.maincolor};
        border-radius: 5px;
        background-color: var(--bg-color);
        box-shadow: 4px 4px ${(props) => props.theme.colors.maincolor};
        font-weight: 600;
        font-size: 15px;
        color: var(--font-color);
        padding: 5px 10px;
        outline: none;
        transition: all 0.25s linear;

        &::placeholder {
            color: ${(props) => props.theme.colors.fontcolor};
            opacity: 0.8;
            transition: all 0.25s linear;
        }
    }

    button {
        background-color: ${(props) => props.theme.colors.btnColor};
        border: 0;
        width: 120px;
        height: 40px;
        margin-top: 2px;
        border-radius: 7px;
        font-weight: 600;
        color: #fff;
        font-size: 15px;
        transition: all 0.25s linear;

        &:hover {
            cursor: pointer;
        }

        &:active {
            transform: translate(0px, 1px);
        }
    }

    @media (max-width: 700px) {
        width: 95%;
    }
`

export const tasksContent = styled.div`
    width: 98%;
    margin-top: 10px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.content};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 2px;
    transition: all 0.25s linear;

    @media (max-width: 700px) {
        width: 95%;
    }
`

export const task = styled.div`
    width: 95%;
    height: 30px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    background-color: ${(props) => props.theme.colors.taskinfo};
    border-radius: 5px;
    transition: all 0.25s linear;

    @media (max-width: 700px) {
        width: 90%;
    }
`

export const taskInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 8px;
    padding-left: 10px;
    align-items: center;
    transition: all 0.25s linear;
    position: relative;

    input[type="checkbox"] {
        cursor: pointer;
        width: 20px;
        height: 20px;
        transition: .4s;
    }

    .slider {
        position: absolute;
        height: 2px;
        background-color: #000;
        transition: .4s ease;
        top: 50%;
        transform: translateX(30px);
        opacity: 0;
    }

    input[type="checkbox"]:checked + .slider {
        opacity: 1;
        width: 200px;
    }

    input {
        background-color: ${(props) => props.theme.colors.taskinfo};
        border: 0;
        font-weight: 600;
        margin: 0;
        transition: .4s;
        position: relative;
        z-index: 1;
        width: 300px;
        font-size: 16px;
        color: ${(props) => props.theme.colors.fontcolor};
        outline: none;
    }

    .inputFocus {
        border: 2px solid ${(props) => props.theme.colors.inputColor};
    }

    .inputFocus:focus {
        border: 2px solid ${(props) => props.theme.colors.inputColor};
        box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
        outline: none;
    }

    @media (max-width: 700px) {
        width: 75%;

        input[type="checkbox"]:checked + .slider {
            opacity: 1;
            width: 150px;
        }

        input {
            width: 80%;
        }
    }
`;

export const taskBtn = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    transition: all 0.25s linear;
    
    button {
        cursor: pointer;
        border: 0;
        width: 35%;
        background-color: transparent;
        color: ${(props) => props.theme.colors.fontcolor};
    }

    @media (max-width: 700px) {
        button {
            width: 50%;
        }
    }
`

