import React from 'react';

const Country = (props) => {
    const {country} = props;
    const {name,capital,region,flags,population, area} = country;
    
    const removeHandler = (name) => {
       props.onRemoveCountry(name)
    }
    return (
        <div className ='col-lg-4 col-md-6 col-sm-12'>
            <div className="card mb-4 border border-2 border-info rounded-3" style={{width: '18.5rem'}}>
            <img src={flags.png} className="card-img-top" style={{height:'200px'}} alt="Flag"/>
            <div className="card-body bg-light text-dark">
                <h5 className="card-title">Name: {name.common}</h5>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Capital: {capital}</p>
                <p className="card-text">Area: {area}</p>
                <p className="card-text">Region: {region}</p>
            </div>
                <input className='btn btn-danger' type="button" name='removeCountry' id='removeCountry' value= 'Remove Country' onClick={() => removeHandler(name.common)}/>
            </div>
        </div>
    );
}

export default Country;
