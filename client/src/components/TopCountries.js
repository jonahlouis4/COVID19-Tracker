import React, { useState, useEffect } from 'react'
import Select from 'antd/lib/select'
import Col from 'antd/lib/col'
import { autoChart } from '@antv/chart-advisor';

const { Option } = Select;

/**
 * Displays a graph of the selected options 
 * @param {Array} COUNTRIES - Array containing the QUERY information of <Countries>
 * @returns 
 */
const TopCountries = ({COUNTRIES}) => {
    /** Holds the current 'Select' tag */
    const [data, setData] = useState("Sort by most cases");

    /** Sorts the COUNTRIES array by most cases */
    const sortByCases = () => {
        COUNTRIES.sort((a, b) => parseInt(b.Cases) - parseInt(a.Cases));
    }
    /** Sorts the COUNTRIES array by most deaths */
    const sortByDeaths = () => {
        COUNTRIES.sort((a, b) => parseInt(b.TotalDeaths) - parseInt(a.TotalDeaths));
    }
    /** Sorts the COUNTRIES array by most recoveries */
    const sortByRecoveries = () => {
        COUNTRIES.sort((a, b) => parseInt(b.TotalRecovered) - parseInt(a.TotalRecovered));
    }

    useEffect(() => {
        const chartData = getData(data)
        autoChart(document.getElementById('column_graph'), chartData, { toolbar: false, development: false });
      }, [data]);

    return (
        <div className="sorted-chart-container">
            <Select
            value={data}
            onChange={(e) => {
                setData(e);}}
            style={{ width: 225 }}
            >
                <Option value="Sort by most cases">Sort by most cases (top 15)</Option>
                <Option value="Sort by most deaths">Sort by most deaths (top 15)</Option>
                <Option value="Sort by most recoveries">Sort by most recoveries (top 15)</Option>
            </Select>
            <Col span={24}>
                <div id="column_graph" />
            </Col> 
        </div>
    )
    
    /**
     * Sorts and returns the appropriate data
     * @param {string} sortType - type of data requested to be returned 
     * @returns - Country name and either the number of cases, deaths, or recoveries
     */
    function getData(sortType) {
        if (sortType === "Sort by most cases") { sortByCases(); }
        if (sortType === "Sort by most deaths") { sortByDeaths(); }
        if (sortType === "Sort by most recoveries") { sortByRecoveries(); }

        const countries_cases = [
            {"Country"  :COUNTRIES[0].Country,  "Cases"     :COUNTRIES[0].Cases,},
            {"Country"  :COUNTRIES[1].Country,  "Cases"     :COUNTRIES[1].Cases},
            {"Country"  :COUNTRIES[2].Country,  "Cases"     :COUNTRIES[2].Cases},
            {"Country"  :COUNTRIES[3].Country,  "Cases"     :COUNTRIES[3].Cases},
            {"Country"  :COUNTRIES[4].Country,  "Cases"     :COUNTRIES[4].Cases},
            {"Country"  :COUNTRIES[5].Country,  "Cases"     :COUNTRIES[5].Cases},
            {"Country"  :COUNTRIES[6].Country,  "Cases"     :COUNTRIES[6].Cases},
            {"Country"  :COUNTRIES[7].Country,  "Cases"     :COUNTRIES[7].Cases},
            {"Country"  :COUNTRIES[8].Country,  "Cases"     :COUNTRIES[8].Cases},
            {"Country"  :COUNTRIES[9].Country,  "Cases"     :COUNTRIES[9].Cases},
            {"Country"  :COUNTRIES[10].Country, "Cases"     :COUNTRIES[10].Cases},
            {"Country"  :COUNTRIES[11].Country, "Cases"     :COUNTRIES[11].Cases},
            {"Country"  :COUNTRIES[12].Country, "Cases"     :COUNTRIES[12].Cases},
            {"Country"  :COUNTRIES[13].Country, "Cases"     :COUNTRIES[13].Cases},
            {"Country"  :COUNTRIES[14].Country, "Cases"     :COUNTRIES[14].Cases},
        ];
        const countries_deaths = [
            {"Country"  :COUNTRIES[0].Country,  "Deaths"    :COUNTRIES[0].TotalDeaths},  
            {"Country"  :COUNTRIES[1].Country,  "Deaths"    :COUNTRIES[1].TotalDeaths},  
            {"Country"  :COUNTRIES[2].Country,  "Deaths"    :COUNTRIES[2].TotalDeaths},  
            {"Country"  :COUNTRIES[3].Country,  "Deaths"    :COUNTRIES[3].TotalDeaths},  
            {"Country"  :COUNTRIES[4].Country,  "Deaths"    :COUNTRIES[4].TotalDeaths},  
            {"Country"  :COUNTRIES[5].Country,  "Deaths"    :COUNTRIES[5].TotalDeaths},  
            {"Country"  :COUNTRIES[6].Country,  "Deaths"    :COUNTRIES[6].TotalDeaths},  
            {"Country"  :COUNTRIES[7].Country,  "Deaths"    :COUNTRIES[7].TotalDeaths},  
            {"Country"  :COUNTRIES[8].Country,  "Deaths"    :COUNTRIES[8].TotalDeaths},  
            {"Country"  :COUNTRIES[9].Country,  "Deaths"    :COUNTRIES[9].TotalDeaths},  
            {"Country"  :COUNTRIES[10].Country, "Deaths"    :COUNTRIES[10].TotalDeaths},  
            {"Country"  :COUNTRIES[11].Country, "Deaths"    :COUNTRIES[11].TotalDeaths},  
            {"Country"  :COUNTRIES[12].Country, "Deaths"    :COUNTRIES[12].TotalDeaths},  
            {"Country"  :COUNTRIES[13].Country, "Deaths"    :COUNTRIES[13].TotalDeaths},  
            {"Country"  :COUNTRIES[14].Country, "Deaths"    :COUNTRIES[14].TotalDeaths},
        ];
        const countries_recoveries = [
            {"Country"   :COUNTRIES[0].Country,  "Recoveries"   :COUNTRIES[0].TotalRecovered},
            {"Country"   :COUNTRIES[1].Country,  "Recoveries"   :COUNTRIES[1].TotalRecovered},
            {"Country"   :COUNTRIES[2].Country,  "Recoveries"   :COUNTRIES[2].TotalRecovered},
            {"Country"   :COUNTRIES[3].Country,  "Recoveries"   :COUNTRIES[3].TotalRecovered},
            {"Country"   :COUNTRIES[4].Country,  "Recoveries"   :COUNTRIES[4].TotalRecovered},
            {"Country"   :COUNTRIES[5].Country,  "Recoveries"   :COUNTRIES[5].TotalRecovered},
            {"Country"   :COUNTRIES[6].Country,  "Recoveries"   :COUNTRIES[6].TotalRecovered},
            {"Country"   :COUNTRIES[7].Country,  "Recoveries"   :COUNTRIES[7].TotalRecovered},
            {"Country"   :COUNTRIES[8].Country,  "Recoveries"   :COUNTRIES[8].TotalRecovered},
            {"Country"   :COUNTRIES[9].Country,  "Recoveries"   :COUNTRIES[9].TotalRecovered},
            {"Country"   :COUNTRIES[10].Country, "Recoveries"   :COUNTRIES[10].TotalRecovered},
            {"Country"   :COUNTRIES[11].Country, "Recoveries"   :COUNTRIES[11].TotalRecovered},
            {"Country"   :COUNTRIES[12].Country, "Recoveries"   :COUNTRIES[12].TotalRecovered},
            {"Country"   :COUNTRIES[13].Country, "Recoveries"   :COUNTRIES[13].TotalRecovered},
            {"Country"   :COUNTRIES[14].Country, "Recoveries"   :COUNTRIES[14].TotalRecovered},
        ];

        if (sortType === "Sort by most cases") { return countries_cases; }
        if (sortType === "Sort by most deaths") { return countries_deaths }
        if (sortType === "Sort by most recoveries") { return countries_recoveries; }
    }
}

export default TopCountries
