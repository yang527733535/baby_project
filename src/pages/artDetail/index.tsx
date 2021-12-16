import React, { useState, createElement } from 'react';
import {
  Carousel,
  Button,
  Anchor,
  Avatar,
  Comment,
  Tooltip,
  Divider,
} from 'antd';
import moment from 'moment';
import {
  LeftOutlined,
  HomeOutlined,
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons';

export default function (props: Object) {
  console.log(typeof props);
  const contentStyle = {
    height: '350px',
    // 'object-fit': cover,
    width: '100%',
    objectFit: 'cover',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  function onChange(a: any, b: any, c: any) {
    console.log(a, b, c);
  }
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked' ? DislikeFilled : DislikeOutlined,
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <div style={{ position: 'relative' }}>
      <Anchor>
        <header
          style={{
            display: 'flex',
            padding: 10,
            top: 10,
            backgroundColor: 'white',
            //  position: 'fixed'
          }}
        >
          <div
            style={{
              width: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HomeOutlined style={{ fontSize: 20 }} />
          </div>
          <h3 style={{ flex: 1, textAlign: 'center' }}>笔记详情</h3>
          <div
            style={{
              width: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LeftOutlined style={{ fontSize: 20 }} />
          </div>
        </header>
      </Anchor>

      <Carousel afterChange={onChange}>
        <div>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202002%2F01%2F20200201113108_cavqm.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637998570&t=edcce5b9c8f5173f13abef2a6cf8e7f0"
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F16%2F20180716213822_3AvU8.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637998364&t=daba8dfd3ec96f55fc177c481d3a5511"
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F16%2F20180716213822_3AvU8.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637998364&t=daba8dfd3ec96f55fc177c481d3a5511"
            style={contentStyle}
          ></img>
        </div>
        <div>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F30%2F20181030102759_kcchr.thumb.700_0.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637998504&t=4f25d6e912e9377d263c93e51d7ae2c3"
            style={contentStyle}
          ></img>
        </div>
      </Carousel>

      {/* 关于用户的信息的 */}
      <div
        style={{
          display: 'flex',
          height: 60,
        }}
      >
        <div
          style={{
            padding: 10,
            display: 'flex',
            width: '100%',
            // justifyContent: 'space-between',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Avatar
              sx={{ width: 75, height: 75 }}
              alt="Remy Sharp"
              src="https://z3.ax1x.com/2021/10/19/5dLlZj.jpg"
            />
            <h3 style={{ marginLeft: 10 }}>星空和月光🌃</h3>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}
        >
          <Button size="middle" type="primary">
            关注
          </Button>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <h3>我是文章的标题</h3>
        <span>
          今天很开心,明天也开心,后天更开心,今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心
          今天很开心,明天也开心,后天更开心,今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心今天很开心,明天也开心,后天更开心
        </span>
        <div style={{ marginTop: 5, fontSize: 13, color: '#ccc' }}>
          编辑于2天前
        </div>
      </div>
      <Divider></Divider>
      <div style={{ padding: 10 }}>
        <span style={{ color: '#CCC' }}>共1条评论</span>
        <Comment
          actions={actions}
          author={<a>Mrhh</a>}
          avatar={
            <Avatar
              src="https://z3.ax1x.com/2021/10/28/5LmfKJ.jpg"
              alt="Han Solo"
            />
          }
          content={<p>天天都要开心呀</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Comment
          actions={actions}
          author={<a>Mrhh</a>}
          avatar={
            <Avatar
              src="https://z3.ax1x.com/2021/10/28/5LmfKJ.jpg"
              alt="Han Solo"
            />
          }
          content={<p>天天都要开心呀</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Comment
          actions={actions}
          author={<a>Mrhh</a>}
          avatar={
            <Avatar
              src="https://z3.ax1x.com/2021/10/28/5LmfKJ.jpg"
              alt="Han Solo"
            />
          }
          content={<p>天天都要开心呀</p>}
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
    </div>
  );
}
