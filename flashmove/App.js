import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image,TouchableOpacity,SafeAreaView} from 'react-native';
import Torch from 'react-native-torch';
import imagex from './assets/icones/eco-light-off.png';
import imagexon from './assets/icones/eco-light.png';
import logo from './assets/icones/logo-dio.png';
import logowhi from './assets/icones/logo-dio-white.png';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false); //false
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);
  
  useEffect(() => {
    // liga flash do celular
    Torch.switchState(toggle);
    console.log('Trocouo estado da laterna!');
  }, [toggle]);

  useEffect(() => {
    // quando o celular for chacoalhado, mudaremos o toggle
    const subscription = RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle);
    });
    // essa função vai ser chamada quando o componenete for ser desmontado
    return () => subscription.remove();
  },[]);

  return (
  <View style={toggle ? style.containerligth :style.container}>
    <TouchableOpacity onPress={handleChangeToggle}> 
      <Image style={toggle? style.lightingOn:style.lightingOff}
        source={toggle? imagexon : imagex} />
      <Image style={style.diologo}
        source={toggle? logo : logowhi} />
    </TouchableOpacity> 
  </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerligth:{
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  diologo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});