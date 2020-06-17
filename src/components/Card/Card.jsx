import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';


const Card = ({ openPopUp, getCountryName }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    //This fetches the data from the API to use in this component
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchData())
        }

        fetchAPI();
    }, [setFetchedCountries]);




    // console.log(fetchedCountries);
    

    
    return(
        <div>
            {fetchedCountries.map(({name,capital,flag, i} ) => <article key={i}className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc" onClick={() => openPopUp(name)}>
                    <img src={flag} class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                    <h1 className="f3 mb2">{name}</h1>
                    <h2 className="f5 fw4 gray mt0">{capital}</h2>
                </div>
                </article>)}
        </div>
    )












}

export default Card;