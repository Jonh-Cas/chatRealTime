import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Inputs from '../components/Inputs';
import 'firebase/database';
import useFirebase from '../hooks/useFirebase';
import moment from 'moment';
import { KeyboardAvoidingView, ScrollView } from 'native-base';
import { map } from 'lodash';
import Message from '../components/Message';
import useScrollToEnd from '../hooks/useScrollEnd';

interface Props {
    userName: string;
}

const ChatScreen = ({ userName }: Props) => {

    const { messages, writeUserData } = useFirebase();
    const { chatScrollRef } = useScrollToEnd(messages);


    useEffect(() => {

        if (chatScrollRef.current) {
            chatScrollRef.current.scrollToEnd()
        }
        return () => {

        }
    }, [messages])

    console.log(chatScrollRef.current);

    const sendMessages = (message: string) => {
        let time = moment().format('hh:mm a')
        writeUserData(message, userName, time);
    }
    console.log(messages);
    if (messages.length === 0)
        return <ActivityIndicator size={50} color='red' style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} />

    return (

        <KeyboardAvoidingView
            behavior='height'
            enabled={true}
            style={{ flex: 1 }}
            keyboardVerticalOffset={30}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                style={{ flex: 1}}
            >

                <View style={styles.content} >

                    <View style={styles.headerChat} >
                        <Text style={styles.chatText} > Chat </Text>
                    </View>


                    <ScrollView
                        ref={chatScrollRef}
                        style={styles.chatView}
                        // keyboardDismissMode='on-drag'
                    >
                        {map(messages, (message, index) => (
                            <Message userName={userName} message={message} key={index} />
                        ))}
                    </ScrollView>


                    <Inputs sendMessages={sendMessages} />
                </View>

            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
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
