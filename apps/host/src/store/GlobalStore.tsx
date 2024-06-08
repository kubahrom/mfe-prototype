import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const initialState = {
  user: false,
};
type GlobalStoreType = typeof initialState;

type GlobalStoreContextType = [
  state: GlobalStoreType,
  setState: Dispatch<SetStateAction<GlobalStoreType>>,
];

const GlobalStoreContext = createContext<GlobalStoreContextType>([
  initialState,
  () => {},
]);

const GlobalStoreProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState);

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
