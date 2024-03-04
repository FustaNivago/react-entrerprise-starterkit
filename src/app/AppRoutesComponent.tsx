import { Route, Routes } from 'react-router-dom';
import { RoutePath } from 'src/app/shared/routes';
import { LoginPage, NotFoundPage } from 'src/app/shared/pages';
import { DashBoardPageAsync } from 'src/app/dashboard/pages';
import { AdminRoutesComponentAsync } from 'src/app//admin/routes';
import GuardedRoute from 'src/app/shared/routes/guardedRoute';

const AppRoutesComponent = () => {
  return (
    <Routes>
      <Route element={<GuardedRoute />}>
        <Route path={`${RoutePath.admin}/*`} element={<AdminRoutesComponentAsync />} />
        <Route path={RoutePath.dashboard} element={<DashBoardPageAsync />} />
      </Route>
      <Route path={RoutePath.login} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutesComponent;
