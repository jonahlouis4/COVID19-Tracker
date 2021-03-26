import React from 'react'
import ReactDOM from 'react-dom'
import Select from 'antd/lib/select'
import { Column } from '@antv/g2plot'

class TopCountries extends React.Component {
    chartNodeRef = React.createRef();
    chartRef = React.createRef(); 

    sortByCases = () => {
        this.props.COUNTRIES.sort((a, b) => parseInt(b.Cases) - parseInt(a.Cases));
    }
    sortByDeaths = () => {
        this.props.COUNTRIES.sort((a, b) => parseInt(b.TotalDeaths) - parseInt(a.TotalDeaths));
    }
    sortByRecoveries = () => {
        this.props.COUNTRIES.sort((a, b) => parseInt(b.TotalRecovered) - parseInt(a.TotalRecovered));
    }

    componentDidMount() {
        // Sort cases by default
        this.sortByCases();

        // Assign data to constant
        const data = [
            {"Country":this.props.COUNTRIES[0].Country, "Cases":this.props.COUNTRIES[0].Cases,
            "Deaths":this.props.COUNTRIES[0].TotalDeaths, "Recoveries":this.props.COUNTRIES[0].TotalRecovered},
            {"Country":this.props.COUNTRIES[1].Country, "Cases":this.props.COUNTRIES[1].Cases,
            "Deaths":this.props.COUNTRIES[1].TotalDeaths, "Recoveries":this.props.COUNTRIES[1].TotalRecovered},
            {"Country":this.props.COUNTRIES[2].Country, "Cases":this.props.COUNTRIES[2].Cases,
            "Deaths":this.props.COUNTRIES[2].TotalDeaths, "Recoveries":this.props.COUNTRIES[2].TotalRecovered},
            {"Country":this.props.COUNTRIES[3].Country, "Cases":this.props.COUNTRIES[3].Cases,
            "Deaths":this.props.COUNTRIES[3].TotalDeaths, "Recoveries":this.props.COUNTRIES[3].TotalRecovered},
        ];
        const chartDom = this.chartNodeRef.current;
        const column = new Column(chartDom, {
            data,
            xField: 'Country',
            yField: 'Cases',
            seriesField: 'x',
            legend: false,
        })

        column.render();
        this.chartRef.current = column;
    }

    handleChange = (v) => {
        const column = this.chartRef.current;
        if (column) {
            column.update({ animation: v !== '' ? true : { appear: { animation: v } } });
        }
    }

    render () {
        return (
            <>
                <div>
                    <span className="sort_type">Select</span>
                    <Select 
                    aria-label="select" 
                    defaultValue="Sort by most cases" 
                    size="small" 
                    onChange={this.handleChange}
                    >
                        {['Sort by most cases', 
                        'Sort by most deaths', 
                        'Sort by most recoveries'].map((opt) => {
                            return <Select.Option value={opt}>{opt}</Select.Option>
                        })}    
                    </Select>
                </div>
                <div ref={this.chartNodeRef} />
            </>
        )
    }
}

export default TopCountries
