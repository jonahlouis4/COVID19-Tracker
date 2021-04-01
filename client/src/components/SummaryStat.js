import React, { useState } from 'react'
import Global from './Global'
import ByCountry from './ByCountry'

import Select from 'antd/lib/select'

const { Option } = Select;

/**
 * Allows the user to select the option to view: Either worldwide or a country.
 * @param {Array} COUNTRIES - Array containing the QUERY information of <Countries>
 * @returns 
 */
const SelectStat = ({COUNTRIES}) => {
    /** Holds the current 'Select' tag */
    const [dataSelect, setSelect] = useState("Worldwide");
    /** Holds all the options (countries) for the select tag */
    const options = [];
    /** Titles for cards - used in <Global> and <ByCountry> */
    const titles = [
        "New Cases Confirmed", "Total Cases Confirmed", "Recent Deaths",
        "Total Deaths", "Recent Recoveries", "Total Recoveries"
    ]

    // Add options dynamically
    options.push(<Option key={0} value="Worldwide">Worldwide</Option>)  
    for (let x = 1; x < COUNTRIES.length; x++) {
        options.push(<Option key={x} value={COUNTRIES[x].Country}>{COUNTRIES[x].Country}</Option>)
    }

    /**
     * Returns the proper component
     * @returns - Returns <Global> if option is "Worldwide", otherwise return <ByCountry>
     */
    function DisplayData() {
        if (dataSelect === "Worldwide") {
            return <Global titles={titles}/>
        } else {
            return <ByCountry COUNTRIES={COUNTRIES} COUNTRY_SELECT={dataSelect} titles={titles}/>
        }
    }

    return (
        <div className="select-container">
           <Select
            style={{ width: 225 }}
            showSearch
            value={dataSelect}
            optionFilterProp="children"
            onChange={(e) => {
                setSelect(e);}}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
           >
               {options}
           </Select> 
           <DisplayData />
        </div>
    )
}

export default SelectStat
