import React from 'react';
import Country from './Country';
import {v4 as uuid} from 'uuid';

const Countries = (props) => {
    const { countries } = props;
    return (
        <section className='row'>
            {countries.map(country => {
                const newCountry = {...country, id: uuid()}
                return <Country country= {newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry}/>
            })}
        </section>
    );
}

export default Countries;
