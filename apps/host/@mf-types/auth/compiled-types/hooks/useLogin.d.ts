/// <reference types="react" />
export declare const useLogin: () => {
    methods: import("react-hook-form").UseFormReturn<{
        email: string;
        password: string;
    }, any, undefined>;
    onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    isLoading: boolean;
};
