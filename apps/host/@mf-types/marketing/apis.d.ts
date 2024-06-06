
    export type RemoteKeys = 'marketing/MarketingApp';
    type PackageType<T> = T extends 'marketing/MarketingApp' ? typeof import('marketing/MarketingApp') :any;