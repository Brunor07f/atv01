import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Platform, TextInput, TouchableOpacity } from 'react-native';
import Saudacao from './components/Saudacao';


const logo=require('./assets/favicon.png')

export default function App() {
  return (
    <SafeAreaView style={[ styles.androidSafeArea]}>                          
      <ScrollView>
        <View>
          <Image source={require('./src/assets/react.png')}/>
        </View>
        
        <View style={styles.container}>

          <View style={style.container}>
            <TextInput
            style={styles.input}
            placeholder='Usuário'
            autoCorrect={false}
            onChangeText={()=> {}}
            />

            <TextInput
            style={styles.input}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={()=> {}}
            />

            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}>
              <Text style={styles.registerText}>Criar conta gratuita</Text>
            </TouchableOpacity>

          </View>
        
        
        
        <View style={styles.separador}></View>


      <StatusBar style="auto" />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
  containerImg: {
    flex: 1,
    justifyContent: 'center'
  ,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },

  input:{
    width:'70%',
    height:40,
    borderWidth:1,
    padding:10,
    fontSize:20,
    borderRadius:10,
  },
  labelInput:{
    width:'100%',
    fontSize:18,
    fontWeight:'bold',
    marginBotton:5,
    marginTop:10
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7
  },
  submitText: {
    color:'#fff',
    fontSize: 18
  },

  btnRegister: {
    marginTop:10,
  },
 

});
