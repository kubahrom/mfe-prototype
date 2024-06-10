import React, { Dispatch } from 'react';
type Props = {
    cuisines: string[];
    selected: string[];
    setSelected: Dispatch<React.SetStateAction<string[]>>;
};
export declare const RecipeFilter: ({ cuisines, selected, setSelected }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
