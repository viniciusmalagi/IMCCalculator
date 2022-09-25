import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import ResultImc from "./../ResultImc"
import styles from "./style"
export default function Form(){

const [height, setHeight]=useState(null)
const [weight, setWeight]=useState(null)
const [messageImc, setMessageImc]=useState("Preencha o peso e altura!")
const [imc, setImc]=useState(null)
const [textButton, setTextButton]=useState("Calcular")

function imcCalculator(){
    return parseFloat(setImc((weight/(height * height)).toFixed(2)))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator();
        setMessageImc("Seu IMC Supimpa é: ")
        setTextButton("Calcular Novamente")
        setHeight(null)
        setWeight(null)
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura!")
}

    return(
        <View style={styles.formContext}>
             <View style={styles.form}>
                 <Text style={styles.formLabel}>Altura</Text>
                 <TextInput
                 style={styles.input}
                 onChangeText={setHeight}
                 value={height}
                 placeholder="Ex: 1.75"
                 keyboardType="numeric"
                 ></TextInput>
                 <Text style={styles.formLabel}>Peso</Text>
                 <TextInput
                 style={styles.input}
                 onChangeText={setWeight}
                 value={weight}
                 placeholder="Ex: 70"
                 keyboardType="numeric"
                 ></TextInput>
                 <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => {validationImc() }}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                 </TouchableOpacity>
             </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
