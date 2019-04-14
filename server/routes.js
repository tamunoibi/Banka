import express from 'express';
import { createUser, loginUser } from './controllers/UserController';
import { createAccount, updateAccount, deleteAccount } from './controllers/AccountController';
import { createCreditTransaction, createDebitTransaction } from './controllers/TransactionController';

const router = express.Router();

router.post('/auth/signup', createUser);

router.post('/auth/login', loginUser);

router.post('/accounts', createAccount);

router.patch('/accounts/:accountId', updateAccount);

router.delete('/accounts/:accountId', deleteAccount);

router.post('/transactions/:accountId/credit', createCreditTransaction);

router.post('/transactions/:accountId/debit', createDebitTransaction);


export default router;
