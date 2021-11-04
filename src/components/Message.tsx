import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useColorLetter from '../hooks/useColorsLetter';
import letterColors from '../utils/LetterColors';

interface Mens {
    text: string,
    time: string,
    username: string,
}


interface Props {
    userName: string,
    message: Mens,
}

const Message = ({ userName, message, }: Props) => {

    const { text, username, time } = message;

    const colorLetter = useColorLetter(username);

    const thisIsMe = userName === username;


    return (
        <View style={{ ...styles.container, justifyContent: thisIsMe ? 'flex-end' : 'flex-start', }} >
            {!thisIsMe &&
                <View style={{ ...styles.letterView, backgroundColor: `rgb(${colorLetter})` }} >
                    <Text style={styles.letter} >{username.substr(0, 1)}</Text>
                </View>
            }
            <View style={{ ...styles.viewChat, backgroundColor: thisIsMe ? '#f0f0f1' : '#4b86f0' }} >
                <Text style={{
                    ...styles.message,
                    color: thisIsMe ? '#000' : '#ffffffcc',
                    textAlign: thisIsMe ? 'right' : 'left',
                }} >{text}</Text>
                <Text style={[styles.time, (thisIsMe) ? styles.timeLeft : styles.timeRight]} >{time}</Text>
            </View>
        </View>
    )
}

export default Message;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
    },
    letter: {
        fontSize: 18,
        color: '#ffffffcc',
        textTransform: 'uppercase',
    },

    letterView: {
        height: 35,
        width: 35,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: 'red',
    },

    viewChat: {
        borderRadius: 15,
        minHeight: 35,
        minWidth: '40%',
        maxWidth: '80%',
    },

    message: {
        padding: 5,
        paddingBottom: 25,
        color: '#ffffffcc'
    },

    time: {
        fontSize: 10,
        position: 'absolute',
        bottom: 5,
    },

    timeRight: {
        right: 8,
        color: '#ffffffcc',
    },

    timeLeft: {
        left: 8,
        color: 'grey',
    }
})
