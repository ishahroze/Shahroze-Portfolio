import React from 'react';
import { HeadInfo } from '../staticdata/data';

function Header() {
  return (
    <div className='flex flex-auto justify-around'>
      {HeadInfo.map((item) => (
        <div key={item.id} >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Header;
