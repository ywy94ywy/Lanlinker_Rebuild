import { Card, Radio } from 'antd';
import React from 'react';
import { Pie } from './Charts';
import Yuan from '../utils/Yuan';
import styles from '../style.less';

const ProportionSales = ({
  // dropdownGroup,
  // salesType,
  loading,
  salesPieData,
  // handleChangeSalesType,
}) => (
  <Card
    loading={loading}
    className={styles.salesCard}
    bordered={false}
    title="各端使用占比"
    style={{
      height: '100%',
    }}
    // extra={
    //   <div className={styles.salesCardExtra}>
    //     {dropdownGroup}
    //     <div className={styles.salesTypeRadio}>
    //       <Radio.Group value={salesType} onChange={handleChangeSalesType}>
    //         <Radio.Button value="all">ALL</Radio.Button>
    //         <Radio.Button value="online">Online</Radio.Button>
    //         <Radio.Button value="stores">Stores</Radio.Button>
    //       </Radio.Group>
    //     </div>
    //   </div>
    // }
  >
    <Pie
      hasLegend
      subTitle="销售额"
      total={() => <Yuan>{salesPieData.reduce((pre, now) => now.y + pre, 0)}</Yuan>}
      data={salesPieData}
      valueFormat={value => <Yuan>{value}</Yuan>}
      height={320}
      lineWidth={4}
      style={{
        height: '100%',
      }}
    />
  </Card>
);

export default ProportionSales;
