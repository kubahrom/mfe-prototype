type Props = {
    search: string;
    like: (recipeId: number) => void;
    likes: number[];
    filter: 'all' | 'bookmarked';
};
export declare const RecipeList: ({ search, like, likes, filter }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
