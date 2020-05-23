import React, { useEffect } from 'react';
import TagList from '@/components/Tags';
import BookList from '@/components/Book/List';

import './index.less';
import { connect } from 'dva';

import {
  Divider,
  Spin,
  Carousel,
} from 'antd'
import BaseHeader from '@/components/BaseHeader';
const Home = (props) => {

  const {
    books,
    loading,
    dispatch,
  } = props;

  useEffect(() => {
    dispatch({
      type: 'book/fetchAllBooks',
      payload: {
        page: 1,
        pageSize: 10,
      }
    })
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, []);

  const imgs = [
    "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/da505b7f0abfdd6fac6d8bdad81ddc03.jpg",
    "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/2b538ec521660989b692bd189066c767.jpg",
    "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/a5750a52de8d80697623824150ce3583.jpg",
    "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/e4dfdb58b3f1d5d673b2e7fcc9ca9ee5.jpg",
    "https://bossaudioandcomic-1252317822.file.myqcloud.com/activity/document/f4a932942cc7d88713e649eee396471a.jpg"
  ]
  return (
    <div className="page-container">
      <BaseHeader/>
      <section>
        <div className="books-shelfs">
          <div className="book-tags">
            <TagList />
          </div>
          <div className="book-imgs">
            <Carousel autoplay>
              {imgs.map(url => <img src={url} key={url} />)}
            </Carousel>
          </div>
        </div>
        <Divider>全部小说</Divider>
        <div className="book-list-wrap">
          <BookList dataSource={books} />
          {/* <book-list :data="getBookList" /> */}
        </div>
      </section>
    </div>
  )
}

export default connect(({
  book,
  loading,
}) => ({
  books: book.books,
  loading: loading.effects['book/fetchAllBooks']
}))(Home);
