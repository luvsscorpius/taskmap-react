import styled from "styled-components";

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.maincolor};
    height: 50px;
    display: flex;
    flex-direction: row;
`

export const logoContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;

    p {
     font-weight: bold;
     font-size: 1.5rem;
     color: ${(props) => props.theme.colors.headerFontColor}
    }
`

export const iconsContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 10px;

    .logouticon {
        color: ${(props) => props.theme.colors.headerFontColor}
    }

    .logouticon:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`