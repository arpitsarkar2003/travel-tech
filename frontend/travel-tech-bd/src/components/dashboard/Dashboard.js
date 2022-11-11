import React from 'react'
import Header from './Header'
import Menu from './Menu';
import Content from './Content';

function Dashboard({ logo }) {
  return (
    <div className=''>
      <Header logo={logo} />
      {/* <Menu /> */}
      <div className='container-fluid flex pt-3'>
        <Menu />
        <div style={{marginLeft: "332px"}}>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Dashboard