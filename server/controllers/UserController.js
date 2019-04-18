import users from '../models/UserModel';

export const createUser = (req, res) => {
  const {
    email, firstName, lastName, password, type,
  } = req.body;

  if (!email || !firstName || !lastName || !password || !type) {
    return res.status(400).json({
      status: 'error',
      error: 'All fields are required. Please fill them',
    });
  }
  const data = {
    token: `739${users.length + 1}`,
    id: `234B0${users.length + 1}`,
    email,
    firstName,
    lastName,
    password,
    type,
  };
  users.push(data);
  return res.status(201).json({
    status: 201,
    data,

  });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: '400',
      error: 'All fields are required. Please fill them',
    });
  }

  let user = users.find(singleUser => singleUser.email === email);
  if (!user) {
    return res.status(400).json({
      status: 'error',
      error: 'No User with the given Credentials',
    });
  }

  if (String(user.password) !== String(password)) {
    return res.status(401).json({
      status: 'error',
      error: 'No User with the given credentials',
    });
  }

  if (String(user.password) !== String(password)) {
    return res.status(401).json({
      status: 'error',
      error: 'Password could not be authenticated',
    });
  }

  if (String(user.password) !== String(password)) {
    return res.status(401).json({
      status: 'error',
      error: 'Password could not be authenticated',
    });
  }

  const {
    id, firstName, lastName,
  } = user;

  user = {
    token: `234B0${users.length + 1}`,
    id,
    firstName,
    lastName,
    email,
  };
  return res.status(201).json({
    status: 201,
    user,
  });
};
