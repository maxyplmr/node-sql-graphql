import { GraphQLObjectType, GraphQLList } from 'graphql';
import UserType from './userType';
import UserModel from "../model/UserModel";

const UserQuery = new GraphQLObjectType({
    name: 'UserQuery',
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            resolve: async () => {
                return await UserModel.getAllUsers();
            },
        },
    },
});

export default UserQuery;