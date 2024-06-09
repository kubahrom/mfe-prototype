import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type UserIdStoreType = string | null;

type UserIdStoreContextType = [
  state: UserIdStoreType,
  setState: Dispatch<SetStateAction<UserIdStoreType>>,
];

const UserIdStoreContext = createContext<UserIdStoreContextType>([
  null,
  () => {},
]);

type Props = {
  userId?: string;
} & PropsWithChildren;

const UserIdStoreProvider = ({ children, userId }: Props) => {
  const [state, setState] = useState(userId || null);

  const memoizedValue = useMemo(
    () => [state, setState] as UserIdStoreContextType,
    [state],
  );

  return (
    <UserIdStoreContext.Provider value={memoizedValue}>
      {children}
    </UserIdStoreContext.Provider>
  );
};

const useUserIdStore = () => {
  const context = useContext(UserIdStoreContext);

  if (context === undefined) {
    throw new Error('useUserIdStore must be used within a UserIdStoreProvider');
  }

  return context;
};

const useUserIdStoreState = () => useUserIdStore()[0];

const useUserIdStoreUpdate = () => useUserIdStore()[1];

export {
  useUserIdStore,
  UserIdStoreProvider,
  useUserIdStoreState,
  useUserIdStoreUpdate,
};
