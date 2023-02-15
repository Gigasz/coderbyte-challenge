import {
  AuthActionsTypes,
  AuthPayloadTypes,
  AuthState,
} from 'store/types/auth-types';

const INITIAL_STATE: AuthState = {
  user: null,

  pending_signin: false,
  error_signin: null,

  pending_signup: false,
  error_signup: null,
};

const SigninReducer = (
  state = INITIAL_STATE,
  action: AuthPayloadTypes,
): AuthState => {
  switch (action.type) {
    case AuthActionsTypes.SIGNIN:
      return {
        ...state,
        pending_signin: true,
        error_signin: null,
      };
    case AuthActionsTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        pending_signin: false,
        user: action.payload.user,
      };
    case AuthActionsTypes.SIGNIN_FAILURE:
      return {
        ...state,
        pending_signin: false,
        error_signin: action.payload.error,
      };

    case AuthActionsTypes.SIGNUP:
      return {
        ...state,
        pending_signup: true,
        error_signup: null,
      };
    case AuthActionsTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        pending_signup: false,
      };
    case AuthActionsTypes.SIGNUP_FAILURE:
      return {
        ...state,
        pending_signup: false,
        error_signup: action.payload.error,
      };

    case AuthActionsTypes.SIGNOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default SigninReducer;
