import React from 'react'
import { useQuery, gql } from '@apollo/client'
import DisplayCard from './DisplayCard'

import Typography from 'antd/lib/typography'
import Spin from 'antd/lib/spin';
import Row from 'antd/lib/row';
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

const Global = ({titles}) => {
    const { loading, error, data } = useQuery(GLOBAL_QUERY);
    
    // API QUERY is loading
    if (loading) return <Row justify="center"><Spin indicator={loadingIcon} /></Row>     
    // API QUERY failed to load or fetch
    if (error) return   <Text type="danger">Failed to fetch API.</Text>;
    
    /** Store each QUERY */
    const { NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths,
        NewRecovered, TotalRecovered, Date } = data.summary.Global;

    return (
        <div className="card-container">
            <Row gutter={[16, 16]}>
                <DisplayCard
                    title={titles[0]}
                    value={NewConfirmed}
                />
                <DisplayCard
                    title={titles[1]}
                    value={TotalConfirmed}
                />
                <DisplayCard
                    title={titles[2]}
                    value={NewDeaths}
                />
                <DisplayCard
                    title={titles[3]}
                    value={TotalDeaths}
                />
                <DisplayCard
                    title={titles[4]}
                    value={NewRecovered}
                />
                <DisplayCard
                    title={titles[5]}
                    value={TotalRecovered}
                />
            </Row>
        </div>
    )
}

export default Global