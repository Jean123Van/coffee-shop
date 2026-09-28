import { getMe } from '@/api/user';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const token = localStorage.getItem('token');

    const { data, isLoading } = useQuery({
        queryKey: ['me'],
        queryFn: getMe,
        enabled: !!token,
        staleTime: Infinity,
    });

    if (!token || (!isLoading && !data)) {
        return <Navigate to="/login" replace />;
    }

    if (isLoading) {
        return null;
    }

    return <Outlet />;
}

export default ProtectedRoute;
