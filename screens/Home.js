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

class Home extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        Font.loadAsync({
            'bold': require('../assets/fonts/ProductSans-Bold.ttf'),
            'medium': require('../assets/fonts/ProductSans-Medium.ttf')
        });
    }

    render() {
        const { navigate } = this.props.navigation
        return (
                <ImageBackground
                    style={{ flex: 1, backgroundColor: '#000' }}
                    resizeMode="cover"
                    blurRadius={1}
                    source={{
                        uri:
                            require('../assets/images/bg.jpg')
                    }}>
                    <View style={styles.innerContainer}>
                        <Image
                            style={styles.card1image}
                            resizeMode="cover"
                            source={{
                                uri:
                                    require('../assets/images/profile.jpg')
                            }}
                        />
                        <Text style={styles.name} >ASISH SHAJI THOMAS</Text>
                        <View style={styles.socialContainer}>
                            <Ionicons name="logo-github" size={32} color="white" onPress={() => Linking.openURL('https://github.com/asishshaji/')} />
                            <Ionicons name="ios-mail" size={32} color="white" onPress={() => Linking.openURL('mailto:asishshajithomas@gmail.com')} />
                            <Ionicons name="logo-twitter" size={32} color="white" onPress={() => Linking.openURL('https://twitter.com/asishshajithom')} />
                            <Ionicons name="ios-phone-portrait" size={32} color="white" onPress={() => Linking.openURL('tel:+919400376256')} />
                        </View>
                        <View style={styles.projects}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => navigate('Projects')}>
                                <Text style={styles.viewAllProjects}>View all projects -></Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </ImageBackground>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
  
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
        fontSize: 26,
        textAlign: 'center',
        marginTop: 20,
        fontFamily: 'bold'
    },
    card1image: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        borderRadius: 10,
        boxShadow: '5px 5px 20px'

    },
    projects: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewAllProjects: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'medium'
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        padding: 15,
        boxShadow: '5px 5px 20px'
    }
});
