import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Image, StyleSheet } from 'react-native'
import { Box, Button, Input, Text } from 'native-base';

interface Props {
    setUserName: any;
}

const logoApp = '../assets/chatLogo.png' 

const LoginScreen = ({ setUserName }: Props) => {

    const [name, setName] = useState<string>('');

    const onSubmmit = () => {
        setUserName( name )
    }

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
                    value={name}
                    onChangeText={ txt => setName(txt) }
                />
            </Box>
            <Button style={styles.buttonLogin } onPress={onSubmmit} >
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
