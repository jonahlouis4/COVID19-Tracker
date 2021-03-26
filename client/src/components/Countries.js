import React from 'react'
import { gql, useQuery } from '@apollo/client'
import TopCountries from './TopCountries'

/** Queries all the country stats */
const COUNTRY_QUERY = gql`
    query GetCountries {
        summary {
            Countries {
                ID
                Country
                NewConfirmed
                TotalConfirmed
                NewDeaths
                TotalDeaths
                NewRecovered
                TotalRecovered
                Date         
            }
        }
    }
`;

const Countries = () => {  
    const { loading, error, data } = useQuery(COUNTRY_QUERY);
    const Countries = []

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>;
    
    /**
     * Adds all countries to the local JSON 'topCountries'
     * @param {string} ID - ID of the country from the COVID-19 API
     * @param {string} Country - Country name
     * @param {int} TotalConfirmed  - Number of total COVID-19 cases
     */
    const addCountry = (ID, Country, NewConfirmed, TotalConfirmed, NewDeaths,
        TotalDeaths, NewRecovered, TotalRecovered, Date) => {
        Countries.push({
            "ID":ID, "Country":Country, "NewCases":NewConfirmed, "Cases":TotalConfirmed, "RecentDeaths":NewDeaths,
            "TotalDeaths":TotalDeaths, "NewRecovered":NewRecovered, "TotalRecovered":TotalRecovered,
            "Date":Date       
        })
    }
    
    const FindCountryMostCases = data.summary.Countries.map(( 
        {ID, Country, NewConfirmed, TotalConfirmed, NewDeaths,
        TotalDeaths, NewRecovered, TotalRecovered, Date }) => (
            addCountry(ID, Country, NewConfirmed, TotalConfirmed, NewDeaths,
                TotalDeaths, NewRecovered, TotalRecovered, Date)
        ));

    return (
        <>
            <TopCountries COUNTRIES={Countries} />
        </>
        
    )
}

export default Countries
