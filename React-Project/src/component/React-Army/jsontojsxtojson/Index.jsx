import React, {useState} from 'react';
import InputSection from './InputSection';
import Operations from './Operations';


function* generateID() {
    let index = 0;
    while(true){
        yield index++
    }  
}
const getID = generateID();

const initialState = {
    a: 0,
    b: 0
}

const Index = () => {
    const [inputFields, setinputFields] = useState({...initialState});
    const [result, setresult] = useState(0);
    const [histores, sethistores] = useState([]);
    const [restorHistory, setRestorHistory] = useState({});

    const inputFieldsData = (e) => {
        setinputFields({...inputFields, [e.target.name] : parseInt(e.target.value)})
    }

    const handleOps = (operator) => {
        if(!inputFields.a || !inputFields.b){
            alert('Invalid input value');
            return;
        }
        const f = new Function (
            'operator', 
            `
            return ${inputFields.a} ${operator} ${inputFields.b}
            `
            )
        let result = f(operator);
        setresult(result)
        //setresult(eval(`${inputFields.a} ${operator} ${inputFields.b}`))
        const history = {
            id: getID.next().value,
            inputs: {...inputFields},
            operator,
            result,
            date: new Date()
        }
        sethistores([history, ...histores])
    };
    
    // const handleOps2 = () => {
    //     setresult(inputFields.a + inputFields.b)
    // };
    // const handleOps2 = () => {
    //     setresult(inputFields.a - inputFields.b)
    // };
    // const handleOps3 = () => {
    //     setresult(inputFields.a * inputFields.b)
    // };
    // const handleOps4 = () => {
    //     setresult(inputFields.a / inputFields.b)
    // }
    const handleClear = () => {
        setinputFields({
            ...initialState
        })
        setresult(0)
        sethistores([])
    }
    const handleRestor = (itemList) => {
        setinputFields(itemList.inputs);
        setresult(itemList.result)
        setRestorHistory(itemList)
    }

    // <input type="number" name='a' value={inputFields.a} onChange={inputFieldsData} />
    //<input type="number" name='b' value={inputFields.b} onChange={inputFieldsData} />

    return (
        <div style={{marginLeft: '30px'}}>
            <h4>Result : {result} </h4>
            <InputSection type='number' inputFields={inputFields} inputFieldsData={inputFieldsData}/>

            <p style={{marginTop: '20px'}}>Operations</p>

           <Operations handleOps={handleOps} handleClear={handleClear}/>

            <div style={{marginTop: '20px'}}>
                <h3>History</h3>
                {histores.length === 0 ? 
                (<p>There is no history</p>) : (
                <ul>  
                    {histores.map(itemList => (
                        <li key={itemList.id}>
                            <p>Operation: {itemList.inputs.a} {itemList.operator} {itemList.inputs.b} , Result: {itemList.result}</p>
                            <p>{itemList.date.toLocaleDateString()} <small>{itemList.date.toLocaleTimeString()}</small>
                            </p>
                            <button onClick={() => handleRestor(itemList)}disabled={itemList.id === restorHistory.id}>Restor</button>
                        </li>
                    ))}
                </ul>
                )} 
            </div>
        </div>
    );
}

export default Index;
