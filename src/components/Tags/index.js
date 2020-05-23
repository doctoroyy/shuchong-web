import React from 'react'
import './index.less';

const Tags = props => {
  const {
    // tagList,
  } = props;

  const tagList = [
    "玄幻",
    "奇幻",
    "武侠",
    "仙侠",
    "都市",
    "现实",
    "军事",
    "历史",
    "游戏",
    "体育",
    "科幻",
    "悬疑灵异",
    "女生网",
    "轻小说"
  ]
  const getTags = () => {
    let res = [];
    for (let i = 0; i < tagList.length; i += 2) {
      res.push([tagList[i], tagList[i + 1]]);
    }
    // console.log(res)
    return res;
  }

  return (
    <div className="tag-tab">
      <div className="category">
        <i className="iconfont icon-liebiao" /><a href="/">作品分类</a>
      </div>
      <div className="tag-list">
        
          {getTags().map((item, index) => {
            return (
              <div className="tag-item" key={item[0] + item[1]}>
                <a href={`/category/${item[0]}`}>{item[0]}</a>
                <a href={`/category/${item[1]}`}>{item[1]}</a>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Tags;
