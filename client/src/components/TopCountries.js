import React, { useState, useRef, useEffect } from 'react'
import Select from 'antd/lib/select'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import { Column } from '@antv/g2plot'
import { dataToDataProps, dataPropsToAdvices, 
    adviceToLibConfig, g2plotRender } from '@antv/chart-advisor';
import { autoChart } from '@antv/chart-advisor';

const { Option } = Select;

const TopCountries = ({COUNTRIES}) => {
    const [data, setData] = useState("Sort by most cases");
    // const [current, setCurrent] = useState();
    // const [advices, setAdvices] = useState([]);
    // const canvas = useRef();

    const sortByCases = () => {
        COUNTRIES.sort((a, b) => parseInt(b.Cases) - parseInt(a.Cases));
    }
    const sortByDeaths = () => {
        COUNTRIES.sort((a, b) => parseInt(b.TotalDeaths) - parseInt(a.TotalDeaths));
    }
    const sortByRecoveries = () => {
        COUNTRIES.sort((a, b) => parseInt(b.TotalRecovered) - parseInt(a.TotalRecovered));
    }

    useEffect(() => {
        const chartData = getData(data)
        autoChart(document.getElementById('column_graph'), chartData, { toolbar: false, development: false });
      }, [data]);

    return (
        <>
            <Select
            value={data}
            onChange={(e) => {
                setData(e);}}
            style={{ width: 200 }}
            >
                <Option value="Sort by most cases">Sort by most cases</Option>
                <Option value="Sort by most deaths">Sort by most deaths</Option>
                <Option value="Sort by most recoveries">Sort by most recoveries</Option>
            </Select>
            <Col span={24}>
                <div id="column_graph" />
            </Col> 
        </>
    )

    function getData(sortType) {
        if (sortType === "Sort by most cases") { sortByCases(); }
        if (sortType === "Sort by most deaths") { sortByDeaths(); }
        if (sortType === "Sort by most recoveries") { sortByRecoveries(); }

        const countries_cases = [
            {"Country"      :COUNTRIES[0].Country,      
            "Cases"         :COUNTRIES[0].Cases,},
            {"Country"      :COUNTRIES[1].Country,      
            "Cases"         :COUNTRIES[1].Cases},
            {"Country"      :COUNTRIES[2].Country,      
            "Cases"         :COUNTRIES[2].Cases},
            {"Country"      :COUNTRIES[3].Country,      
            "Cases"         :COUNTRIES[3].Cases},
            {"Country"      :COUNTRIES[4].Country,      
            "Cases"         :COUNTRIES[4].Cases},
            {"Country"      :COUNTRIES[5].Country,      
            "Cases"         :COUNTRIES[5].Cases},
            {"Country"      :COUNTRIES[6].Country,      
            "Cases"         :COUNTRIES[6].Cases},
        ];
        const countries_deaths = [
            {"Country"     :COUNTRIES[0].Country,      
            "Deaths"       :COUNTRIES[0].TotalDeaths},  
            {"Country"     :COUNTRIES[1].Country,      
            "Deaths"       :COUNTRIES[1].TotalDeaths},  
            {"Country"     :COUNTRIES[2].Country,      
            "Deaths"       :COUNTRIES[2].TotalDeaths},  
            {"Country"     :COUNTRIES[3].Country,      
            "Deaths"       :COUNTRIES[3].TotalDeaths},  
            {"Country"     :COUNTRIES[4].Country,      
            "Deaths"       :COUNTRIES[4].TotalDeaths},  
            {"Country"     :COUNTRIES[5].Country,      
            "Deaths"       :COUNTRIES[5].TotalDeaths},  
            {"Country"     :COUNTRIES[6].Country,      
            "Deaths"       :COUNTRIES[6].TotalDeaths},  
        ];
        const countries_recoveries = [
            {"Country"      :COUNTRIES[0].Country,      
            "Recoveries"    :COUNTRIES[0].TotalRecovered},
            {"Country"      :COUNTRIES[1].Country,      
            "Recoveries"    :COUNTRIES[1].TotalRecovered},
            {"Country"      :COUNTRIES[2].Country,      
            "Recoveries"    :COUNTRIES[2].TotalRecovered},
            {"Country"      :COUNTRIES[3].Country,      
            "Recoveries"    :COUNTRIES[3].TotalRecovered},
            {"Country"      :COUNTRIES[4].Country,      
            "Recoveries"    :COUNTRIES[4].TotalRecovered},
            {"Country"      :COUNTRIES[5].Country,      
            "Recoveries"    :COUNTRIES[5].TotalRecovered},
            {"Country"      :COUNTRIES[6].Country,      
            "Recoveries"    :COUNTRIES[6].TotalRecovered},
        ];

        if (sortType === "Sort by most cases") { return countries_cases; }
        if (sortType === "Sort by most deaths") { return countries_deaths }
        if (sortType === "Sort by most recoveries") { return countries_recoveries; }
    }
}

export default TopCountries
