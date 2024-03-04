export enum AppRoutes {
  AdminModule = 'admin',
  DashboardModule = 'dashboard',
  LoginPage = 'login',
  NotFoundPage = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.AdminModule]: '/admin',
  [AppRoutes.DashboardModule]: '/',
  [AppRoutes.LoginPage]: '/login',
  [AppRoutes.NotFoundPage]: '/404',
};
