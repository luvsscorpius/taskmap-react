import styled, { createGlobalStyle } from 'styled-components'

export const component = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const contents = styled.div`
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    width: 800px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const logoItems = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    gap: 10px; 

    img {
        object-fit: cover;
        height: 80%;
    }

    p {
        font-size: 15px;
    }
` 

export const formItems = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
`

export const formItemsButtons = styled.div`
    margin: 10px;
    margin-top: 20px;

    .links {
        padding: 10px;
        text-decoration: none;
        color: #000;
        font-size: 20px;
    }

    #reg {
        border-bottom: 5px solid;
        border-color: #75E4DE;
    }
`

export const formInputs = styled.div`
    margin: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    padding: 10px;
    gap: 20px;

    input { 
        display: flex;
        width: 100%;
        height: 55%;
        padding-left: 5px;
        margin-top: 5px;
        background-color: #DDEBFE;
        border: 1px solid;
    }

    #check {
        width: 10px;
        margin-right: 5px;
        cursor: pointer;
    }
`

export const inputs = styled.div`
    width: 100%;
`

export const forgot = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    div {
        display: flex;
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
        background-color: #75E4DE;
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
    }
`