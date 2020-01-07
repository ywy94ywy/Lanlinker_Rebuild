/**
 * @module 数据管理
 * @author DesYang
 */
import { Row, Icon } from 'antd';
import styles from './style.less';

export default ({ onClicks = {} }) => {
  return (
    <Row type="flex" justify="space-around" className={styles.dataManagement}>
      {cards.map(({ name, title, icon, background }, i) => {
        const fn = onClicks[name];
        return (
          <div
            className={styles.optionCard}
            style={fn ? { background } : { background: '#D9D9D9', cursor: 'not-allowed' }}
            key={i}
            onClick={() => {
              if (fn) {
                fn();
              }
            }}
          >
            <Icon type={icon}></Icon>
            <div className={styles.text}>{title}</div>
          </div>
        );
      })}
    </Row>
  );
};

const cards = [
  {
    name: 'importClassify',
    title: '导入分类数据',
    icon: 'file-done',
    background: '#0E6059',
  },
  {
    name: 'exportTags',
    title: '导出标签数据',
    icon: 'file-done',
    background: '#1890FF',
  },
  {
    name: 'importUsers',
    title: '导入用户数据',
    icon: 'file-done',
    background: '#45B5AF',
  },
  {
    name: 'exportUsers',
    title: '导出用户数据',
    icon: 'file-done',
    background: '#ABD598',
  },
  {
    name: 'importLicense',
    title: '导入系统执照',
    icon: 'file-done',
    background: '#EBB2F8',
  },
  {
    name: 'licenseRecords',
    title: '执照授权记录',
    icon: 'file-done',
    background: '#FBB44B',
  },
];
