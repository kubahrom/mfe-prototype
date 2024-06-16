
    export type RemoteKeys = 'dashboard/DashboardApp' | 'dashboard/Search' | 'dashboard/RecipeTags';
    type PackageType<T> = T extends 'dashboard/RecipeTags' ? typeof import('dashboard/RecipeTags') :T extends 'dashboard/Search' ? typeof import('dashboard/Search') :T extends 'dashboard/DashboardApp' ? typeof import('dashboard/DashboardApp') :any;