import { useEffect, useRef } from 'react';
import {Keyboard, ScrollView, useWindowDimensions} from 'react-native'




const useScrollToEnd = (messages: any ) => {

    const {height } = useWindowDimensions();
    const chatScrollRef = useRef<ScrollView>(null);
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        
        if(isMounted){

            if (chatScrollRef.current) {
                // chatScrollRef.current.scrollTo({ y: height * height })
                chatScrollRef.current.scrollToEnd()              
            }
        }
            return () => {
                isMounted.current = false;
        }
    }, [messages]);

    return {
        chatScrollRef,
    }

}

export default useScrollToEnd;