import { useGlobalStore } from '@store/GlobalStore';

export function useUser() {
  const [state, setState] = useGlobalStore();

  const login = () => setState({ user: true });

  const logout = () => setState({ user: false });
  return { user: state.user, login, logout };
}
