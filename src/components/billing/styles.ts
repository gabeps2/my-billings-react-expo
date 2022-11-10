import styled from 'styled-components/native'

interface TextProps {
    color?: string
    size?: string
    weight?: string
}

export const Container = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

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
    font-size: ${p => p.size ? p.size : "12px"};
    font-weight: ${p => p.weight ? p.weight : "400"};
`

export const ButtonContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Button = styled.TouchableOpacity`

`