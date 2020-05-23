import { Divider } from "antd"
import HistoryItem from './Item';
import '../index.less';

export default (props) => {
  const {
    data,
  } = props;

  return (
    <div class="history-list">
      {data.map(item => <HistoryItem data={item} key={item.commit} />)}
    </div>
  )
}