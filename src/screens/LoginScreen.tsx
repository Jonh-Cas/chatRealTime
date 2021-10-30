import React from 'react'
import { View, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native'
import { Box, Button, Input, Text } from 'native-base';

interface Props {
    setUserName: any;
}

const logoApp = '../assets/chatLogo.png' 

const LoginScreen = ({ setUserName }: Props) => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar 
                barStyle='light-content'
            />

            <View>
                <Image 
                    source={ require(logoApp)}
                    resizeMode='contain'
                    style={styles.logo}
                />
            </View>
            <Box>
                <Input 
                    placeholder='Nombre del usuario'
                    placeholderTextColor='grey'
                    style={{color: '#fff', marginTop: 30,}}
                />
            </Box>
            <Button style={styles.buttonLogin } >
                <Text style={{color: '#ffffff'}} > Entrar </Text>
            </Button>

        </SafeAreaView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginVertical: 100,
    },

    logo: {
        width: '100%',
        height: 200,
        marginTop: 30,
    },

    buttonLogin: {
        marginTop: 40,
        justifyContent:'center',
        backgroundColor:'#0098d3',
    },
});
