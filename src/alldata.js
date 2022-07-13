import React from 'react';
import UserContext from './context';

export default function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1 className="my-3">All Data Page</h1>
      <h3 className="mt-5 text-muted">Registered Users:</h3>
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
            <tr key={index}>
              <td>{user.loggedIn ? "X" : ""}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>${user.balance.toLocaleString("en-US")}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );  
}  
