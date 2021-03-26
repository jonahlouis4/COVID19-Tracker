import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Statistic from 'antd/lib/statistic';
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

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
    
    /** Store each QUERY */
    const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths,
        NewRecovered, TotalRecovered, Date } = data.summary.Global;
    
    /** Titles for each QUERY */
    const titles = [
        "New Cases Confirmed", "Total Cases Confirmed", "Recent Deaths",
        "Total Deaths", "Recent Recoveries", "Total Recoveries"
    ]

    /**
     * Card display for each category
     * @param {*} props - title for name of category, and value for the value of category
     * @returns - the whole column
     */
    const DiplayCard = props => (
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Card
                hoverable={true}
                >
                    <Statistic
                        title={props.title}
                        value={props.value}
                        // valueStyle={{ color: '#3f8600' }}
                    />
                </Card>
            </Col>
    )

    return (
        <div className="card-container">
            <Row gutter={[16, 16]}>
                <DiplayCard
                    title={titles[0]}
                    value={NewConfirmed}
                />
                <DiplayCard
                    title={titles[1]}
                    value={TotalConfirmed}
                />
                <DiplayCard
                    title={titles[2]}
                    value={NewDeaths}
                />
                <DiplayCard
                    title={titles[3]}
                    value={TotalDeaths}
                />
                <DiplayCard
                    title={titles[4]}
                    value={NewRecovered}
                />
                <DiplayCard
                    title={titles[5]}
                    value={TotalRecovered}
                />
            </Row>
        </div>
    )
}

export default Global