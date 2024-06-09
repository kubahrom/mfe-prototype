/// <reference types="react" />
export declare const useSignup: () => {
    methods: import("react-hook-form").UseFormReturn<{
        email: string;
        password: string;
        passwordConfirmation: string;
    }, any, undefined>;
    onSubmit: (e?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    isLoading: boolean;
};
