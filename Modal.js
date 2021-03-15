import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
//import { db } from './firebase';

export default function Modal(props) 
{
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    //Arrumar conecção com firabase
    /*const enviarMensagem = () =>
    {
        db.collection('contato').add({
            nome: nome,
            mensagem: mensagem
        })
        alert('Mensagem enviada com sucesso');
     
        setNome('');
        setMensagem('');
    }*/
 
    
    return (
        <View style = {style.modalParent}>
            <View style = {{position: 'absolute', right: 0, top: 0, width:50, height: 50, 
                backgroundColor: '#333', justifyContent: 'center'}}
            >
                <TouchableOpacity onPress = {() => /*props.*/setModal(!/*props.*/showModal)} 
                    style = {{height: '100%', width: '100%', backgroundColor: '#333', justifyContent: 'center'}}
                >
                    <Text style = {{color: 'white', textAlign: 'center'}}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={style.boxModal}>
            <Text style = {{...style.textHeader, fontSize: 15}}>Qual o seu nome? </Text>
            <TextInput onChangeText = {(text) => setNome(text)} style = {{height: 40, width: '100%',  borderColor:'#ccc', borderWidth: 1, marginBottom: 20}} numberOfLines={4}>
            </TextInput>
            <Text style = {{...style.textHeader, fontSize: 15}}>Qual o sua mensagem? </Text>
            <TextInput onChangeText = {(text) => setMensagem(text)} style = {{height: 80, width: '100%',  borderColor: '#ccc', borderWidth: 1, marginBottom: 20}} numberOfLines={8}>
            </TextInput>
            <TouchableOpacity onPress={() => enviarMensagem()} style = {{...style. btnNavigation, justfyContent:'center'}}
            >
                <Text style = {{color: 'white', fontSize: 14}}>Enviar</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
} 

const style = StyleSheet.create ({
    textHeader:
    {
        color: '#5f5380',
        fontSize: 24
    },
    modalParent:
  {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 1
  },
  btnNavigation:
  {
    backgroundColor: '#5f5380',
    padding: 20,
    marginTop: 15,
    flexDirection: 'row'
  },
  boxModal:
  {
    backgroundColor: 'white',
    height: 370,
    width: '100%',
    position: 'absolute',
    left: 0,
    top: '50%',
    marginTop: -185,
    padding: 10
  }

})