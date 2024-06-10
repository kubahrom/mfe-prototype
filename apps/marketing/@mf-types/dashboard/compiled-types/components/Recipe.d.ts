import { Recipe as RecipeType } from '../types/recipe';
type Props = {
    recipe: RecipeType;
    like: (recipeId: number) => void;
    liked: boolean;
};
export declare function Recipe({ recipe, like, liked }: Props): import("react/jsx-runtime").JSX.Element;
export {};
