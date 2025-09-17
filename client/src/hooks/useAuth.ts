import { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
  id: string;
  name: string;
  avatar?: string;
  email: string;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get('/api/auth/me', { withCredentials: true });
      console.log(res);
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await api.post('/api/auth/logout', {}, { withCredentials: true });
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, logout };
};
