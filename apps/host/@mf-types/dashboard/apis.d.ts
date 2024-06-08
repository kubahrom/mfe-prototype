
    export type RemoteKeys = 'dashboard/DashboardApp' | 'dashboard/Search';
    type PackageType<T> = T extends 'dashboard/Search' ? typeof import('dashboard/Search') :T extends 'dashboard/DashboardApp' ? typeof import('dashboard/DashboardApp') :any;