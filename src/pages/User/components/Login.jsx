

import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Row,
  Col
} from 'antd';
import { history } from 'umi'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {
  const {
    dispatch,
    loading,
    onFinish,
  } = props;

  return (
    <div className='login-form'>
      <Form
        {...layout}
        hideRequiredMark
        onFinish={onFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size='large' />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Row type='flex' justify='center'>
            <Col span={6}>
              <Button
                size='large'
                onClick={() => history.push('/')}
              >
                返回
                </Button>
            </Col>
            <Col>
              <Button
                size='large'
                htmlType="submit"
                type='primary'
              >
                登录
                </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;