import React from 'react'

import Statistic from 'antd/lib/statistic';
import Card from 'antd/lib/card';
import Col from 'antd/lib/col';

/**
 * Card display for each category
 * @param {Array} title - Strings array containing each category name
 * @param {Int} value - Number value of the category
 * @returns 
 */
const DisplayCard = ({title, value}) => {
    return (
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
            hoverable={true}
            >
                <Statistic
                    title={title}
                    value={value}
                    // valueStyle={{ color: '#3f8600' }}
                />
            </Card>
        </Col>
    )
}

export default DisplayCard
