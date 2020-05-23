import { Divider } from "antd"
import '../index.less';

export default (props) => {
  const {
    data,
  } = props
  return (
    <div class="history-item-wrap">
      <div class="history-tab">
        <div class="row">
          <div class="col"><span>{new Date(data.Date).toLocaleString()}</span></div>
          <div class="col"><h3>{data.commit}</h3></div>
        </div>
      </div>
      <Divider />
    </div>
  )
}