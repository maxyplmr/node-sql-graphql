// @ts-ignore
import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import userResolvers from '../graphql/user/resolvers/userResolvers';
import UserQuery from '../graphql/user/schema/userQuery';
import UserMutations from '../graphql/user/schema/userMutations';

const schema = new GraphQLSchema({
    query: UserQuery,
    mutation: UserMutations,
});

const router = Router();

router.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: userResolvers,
        graphiql: true,
    })
);

export default router;
module.exports = router;
