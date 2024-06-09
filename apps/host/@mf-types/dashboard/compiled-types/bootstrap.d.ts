import { Location, History } from 'history';
type ConfigOptions = {
    onNavigate?: (location: Location) => void;
    defaultHistory?: History;
    initialPath?: string;
    userId?: string;
};
declare const mount: (el: HTMLElement, { onNavigate, defaultHistory, initialPath, userId }: ConfigOptions) => Promise<{
    onParentNavigate: ({ pathname: nextPathname }: Location) => void;
}>;
declare const unmount: () => void;
export { mount, unmount };
