/**
 * @module 主页管理中的title
 * @author DesYang
 */
import styles from './index.less';

export default ({ title, subtitle }) => {
  return (
    <header className={styles.title}>
      <h2 className={styles.withLine}>{title}</h2>
      <span>{subtitle}</span>
    </header>
  );
};
