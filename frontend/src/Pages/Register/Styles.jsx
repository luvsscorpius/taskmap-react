import styled, { createGlobalStyle } from 'styled-components'

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
`

export const contents = styled.div`
    width: 800px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.fontcolor};
    transition: all 0.25s linear;
`

export const logoItems = styled.div`    
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    gap: 10px; 
    font-weight: 600;

    img {
        object-fit: cover;
        height: 80%;
    }

    p {
        font-size: 15px;
    }
` 

export const formItems = styled.form`
    padding: 20px;
    border: 2px solid ${(props) => props.theme.colors.maincolor};
    box-shadow: 4px 4px ${(props) => props.theme.colors.maincolor};
    transition: all 0.25s linear;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const formItemsButtons = styled.div`
    margin: 10px;
    margin-top: 20px;
    display: flex;
    width: 100%;

    .links {
        padding: 10px;
        text-decoration: none;
        color: ${(props) => props.theme.colors.fontcolor};
        font-size: 20px;
        transition: all 0.25s linear;
    }

    #reg {
        border-bottom: 5px solid;
        border-color: #263169
    }
`

export const formInputs = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    padding: 10px;
    gap: 10px;

    input { 
        display: flex;
        width: 100%;
        height: 30px;
        padding-left: 5px;
        margin-top: 2px;
        background-color: #DDEBFE;
        border: 2px solid ${(props) => props.theme.colors.maincolor};
        border-radius: 5px;
        background-color: var(--bg-color);
        box-shadow: 4px 4px ${(props) => props.theme.colors.maincolor};
        font-weight: 600;
        font-size: 15px;
        color: ${(props) => props.theme.colors.fontcolor};
        padding: 5px 10px;
        outline: none;
        transition: all 0.25s linear;

        &::placeholder {
            color: ${(props) => props.theme.colors.fontcolor};
            opacity: 0.8;
            transition: all 0.25s linear;
        }
    }

    #check {
        width: 10px;
        margin-right: 5px;
        cursor: pointer;
        box-shadow: none;
    }
`

export const inputs = styled.div`
    width: 95%;
`

export const forgot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }
`

export const login = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    p {
        font-size: 15px;
    }

    button {
        background-color: #263169;
        border: 0;
        width: 200px;
        height: 40px;
        border-radius: 7px;
        font-weight: 600;
        color: #fff;
        font-size: 15px;

        &:hover {
            cursor: pointer;
        }

        &:active {
            transform: translate(0px, 1px);
        }
    }
`