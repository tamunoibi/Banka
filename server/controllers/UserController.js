import users from '../models/UserModel';

export const createUser = (req, res) => {
  const {
    email, firstName, lastName, password, type,
  } = req.body;

  if (!email || !firstName || !lastName || !password || !type) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required. Please fill them',
    });
  }
  const user = {
    id: `234B0${users.length - 5 + 1}`,
    email,
    firstName,
    lastName,
    password,
    type,
  };
  users.push(user);
  return res.status(201).json({
    status: 'success',
    user,
    token: `234B0${users.length - 5 + 1}`,
  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required. Please fill them',
    });
  }

  let user = users.find(singleUser => singleUser.email === email);
  if (!user) {
    return res.status(400).json({
      status: 'error',
      message: 'No User with the given email',
    });
  }

  if (String(user.password) !== String(password)) {
    return res.status(401).json({
      status: 'error',
      message: 'Password could not be authenticated',
    });
  }

  const {
    id, firstName, lastName,
  } = user;

  user = {
    token: `234B0${users.length - 5 + 1}`,
    id,
    firstName,
    lastName,
    email,
  };
  return res.status(201).json({
    status: 'success',
    user,
  });
};

export default users;
