import React from 'react'
import Row from 'antd/lib/row';
import DisplayCard from './DisplayCard'

const ByCountry = ({COUNTRIES, COUNTRY_SELECT, titles}) => {
    /** New cases for the country */
    let new_cases;
    /** Total cases for the country */
    let total_cases;
    /** Recent deaths for the country */
    let new_deaths;
    /** Total deaths for the country */
    let total_deaths;
    /** Recent recoveries for the country */
    let new_recoveries;
    /** Total recoveries for the country */
    let total_recoveries;

    // Find country selected by user and assign data to local variables
    for (let x = 0; x < COUNTRIES.length; x++) {
        if (COUNTRIES[x].Country === COUNTRY_SELECT) {
            new_cases = COUNTRIES[x].NewCases;
            total_cases = COUNTRIES[x].Cases;
            new_deaths = COUNTRIES[x].RecentDeaths;
            total_deaths = COUNTRIES[x].TotalDeaths;
            new_recoveries = COUNTRIES[x].NewRecovered;
            total_recoveries = COUNTRIES[x].TotalRecovered;

            break;
        }
    }

    return (
        <div className="card-container">
            <Row gutter={[16, 16]}>
            <DisplayCard
                    title={titles[0]}
                    value={new_cases}
                />
            <DisplayCard
                title={titles[1]}
                value={total_cases}
            />
            <DisplayCard
                title={titles[2]}
                value={new_deaths}
            />
            <DisplayCard
                title={titles[3]}
                value={total_deaths}
            />
            <DisplayCard
                title={titles[4]}
                value={new_recoveries}
            />
            <DisplayCard
                title={titles[5]}
                value={total_recoveries}
            />
            </Row>
        </div>
    )
}

export default ByCountry
