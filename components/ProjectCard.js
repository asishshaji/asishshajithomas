import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View
} from "react-native";

import { Entypo } from '@expo/vector-icons';
import React from "react";

const { width, height } = Dimensions.get('window')


const componentName = (props) => (
    <ImageBackground style={styles.imageBG}
        imageStyle={{
            borderRadius: 20
        }}
        blurRadius={100000000}
        resizeMode="cover"
        blurRadius={20}
        source={{
            uri:
                require('../assets/images/bg.jpg')
        }}>
        <View style={{ flex: 1, }}>
            <Image
                style={styles.projectThumb}
                source={{
                    uri:
                        "https://lh3.googleusercontent.com/-igmIShQcgSH0wf3TZUtGjg20oG5-ha9Mm6i5m6tGa48t5WyUwiNdIUb-NfD4G9DTg=w1920-h977-rw"
                }} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>DYUSKSHA 20</Text>
            <Text style={styles.details} numberOfLines={4} ellipsizeMode="clip">Dyuksha 20 is a remarkable vision propelled by an incredible reason and brought about by a strong spark which makes one's contemplations break bonds to sustain a place where nothing and literally nothing is unimaginable. The national level techno-administrative social symposium is an amalgamation of science and artistry. It is innovation and technology acting together, catalyzed by inventiveness, to make the panacea. The intention of Dyuksha 20 is to compose a definitive outlay of innovation, business, culture and flar.</Text>

            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                <Entypo name="google-play" size={32} color="white" onPress={() => Linking.openURL('https://github.com/asishshaji/')} />
                <Entypo name="github-with-circle" size={32} color="white" onPress={() => Linking.openURL('https://github.com/asishshaji/')} />
            </View>

        </View>



    </ImageBackground>
)
export default componentName;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'medium',
        fontSize: 30,
        color: 'white',
        padding: 5, marginBottom: 10,
        alignSelf: 'flex-start'
    },
    titleContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 2, padding: 10, minWidth: 100
    },
    projectThumb: { height: 250, width: 200, left: 25, right: 25, borderRadius: 20, top: -25, bottom: -25 }
    ,
    imageBG: {
        backgroundColor: '#000',
        borderRadius: 20, position: 'relative', margin: 50, flexDirection: 'row', marginTop: 20
    },
    details: {
        fontFamily: 'medium',
        fontSize: 18,
        color: '#fff',
        maxHeight: 200
    }
});
