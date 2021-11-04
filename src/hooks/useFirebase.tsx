import { useEffect, useRef, useState } from 'react';
import { db } from "../utils/Firebase";
import { ref, push, onValue } from 'firebase/database';

const useFirebase = () => {

    const isMounted = useRef(true);
    const [messages, setMessages] = useState([{}]);

    const writeUserData = (text: string, time: string, username: string) => {
        push(ref(db, 'general'), {
            text,
            time,
            username,
        });
    }

    const readUserData = () =>{
        const startCountRef = ref(db, 'general' );
        onValue( startCountRef, (snapshot) => {
            setMessages([snapshot.val()]);
        });
    }

    useEffect(() => {
        
        if(isMounted){
            readUserData();
        }

        return () => {
            isMounted.current = false
        }
    }, [])

    return {
        messages,
        writeUserData,
        readUserData,
    }

}


export default useFirebase;