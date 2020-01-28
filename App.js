import * as Font from 'expo-font';

import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { Component } from 'react';

import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

class Test extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Font.loadAsync({
      'bold': require('./assets/fonts/ProductSans-Bold.ttf'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{ flex: 1, backgroundColor: '#000' }}
          resizeMode="cover"
          blurRadius={10}
          source={{
            uri:
              'https://lh3.googleusercontent.com/d3x4jETqewdY1y-m33v4JbxW8A1cvecGQk5MTCEPRkr2QUOACkpjeREopkNbBDl2BC0fIcOnFhwzZsd3d6p0IWe26uxL56IkRRXzXuZUVfMkyJ1fA4nl6WOZaHEVlOxWoEpsqZIY5yknmJxgAcAPrt14wFSmQ7lqyOGDXTjdzfhhR8U-x5ZrUFWWmh-RjvGp8pBrB0nTjClXyVAOpr6xiAiK7FFdEJDkJ69QKVl8L77You-3J1ZKQtf5fx9uiLkchKDktAoD5QvLWMb_WjlnbHuYr4VMXojCtPle387LlyOGjXPqHxgMN8PWqoIRpno3P7pTn2S6ZzCK38uQOvajdmLczBA2WFAChFDEqpliE3Ocug1zeAjzu9MKs47hne7iwFpPXtiVryckbYMLLwkkjGUut6ssw52qJig56u7BFZ_r_K3aGX3M-oi-flRVrk7CeF4vJYIv7iYty3sowdLQdVU-XrLymhO10H-iK1ER-YgBSZESTaBpMhzEB6CEc4N1ca8MQcLIPxkEybIOXO9m0bQVEZBDE0dSJ8AWJ34va8shr9sC42rnT_e93gdM6b4YAt55JNQSD7dGC93M1X3LtnDrOf5kVE6i9-JtmcOCDD4lC8bwp1DT-F-js3XElHCOPc1P7sGrZ4qI-qsKYKqh4X0FBeeDrpYUlyibhbLtWUriXaoztOFhwQ=w1303-h978-no',
          }}>
          <View style={styles.innerContainer}>
            <Image
              style={styles.card1image}
              resizeMode="cover"
              source={{
                uri:
                  'https://lh3.googleusercontent.com/44F786qWOSksQq3JjjmbQPrOsYjT6xWpSAm89giuCUkbeCzSvtmrt-n5m0Q4uIo4Rck2yDpLTeGapkA8qznAkAZLWtl98FhaWfWsj44bV_YmuAmtjam3wF-cSfmAFHABfY3PlxefOm5zyo5uMtBSboZM-JHE6a2bh2fg-qfrO675RtzGp_aJ_y9u7-XLHZ064GL-jZxd15h7IumZ9R7UG1B-loigxpBL8fOOt6XTduuW0SUYrwM7AkIWRf6U3LCtrFePTO3w9Xgy-YOoGZktvfh4NDWu87zTiWVNibMamqXCPT1wXKTA5UB1z0HuY9H30DkbHdgE5iJ2cfnfVCIl1R8KbGRgYjqPolR60lhUpbf0Mvo6RjE_3UDkMiOaVpWqUs2uEix9BsVG-x13Yx3kojB0eMme5CzRCMTF_qgQW2eKENW9w3bgZyu5VqC_vdw-H2WmGpiSpU8pEEtuY_2EZHhrvrL6X_I_2xtdlUDinQiuxREKt4QRlNiCQUkaxGmqZKnrXb5pnJrTSvw7Ea7bZn3gO46fxJuaSCUp1U2qwueza0H323J_Rct7mglJlRrIkPLI7OnQw_3SU2_IA4eTKUoCQpUFHYELJ5Yx5STalXDaxCCr93clRjvTEacalhvVvhY9msSM_wCDZRFhKPFwfM5iW-qkQoC1sD9HCBt3Tit5EsK027vG6A=s640-no',
              }}
            />
            <Text style={styles.name} >ASISH SHAJI THOMAS</Text>
            <View style={styles.socialContainer}>
              <Ionicons name="logo-github" size={32} color="white" onPress={() => Linking.openURL('https://github.com/asishshaji/')} />
              <Ionicons name="ios-mail" size={32} color="white" onPress={() => Linking.openURL('mailto:asishshajithomas@gmail.com')} />
              <Ionicons name="logo-twitter" size={32} color="white" onPress={() => Linking.openURL('https://twitter.com/asishshajithom')} />
              <Ionicons name="ios-phone-portrait" size={32} color="white" onPress={() => Linking.openURL('tel:+919400376256')} />
            </View>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
  },
  socialContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    alignSelf: 'center'
  },
  name: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'bold'
  },
  card1image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    boxShadow: "10px",
    zIndex: 10000000,
  },
});
