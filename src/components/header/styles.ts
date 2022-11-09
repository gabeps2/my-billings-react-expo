import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const HeaderTextContainer = styled.View`
    width: 100%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #57BEE6;
`

export const HeaderText = styled.Text`
    color: #fff;
    font-size: 24px;
`

export const ButtonsContainer = styled.View`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: #fff;
`

export const FilterButton = styled.Button`
    background-color: #EEEEEE;
    border-radius: 5px;

    font-weight: 500;
`

export const NewBillingButton = styled.Button`
    border-radius: 5px;
    background-color: #57BEE6;
`