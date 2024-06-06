import { Location, History } from 'history';
type ConfigOptions = {
    onNavigate?: (location: Location) => void;
    defaultHistory?: History;
    initialPath?: string;
};
declare const mount: (el: HTMLElement, { onNavigate, defaultHistory, initialPath }: ConfigOptions) => Promise<{
    onParentNavigate: ({ pathname: nextPathname }: Location) => void;
}>;
declare const unmount: () => void;
export { mount, unmount };
