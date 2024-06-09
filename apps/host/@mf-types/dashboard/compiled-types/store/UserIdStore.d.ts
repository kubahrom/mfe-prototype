import { Dispatch, PropsWithChildren, SetStateAction } from 'react';
type UserIdStoreType = string | null;
type UserIdStoreContextType = [
    state: UserIdStoreType,
    setState: Dispatch<SetStateAction<UserIdStoreType>>
];
type Props = {
    userId?: string;
} & PropsWithChildren;
declare const UserIdStoreProvider: ({ children, userId }: Props) => import("react/jsx-runtime").JSX.Element;
declare const useUserIdStore: () => UserIdStoreContextType;
declare const useUserIdStoreState: () => UserIdStoreType;
declare const useUserIdStoreUpdate: () => Dispatch<SetStateAction<UserIdStoreType>>;
export { useUserIdStore, UserIdStoreProvider, useUserIdStoreState, useUserIdStoreUpdate, };
