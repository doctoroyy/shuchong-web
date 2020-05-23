import BaseHeader from "@/components/BaseHeader"
import BookItem from '@/components/Book/Item';
import {
  Descriptions, message,
} from 'antd'
import { history, withRouter } from 'umi';
import { connect } from 'dva';

import './index.less';
import { useEffect } from "react";

const UserCenter = () => {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      message.info('请先登录！')
      history.push('/user/login')
    }
  }, []);

  const mockData = [
    {
      author: "辰东",
      biqugePath: "0_36",
      description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
      imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
      latestChapter: "我的新书《圣墟》已上传",
      name: "完美世界",
      tags: null,
      updateTime: "2016-11-01 14:05:52",
    },
    {
      author: "辰东",
      biqugePath: "0_36",
      description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
      imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
      latestChapter: "我的新书《圣墟》已上传",
      name: "完美世界",
      tags: null,
      updateTime: "2016-11-01 14:05:52",
    },
    {
      author: "辰东",
      biqugePath: "0_36",
      description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
      imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
      latestChapter: "我的新书《圣墟》已上传",
      name: "完美世界",
      tags: null,
      updateTime: "2016-11-01 14:05:52",
    },
    {
      author: "辰东",
      biqugePath: "0_36",
      description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
      imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
      latestChapter: "我的新书《圣墟》已上传",
      name: "完美世界",
      tags: null,
      updateTime: "2016-11-01 14:05:52",
    },
    {
      author: "辰东",
      biqugePath: "0_36",
      description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
      imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
      latestChapter: "我的新书《圣墟》已上传",
      name: "完美世界",
      tags: null,
      updateTime: "2016-11-01 14:05:52",
    },
    // {
    //   author: "辰东",
    //   biqugePath: "0_36",
    //   description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
    //   imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
    //   latestChapter: "我的新书《圣墟》已上传",
    //   name: "完美世界",
    //   tags: null,
    //   updateTime: "2016-11-01 14:05:52",
    // },
    // {
    //   author: "辰东",
    //   biqugePath: "0_36",
    //   description: "一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。    群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！    一个少年从大荒中走出，一切从这里开始……    各位书友要是觉得《完美世界》还不错的话请不要忘记向您QQ群和微博里的朋友推荐哦！",
    //   imgSrc: "https://www.xbiquge6.com/cover/0/36/36s.jpg",
    //   latestChapter: "我的新书《圣墟》已上传",
    //   name: "完美世界",
    //   tags: null,
    //   updateTime: "2016-11-01 14:05:52",
    // },
  ];


  return (
    <div className='page-user-center-container'>
      <BaseHeader />
      <section>
        <h1>最近阅读</h1>
        <div className='recent-read-wrap'>
          {mockData.map(book => <BookItem data={book} key={book.name} />)}
        </div>
        <h1>我的书架</h1>
        <div className='recent-read-wrap'>
          {mockData.map(book => <BookItem data={book} key={book.name} />)}
        </div>
      </section>
    </div>
  )
}

export default UserCenter;