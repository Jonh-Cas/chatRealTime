import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Inputs from '../components/Inputs';
import 'firebase/database';
import useFirebase from '../hooks/useFirebase';
import moment from 'moment';
import { ScrollView } from 'native-base';
import { map } from 'lodash';

interface Props {
    userName: string;
}

const ChatScreen = ({userName } :Props) => {

    const {messages, writeUserData } = useFirebase();

    const sendMessages = (messages: string) => {
        let time = moment().format('hh:mm a')
        writeUserData(messages, userName, time );
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
