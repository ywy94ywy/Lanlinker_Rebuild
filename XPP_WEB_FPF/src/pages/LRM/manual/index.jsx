import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const index = () => {
  return (
    <div style={{ display: 'flex', padding: 24 }}>
      <div style={{ flex: '0 0 380px', marginRight: '40px' }}>12321</div>
      <div style={{ flex: 1, background: 'red' }}>
        <Tabs>
          <TabPane tab="项目基本信息" key="1-1">
            <Tabs type="card">
              <TabPane tab="承建单位" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="建设单位" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="设计单位" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="勘查单位" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="监理单位" key="5">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="五方责任主体基本信息" key="2-2">
            <Tabs type="card">
              <TabPane tab="承建单位" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="建设单位" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="设计单位" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="勘查单位" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="监理单位" key="5">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="参建各方基本信息" key="3-3">
            <Tabs>
              <TabPane tab="承建单位" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="建设单位" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="设计单位" key="3">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="勘查单位" key="4">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="监理单位" key="5">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default index;
