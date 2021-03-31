import React, { useState, useEffect } from 'react'
import Select from 'antd/lib/select'
import { autoChart } from '@antv/chart-advisor';

const { Option } = Select;

const ByCountry = ({COUNTRIES}) => {
    /** Holds the current 'Select' tag */
    const [countrySelect, setSelect] = useState("Canada");
    /** Holds all the options (countries) for the select tag */
    const options = [];
    for (let x = 0; x < COUNTRIES.length; x++) {
        options.push(<Option key={x} value={COUNTRIES[x].Country}>{COUNTRIES[x].Country}</Option>)
    }

    let NEW_CASES;
    let TOTAL_CASES;
    let NEW_DEATHS;
    let TOTAL_DEATHS;
    let NEW_RECOVERED;
    let TOTAL_RECOVERED;

    useEffect(() => {
        const chartData = getData(countrySelect)
        autoChart(document.getElementById('column_graph_2'), chartData, { toolbar: false, development: false });
      }, [countrySelect]);

    return (
        <div className="country-chart-container">
           <Select
            style={{ width: 225 }}
            showSearch
            value={countrySelect}
            optionFilterProp="children"
            onChange={(e) => {
                setSelect(e);}}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
           >
               {options}
           </Select> 
           <div id="column_graph_2" />
        </div>
    )

    function getData(country) {
        for (let x = 0; x < COUNTRIES.length; x++) {
            if (COUNTRIES[x].Country === country) {
                NEW_CASES = COUNTRIES[x].NewCases;
                TOTAL_CASES = COUNTRIES[x].Cases;
                NEW_DEATHS = COUNTRIES[x].RecentDeaths;
                TOTAL_DEATHS = COUNTRIES[x].TotalDeaths;
                NEW_RECOVERED = COUNTRIES[x].NewRecovered;
                TOTAL_RECOVERED = COUNTRIES[x].TotalRecovered;
    
                break;
            }
        }

        const data = [
            { "Country": country},
            {"New Cases": NEW_CASES},
            {"Total Cases": TOTAL_CASES},
            {"Recent Deaths": NEW_DEATHS},
            {"Total Deaths": TOTAL_DEATHS},
            {"New Recoveries": NEW_RECOVERED},
            {"Total Recoveries": TOTAL_RECOVERED}
        ]


        return data;
    } 
}

export default ByCountry
