
import { Pressable, Text, View } from 'react-native'
import { colors, style } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const {
        number,
        buildNumber,
        prevNumber,
        reset,
        deleteOperation,
        toggleSign,
        addOperation,
        multiplyOperation,
        divideOperation,
        subtractOperation,
        calculateResult
    } = useCalculator();

    return (
        <View style={ style.calculatorContainer }>
            
            <View style={{ paddingHorizontal:30, paddingBottom:20 }}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={ 1 }
                    style={ style.mainResult }>{ number }</Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={ 1 }
                    style={ style.subResult }>
                        { (prevNumber === '0') ? '' : prevNumber }
                    </Text>
            </View>
            
            <View style={ style.row }>

                <CalculatorButton onPress={ reset } label='C' color={ colors.lightGray } blackText></CalculatorButton>

                <CalculatorButton onPress={ toggleSign } label='+/-' color={ colors.lightGray } blackText></CalculatorButton>

                <CalculatorButton onPress={ deleteOperation } label='del' color={ colors.lightGray } blackText></CalculatorButton>

                <CalculatorButton onPress={ divideOperation } label='%' color={ colors.orange }></CalculatorButton>

            </View>

            {/* Fila 2 */}

            <View style={ style.row }>

                <CalculatorButton onPress={ ()=> buildNumber( '7' ) } label='7' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '8' ) } label='8' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '9' ) } label='9' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ multiplyOperation } label='x' color={ colors.orange }></CalculatorButton>

            </View>

            {/* Fila 3 */}

            <View style={ style.row }>

                <CalculatorButton onPress={ ()=> buildNumber( '4' ) } label='4' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '5' ) } label='5' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '6' ) } label='6' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ subtractOperation } label='-' color={ colors.orange }></CalculatorButton>

            </View>

            {/* Fila 4 */}

            <View style={ style.row }>

                <CalculatorButton onPress={ ()=> buildNumber( '1' ) } label='1' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '2' ) } label='2' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '3' ) } label='3' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ addOperation } label='+' color={ colors.orange }></CalculatorButton>

            </View>

            {/* Fila 5 */}

            <View style={ style.row }>

                <CalculatorButton
                    onPress={ () => buildNumber( '0' ) }
                    label='0'
                    color={ colors.darkGray }
                    doubleSize
                    ></CalculatorButton>

                <CalculatorButton onPress={ ()=> buildNumber( '.' ) } label='.' color={ colors.darkGray }></CalculatorButton>

                <CalculatorButton onPress={ calculateResult } label='=' color={ colors.orange }></CalculatorButton>

            </View>
            
        </View>
    )

}
