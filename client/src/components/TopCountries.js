import React from 'react'

const TopCountries = ({COUNTRIES}) => {
    const sortByCases = () => {
        COUNTRIES.sort((a, b) => parseInt(b.Cases) - parseInt(a.Cases));
    }
    const sortByDeaths = () => {
        COUNTRIES.sort((a, b) => parseInt(b.TotalDeaths) - parseInt(a.TotalDeaths));
    }
    const sortByRecoveries = () => {
        COUNTRIES.sort((a, b) => parseInt(b.TotalRecovered) - parseInt(a.TotalRecovered));
    }
    const handleChange = (event) => {
        const targetValue = event.target.value;

        console.log(targetValue)
    }

    return (
        <div>
            <select name="sort_type" id="sort_type" onChange={handleChange}>
                <option value="by_cases">Sort by most cases</option>
                <option value="by_deaths">Sort by most deaths</option>
                <option value="by_recoveries">Sort by most recoveries</option>
            </select>
        </div>
    )
}

export default TopCountries
