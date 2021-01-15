import React from 'react';
import { Link } from 'umi';
import styles from './index.css';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/users">去访问/users路由</Link>
    </div>
  );
}
