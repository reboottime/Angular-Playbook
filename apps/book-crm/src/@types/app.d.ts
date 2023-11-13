declare interface AppState {
    auth: {
        isLoggedIn: boolean;
        user: Omit<User, 'password'> | null;
    };
    books: {
        loading: boolean;
        error: string | null;
        data: Book[];
    },
    markedBooks: string[];
}
