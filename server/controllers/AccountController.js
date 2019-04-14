import accounts from '../models/AccountModel';

export const createAccount = (req, res) => {
  const {
    accountNumber, owner, type, status, balance,
  } = req.body;
  if (!accountNumber || !owner || !type || !status || !balance) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required. Please fill them',
    });
  }
  const account = {
    id: `234B0${accounts.length - 5 + 1}`,
    accountNumber,
    owner,
    type,
    status,
    balance,
  };
  accounts.push(account);
  return res.status(201).json({
    status: 'success',
    account,
  });
};

export const updateAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find(singleAccount => singleAccount.accountNumber === accountId);

  if (!account) {
    return res.status(400).json({
      status: 'error',
      message: 'No account with the given email',
    });
  }
  const { status } = req.body;

  account.update(status);

  return res.status(202).json({
    status: 'success',
    account,
  });
};


export const deleteAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find(singleAccount => singleAccount.accountNumber === accountId);

  if (!account) {
    return res.status(400).json({
      status: 'error',
      message: 'No account with the given email',
    });
  }
  const { status } = req.body;

  account.remove(status);

  return res.status(204).json({
    status: 'success',
    account,
  });
};


export default accounts;
