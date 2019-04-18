import accounts from '../models/AccountModel';

export const createAccount = (req, res) => {
  const {
    accountNumber, owner, type, status, balance,
  } = req.body;
  if (!accountNumber || !owner || !type || !status || !balance) {
    return res.status(400).json({
      status: 400,
      error: 'All fields are required. Please fill them',
    });
  }
  const data = {
    id: `234B0${accounts.length - 5 + 1}`,
    accountNumber,
    owner,
    createdOn: new Date(),
    type,
    status,
    balance,
  };
  accounts.push(data);
  return res.status(201).json({
    status: 201,
    data,
  });
};

export const updateAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find(singleAccount => singleAccount.accountNumber === accountId);

  if (!account) {
    return res.status(400).json({
      status: 'error',
      error: 'No account with the given email',
    });
  }
  const { status } = req.body;

  account.update(status);

  return res.status(202).json({
    status: 203,
    account,
  });
};


export const deleteAccount = (req, res) => {
  const { accountId } = req.params;
  const data = accounts.find(singleAccount => singleAccount.accountNumber === Number(accountId));
  if (!data) {
    return res.status(404).json({
      status: 404,
      error: 'BAD REQUEST, The request was malformed',
    });
  }
  const indexOfAccount = accounts.indexOf(data);

  accounts.splice(indexOfAccount, 1);
  return res.status(204).json({
    status: 204,
    data,
  });
};
