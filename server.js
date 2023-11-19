const express = require('express');
const app = express();

const User = require('./src/db/models/user');

const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { QueryUserType } = require('./src/graphql/schemas/user');
const { userResolver } = require('./src/graphql/resolvers/user');

const schema = new GraphQLSchema({
    query: QueryUserType,
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: userResolver,
        graphiql: true,
    })
);

const PORT = 2999;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});