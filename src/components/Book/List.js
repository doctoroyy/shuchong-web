import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import BookItem from './Item'
import './index.less';

const List = props => {
  const {
    dataSource = [],
  } = props;


  return (
    <div className="book-list-container">
      <div className="book__data__list">
        <div className="book__data__row">
          {dataSource.map((item, index) => {
            return (
              <BookItem
                className="book__data_item"
                key={item.name + item.author}
                data={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default List;
