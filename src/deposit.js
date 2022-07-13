import React from 'react';
import UserContext, { BankForm } from './context';

export default function Deposit() {
  const ctx = React.useContext(UserContext);
  const user = (ctx.users.find(user => user.loggedIn === true));
  const userIndex = (ctx.users.findIndex(user => user.loggedIn === true));
  console.log('loggedIn user:');
  console.log(user);
  console.log(userIndex);
  console.log(ctx);

  return (
    <div>
      <h1 className="my-3">Deposit Page</h1>
      {JSON.stringify(ctx)}
      <p className='lead'>Welcome, {user.firstName}. Would you like to deposit money into your account today?</p>
      <BankForm 
        header="Deposit"
        user={userIndex}
      />
    </div>
  );
}
