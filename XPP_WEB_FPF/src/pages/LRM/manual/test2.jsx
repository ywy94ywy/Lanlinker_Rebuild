import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const test2 = () => {
  const [state, loading] = useAsync(Mrequest());
console.log(123)
  return <div>{loading ? 'loading' : state}</div>;
};

export default test2;

const useAsync = request => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    request.then(res => {
      setLoading(false);
      setState(res.data.test);
    });
  }, []);

  return [state, loading];
};

const Mrequest = () => {
  return axios.get('https://nei.netease.com/api/apimock/20677609c2af996c88be2cd3244301ba/api/test');
};
