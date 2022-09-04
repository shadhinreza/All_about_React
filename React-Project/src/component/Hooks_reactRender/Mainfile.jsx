import React, {useCallback, useState} from 'react';
import Title from './Title';
import Button from './Button';
import Showcount from './Showcount';

const Mainfile = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClickOne = useCallback(() =>{
        setCount(prevState => prevState + 1);
    }, [])
    const handleClickTwo = useCallback(() =>{
        setCount2(prevState => prevState + 1);
    }, [])
    return (
        <div className='container mt-3'>
            <Title />
            <Showcount title={'count 1'} count={count}/>
            <Button handleClick={handleClickOne}>Count 1</Button>
            <br />
            <Title />
            <Showcount title={'count 2'} count={count2}/>
            <Button handleClick={handleClickTwo}>Count 2</Button>
        </div>
    );
}

export default Mainfile;
