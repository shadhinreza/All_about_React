import React, {useState} from 'react';
import Style from './Faq.module.css'

const Faq = ({title,desc}) => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className='offset-3 col-md-6'>
            <article className={Style.article}>
                <h3 className={Style.title}>{title}</h3>
                <section className={Style.buttonrlt}>
                    <button type='button' className= 'btn btn-success' onClick={()=> setToggle(!toggle)}>
                        {toggle ? '+' : '-'}
                    </button>
                </section>
                {toggle && <p className={Style.p}>{desc}</p>}
            </article>
        </div>
    );
}

export default Faq;
