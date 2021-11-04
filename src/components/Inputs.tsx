import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native'
import { Box, Input as InputNB  } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    sendMessages: ( mess: string ) => void;
}

const Inputs = ({ sendMessages }: Props) => {

    const [message, setMessage] = useState<string>('');

    const onSubmmit = () => {
        if(message.length > 0){
            sendMessages(message);
            setMessage('');
        }
    }

    return (
        
        <View style={styles.container} >
            <Box style={styles.box} >
                <InputNB 
                    placeholder='Mensaje...'
                    style={styles.input}
                    placeholderTextColor='grey'
                    onChangeText={ txt => setMessage(txt) }
                    value={message}
                    keyboardType='name-phone-pad'
                />
                <TouchableOpacity
                    onPress={ onSubmmit }
                >
                    <Icon 
                        name='send'
                        size={25}
                        color='#5555ffcc'
                        style={{marginTop: 5 }}
                    />
                </TouchableOpacity>
            </Box>
        </View>
    )
}

export default Inputs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16202b',
        paddingBottom:  (Platform.OS === 'ios') ? 20 : 0,
        paddingHorizontal: 20,
        
    },
    box: {
        borderColor: 'gray',
        flexDirection: 'row',
        borderTopWidth: 1,
    },

    input: {
        color: '#fff',
        borderWidth: 0,
        flex: 1,
    },

    send: {
        color: '#fff'
    },
})
