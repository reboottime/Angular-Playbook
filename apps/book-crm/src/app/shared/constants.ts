const PERMISSIONS = {
    admin: ['canEdit', 'canDelete', 'canAdd'],
    user: ['canMark']
};

export const ADMIN_AND_USER: User = {
    email: 'admin@gmail.com',
    userName: 'ultra pass',
    password: 'admin',
    roles: ['admin', 'user'],
    permissions: [...PERMISSIONS.admin, ...PERMISSIONS.user],
};

export const USER: User = {
    email: 'user@gmail.com',
    userName: 'kate',
    password: 'user',
    roles: ['user'],
    permissions: [...PERMISSIONS.user]
};

const ADMIN: User = {
    email: 'kyle@gmail.com',
    userName: 'kate',
    password: 'kyle',
    roles: ['admin'],
    permissions: [...PERMISSIONS.user]
}

const DEFAULT_USERS = [ADMIN_AND_USER, USER, ADMIN]

export default DEFAULT_USERS;