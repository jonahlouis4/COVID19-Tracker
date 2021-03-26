import React from 'react'
import { useQuery, gql } from '@apollo/client'

/** Queries all the global stats */
const GLOBAL_QUERY = gql`
    query GetGlobal {
        summary {
            Global {
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

const Global = () => {
    const { loading, error, data } = useQuery(GLOBAL_QUERY);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>;

    const { NewConfirmed, TotalConfirmed, NewDeaths, NewRecovered, 
        TotalRecovered, Date } = data.summary.Global;

    return (
        <div>
            <h2>Global Stats</h2>
            New Confirmed:      { NewConfirmed }
            <br/>
            Total Confirmed:    { TotalConfirmed }
            <br/>
            New Deaths:         { NewDeaths }
            <br/>
            New NewRecovered:   { NewRecovered }
            <br/>
            TotalRecovered:     { TotalRecovered }
            <br/>
            Date:               { Date }
        </div>
    )
}

export default Global
