import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import {
  message,
} from 'antd'
import './index.less';

const Item = props => {
  const {
    data,
  } = props;

  const {
    imgSrc,
    author,
  } = data;

  const handleClick = () => {
    history.push(`/detail/${data.biqugePath}`)
  }

  return (
    <div className="book-item-container card" onClick={handleClick} >
      <div className="book-cover">
        <img src={imgSrc} alt={author} className="image" />
      </div>
      <div className="book-author">
        <span>{author}</span>
      </div>
    </div >
  )
}

export default Item;
