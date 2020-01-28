import * as Font from 'expo-font';

import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from "react-native";
import React, { Component } from "react";

class Projects extends Component {

    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        Font.loadAsync({
            'bold': require('../assets/fonts/ProductSans-Bold.ttf'),
            'medium': require('../assets/fonts/ProductSans-Medium.ttf')
        });
    }

    render() {
        return (
            <ImageBackground
                style={{ flex: 1, backgroundColor: '#000' }}
                resizeMode="cover"
                blurRadius={30}
                source={{
                    uri:
                        require('../assets/images/bg.jpg')
                }}>

                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.projectHeader}>PROJECTS</Text>
                    </View>
                    <View style={{ marginTop: 130, flex: 1 }}>

                        <View style={{ borderRadius: 20, marginLeft: 10 }}>
                            <ImageBackground style={{
                                height: 300, width: 300,
                                backgroundColor: '#000',
                                borderRadius: 20, position: 'relative'
                            }}
                                imageStyle={{
                                    borderRadius: 20
                                }}
                                blurRadius={20}
                                resizeMode="cover"
                                // blurRadius={20}
                                source={{
                                    uri:
                                        require('../assets/images/profile.jpg')
                                }}>
                                <Image
                                    style={{ height: 250, width: 250, position: 'absolute', top: -100, left: 25, right: 25, borderRadius: 20 }}
                                    source={{
                                        uri:
                                            require('../assets/images/bg.jpg')
                                    }} />

                                <Text style={{
                                    fontFamily: 'medium', fontSize: 26,
                                    color: 'white', position: 'absolute', bottom: 20, textAlign: 'center', left:10,right:10
                                }}>DYUSKSHA 20 ANDROID APP</Text>

                            </ImageBackground>
                        </View>

                    </View>

                </View>
            </ImageBackground>
        );
    }
}
export default Projects;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    projectHeader: {
        fontFamily: 'bold',
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    },
    titleContainer: {
        marginTop: 30
    }

});
