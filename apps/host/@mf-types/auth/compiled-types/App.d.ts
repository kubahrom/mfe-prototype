import { History, MemoryHistory } from 'history';
type Props = {
    history: MemoryHistory | History;
    onSignIn?: () => void;
};
export default function App({ history, onSignIn }: Props): import("react/jsx-runtime").JSX.Element;
export {};
