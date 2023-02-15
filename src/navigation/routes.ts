export enum RootNavigatorRoutes {
  AUTHENTICATED = 'AUTHENTICATED',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
}

export enum UnauthenticatedRoutes {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
}

export enum AuthenticatedRoutes {
  HOME = 'HOME',
  TRADE = 'TRADE',
  PORTFOLIO = 'PORTFOLIO',
}

export type RoutesParams = {
  [UnauthenticatedRoutes.LOGIN]: undefined;
  [UnauthenticatedRoutes.SIGNUP]: undefined;
  [UnauthenticatedRoutes.SIGNUP_SUCCESS]: undefined;

  [AuthenticatedRoutes.HOME]: undefined;
  [AuthenticatedRoutes.TRADE]: undefined;
  [AuthenticatedRoutes.PORTFOLIO]: undefined;
};
