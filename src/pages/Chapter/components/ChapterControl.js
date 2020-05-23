import { history, withRouter } from 'umi';
import {
  message,
} from 'antd'
import '../index.less';


const ChapterControl = props => {

  const {
    match,
    maxLen,
  } = props;

  const { params } = match;

  const { bookId, chapterno } = params;

  const handleClick = no => {
    // message.info(maxLen)
    const nextNo = parseInt(chapterno) + no
    // if (nextNo > maxLen) {
    //   message.warn('没有下一章了...', maxLen)
      
    // } else if (nextNo > 0) {
    //   message.info(nextNo)
      history.push(`/detail/${bookId}/${nextNo}`)
    // }
  }

  const backToCatalog = () => {
    history.push(`/detail/${bookId}`)
  }
  return (
    <div className="chapter-control">
      <div onClick={() => { handleClick(-1) }} className="text-wrap">
        <span>上一章</span>
      </div>
      <span className="divider"></span>
      <div onClick={backToCatalog} className="text-wrap" >
        <span>目录</span>
      </div >
      <span className="divider"></span>
      <div onClick={() => { handleClick(1) }} className="text-wrap" >
        <span>下一章</span>
      </div >
    </div >
  )
}

export default withRouter(ChapterControl);
