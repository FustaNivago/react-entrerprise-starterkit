import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { RoutePath } from '.';
import { UserRole } from '../types';
import { useContextState } from '../state';

interface GuardedRouteProps {
  roles?: UserRole[];
}

const GuardedRoute = ({ roles }: GuardedRouteProps) => {
  const userAuthenticated = useContextState((state) => state.userAuthenticated);
  const hasPermissions: boolean = userAuthenticated;

  const location = useLocation();

  if (!userAuthenticated) {
    return <Navigate to={RoutePath.login} replace state={location.pathname} />;
  }

  return hasPermissions ? <Outlet /> : <Navigate to={RoutePath.dashboard} replace />;
};

export default GuardedRoute;
