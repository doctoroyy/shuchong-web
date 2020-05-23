import React, {
  useEffect,
  useState,
} from 'react'
import './index.less';
import BaseInfo from '@/components/Book/BaseInfo'
import Catalog from './components/Catalog'

import { withRouter } from 'umi';
import { connect } from 'dva';
import { Spin, message } from 'antd';
import BaseHeader from '@/components/BaseHeader';


const Detail = (props) => {

  const {
    catalog,
    loading,
    dispatch,
    match,

  } = props;

  const { params } = match;
  const { bookId } = params;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    // message.success('111')
    dispatch({
      type: 'book/fetchCatalog',
      payload: {
        id: bookId,
      }
    })
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="book-detail-container">
        <BaseHeader/>
        <section className="detail-main">
          <BaseInfo data={catalog.bookInfo} clickable={false} />
          <Catalog data={catalog.chapters} />
        </section>
      </div>
    </Spin>
  )
}

export default connect(({
  loading,
  book,
}) => ({
  catalog: book.catalog,
  loading: loading.effects['book/fetchCatalog']
}))(withRouter(Detail));