import styled from 'styled-components/native'

interface TextProps {
    color?: string
    size?: string
    weight?: string
    isFinished: Boolean
}

export enum ButtonType {
    CONFIRM,
    CANCEL
}

interface ButtonProps {
    type: ButtonType
}

interface ContainerProps {
    isFinished: Boolean
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #EEEEEE;
    margin-bottom: 10px;
    border-radius: 10px;

    background-color: ${p => p.isFinished ? "#F1FFEB" : "#fff"};
    padding: 10px;
`

export const Content = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.Text<TextProps>`
    color: ${p => p.color ? p.color : "#3D424A"};
    font-size: ${p => p.size ? p.size : "16px"};
    font-weight: ${p => p.weight ? p.weight : "400"};
    text-decoration: ${p => p.isFinished ? "line-through" : "none"}
`

export const TextContainer = styled.View`
    width: 100%;
    
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-around;
`

export const ButtonContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const ButtonsContainer = styled.View`
    display: flex;
    width: 100%;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 30%;
    height: 40px;

    margin: 5px;

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