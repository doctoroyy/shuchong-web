import React, { useEffect } from 'react';
import ChapterControl from './components/ChapterControl';

import { connect } from 'dva';

import { withRouter } from 'umi';

import './index.less';
import { Spin } from 'antd';

const Chapter = props => {
  const {
    context,
    dispatch,
    loading,
    match,
    maxLen,
  } = props;

  const { params } = match;

  const { bookId, chapterno } = params;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [chapterno]);


  useEffect(() => {
    dispatch({
      type: 'book/fetchChapter',
      payload: {
        id: bookId,
        chapterno,
      }
    })
  }, [chapterno]);

  useEffect(() => {
    dispatch({
      type: 'book/fetchNextChapter',
      payload: {
        id: bookId,
        chapterno: parseInt(chapterno) + 1,
      }
    })
  }, [chapterno]);

  return (
    <Spin spinning={loading}>
      <div className="chapter-detail">
        <section className="chapter-container">
          <ChapterControl maxLen={maxLen} />
          <div className="context card">

            {!loading && (
              <>
                <div className="title">
                  <h1>{context.name}</h1>
                </div>
                {context.context.map((item, index) => {
                  return (
                    <p key={index}>{item}</p>
                  )
                })}
              </>
            )}
          </div>

          <ChapterControl maxLen={maxLen} />
        </section>
      </div >
    </Spin>

  )
}

export default connect(({
  loading,
  book,
}) => ({
  maxLen: book.catalog.chapters.length,
  context: book.chapter,
  loading: loading.effects['book/fetchChapter']
}))(withRouter(Chapter));