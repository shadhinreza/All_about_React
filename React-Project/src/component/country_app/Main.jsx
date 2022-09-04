import React,{useEffect,useState} from 'react';
import Countries from './Countries'
import axios  from 'axios';
import Search from './Search';


const Url = 'https://restcountries.com/v3.1/all';
const Main = () => {
    const [mainstatedata, setmainstatedata] = useState([]);
    const [filterData, setFilterData] = useState(mainstatedata);
    const [isLoading, setLoading] = useState(true);
    const [dataError, setDataError] = useState(null);
    
    const axiosData = async (Url) => {
        setLoading(true);
        try{
            const response = await axios.get(Url);
            const data2 = await response.data;
            setmainstatedata(data2);
            setFilterData(data2);
            setLoading(false);
            setDataError(null)
        }catch(error){
            setLoading(false)
            setDataError(error)
        }
    };


    useEffect(() => {
        axiosData(Url)
    }, []);

    const hadleRemoveCountry = (name) => {
        const filter = filterData.filter(country => country.name.common !== name);
        setFilterData(filter)
    }
    const searchComponent = (value) => {
        const searchvalue = value.toLowerCase();
        const newCountrys = filterData.filter(country => {
            const countryName = country.name.common.toLowerCase();
            return countryName.startsWith(searchvalue)
        });
        setFilterData(newCountrys)
    }
    return (
        <div className='container'>
            <h2 className='text-white bg-success text-center p-3 my-3 '>Country App</h2> 
            <Search onSearch={searchComponent}/>
            {isLoading && <h2>Loading...</h2>}
            {dataError && <p className='text-danger'>{dataError.message}</p>} 
            {mainstatedata && <Countries countries={filterData} onRemoveCountry={hadleRemoveCountry}/>}
        </div>
    );
}

export default Main;
