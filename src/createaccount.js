import React from 'react';
import UserContext from './context';
import { CardBootstrap } from './context';

export default function CreateAccount() {
  // show controls create account or success message showing
  const [show, setShow]           = React.useState(true);
  // class version below button status message
  // const [status, setStatus]       = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName]   = React.useState('');
  const [email, setEmail]         = React.useState('');
  const [password, setPassword]   = React.useState('');
  // was form validated? for bootstrap syling
  const [validated, setValidated] = React.useState(false);
  // are all fields filled? submit button disable
  const [canSubmit, setCanSubmit] = React.useState(false);
  const ctx = React.useContext(UserContext);

  // keep track of form field states and set canSubmit for submit button
  React.useEffect(() => {
    let formInfo = [firstName, lastName, email, password];
    let formFilled = formInfo.every((item) => { return item.length >= 1 });
    if(formFilled) setCanSubmit(true);
    if(canSubmit && !formFilled) setCanSubmit(false);
  }, [firstName, lastName, email, password, canSubmit]);

  // form validation
  function validate(field, label) {
    // check if fields are empty
    if (!field) {
      return false;
    }

    // validate first name
    if (
      label === 'first name' && 
      !document.getElementById('formControlInputFirstName').checkValidity()
    ) {
      return false;
    }

    // validate last name name
    if (
      label === 'last name' &&
      !document.getElementById('formControlInputLastName').checkValidity()
    ) {
      return false;
    }

    // validate email
    if (
      label === 'email' &&
      !document.getElementById('formControlInputEmail').checkValidity()
    ) {
      // let emailFormat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return false;
    }

    // validate password
    if (
      label === 'password' &&
      !document.getElementById('formControlInputPassword').checkValidity()
    ) {
      return false;
    }

    // if all pass
    return true;
  }


  function handleCreate(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);
    // const form = e.currentTarget;
    // turns on bootstrap form valid? styling
    setValidated(true);
        console.log(`validating: ${firstName} ${lastName}, email: ${email}, password: ${password}`);
    if (!validate(firstName,  'first name'))  return;
        console.log(`firstName validated: ${firstName}`);
    if (!validate(lastName,   'last name'))   return;
        console.log(`lastName validated: ${lastName}`);
    if (!validate(email,      'email'))       return;
        console.log(`email validated: ${email}`);
    if (!validate(password,   'password'))    return;
        console.log(`password validated: ${password}`);
    ctx.users.push({firstName, lastName, email, password, balance:100});
    setShow(false);
  }

  function clearForm() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setValidated(false);
    setShow(true);
  }

  return (
    <div>
      {/* <h1 className="my-3">Create Account Page</h1> */}
      <CardBootstrap 
        bgcolor="light"
        headerColor={show ? ("light") : ("success")}
        headerBgColor={show ? ("light") : ("success")}
        headerText={show ? "Create Account" : "Account Created"}
        
        body={show ? (
          <form className={validated ? "was-validated" : "needs-validation"} 
            noValidate onSubmit={handleCreate} data-testid="form">
            {/* First and Last Name Row */}
            <div className="form-group row">
              <div className="col-6">
                <label htmlFor="formControlInputFirstName" className="form-label">First Name</label>
                <input type="input" className="form-control" id="formControlInputFirstName"
                  placeholder="Enter First Name" value={firstName} required minLength="2"
                  onChange={e => setFirstName(e.currentTarget.value)} 
                />
                <div id='first-name-invalid' className="invalid-feedback">First Name must be 2 or more letters.</div>
              </div>
              <div className="col-6">
                <label htmlFor="formControlInputLastName" className="form-label">Last Name</label>
                <input type="input" className="form-control" id="formControlInputLastName"
                  placeholder="Enter Last Name" value={lastName} required minLength="2"
                  onChange={e => setLastName(e.currentTarget.value)} 
                />
                <div id='last-name-invalid' className="invalid-feedback">Last Name must be 2 or more letters.</div>
              </div>
            </div><br />

            {/* Email */}
            <label htmlFor="formControlInputEmail" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="formControlInputEmail"
              placeholder="Enter email" value={email} required 
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <div id='email-invalid' className="invalid-feedback">Valid email address required.</div>
            <br />

            {/* Password */}
            <label htmlFor="formControlInputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="formControlInputPassword"
              placeholder="Enter password" value={password} required minLength="8"
              pattern='/[a-zA-Z0-9'
              onChange={e => setPassword(e.currentTarget.value)}
            />
            <div id='password-invalid' className="invalid-feedback">Password must be 8 or more characters.</div>
            <br />

            {/* Submit Button */}
            <button type="submit" disabled={!canSubmit} className="btn btn-primary">Create Account</button>
          </form>
        ) : (
          <div>
          {/* Success Notification */}
            
            <p className='lead'>Congratulations, <span className='fw-bolder'>{firstName} {lastName}</span>! Your account was successfully created.</p>
            <p>Would you like to create another account?</p>
            <button type="submit" className="btn btn-outline-primary"
              onClick={clearForm}>Add another account</button>
          </div>
        )}
      />
    </div>
  );
}
