import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Typography from 'antd/lib/typography'
import Statistic from 'antd/lib/statistic';
import Spin from 'antd/lib/spin';
import Card from 'antd/lib/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';

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

/** Contains the loading icon */
const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/** Text component of antd's Typograph */
const { Text } = Typography;

const Global = () => {
    const { loading, error, data } = useQuery(GLOBAL_QUERY);
    
    // API QUERY is loading
    if (loading) return <Row justify="center"><Spin indicator={loadingIcon} /></Row>     
    // API QUERY failed to load or fetch
    if (error) return   <Text type="danger">Failed to fetch API.</Text>;
    
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