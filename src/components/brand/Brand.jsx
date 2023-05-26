import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './import';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google}  alt='prop'/>
    </div>
    <div>
      <img src={slack}  alt='prop'/>
    </div>
    <div>
      <img src={atlassian}  alt='prop'/>
    </div>
    <div>
      <img src={dropbox}  alt='prop'/>
    </div>
    <div>
      <img src={shopify}  alt='prop'/>
    </div>
  </div>
);

export default Brand;