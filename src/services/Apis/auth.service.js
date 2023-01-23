import {Delete, get, patch, post} from '../helpers/http-handler';
import config from '../config'
export const adminLogin = payload =>
  post(`${config.API_URL}/auth/user/email/login`, payload);

export const adminForgotPassword = payload =>
  post(`${config.API_URL}/auth/user/email/forgot-password`, payload);

export const adminSetPassword = payload =>
  post(`${config.API_URL}/auth/user/email/set-password`, payload);

export const adminSuperUser = payload =>
  post(`${config.API_URL}/auth/user/super-user`, payload);

export const adminCreateUser = payload =>
  post(`${config.API_URL}/users`, payload);

export const adminGetUsers = queryRequest =>
  get(`${config.API_URL}/users?${queryRequest}`);

export const adminGetSpecificUser = id => get(`${config.API_URL}/users/${id}`);

export const adminUpdateSpecificUser = (id, payload) =>
  patch(`${config.API_URL}/users/${id}`, payload);

export const adminDeleteSpecificUser = id =>
  Delete(`${config.API_URL}/users/${id}`);
