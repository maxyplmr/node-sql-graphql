// userResolvers.ts
import UserQuery from '../schema/userQuery';
import UserMutations from '../schema/userMutations';

const userResolvers = {
    Query: {
        ...UserQuery,
    },
    Mutation: {
        ...UserMutations,
    },
};

export default userResolvers;