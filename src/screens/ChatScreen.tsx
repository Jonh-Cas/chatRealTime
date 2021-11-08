import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator,  ScrollView } from 'react-native'
import Inputs from '../components/Inputs';
import 'firebase/database';
import useFirebase from '../hooks/useFirebase';
import moment from 'moment';
import Message from '../components/Message';
import useScrollToEnd from '../hooks/useScrollEnd';

interface Props {
    userName: string;
}

const ChatScreen = ({ userName }: Props) => {

    // const { height } = useWindowDimensions();
    const { messages, writeUserData } = useFirebase('general');
    const { chatScrollRef } = useScrollToEnd(messages);


    const sendMessages = (message: string) => {
        let time = moment().format('hh:mm a')
        writeUserData(message, userName, time);
    }

    if (messages.length === 0)
        return <ActivityIndicator size={50} color='red' style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} />

    return (

        <View style={styles.content} >

            <View style={styles.headerChat} >
                <Text style={styles.chatText} > Chat </Text>
            </View>

                    <ScrollView
                        ref={chatScrollRef}
                        style={{...styles.chatView}}
                        contentInsetAdjustmentBehavior='automatic'
                        keyboardShouldPersistTaps='handled'
                        removeClippedSubviews={true}
                        
                    >
                      {  messages.map( (value, index) => (
                          <Message userName={userName} message={value} key={index} />
                      ))
                      }
                    </ScrollView>

                    <Inputs sendMessages={sendMessages} />
                 
               
        </View>



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
