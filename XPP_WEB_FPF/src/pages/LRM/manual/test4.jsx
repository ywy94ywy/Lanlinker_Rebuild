import React from 'react';
import { connect } from 'dva';
import { useEffect } from 'react';
const test4 = ({ manual, dispatch }) => {
  console.log(manual);
  useEffect(() => {
    dispatch({ type: 'manual/t1' });
  }, []);
  return <div>dva</div>;
};

export default connect(state => state)(test4);
