import * as Font from 'expo-font';

import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from "react-native";
import React, { Component } from "react";

import Card from '../components/ProjectCard'
import { Ionicons } from '@expo/vector-icons';

class Projects extends Component {

    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        Font.loadAsync({
            'bold': require('../assets/fonts/ProductSans-Black.ttf'),
            'medium': require('../assets/fonts/ProductSans-Medium.ttf')
        });
    }

    render() {
        const navigate = this.props.navigation
        return (
            <ImageBackground
                style={{ flex: 1, backgroundColor: '#000' }}
                resizeMode="cover"
                blurRadius={30}
                source={{
                    uri:
                        require('../assets/images/bg.jpg')
                }}

            >

                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Ionicons name="ios-arrow-back" size={32} color="white" onPress={() => navigate.goBack()} style={{ position: 'absolute', bottom: 10, left: 20, zIndex: 100000000 }} />
                        <Text style={styles.projectHeader}>PROJECTS</Text>
                    </View>
                    <View style={{ marginTop: 130, flex: 1, alignSelf: 'center', padding: 20 }}>

                        <Card />
                        <Card />



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
        textAlign: 'center',
    },
    titleContainer: {
        marginTop: 30,
        position: 'relative'
    }

});
