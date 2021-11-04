import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Inputs from '../components/Inputs';
import 'firebase/database';
import useFirebase from '../hooks/useFirebase';
import moment from 'moment';
import { ScrollView } from 'native-base';
import { map } from 'lodash';
import Message from '../components/Message';

interface Props {
    userName: string;
}

const ChatScreen = ({ userName }: Props) => {

    const { messages, writeUserData } = useFirebase();

    const sendMessages = (message: string) => {
        let time = moment().format('hh:mm a')
        writeUserData(message, userName, time);
    }
    console.log(messages);

    return (
        <>
            <View style={styles.content} >
                <View style={styles.headerChat} >
                    <Text style={styles.chatText} > Chat </Text>
                </View>
                <ScrollView
                 style={styles.chatView}
                >
                 { map(messages, (message, index) => (<Message userName={userName} message={message} key={index} />) ) }
                </ScrollView>
                <Inputs sendMessages={sendMessages} />

            </View>

        </>
    )
}


export default ChatScreen;
const styles = StyleSheet.create({

    content: {
        flex: 1,
        justifyContent: 'space-between'
    },

    headerChat: {
        height: 40,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },

    chatText: {
        fontSize: 20,
        color: '#ffffffcc',
    },

    chatView: {
        backgroundColor: '#1b2724',
    }

});
