import accounts from '../models/TransactionModel';

export const createCreditTransaction = (req, res) => {
  const {
    accountNumber, amount, cashier, transactionType,
  } = req.body;
  if (!accountNumber || !amount || !cashier || !transactionType) {
    return res.status(400).json({
      status: 400,
      error: 'All fields are required. Please fill them',
    });
  }
  const data = {
    transactionId: `234B0${accounts.length - 5 + 1}`,
    accountNumber,
    amount,
    cashier,
    transactionType,
    accountBalance: 8448449,

  };
  accounts.push(data);
  return res.status(201).json({
    status: 201,
    data,
  });
};

export const createDebitTransaction = (req, res) => {
  const {
    amount, cashier, transactionType, accountNumber,
  } = req.body;
  const { accountId } = req.params;
  if (!accountNumber || !amount || !cashier || !transactionType) {
    return res.status(400).json({
      status: 400,
      error: 'All fields are required. Please fill them',
    });
  }
  const data = {
    transactionId: `234B0${accounts.length - 5 + 1}`,
    amount,
    cashier,
    transactionType,
    accountBalance: 8448449,
    accountId,

  };
  accounts.push(data);
  return res.status(201).json({
    status: 201,
    data,
  });
};
