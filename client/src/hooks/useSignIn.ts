import axios from 'axios';

type SignInData = { identifier: string; password: string };

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const useSignIn = () => {
  const signIn = async (data: SignInData) => {
    const res = await api.post('/api/auth/signin', data);
    return res.data;
  };

  return { signIn };
};
