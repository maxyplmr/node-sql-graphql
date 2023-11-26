// import { TUser } from '../types/user'; // Update the path as needed
//
// const userResolver = {
//     Query: {
//         getUser: async (parent: any, { id }: { id: number }, context: any) => {
//             try {
//                 const [rows] = await context.pool.query('SELECT * FROM users WHERE id = ?', [id]);
//                 return rows?[0] || null;
//             } catch (error) {
//                 console.error('Error querying the database:', error);
//                 throw error;
//             }
//         },
//     },
//     Mutation: {
//         // createUser: async (parent: any, { data }: { data: TUser }, context: ResolverContext) => {
//         //     try {
//         //         const [result] = await context.pool.query('INSERT INTO users SET ?', [data]);
//         //         const insertedUserId = result.insertId;
//         //         const [insertedUserRows] = await context.pool.query('SELECT * FROM users WHERE id = ?', [insertedUserId]);
//         //         return insertedUserRows?[0];
//         //     } catch (error) {
//         //         console.error('Error creating user:', error);
//         //         throw error;
//         //     }
//         // },
//     },
// };
//
// export default userResolver;
