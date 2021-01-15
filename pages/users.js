import React from 'react';
import { history as router } from 'umi';
import styles from './users.css';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page users</h1>
      <button onClick={() => { router.goBack() }}>返回</button>
      测试修改
    </div>
  );
}
