
import React from 'react'
import { withRouter, history } from 'umi';
import { connect } from 'dva';

const Catalog = props => {
  const {
    data,
    match,
  } = props;

  const { params } = match;
  const { bookId } = params;


  const createData = () => {
    let res = [];
    const len = data.length;
    for (let i = 0; i < len; i += 3) {
      let tmp = [];
      for (let j = i; j < i + 3; j++) {
        if (data[j]) tmp.push(data[j]);
      }
      res.push(tmp);
    }
    return res;
  }

  const handleClick = no => {
    history.push(`/detail/${bookId}/${no}`)
  }


  return (
    <div className="catalog-container card">
      <div className="catalog-list card">
        <div className="catalog-title">目录</div>
        {createData().map((item0, index0) => {
          return (
            <div
              key={index0}
              className="catalog-item"
            >
              {item0.map((item1, index1) => {
                return (
                  <div
                    key={index1}
                    onClick={() => handleClick(item1.no)}
                    className="catalog-name card"
                  >
                    {item1.name}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div >
    </div >
  )
}

export default withRouter(Catalog);