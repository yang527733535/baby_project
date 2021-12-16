import { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { history } from 'umi';
import { Modal, Input, Card, Col, Row, Tabs } from 'antd';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './index.less';
const { Meta } = Card;
const { TabPane } = Tabs;

export default function IndexPage() {
  const [editDescModal, seteditDescModal] = useState(false);
  const [ListArr, setListArr] = useState([1, 2, 3, 4, 5]);
  // 函数式编程
  const myRef = useRef(null);

  console.log(VisibilitySensor);

  const visibleOnchange = (isVisible) => {
    console.log('isVisible: ', isVisible);
    if (isVisible) {
      setListArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }
    //  如果是true的话 增加5个
  };

  return (
    <div ref={myRef}>
      <Modal
        title="修改简介"
        onCancel={() => {
          seteditDescModal(false);
        }}
        visible={editDescModal}
      >
        <Input.TextArea></Input.TextArea>
      </Modal>
      <div
        className={styles.myHead}
        style={{
          height: 250,
          padding: 20,
          fontWeight: 500,
          fontFamily: 'Helvetica',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '40%',
          }}
        >
          <div
            style={{
              // width: '30%',
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              // border: '1px solid #ccc',
              overflow: 'hidden',
            }}
          >
            <Avatar
              sx={{ width: 75, height: 75 }}
              alt="Remy Sharp"
              // src="https://z3.ax1x.com/2021/10/19/5dLlZj.jpg"
            />
          </div>
          <div style={{ flex: 1, padding: 10 }}>
            <div
              style={{
                fontSize: 20,
              }}
            >
              月光和星空🌃
            </div>
            <div>UUID:1</div>
          </div>
        </div>
        <div
          onClick={() => {
            // message.success('success');
            seteditDescModal(true);
          }}
          style={{
            width: '100%',
            paddingTop: 20,
            // backgroundColor: 'pink',
            height: '30%',
          }}
        >
          点击这里,修改信息
        </div>

        <div
          style={{
            width: '100%',
            // backgroundColor: 'green',
            paddingTop: 10,
            height: '30%',
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div>20</div>
            <div>关注</div>
          </div>
          <div
            style={{
              width: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div>20w</div>
            <div>粉丝</div>
          </div>

          <div
            style={{
              width: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div>200w</div>
            <div>获赞</div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: 5, paddingRight: 5 }}>
        <Tabs>
          <TabPane tab="推荐" key="1">
            <Row style={{ padding: 10 }} gutter={16}>
              <Col span={12}>
                <Card
                  onClick={() => {
                    // artdetail
                    history.push('/artdetail');
                  }}
                  style={{ marginBottom: 10 }}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://z3.ax1x.com/2021/10/19/5dLql8.jpg"
                    />
                  }
                >
                  <Meta
                    title="下定决心开始减肥.........."
                    description={
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div>
                            <Avatar
                              src="https://myasd.oss-cn-beijing.aliyuncs.com/WechatIMG1246.jpeg?Expires=1634532968&OSSAccessKeyId=TMP.3KhRcu8xkRVvYLK4L379vH4YRwg7WkmK2aV2BSL7Ga4rAqiGRg76Ax4Qtj2CafASrYo6Ym5ArXTjsbhT364EmCwMYYX3Ru&Signature=xMdcTAtLLLCwlI6AKtfvRvRiodI%3D&versionId=CAEQQRiBgIC24KLy4xciIGU1MTNkMjljOGJiMDRmNDRiZDZiNjI0MzU0ZjZhM2Nj&response-content-type=application%2Foctet-stream"
                              sx={{ width: 20, height: 20 }}
                            ></Avatar>
                          </div>
                          <div style={{ fontSize: 12 }}>月光和星空🌃</div>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{ marginBottom: 10 }}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://z3.ax1x.com/2021/10/19/5dLql8.jpg"
                    />
                  }
                >
                  <Meta
                    title="今天又是开心的一天.........."
                    description={
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div>
                            <Avatar
                              src="https://myasd.oss-cn-beijing.aliyuncs.com/WechatIMG1246.jpeg?Expires=1634532968&OSSAccessKeyId=TMP.3KhRcu8xkRVvYLK4L379vH4YRwg7WkmK2aV2BSL7Ga4rAqiGRg76Ax4Qtj2CafASrYo6Ym5ArXTjsbhT364EmCwMYYX3Ru&Signature=xMdcTAtLLLCwlI6AKtfvRvRiodI%3D&versionId=CAEQQRiBgIC24KLy4xciIGU1MTNkMjljOGJiMDRmNDRiZDZiNjI0MzU0ZjZhM2Nj&response-content-type=application%2Foctet-stream"
                              sx={{ width: 20, height: 20 }}
                            ></Avatar>
                          </div>
                          <div style={{ fontSize: 12 }}>月光和星空🌃</div>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="今天是开心的一天"
                    description="今天是开心的一天"
                  />
                </Card>
              </Col>
              {ListArr.map((item) => {
                return (
                  <Col span={12}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt="example"
                          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                      }
                    >
                      <Meta
                        title="今天是开心的一天"
                        description="今天是开心的一天"
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <VisibilitySensor onChange={visibleOnchange}>
              <div>我是最后</div>
            </VisibilitySensor>
          </TabPane>
          <TabPane tab="视频" key="2">
            S
          </TabPane>
          <TabPane tab="直播" key="3">
            S
          </TabPane>
          <TabPane tab="旅行" key="5">
            S
          </TabPane>
          <TabPane tab="游戏" key="6">
            S
          </TabPane>
          <TabPane tab="Vlog" key="7">
            S
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
