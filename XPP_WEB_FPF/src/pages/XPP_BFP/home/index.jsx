import React, { useState, useEffect } from 'react';
import { Col, Dropdown, Icon, Menu, Row } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import { connect } from 'dva';
import IntroduceRow from './components/IntroduceRow';
import TopSearch from './components/TopSearch';
import ProportionSales from './components/ProportionSales';
import styles from './style.less';

export default connect(({ xppBfpAndhome, loading }) => ({
  xppBfpAndhome,
  loading: loading.effects['xppBfpAndhome/fetch'],
}))(({ xppBfpAndhome, loading, dispatch }) => {
  const [salesType, setSalesType] = useState('all');
  let reqRef = 0;

  let timeoutId = 0;

  useEffect(() => {
    reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'xppBfpAndhome/fetch',
      });
    });
    return () => {
      dispatch({
        type: 'xppBfpAndhome/clear',
      });
      cancelAnimationFrame(reqRef);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleChangeSalesType = e => {
    setSalesType(e.target.value);
  };

  const {
    visitData,
    visitData2,
    searchData,
    salesTypeData,
    salesTypeDataOnline,
    salesTypeDataOffline,
  } = xppBfpAndhome;
  let salesPieData;

  if (salesType === 'all') {
    salesPieData = salesTypeData;
  } else {
    salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
  }

  const menu = (
    <Menu>
      <Menu.Item>操作一</Menu.Item>
      <Menu.Item>操作二</Menu.Item>
    </Menu>
  );
  const dropdownGroup = (
    <span className={styles.iconGroup}>
      <Dropdown overlay={menu} placement="bottomRight">
        <Icon type="ellipsis" />
      </Dropdown>
    </span>
  );

  return (
    <PageHeaderWrapper>
      <IntroduceRow loading={loading} visitData={visitData} />
      <Row gutter={24} type="flex" style={{ marginTop: 24 }}>
        <Col span={12}>
          <TopSearch
            loading={loading}
            visitData2={visitData2}
            searchData={searchData}
            dropdownGroup={dropdownGroup}
          />
        </Col>
        <Col span={12}>
          <ProportionSales
            dropdownGroup={dropdownGroup}
            salesType={salesType}
            loading={loading}
            salesPieData={salesPieData}
            handleChangeSalesType={handleChangeSalesType}
          />
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
});
