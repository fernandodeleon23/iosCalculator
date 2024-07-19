import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, style } from '../../config/theme/app-theme'

interface Props{
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?:boolean;
    onPress: () => void
}

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress
}:Props) => {

    return (
        <View>

            <Pressable
                onPress={ () => onPress() }
                style={ ({ pressed })=> ({
                    ...style.button,

                    backgroundColor: color,
                    width: (doubleSize) ? 180 : style.button.width,
                    opacity: (pressed) ? 0.8 : 1
                }) }>
                    <Text style={{
                        ...style.buttonText,
                        color: (blackText) ? 'black' : 'white'
                    }}>{ label }</Text>
            </Pressable>
        </View>
    )
}
