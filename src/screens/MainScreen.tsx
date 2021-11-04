import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { Box } from 'native-base';
import ChatScreen from './ChatScreen';
import LoginScreen from './LoginScreen';

const MainScreen = () => {

    const [userName, setUserName] = useState<string>('');

    return (
        <Box style={styles.container} >
           {
               (userName) 
               ? (<ChatScreen userName={userName} /> ) 
               : (<LoginScreen setUserName={setUserName} /> )
           }
        </Box>
    )
}

export default MainScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16202b',
    }
})
