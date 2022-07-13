import React from 'react';
import UserContext from './context';

export default function Login() {
  const ctx = React.useContext(UserContext);

  return (
    <div>
      <h1 className="my-3">Login Page</h1>
      {JSON.stringify(ctx)}
    </div>
  );
}
