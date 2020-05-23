import React, { useState } from 'react'
import { history } from 'umi';
import './index.less';
import { connect } from 'dva';
import {
  Spin,
} from 'antd'
const BaseInfo = props => {
  const {
    data,
    dispatch,
    clickable,
  } = props;

  const {
    name,
    imgSrc,
    description,
    author,
    updateTime,
    latestChapter,
    biqugePath,
  } = data;

  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(true)
    dispatch({
      type: 'book/downloadBook',
      payload: {
        id: biqugePath
      }
    }).then(() => {
      history.push(`/detail/${biqugePath}`)
    })
  }
  return (
    <Spin spinning={clicked}>
      <div
        onClick={clickable ? handleClick : null}
        className="book-info-container card"
      >
        <div className="book-cover">
          <img
            src={imgSrc}
            alt={author}
            className="image card"
          />
        </div>
        <div className="book-desc">
          <div className="book-name">
            <span>{name}</span>
          </div>
          <div className="desc-detail">
            <span>{description}</span>
          </div>
          <div className="book-author">
            <span>作者：{author}</span>
          </div>
          <div className="update-time">
            <span>更新时间: {updateTime}</span>
          </div>
          <div className="lastest-chapter">
            <span>最新章节: {latestChapter}</span>
          </div>
        </div>
      </div>
    </Spin>

  )
}

export default connect()(BaseInfo);