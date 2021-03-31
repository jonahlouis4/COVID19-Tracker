import React from 'react'
import { gql, useQuery } from '@apollo/client'
import TopCountries from './TopCountries'
import ByCountry from './ByCountry'

import Typography from 'antd/lib/typography'
import Spin from 'antd/lib/spin';
import Row from 'antd/lib/row';
import message from 'antd/lib/message'
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

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

/** Contains the loading icon */
const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/** Text component of antd's Typograph */
const { Text } = Typography;

/** Error message when API QUERY fetch fails */
const msgError = () => {
    message.error('API may be down. Please refresh the web page in 2-3 minutes.');
}

const Countries = ({rtnValue, TOP_COUNTRY_RTN}) => {  
    const { loading, error, data } = useQuery(COUNTRY_QUERY);
    const COUNTRIES = []

    // API QUERY is loading
    if (loading) return <Row justify="center"><Spin indicator={loadingIcon} /></Row>  
    // API QUERY failed to load or fetch
    if (error) return <><Text type="danger">Failed to fetch API.</Text>; {msgError()} </>
    
    /**
     * Adds all countries to the local JSON 'topCountries'
     * @param {string} ID - ID of the country from the COVID-19 API
     * @param {string} Country - Country name
     * @param {int} TotalConfirmed  - Number of total COVID-19 cases
     */
    const addCountry = (ID, Country, NewConfirmed, TotalConfirmed, NewDeaths,
        TotalDeaths, NewRecovered, TotalRecovered, Date) => {
        COUNTRIES.push({
            "ID":ID, "Country":Country, "NewCases":NewConfirmed, "Cases":TotalConfirmed, "RecentDeaths":NewDeaths,
            "TotalDeaths":TotalDeaths, "NewRecovered":NewRecovered, "TotalRecovered":TotalRecovered,
            "Date":Date       
        })
    }
    
    /** Maps through the QUERY and calls the function addCountry() */
    data.summary.Countries.map(( 
        {ID, Country, NewConfirmed, TotalConfirmed, NewDeaths,
        TotalDeaths, NewRecovered, TotalRecovered, Date }) => (
            addCountry(ID, Country, NewConfirmed, TotalConfirmed, NewDeaths,
                TotalDeaths, NewRecovered, TotalRecovered, Date)
        ));

    /**
     * Returns the proper chart. Either the sorted chart or the by country chart.
     * @param {rtnValue} props - 0 = TopCountries, 1 = ByCountry
     * @returns - The proper chart to display
     */
    function ChartDisplay(props) {
        const value = props.rtnValue;
        if (value === TOP_COUNTRY_RTN) {
            return <TopCountries COUNTRIES={COUNTRIES} />
        } else {
            return <ByCountry />
        }
    }

    return (
        <>
            <ChartDisplay rtnValue={rtnValue} />
        </>
        
    )
}

export default Countries
