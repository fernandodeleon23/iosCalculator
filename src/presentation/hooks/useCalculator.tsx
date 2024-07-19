import React, { useEffect, useRef, useState } from 'react'

enum Operator{
    add = '+',
    subtract = '-',
    multiplay = 'x',
    divide = '%'
}

export const useCalculator = () => {

    const [ formula, setFormula ] = useState('');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperator = useRef<Operator>();

    // Formula
    useEffect(() => {

        if( lastOperator.current ){

            const firstFormulaPart = formula.split(' ').at(0);

            setFormula( `${ firstFormulaPart } ${ lastOperator.current } ${ number }` )
        }else{

            setFormula( number )
        }
      
        setFormula( number )
    

    }, [ number ]);
    

    const setLastNumber = () => {

        if( number.endsWith('.') ){

            setPrevNumber( number.slice(0,-1) )
            
        }else{

            setPrevNumber( number )
        }

        setNumber('0')
    }

    const divideOperation = () => {

        setLastNumber();

        lastOperator.current = Operator.divide;
    }

    const multiplyOperation = () => {

        setLastNumber();

        lastOperator.current = Operator.multiplay;
    }

    const subtractOperation = () => {

        setLastNumber();

        lastOperator.current = Operator.subtract;
    }

    const addOperation = () => {

        setLastNumber();

        lastOperator.current = Operator.add;
    }

    /* -----------  */

    const reset = () => {

        setNumber('0');
        setPrevNumber('0')
        lastOperator.current =  undefined;
        setFormula( '' )
    }

    const toggleSign = () => {

        if( number.includes('-') ){
            
            return setNumber( number.replace( '-', '' ) )
        }

        setNumber( '-' + number )
    }

    const deleteOperation = () => {

        let currentSign = '';
        let temporalNumber = number;

        if( number.includes('-') ){

            currentSign = '-';
            temporalNumber = number.substring(1)
        }

        if( number.length > 1 ){

            return setNumber( currentSign + temporalNumber.slice(0, -1) );
        }

        return setNumber( '0' );
    }

    const buildNumber = ( numberString:string ) => {

        if( number.includes('.') && numberString === '.' ) return;
        
        if( number.startsWith('0') || number.startsWith('-0') ){

            if( numberString === '.' ){

                return setNumber( number + numberString )
            }

            // Evaluar si es otro cero y no hay punto
            if( numberString === '0' && number.includes('.') ){

                return setNumber( number + numberString )
            }


            // Evaluar si es diferente a cero, no hay punto y es el primer numero
            if( numberString !== '0' && !number.includes('.') ){
                
                return setNumber( numberString )
            }

            // Evitar 0000
            if( numberString === '0' && !number.includes('') ) return;

            return setNumber( number + numberString )
            
        }


        setNumber( number + numberString )

    }

    const calculateResult = () => {

        const number1 = Number( number );
        const number2 = Number( prevNumber );

        switch ( lastOperator.current ) {

            case Operator.add:

                setNumber( `${ number1 + number2 }` )

                break;

            case Operator.subtract:

                setNumber( `${ number2 - number1 }` )

                break;
            
            case Operator.multiplay:

                setNumber( `${ number1 * number2 }` )

                break;

            case Operator.divide:

                setNumber( `${ number2 / number1 }` )

                break;
            
            default:
            
            throw new Error('Operation not implemented');
        }

        setPrevNumber('0')

    }

    return {
        formula,
        number,
        buildNumber,
        prevNumber,
        reset,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult
    }
}
