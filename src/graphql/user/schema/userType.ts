import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

const  UserType = new GraphQLObjectType({
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

export default UserType;