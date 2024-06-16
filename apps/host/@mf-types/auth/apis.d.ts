
    export type RemoteKeys = 'auth/AuthApp' | 'auth/methods';
    type PackageType<T> = T extends 'auth/methods' ? typeof import('auth/methods') :T extends 'auth/AuthApp' ? typeof import('auth/AuthApp') :any;