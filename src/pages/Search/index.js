
import BaseInfo from '@/components/Book/BaseInfo'
import { connect } from 'dva';
import { withRouter } from 'umi';
import { useEffect } from 'react';
import './index.less';
import { Spin } from 'antd'
import BaseHeader from '@/components/BaseHeader';

const SearchResult = props => {

  const {
    location,
    dispatch,
    book,
    loading,
  } = props;

  const { keyword } = location.query;


  useEffect(() => {
    dispatch({
      type: 'book/searchBook',
      payload: {
        keyword,
      }
    })
  }, [keyword]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { searchResult} = book;

  return (
    <Spin spinning={loading}>
      <div className="res-container">
        <BaseHeader/>
        <section className="res-wrap">
          <div className="res-list">
            {searchResult && searchResult.map((item, index) => {
              return (
                <div className="res-item" key={item.description}>
                  <BaseInfo clickable={true} data={item} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </Spin>
  )
}

export default connect(({
  loading,
  book,
}) => ({
  book,
  loading: loading.effects['book/searchBook']
}))(withRouter(SearchResult));