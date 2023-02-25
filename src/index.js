import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  const name = props.name;
  console.log(name);
  const email = props.email;
  console.log(email);
  const phoneNumber = props.phoneNumber;
  console.log(phoneNumber);

  return (
    <div className="friend-item">
      <h3>{name}</h3>
      <h4>
        📧{email}
        <br />
        📞{phoneNumber}
      </h4>
      <button>Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <Contact
        name="emanul"
        email="emanual@gmail.com"
        phoneNumber="045656525"
      />
      <Contact name="john" email="john@gmail.com" phoneNumber="045656525" />
      <Contact name="david" email="david@gmail.com" phoneNumber="045656525" />
      <Contact name="vi" email="vi@gmail.com" phoneNumber="045656525" />
      <Contact name="karim" email="karim@gmail.com" phoneNumber="045656525" />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
