import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.less';

import Typography from 'antd/lib/typography'
import Countries from './components/Countries'
import GithubOutlined from '@ant-design/icons/GithubOutlined'
import HeartFilled from '@ant-design/icons/HeartFilled'

const { Title, Text } = Typography;

/** Create Client */
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  /** CONSTANT of the return value that represents <TopCountry>. Used in <Countries>. */
  const TOP_COUNTRY_RTN = 0;
  /** CONSTANT of the return value that represents <SelectStat>. Used in <Countries>. */
  const SUMMARY_RTN = 1;

  return (
    <ApolloProvider  client={client}>
      {/* Header */}
      <div className="header-container text-center">
          <Title level={1}>COVID-19 Tracker</Title>
          <p>A real-time COVID-19 tracker from the&nbsp;
            <a 
            href="https://documenter.getpostman.com/view/10808728/SzS8rjbc#e831c268-9da1-4d86-8b5a-8d7f61910af8"
            target="_blank"
            rel="noopener noreferrer"
            >COVID19 API</a></p>
      </div>
      {/* Summary Stats */}
      <div className="summary-container">
        <div className="container">
          <Title level={1} className="header-section">Summary Data</Title>
          <Countries 
              rtnValue={SUMMARY_RTN} 
              TOP_COUNTRY_RTN={TOP_COUNTRY_RTN}
          />
        </div>
      </div>
      {/* Sorted Stats */}
      <div className="topCountries-container">
        <div className="container">
          <Title level={1} className="header-section">Charted Data</Title>
          <Countries 
            rtnValue={TOP_COUNTRY_RTN} 
            TOP_COUNTRY_RTN={TOP_COUNTRY_RTN}
          />
        </div>
      </div>
      {/* Footer */}
      <div className="footer-container">
        <div className="container">
          <a 
           href="https://github.com/jonahlouis4/COVID19-Tracker"
           target="_blank"
           rel="noopener noreferrer"
          >
            <GithubOutlined style={{color:'#bfbfbf'}}/>
          </a>
          <Text 
          style={{color:'#bfbfbf',float:'right'}}
          className="text-right"
          >
            &#169;2021 Made with <HeartFilled style={{color:'red'}}/> by&nbsp; 
            <a 
           href="https://github.com/jonahlouis4/COVID19-Tracker"
           target="_blank"
           rel="noopener noreferrer"
          >
            Jonah Louis
          </a>
          </Text>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
