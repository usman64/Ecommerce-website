import React from 'react';
import './menu-item.styles.scss';

//- Menu-Item styling
//- used self-closing for background image <div /> because we didn't want other things to scale, but the background image only
//- absolute positioning of content bcz of background image

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className='background-image'
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
