import { User } from 'firebase/auth';
export declare const signup: (email: string, password: string) => Promise<import("firebase/auth/cordova").UserCredential>;
export declare const login: (email: string, password: string) => Promise<import("firebase/auth/cordova").UserCredential>;
export declare const logout: () => Promise<void>;
export declare const observeAuthState: (callback: (user: User | null) => void) => import("firebase/auth").Unsubscribe;
