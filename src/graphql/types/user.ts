export interface TUser {
    id?: number;
    username: string;
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
    date_of_birth?: string;
    gender?: string;
    profile_picture_url?: string;
    bio?: string;
    address_street?: string;
    country?: string;
    phone_number?: string;
    is_active?: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface TQueryUser {
    getUser(id: number): TUser | null;
    // getAllUsers: TUser[];
}

export interface TMutationUser {
    createUser(data: TUser): TUser;
    // updateUser(data: TUser): TUser;
    // deleteUser(id: number): TUser | null;
}
