import React, { Suspense } from 'react';
import { PageHeaderWrapper } from 'lanlinker';
// import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';
import Test4 from './test4';

export default () => {
  console.log(123)
  return (
    <PageHeaderWrapper>
      <div>暂无页面</div>
      {/* <Test1></Test1> */}
      {/* <Test2></Test2> */}
      <Test4></Test4>
      {/* <Test3></Test3> */}
    </PageHeaderWrapper>
  );
};
