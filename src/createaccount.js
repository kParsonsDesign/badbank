import React from 'react';
import UserContext from './context';
import { CardBootstrap } from './context';

// // stop browser form validation
// (() => {
//   'use strict'

//   // Find all forms to use Bootstrap validation styles
//   const forms = document.querySelector('.needs-validation')

//   // Loop over all forms and prevent submission
//   Array.from(forms).forEach(form => {
//     form.addEventListener('submit', event => {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })
// })()

export default function CreateAccount() {
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName]   = React.useState('');
  const [email, setEmail]         = React.useState('');
  const [password, setPassword]   = React.useState('');
  const [validated, setValidated] = React.useState(false);
  const [canSubmit, setCanSubmit] = React.useState(false);
  const ctx = React.useContext(UserContext);

  // keep track of form field states and set canSubmit for submit button
  React.useEffect(() => {
    let formInfo = [firstName, lastName, email, password];
    let formFilled = formInfo.every((item) => { return item.length >= 1 });
    if(formFilled) setCanSubmit(true);
    if(canSubmit && !formFilled) setCanSubmit(false);
  }, [firstName, lastName, email, password, canSubmit]);

  // javascript form validation - not using
  function validate(field, label) {
    // check if fields are empty
    if (!field) {
      // setStatus('Error: Please fill ' + label + ' field');
      // setTimeout(() => setStatus(''), 3500);
      return false;
    }

    // validate name
    if (label === 'first name' || label === 'last name') {
      // let nameFormat = /[a-zA-Z]{2,20}/;
      // if (!field.match(nameFormat)) {
      // }
      if (field.length < 2) return false;
    }

    // validate email
    if (label === 'email') {
      // let emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!field.match(emailFormat)) {
        let emailInput = document.getElementById('formControlInputEmail');
        console.log(emailInput.validity);
        console.log(emailInput.willValidate);
        // setStatus('Error: Please enter a valid email address');
        // setTimeout(() => setStatus(''), 3500);
        return false;
      }
    }

    // validate password
    if (label === 'password') {
      let passwordInput = document.getElementById('formControlInputPassword');
      console.log(passwordInput.validity);
      console.log(passwordInput.willValidate);
    }
    return true;
  }


  function handleCreate(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    console.log(`validating: ${firstName}, ${lastName}, ${email}, ${password}`);
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
      <h1 className="my-3">Create Account Page</h1>
      <CardBootstrap 
        bgcolor="light"
        headerColor={show ? ("light") : ("success")}
        header={show ? "Create Account" : "Account Created"}
        status={status}
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
                <div className="invalid-feedback">First Name must be 2 or more letters.</div>
              </div>
              <div className="col-6">
                <label htmlFor="formControlInputLastName" className="form-label">Last Name</label>
                <input type="input" className="form-control" id="formControlInputLastName"
                  placeholder="Enter Last Name" value={lastName} required minLength="2"
                  onChange={e => setLastName(e.currentTarget.value)} 
                />
                <div className="invalid-feedback">Last Name must be 2 or more letters.</div>
              </div>
            </div><br />

            {/* Email */}
            <label htmlFor="formControlInputEmail" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="formControlInputEmail"
              placeholder="Enter email" value={email} required 
              pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <div className="invalid-feedback">Valid email address required.</div>
            <br />

            {/* Password */}
            <label htmlFor="formControlInputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="formControlInputPassword"
              placeholder="Enter password" value={password} required 
              minLength="8"
              onChange={e => setPassword(e.currentTarget.value)}
            />
            <div className="invalid-feedback">Password must be 8 or more characters.</div>
            <br />

            {/* Submit Button */}
            <button type="submit" disabled={!canSubmit} className="btn btn-primary">Create Account</button>
            </form>
          ) : (
            <div>
            {/* Success Notification */}
              <h5>The account for {firstName} {lastName} was successfully created.</h5>
              <p>Would you like to create another account?</p>
              <button type="submit" className="btn btn-outline-primary"
                onClick={clearForm}>Add another account</button>
            </div>
          )}
      />
    </div>
  );
}
