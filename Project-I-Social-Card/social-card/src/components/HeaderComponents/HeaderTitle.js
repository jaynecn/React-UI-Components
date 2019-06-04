import React from 'react';
import './Header.css';

const HeaderTitle = props => {
  return (
    <div className="headerTitle">
      <p className="lambda"><strong>Lambda School</strong></p><p>@LambdaSchool 3rd June</p> 
    </div>
  );
};

// const MyButton = props => {
//   return <button className="my-fancy-button">Click this Button</button>;
// };

export default HeaderTitle;

