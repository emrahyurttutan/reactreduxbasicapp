import { UPDATE_USER } from "../types/users";
export const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    payload: {
      user: newUser
    }
  };
};
