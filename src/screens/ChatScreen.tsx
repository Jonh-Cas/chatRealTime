import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Inputs from '../components/Inputs';
import Firebase from '../utils/Firebase';
import 'firebase/database';

const ChatScreen = () => {

    const sendMessages = (messages: string) => {
        console.log(messages);
    }

    return (
        <>
            <View style={styles.content} >
                <Text > Chat </Text>
                <Inputs sendMessages={sendMessages } />

            </View>

        </>
    )
}


export default ChatScreen;
const styles = StyleSheet.create({
    
    content: {
        flex: 1,
        justifyContent: 'space-between'
    }

});
