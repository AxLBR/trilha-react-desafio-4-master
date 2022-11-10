import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:hover:disabled {
        opacity: 1;
        cursor: default;
    }

    &:disabled{
        background-color: #ae94b6;
        border: 1px solid #ae94b6;
    }
`