export enum AuthActionsTypes {
  // Signin Actions
  SIGNIN = 'SIGNIN',
  SIGNIN_SUCCESS = 'SIGNIN_SUCCESS',
  SIGNIN_FAILURE = 'SIGNIN_FAILURE',

  SIGNUP = 'SIGNUP',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'SIGNUP_FAILURE',

  SIGNOUT = 'SIGNOUT',
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export interface AuthState {
  user: User | null;

  pending_signin: boolean;
  error_signin: string | null;

  pending_signup: boolean;
  error_signup: string | null;
}

export type SigninAction = {
  type: AuthActionsTypes.SIGNIN;
  payload: never;
};

export type SigninSuccessAction = {
  type: AuthActionsTypes.SIGNIN_SUCCESS;
  payload: {user: User};
};

export type SigninFailureAction = {
  type: AuthActionsTypes.SIGNIN_FAILURE;
  payload: {error: string};
};

export type SignupAction = {
  type: AuthActionsTypes.SIGNUP;
  payload: never;
};

export type SignupSuccessAction = {
  type: AuthActionsTypes.SIGNUP_SUCCESS;
  payload: never;
};

export type SignupFailureAction = {
  type: AuthActionsTypes.SIGNUP_FAILURE;
  payload: {error: string};
};

export type SignoutAction = {
  type: AuthActionsTypes.SIGNOUT;
  payload: never;
};

export type AuthPayloadTypes =
  | SigninAction
  | SigninSuccessAction
  | SigninFailureAction
  | SignupAction
  | SignupSuccessAction
  | SignupFailureAction
  | SignoutAction;
