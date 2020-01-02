import React, { Suspense } from 'react';
import { PageHeaderWrapper } from 'lanlinker';

const resource = fetchProfileData();

export default () => {
  return (
    <PageHeaderWrapper>
      暂无页面
      <Suspense fallback="...loading">
        <ProfileDetails></ProfileDetails>
      </Suspense>
    </PageHeaderWrapper>
  );
};

function ProfileDetails() {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function fetchProfileData() {
  let userPromise = fetchUser();
  return {
    user: wrapPromise(userPromise),
  };
}

function wrapPromise(promise) {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    },
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
}

function fetchUser() {
  console.log('fetch user...');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('fetched user');
      resolve({
        name: 'Ringo Starr',
      });
    }, 1000);
  });
}
