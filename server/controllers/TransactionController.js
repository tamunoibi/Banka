import accounts from '../models/TransactionModel';

export const createCreditTransaction = (req, res) => {
  const {
    accountNumber, amount, cashier, transactionType,
  } = req.body;
  if (!accountNumber || !amount || !cashier || !transactionType) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required. Please fill them',
    });
  }
  const transaction = {
    transactionId: `234B0${accounts.length - 5 + 1}`,
    accountNumber,
    amount,
    cashier,
    transactionType,
    accountBalance: 8448449,

  };
  accounts.push(transaction);
  return res.status(201).json({
    status: 'success',
    transaction,
  });
};

export const createDebitTransaction = (req, res) => {
  const {
    amount, cashier, transactionType,
  } = req.body;
  const { accountId } = req.params;
  if (!amount || !cashier || !transactionType) {
    // console.log(transactionType, cashier, amount, accountNumber);
    return res.status(400).json({
      status: 'error',
      message: 'howdAll fields are required. Please fill them',
    });
  }
  const transaction = {
    transactionId: `234B0${accounts.length - 5 + 1}`,
    amount,
    cashier,
    transactionType,
    accountBalance: 8448449,
    accountId,

  };
  accounts.push(transaction);
  return res.status(201).json({
    status: 'success',
    transaction,
  });
};

export default accounts;
