import React from 'react';
import * as ReactDOM from 'react-dom';
import { render, screen, fireEvent, getByLabelText, getByText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
// import { NameContext, NameProvider, NameConsumer} from 're'
import CreateAccount from './createaccount';
import UserContext from './context';
import { act } from 'react-dom/test-utils';

// Refactor BadBank App
// use fireEvent and/or userEvent to test input data

// What user event did you choose?
// Whould you use the fireEvent or userEvent to test? Why?
// Submit a screenshot

// Create Account Page renders
describe('Create Account render Page', () => {
  it('renders Create Account page', () => {
    render(<CreateAccount />);
    expect(screen.getByRole('heading', {name: "Create Account Page"}));
    expect(document.querySelector('.card-header').textContent).toBe('Create Account');
  });

  it('renders 4 input fields', () => {
    render(<CreateAccount />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(<CreateAccount />);
    expect(screen.getByRole('button', {type: 'submit'})).toBeInTheDocument();
  });
});

describe('Form behaviior', () => {
  it('submit button should be disabled if all fields are empty', async () => {
    render(<CreateAccount />);
    expect(screen.getByRole('button', {type: 'submit'}).disabled).toBe(true);
  });

  it('validate user inputs, and provides error messages', async () => {
    render(<CreateAccount />);

    // wait for fields to change
    await act (async () => {
      fireEvent.change(screen.getByLabelText(/first name/i), {
        target: {value: ''},
      });

      fireEvent.change(screen.getByLabelText(/last name/i), {
        target: {value: ''},
      });

      fireEvent.change(screen.getByLabelText(/email/i), {
        target: {value: ''},
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: ''},
      });
    });

    await act (async () => {
      fireEvent.submit(screen.getByTestId('form'));
    });

    expect(screen.getByText(/First Name must be 2 or more/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name must be 2 or more/i)).toBeInTheDocument();
    expect(screen.getByText(/Valid email address required/i)).toBeInTheDocument();
    expect(screen.getByText(/Password must be 8 or more/i)).toBeInTheDocument();
  });

  it('success message should be shown on successful form submit', async () => {
    render(
      <UserContext.Provider value={{users: []}}>
        <CreateAccount />
      </UserContext.Provider>
    );

    
    // wait for fields to change
    await act (async () => {
      fireEvent.change(screen.getByLabelText(/first name/i), {
        target: {value: 'Katherine'},
      });

      fireEvent.change(screen.getByLabelText(/last name/i), {
        target: {value: 'Parsons'},
      });

      fireEvent.change(screen.getByLabelText(/email/i), {
        target: {value: 'email@email.com'},
      });

      fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: 'password'},
      });
    });

    // attempt to submit form
    await act (async () => {
      fireEvent.submit(screen.getByTestId('form'));
    });

    // success message
    expect(document.querySelector('.card-header').textContent).toBe('Account Created');
  });


});



// Test firstName input and validity
// test('Test firstName input', () => {
//   // render CreateAccount page
//   // import CreateAccount component directly, so as not to involve routing
//   render(<CreateAccount />);
//   const firstName = document.querySelector('#formControlInputFirstName');
//   const lastName  = document.querySelector('#formControlInputLasttName');
//   const email     = document.querySelector('#formControlInputEmail');
//   const password  = document.querySelector('#formControlInputPassword');
//   const submit    = screen.getByRole('button', {type: 'submit'});

//   // make sure firstName input exists on page
//   expect(firstName).toBeInTheDocument();

//   // firstName validityState
//   // should be false to begin with
//   expect(firstName.validity.valid).toBe(false);
//   expect(firstName.validity.valueMissing).toBe(true);
//   // minLenght attribute should = 2
//   expect(firstName.minLength).toBe(2);

//   // fill out other fields
//   userEvent.type(lastName, "Parsons");
//   userEvent.type(email, 'user@email.com');
//   userEvent.type(password, 'password');
  
//   // test single character input
//   // valid should be false with less than 2 characters input userEvent
//   // userEvent.type(firstName, "K");
//   // userEvent.click(submit);

//   // expect(firstName.value.length).toBe(1);
//   // expect(firstName.validity.tooShort).toBe(true);
//   // expect(firstName.validity.valid).toBe(false);
//   // these aren't testing properly

//   // valid should be false with less than 2 characters input fireEvent
//   fireEvent.change(firstName, {target: {value: "K"}});
//   // length after input should be 1
//   expect(firstName.value.length).toBe(1);
//   expect(firstName.validity.tooShort).toBe(true);
//   // need to click on submit?
// });
