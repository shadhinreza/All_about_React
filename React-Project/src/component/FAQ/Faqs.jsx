import React, {useState} from 'react';
import FaqsData from './Data'
import Faq from './Faq'
const Faqs = () => {
    const [Datas] = useState(FaqsData)
    return (
        <div className='container'>
            <title>FAQS</title>
            <section>
                {Datas.map(Data => <Faq key={Data.id} {...Data}/>)}
            </section>
            
        </div>
    );
}

export default Faqs;
