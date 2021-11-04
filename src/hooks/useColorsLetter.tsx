import { useEffect, useRef, useState } from 'react';
import letterColors from '../utils/LetterColors';


const useColorLetter = (letter :string) => {

    const isMounted = useRef(true);
    const [colorLetter, setColorLetter] = useState({});

    const selectColors = () => {
        const char = letter.trim()[0].toUpperCase();
        const indexLetter = char.charCodeAt(0) - 65;
        setColorLetter(letterColors[indexLetter]);
    }

    useEffect(() => {
        if(isMounted){
            selectColors();
        }
        return () => {
            isMounted.current= false;
        }
    }, []);

    return colorLetter;
}

export default useColorLetter;