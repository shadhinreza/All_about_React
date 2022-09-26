import {useState} from 'react';

const useCustomHook = ({initialValue= 0,lowerbound= 0, upperbound= 20 }) => {
    const [count, setCount] = useState(initialValue);


    const handleInc = () => {
        if(count < upperbound){
        setCount(count + 1);
        }
    }
    const handleDecre = () => {
        if(count > lowerbound){
        setCount(count - 1);
        }
    }
    return{
            count,
            handleInc,
            handleDecre
        }
}

export default useCustomHook;
