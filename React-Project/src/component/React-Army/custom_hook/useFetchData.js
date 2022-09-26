import { useEffect, useState } from "react";


const useFetchData = (URL,cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try{
        let res = await fetch(URL)
        let result = await res.json();
        if(cb){
            setData(cb(result))
        }else{
            setData(result);
        }
        setErr('')
        setLoading(false)
    }
    catch(e){
        setErr(e.message);
        setLoading(false)
    }
  }
  return {
    data,
    loading,
    err
  }

}

export default useFetchData;
