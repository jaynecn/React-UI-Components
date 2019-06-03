import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
// import HeaderContent from './HeaderContent';

function HeaderContainer() {
  return (
    <div className="HeaderContainer">
      <ImageThumbnail/>
      <HeaderTitle/>
      {/* <HeaderContent/> */}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <h1>HELLO</h1>
//       <BasicButton text='Click Me!'/>
//       <SectionSome />
//       <GoogleIt />
//     </div>
//   );
// }

export default HeaderContainer;
