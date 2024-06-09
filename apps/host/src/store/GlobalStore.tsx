import { observeAuthState } from 'auth/methods';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type User = {
  uid: string;
  email: string;
};
type GlobalStoreType = {
  user: User | null;
  init: boolean;
};

type GlobalStoreContextType = [
  state: GlobalStoreType,
  setState: Dispatch<SetStateAction<GlobalStoreType>>,
];

const initialState: GlobalStoreType = {
  user: null,
  init: false,
};

const GlobalStoreContext = createContext<GlobalStoreContextType>([
  initialState,
  () => {},
]);

const GlobalStoreProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      if (user) {
        setState({
          init: true,
          user: {
            uid: user.uid,
            email: user.email,
          },
        });
      } else {
        setState({
          init: true,
          user: null,
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const memoizedValue = useMemo(
    () => [state, setState] as GlobalStoreContextType,
    [state],
  );

  return (
    <GlobalStoreContext.Provider value={memoizedValue}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

const useGlobalStore = () => {
  const context = useContext(GlobalStoreContext);

  if (context === undefined) {
    throw new Error(
      'useGlobalStore must be used within a GloabalStoreProvider',
    );
  }

  return context;
};

const useGlobalStoreState = () => useGlobalStore()[0];

const useGlobalStoreUpdate = () => useGlobalStore()[1];

export {
  useGlobalStore,
  GlobalStoreProvider,
  useGlobalStoreState,
  useGlobalStoreUpdate,
};
