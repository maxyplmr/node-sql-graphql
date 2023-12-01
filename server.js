const express = require('express');
const app = express();
console.log(1)
const UserTable = require("./src/db/models/user")

console.log(333)
// console.log("test 2")

const a = require("./src/test")
// const aasd = require("./src/graphql/schemas/user")
// console.log(aasd)

// const User = require("./src/db/models/user");
//
// const { graphqlHTTP } = require('express-graphql');
// const { GraphQLSchema } = require('graphql');
// const { userResolver } = require('./src/graphql/resolvers/user');
//
// const schema = new GraphQLSchema({
//     query: QueryUserType,
// });
//
// app.use(
//     '/graphql',
//     graphqlHTTP({
//         schema: schema,
//         rootValue: userResolver,
//         graphiql: true,
//     })
// );

const PORT = 2999;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});