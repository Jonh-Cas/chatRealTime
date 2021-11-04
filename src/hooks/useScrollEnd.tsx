import { useEffect, useRef } from 'react';
import {FlatList} from 'react-native'



const useScrollToEnd = (messages: any ) => {

    const chatScrollRef = useRef<FlatList>(null);
    const isMounted = useRef(true);

    useEffect(() => {
        
        if(isMounted){

            if (chatScrollRef.current) {
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