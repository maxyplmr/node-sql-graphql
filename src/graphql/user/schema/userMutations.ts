// MutationType.ts
import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import UserType from './userType';
import UserModel from "../model/UserModel";

const MutationType = new GraphQLObjectType({
    name: 'UserMutations',
    fields: {
        createUser: {
            type: UserType,
            args: {
                username: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                // ... other args based on your MySQL model
            },
            resolve: async (_, { username, email }) => {
                return await UserModel.createUser({ username, email });
            },
        },
    },
});

export default MutationType;
