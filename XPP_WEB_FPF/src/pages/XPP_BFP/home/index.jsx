import { Col, Dropdown, Icon, Menu, Row } from 'antd';
import React, { Component, Suspense } from 'react';
import { connect } from 'dva';
import PageLoading from './components/PageLoading';
import { getTimeDistance } from './utils/utils';
import { PageHeaderWrapper } from 'lanlinker';
import styles from './style.less';

const IntroduceRow = React.lazy(() => import('./components/IntroduceRow'));
const TopSearch = React.lazy(() => import('./components/TopSearch'));
const ProportionSales = React.lazy(() => import('./components/ProportionSales'));

class Home extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };

  reqRef = 0;

  timeoutId = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'xppBfpAndhome/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'xppBfpAndhome/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleChangeSalesType = e => {
    this.setState({
      salesType: e.target.value,
    });
  };

  handleTabChange = key => {
    this.setState({
      currentTabKey: key,
    });
  };

  handleRangePickerChange = rangePickerValue => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });
    dispatch({
      type: 'xppBfpAndhome/fetchSalesData',
    });
  };

  selectDate = type => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
    dispatch({
      type: 'xppBfpAndhome/fetchSalesData',
    });
  };

  isActive = type => {
    const { rangePickerValue } = this.state;
    const value = getTimeDistance(type);

    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }

    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }

    return '';
  };

  render() {
    const { salesType } = this.state;
    const { xppBfpAndhome, loading } = this.props;
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
        <Suspense fallback={<PageLoading />}>
          <IntroduceRow loading={loading} visitData={visitData} />
        </Suspense>
        <Row gutter={24} type="flex">
          <Col span={12}>
            <Suspense fallback={null}>
              <TopSearch
                loading={loading}
                visitData2={visitData2}
                searchData={searchData}
                dropdownGroup={dropdownGroup}
              />
            </Suspense>
          </Col>
          <Col span={12}>
            <Suspense fallback={null}>
              <ProportionSales
                dropdownGroup={dropdownGroup}
                salesType={salesType}
                loading={loading}
                salesPieData={salesPieData}
                handleChangeSalesType={this.handleChangeSalesType}
              />
            </Suspense>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ xppBfpAndhome, loading }) => ({
  xppBfpAndhome,
  loading: loading.effects['xppBfpAndhome/fetch'],
}))(Home);
