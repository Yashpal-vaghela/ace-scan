// lib/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const isAuthenticated = typeof window !== 'undefined' && !!localStorage.getItem('admin-auth-token');

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/admin/login');
      }
    }, [isAuthenticated]);

    return isAuthenticated ? <Component {...props} /> : null;
  };
}
