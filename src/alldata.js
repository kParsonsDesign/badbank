import React from 'react';
import UserContext from './context';

export default function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1 className="my-3 mb-5">Registered Users</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Logged In</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
      <tbody>
        {ctx.users.map((user, index) => {
          return (
            <>
            <tr key={`user${index}`} style={{fontWeight:'600'}}>
              <td key={`${index}loggedIn`} style={{paddingLeft: '1.5rem'}}>{user.loggedIn ? <img style={{width: '1rem', height: '1rem'}} alt='check' src='https://pf-emoji-service--cdn.us-east-1.prod.public.atl-paas.net/standard/a51a7674-8d5d-4495-a2d2-a67c090f5c3b/32x32/2714.png'/> : ""}</td>
              <td key={`${index}firstName`}>{user.firstName}</td>
              <td key={`${index}lastName`}>{user.lastName}</td>
              <td key={`${index}email`}>{user.email}</td>
              <td key={`${index}password`}>{user.password}</td>
              <td key={`${index}balance`}>${user.balance.toLocaleString("en-US")}</td>
            </tr>
            {user.transactionHistory ? (
              <tr><td colSpan="6"><table className='table w-75' style={{marginLeft: '20%'}}>
                <thead style={{color:'rgba(0, 0, 0, 0.65)', background:'rgba(0, 0, 0, 0.05)'}}><tr><td>Transactions:</td><td>Type</td><td>Amount</td><td>Running Balance</td></tr></thead>
                <tbody style={{borderTopColor: 'rgba(0, 0, 0, 0.08)', color:'rgba(0, 0, 0, 0.65)', background:'rgba(0, 0, 0, 0.03)'}}>
                {user.transactionHistory.map((transaction, tIndex) => {
                  return (
                  <tr key={'user' + index + '-trans' + tIndex}>
                    <td key={`user${index}-trans${tIndex}time`}>{transaction.time}</td>
                    <td key={`user${index}-trans${tIndex}type`}>{transaction.type === 'deposit' ? 'Deposit' : 'Withdraw'}</td>
                    <td key={`user${index}-trans${tIndex}amount`}>${transaction.amount}</td>
                    <td key={`user${index}-trans${tIndex}runbal`}>${transaction.runningBalance.toLocaleString()}</td>
                  </tr>
                  );
                })}
                </tbody>
              </table></td></tr>
            ) : ''}
            </>
          );
        })}
      </tbody>
      </table>
    </div>
  );  
}  
