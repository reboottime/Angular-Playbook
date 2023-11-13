declare interface User {
    email: string;
    userName: string;
    password: string;
    roles: UserRole[];
    permissions: string[];
}

declare type UserRole = 'admin' | 'user';