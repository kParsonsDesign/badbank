import React from 'react';
import { Button, Card, FloatingLabel, Form, FormControl, InputGroup } from 'react-bootstrap';
import UserContext, { CardBootstrap} from './context';

export default function Login() {
  const ctx = React.useContext(UserContext);
  const user = ctx.users.find(item => item.loggedIn === true);

  return (
    <div className='row justify-content-start'>
      <div className='col-10 col-sm-8 col-md-6 col-lg-5'>
      <CardBootstrap 
        
        headerText='Login'
        body={(
          <>
          <p>Welcome, <span className='fw-bold'> {user.firstName}&nbsp;{user.lastName}</span>!</p> 
          <p>You may continue using this account or log in to another.</p>
          <hr />
          <Card.Title>Change Account</Card.Title>
          <Form>
            <FloatingLabel controlId='floatingEmail' label="Email" className='my-3'>
              <Form.Control type='email' placeholder='email@email.com' className='' />
            </FloatingLabel>
            <FloatingLabel controlId='floatingPassword' label="Password" className='my-3'>
              <Form.Control type='password' placeholder='password' />
            </FloatingLabel>
          </Form>
          </>
        )}
      />
      </div>

      <div className='col col-lg-4'>
      <CardBootstrap
        className="d-none d-md-flex"
        width="18rem"
        body={(
          <>
          <InputGroup className='mb-3'>
            <InputGroup.Text className='col-md-4'>Account</InputGroup.Text>
            <Button variant='outline-secondary' className='col-md-8' disabled>{user.firstName} {user.lastName}</Button>
          </InputGroup>
          <InputGroup className='mb-3'>
            <InputGroup.Text className='col-md-4'>Balance</InputGroup.Text>
            <Button variant='outline-secondary' className='col-md-8 text-dark' disabled>${user.balance.toLocaleString()}</Button>
          </InputGroup>

          <hr />
          <p className='lead'>Account Actions:</p>
          <Button variant='outline-secondary' className='m-1'>Deposit</Button>
          <Button variant='outline-secondary' className='m-1'>Withdraw</Button>
          </>
        )}
      />
      </div>

    </div>
  );
}
