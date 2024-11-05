
    export type RemoteKeys = 'mf_provider/button' | 'mf_provider/export-app';
    type PackageType<T> = T extends 'mf_provider/export-app' ? typeof import('mf_provider/export-app') :T extends 'mf_provider/button' ? typeof import('mf_provider/button') :any;