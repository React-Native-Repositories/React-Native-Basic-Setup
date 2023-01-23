import { getToken } from "@utils/storage-helpers";

export const authHeader = async () => {
  // return authorization header with jwt token
  if (await getToken('access_token')) {
    return {
      Authorization:`Bearer ${await getToken('access_token')}`,
    };
  } else {
    return {
      // 'Content-Type': 'application/json',
     'X-REQUESTED-FROM': 'android'};
  }
};
