import { StyleSheet } from 'react-native';
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
    padding: 5px;

    background-color: #fff;
`

export const FilterButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding-left: 5px;

    background-color: #EEEEEE;
    border-radius: 5px;

    font-weight: 300;
`

export const NewBillingButton = styled.TouchableOpacity`
    display: flex;

    align-items: center;
    justify-content: center;
    width: 40px;

    border-radius: 5px;
    background-color: #57BEE6;
`

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    color: #3D424A;
    margin: 10px;
`

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center"
    }
})