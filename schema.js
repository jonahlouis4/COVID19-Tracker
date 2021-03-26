const axios = require('axios').default;
const { 
    GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,
    GraphQLList, 
    GraphQLSchema
} = require('graphql');

// Summary Stats - Global + Countries
const SummaryStats = new GraphQLObjectType({
    name: "SummaryStats",
    fields: () => ({
       Global: {
           type: GlobalStats
       }, 
       Countries: {
            type: new GraphQLList(CountryStats)
       }
    })
});

// Global Stats
const GlobalStats = new GraphQLObjectType({
    name: "GlobalStats",
    fields: () => ({
        NewConfirmed:   { type: GraphQLInt },
        TotalConfirmed: { type: GraphQLInt },
        NewDeaths:      { type: GraphQLInt },
        TotalDeaths:    { type: GraphQLInt },
        NewRecovered:   { type: GraphQLInt },
        TotalRecovered: { type: GraphQLInt },
        Date:           { type: GraphQLString },
    }),
});

// Country Stats
const CountryStats = new GraphQLObjectType({
    name: "CountryStats",
    fields: () => ({
        ID:             { type: GraphQLString },
        Country:        { type: GraphQLString },
        NewConfirmed:   { type: GraphQLInt },
        TotalConfirmed: { type: GraphQLInt },
        NewDeaths:      { type: GraphQLInt },
        TotalDeaths:    { type: GraphQLInt },
        NewRecovered:   { type: GraphQLInt },
        TotalRecovered: { type: GraphQLInt },
        Date:           { type: GraphQLString }
    }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        summary : {
            type: SummaryStats,
            resolve(_parent, _args) {
                return axios
                    .get("https://api.covid19api.com/summary")
                    .then((res) => res.data);
            },
        },
    }
})
 
module.exports = new GraphQLSchema({
    query: RootQuery
});