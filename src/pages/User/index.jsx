import {
  Tabs,
} from 'antd';
import Login from './components/Login'
import Register from './components/Register'
import { withRouter, history } from 'umi';
import { useState, useEffect } from 'react';
import { connect } from 'dva';
import BaseHeader from '@/components/BaseHeader';

import './index.less';

const { TabPane } = Tabs


const Comp = props => {
  const {
    dispatch,
    location,
    loginLoading,
    registLoading,
  } = props;

  const [tabsKey, setTabsKey] = useState("login");

  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/user/login') {
      setTabsKey('login')
    } else {
      setTabsKey('register')
    }
  }, []);

  const onFinishRegister = values => {
    dispatch({
      type: 'login/register',
      payload: values,
      callback: () => {
        setTimeout(() => {
          history.push('/user/login')
        }, 300);
      }
    })
  };

  const onFinishLogin = values => {
    console.log('Success:', values);
    dispatch({
      type: 'login/login',
      payload: values
    })
  };

  const handleTabsChange = key => {
    history.push(`/user/${key}`)
  }

  return (
    <div className='page-login-container'>
      <BaseHeader />
      <div className='tabs'>
        <Tabs
          defaultActiveKey="1"
          type="card"
          onChange={handleTabsChange}
          activeKey={tabsKey}
          size='large'
        >
          <TabPane tab="登录" key="login">
            <Login loading={loginLoading} onFinish={onFinishLogin} />
          </TabPane>
          <TabPane tab="注册" key="register">
            <Register loading={registLoading} onFinish={onFinishRegister} />
          </TabPane>
        </Tabs>
      </div>

    </div>
  )
}

export default connect(({
  loading,
}) => ({
  registLoading: loading.effects['book/register'],
  loginLoading: loading.effects['book/login'],
}))(withRouter(Comp))