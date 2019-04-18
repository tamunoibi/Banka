import users from '../models/UserModel';

const findByEmail = (userEmail) => {
  const user = users.find(singleUser => singleUser.email === userEmail);
  return user;
};

export default findByEmail;
