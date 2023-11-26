import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList } from 'graphql';

export const a = 2;

export const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLInt },
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        date_of_birth: { type: GraphQLString },
        gender: { type: GraphQLString },
        profile_picture_url: { type: GraphQLString },
        bio: { type: GraphQLString },
        address_street: { type: GraphQLString },
        country: { type: GraphQLString },
        phone_number: { type: GraphQLString },
        is_active: { type: GraphQLBoolean },
        created_at: { type: GraphQLString },
        updated_at: { type: GraphQLString },
    }),
});

export const QueryUserType = new GraphQLObjectType({
    name: 'QueryUser',
    fields: {
        getUser: {
            type: UserType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: (parent, { id }, context) => context.getUser(id),
        },
    },
});

// Uncomment the following if you want to add mutation types
// export const MutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         data: { type: new GraphQLNonNull(UserInputType) },
//       },
//       resolve: (parent, { data }, context) => context.createUser(data),
//     },
//   },
// });





//
// export const UserQueryType = new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//         getUser: {
//             type: UserType,
//             args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
//             resolve: (parent, args, context) => context.getUser(args.id),
//         },
//         getAllUsers: {
//             type: new GraphQLList(UserType),
//             resolve: (parent, args, context) => context.getAllUsers(),
//         },
//     },
// });
//
// export const UserMutationType = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         createUser: {
//             type: UserType,
//             args: { data: { type: new GraphQLNonNull(UserType) } },
//             resolve: (parent, args, context) => context.createUser(args.data),
//         },
//         updateUser: {
//             type: UserType,
//             args: { data: { type: new GraphQLNonNull(UserType) } },
//             resolve: (parent, args, context) => context.updateUser(args.data),
//         },
//         deleteUser: {
//             type: UserType,
//             args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
//             resolve: (parent, args, context) => context.deleteUser(args.id),
//         },
//     },
// });

// userSchema.js
// const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
//
// const UserType = new GraphQLObjectType({
//     name: 'users',
//     fields: {
//         id: { type: GraphQLString },
//         name: { type: GraphQLString },
//         email: { type: GraphQLString },
//     },
// });
//
// const RootQuery = new GraphQLObjectType({
//     name: 'RootQuery',
//     fields: {
//         users: {
//             type: new GraphQLList(UserType),
//             resolve: async (parent, args, context) => {
//                 try {
//                     const [rows] = await context.pool.query('SELECT * FROM users');
//                     return rows;
//                 } catch (error) {
//                     console.error('Error querying the database:', error);
//                     throw error; // Propagate the error to the GraphQL layer
//                 }
//             },
//         },
//     },
// });
//
// const schema = new GraphQLSchema({
//     query: RootQuery,
// });
//
// module.exports = schema;

