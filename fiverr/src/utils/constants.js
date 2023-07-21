export const HOST =process.env.SERVER_URL;
export const API_URL=`${HOST}/api`;
export const AUTH_ROUTES=`${API_URL}/auth`;
export const SIGNUP_ROUTES=`${AUTH_ROUTES}/signup`;
//Above four exports:
//first one will return http://localhost:3001
//second one will return http://localhost:3001/api
//third one will return http://localhost:3001/api/auth

//This third location is exactly where AuthROutes is setup which routes to either /signup for signup or similar routing

