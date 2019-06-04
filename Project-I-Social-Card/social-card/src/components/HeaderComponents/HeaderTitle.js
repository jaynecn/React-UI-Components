import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div>
      <h3 className="title">Lambda School</h3>
      <p className="handle">@LambdaSchool</p>
      <p className="date"> 3rd June</p> 
    </div>
  );
};

// const MyButton = props => {
//   return <button className="my-fancy-button">Click this Button</button>;
// };

export default HeaderTitle;

