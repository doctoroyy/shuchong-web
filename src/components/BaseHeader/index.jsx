import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Form,
  message,
  Menu,
  Dropdown
} from 'antd';

import './index.less';

import { Link, history } from 'umi'

import { connect } from 'dva';
import { UserOutlined } from '@ant-design/icons';

const BaseHeader = (props) => {

  const {
    loading,
    dispatch,
    currentUser,
    initKeyword,
  } = props;

  const [keyword, setKeyword] = useState('诛仙');

  useEffect(() => {
    // message.success(initKeyword)
    dispatch({
      type: 'user/fetchCurrent'
    })
  }, []);

  const onFinish = (value) => {
    history.push(`/search?keyword=${value.keyword}`)
  }

  const handleLogout = () => {
    dispatch({
      type: 'login/logout',
    }).then(() => message.success('退出成功！'))
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>
          退出
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="line">
        <div className="icon"></div>

        <Form onFinish={onFinish} layout='inline'>
          <Form.Item name='keyword'>
            <Input.Search
              defaultChecked={keyword}
              onSearch={value => setKeyword(value)}
              style={{ width: 400 }}
              size='large'
            />
          </Form.Item>
        </Form>
        {currentUser.username ? (
          <Dropdown overlay={menu}>
            <div>
              <UserOutlined />{currentUser.username}
            </div>
          </Dropdown>
        ) : (
            <div className="btn-group">
              <Button size='large' onClick={() => history.push('/user/login')}>登录/注册</Button>
            </div>
          )}
      </div>
      <nav className="nav">
        <div className="nav-list">
          <Link className="link" to="/">
            <div className="nav-item">首页</div>
          </Link>
          <Link className="link" to="/about">
            <div className="nav-item">关于</div>
          </Link>

          <Link className="link" to="/user-center">
            <div className="nav-item">个人中心</div>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default connect(({
  book,
  loading,
  user,
}) => ({
  loading: loading.effects['book/searchBook'],
  currentUser: user.currentUser,
  initKeyword: book.keyword,
}))(BaseHeader)