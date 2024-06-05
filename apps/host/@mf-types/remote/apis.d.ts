
    export type RemoteKeys = 'remote/RemoteApp' | 'remote/Counter';
    type PackageType<T> = T extends 'remote/Counter' ? typeof import('remote/Counter') :T extends 'remote/RemoteApp' ? typeof import('remote/RemoteApp') :any;