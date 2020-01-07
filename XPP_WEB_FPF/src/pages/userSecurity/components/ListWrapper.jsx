import { List } from 'antd';

export default ({ data = [] }) => (
  <List
    dataSource={data}
    renderItem={item => (
      <List.Item actions={item.actions}>
        <List.Item.Meta title={item.title} description={item.description} />
      </List.Item>
    )}
  />
);
