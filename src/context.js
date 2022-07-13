import React from 'react';
// import { Route, Routes, Link, HashRouter } from 'react-router';
import { Card, Form } from 'react-bootstrap';

// Global variables in this file
// do not need to be brought in with context to index.js
// const Route       = ReactRouterDOM.Route;
// const Routes      = ReactRouterDOM.Routes;
// const Link        = ReactRouterDOM.Link;
// const HashRouter  = ReactRouterDOM.HashRouter;

// Context shared between consumer components
const UserContext = React.createContext(null);
export default UserContext;

// New bootstrap card component
// const Card = ReactBootstrap.Card;

export function CardBootstrap(props) {
  function classes() {
    const bg  = props.bgcolor  ? ' bg-'   + props.bgcolor  : '';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-body';
    return 'mt-5' + bg + txt;
  }

  // function styles() {
  // }

  return (
    // possibly add style option to card output in future
    <Card className={classes()}>
      {props.header && <Card.Header 
        className={props.headerColor ? 'bg-' + props.headerColor : ''}>{props.header}
      </Card.Header>}
      <Card.Body>
        {props.title && <Card.Title as="h5">{props.title}</Card.Title>}
        {props.text && <Card.Text>{props.text}</Card.Text>}
        {props.body}
        {props.status && <div id='createStatus' className="text-danger">{props.status}</div>}
        {/* {props.status && <Button variant='primary'>Go somewhere</Button>} */}
        {props.footer && <Card.Footer>{props.footer}</Card.Footer>}
      </Card.Body>
    </Card>
  );
}

export function MyCard(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : '';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3' + bg + txt;
  }

  return (
    <div className={classes()} style={{ maxWidth: '18rem' }}>
      <div className='card-header'>{props.header}</div>
      <div className='card-body'>
        {props.title && <h5 className='card-title'>{props.title}</h5>}
        {props.text && <p className='card-text'>{props.text}</p>}
        {props.body}
        {props.status && <div id='createStatus'>{props.status}</div>}
      </div>
    </div>
  );
}

export function BankForm(props) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Header Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>

        </Form>
      </Card.Body>
    </Card>
  );
}
