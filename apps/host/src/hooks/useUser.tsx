import { useGlobalStore } from '@store/GlobalStore';
import { logout as logoutFn } from 'auth/methods';

export function useUser() {
  const [state, setState] = useGlobalStore();

  const logout = async () => {
    await logoutFn();
    setState((state) => ({ ...state, user: null }));
    localStorage.removeItem('mfe-auto-login');
  };
  return { user: state.user, logout };
}
