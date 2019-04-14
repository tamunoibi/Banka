import users from '../models/UserModel';

export const findByEmail = (userEmail) => {
  const user = users.find(singleUser => singleUser.email === userEmail);
  return user;
};

export default users;
