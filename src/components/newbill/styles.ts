import styled from 'styled-components/native'

interface PropsContainer {
    isVisible?: Boolean
}

export enum ButtonType {
    CONFIRM, 
    CANCEL
}

interface ButtonProps {
    type: ButtonType
}

export const Container = styled.View<PropsContainer>`
    width: 100%;
    display: ${p => p.isVisible ? "flex" : "none"};
    
    margin-top: 10px;
    padding: 5px;
`

export const Content = styled.View`
    align-items: center;
    border: 1px solid #C8C8C8;
    display: flex;
    width: 100%;
    padding: 5px;
    border-radius: 10px;
`


export const Title = styled.Text`
    color: #3D424A;
    font-size: 20px;
    font-weight: 400;
`

export const InputContainer = styled.View`
    display: flex;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Input = styled.TextInput`
    display: flex;
    height: 40px;
    margin: 5px;

    padding-left: 10px;

    background-color: #F5F5F5;
    border-radius: 5px;
`

export const ButtonsContainer = styled.View`
    display: flex;
    width: 100%;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;
    background-color: ${p => p.type == ButtonType.CONFIRM ? "#41C900" : "#C93000"};
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`