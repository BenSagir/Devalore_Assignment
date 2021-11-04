/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Option 1', value: 0},
    {label: 'Option 2', value: 1}
];
export default function Form({data}) {
    const [textInput, setTextInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [numberInput, setNumberInput] = useState();
    const [radio, setRadio] = useState(0);
    const [count, setCount] = useState(0);



    function fillAllFields(msg) {      //alert function in case there is name or premission missing
        Alert.alert(
            "Please fill all the fields",
            msg, [{text: "OK", style: "cancel"}],
            {cancelable: true}
        );
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function onSubmit() {
        console.log(numberInput)
        if (textInput.length == 0) {
            fillAllFields('text is missing')
            return;
        }
        if (numberInput <= 0 || numberInput > 1000000 || isNaN(numberInput) || numberInput === '') {
            fillAllFields('postive number smaller then 1 million is missing');
            return;
        }
        if (!validateEmail(emailInput)) {
            fillAllFields('valid email is missing');
            return;
        }
        setEmailInput('');
        setNumberInput();
        setTextInput('');
        setCount(count + 1);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.main}>
                <View style={styles.container}>
                    <Text>Text: </Text>
                    <TextInput
                        textAlign={'center'}
                        autoCapitalize={'none'}
                        style={styles.input}
                        onChangeText={setTextInput}
                        value={textInput}
                        placeholder={'Your text here'}
                        maxLength={25}
                    />
                </View>
                <View style={styles.container}>
                    <Text>Email: </Text>
                    <TextInput
                        textAlign={'center'}
                        autoCapitalize={'none'}
                        style={styles.input}
                        onChangeText={setEmailInput}
                        value={emailInput}
                        placeholder={'Your Email here'}
                    />
                </View>
                <View style={styles.container}>
                    <Text>Number: </Text>
                    <TextInput
                        textAlign={'center'}
                        autoCapitalize={'none'}
                        style={styles.input}
                        onChangeText={setNumberInput}
                        value={numberInput}
                        placeholder={'Only numbers here'}
                        keyboardType={'numeric'}
                    />
                </View>
                <View style={{margin: 15}}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={false}
                        buttonColor={'#000'}
                        onPress={val => setRadio(val)}
                    /></View>

                <TouchableOpacity style={styles.submit} onPress={() => onSubmit()}>
                    <Text style={styles.text}>Submit</Text>
                    <Text style={styles.text}>{count}</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: 'rgb(215,215,220)',
        justifyContent: 'center',
        padding: 15,
        marginVertical: 100,
        //height: Dimensions.get('screen').height * 85 / 100,
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        alignItems: 'center',
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#0d5794',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        height: 35,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 3,
        padding: 10,
        margin: 10,
    },
    submit: {
        backgroundColor: '#2196f3',
        width: Dimensions.get('screen').width * (85 / 100),
        alignItems: 'center',
        borderRadius: 50,
        height: 12 + Dimensions.get('screen').width / 10,
        justifyContent: 'center',
        marginTop: 50
    }
})