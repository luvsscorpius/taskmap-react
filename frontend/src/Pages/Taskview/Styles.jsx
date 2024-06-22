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
        background-color: #263169;
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
    gap: 5px;
    transition: all 0.25s linear;
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
`

export const taskInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 8px;
    padding-left: 10px;
    align-items: center;
    transition: all 0.25s linear;

    #check {
        cursor: pointer;
        width: 20px;
        height: 20px;
    }

    p {
        font-weight: 600;
        
    }
`

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
    }
`

