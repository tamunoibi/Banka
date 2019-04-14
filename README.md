# Banka [![Build Status](https://travis-ci.com/girlking/Banka.svg?branch=develop)](https://travis-ci.com/girlking/Banka)
[![Coverage Status](https://coveralls.io/repos/github/girlking/Banka/badge.svg?branch=develop)](https://coveralls.io/github/girlking/Banka?branch=develop)
[![Test Coverage](https://api.codeclimate.com/v1/badges/97c3cf49cfe686856325/test_coverage)](https://codeclimate.com/github/girlking/Banka/test_coverage)
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Project Overview
Banka is a light-weight core banking application that powers banking operations like account
creation, customer deposit and withdrawals. This app is meant to support a single bank, where
users can signup and create bank accounts online, but must visit the branch to withdraw or
deposit money.

## Getting Started

<!-- > [UI Templates](#ui-templates) &middot; [Pivotal Tracker](#pivotal-tracker) &middot; [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Acknowledgments](#acknowledgments) &middot; [Author](#author) -->
> [UI Templates](#ui-templates) &middot; [Pivotal Tracker](#pivotal-tracker) &middot; [Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [Tests](#tests) &middot; [Acknowledgments](#acknowledgments) &middot; [Author](#author)


## UI Templates

UI Template for the application can be found here [Github pages](https://girlking.github.io/Banka/).

<!-- ## Heroku App -->


## Pivotal Tracker

Pivotal Tracker Stories can found here [Pivotal tracker](https://www.pivotaltracker.com/n/projects/2319915).


---

## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node) A run time environment based off Chrome's v8 Engines for writing Javascript server-side applications.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.

## Testing Tools

- [Mocha](https://mochajs.org/) A javascript testing framework.
- [Chai](https://chaijs.com) A test assertion library for Javascript.

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `https://github.com/girlking/Banka.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm start
  ```
- Use `http://localhost:3000` as base url for endpoints

<!-- ## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ --| --------------------------------------- | ------------------------- |
| POST     | Sign up for an account                  | `/api/v1/auth/signup`     | 
| POST     | Sign in to an account                   | `/api/v1/auth/signin`     | 
| POST     | Create a bank account                   | `/api/v1/accounts`        | 
| PATCH    | Activate or deactive an account         | `/api/v1/accounts/:accountNumber`| 
| DELETE   | Delete an account                       | `/api/v1/accounts/:accountNumber`|
| POST     | Perform a debit transaction             | `/api/v1/transactions/{accountNumber}/debit`| 
| POST     | Perform a credit transaction            | `/api/v1/transactions/{accountNumber}/credit`| 

## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm test
  ```

## Licence

MIT

## Acknowledgments

Andela
