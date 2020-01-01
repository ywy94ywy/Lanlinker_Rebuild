import React, { useState, useEffect } from "react";
import { PageHeaderWrapper, CustomCard, CustomTable ,usePagination} from "@/";
import axios from "../../../utils/request";

const index = () => {
  const [a, setA] = useState({ data: [], total: 0 });
  const [pageSize, current, onChange] = usePagination();

  useEffect(() => {
    axios
      .post(
        "https://nei.netease.com/api/apimock/20677609c2af996c88be2cd3244301ba/api/table",
        {
          pageSize,
          current
        }
      )
      .then(res => {
        setA(res);
      });
  }, [current]);
  console.log(current, a.data);
  return (
    <PageHeaderWrapper style={{ margin: "0" }}>
      <CustomCard>
        <CustomTable
          columns={columns}
          dataSource={a.data}
          rowKey={(v, i) => i}
          pagination={{
            total: a.total,
            pageSize,
            current,
            onChange
          }}
        ></CustomTable>
      </CustomCard>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: "培训名称",
    dataIndex: "a"
  },
  {
    title: "培训类型",
    dataIndex: "b"
  },
  {
    title: "培训老师",
    dataIndex: "c"
  },
  {
    title: "培训日期",
    dataIndex: "d"
  },
  {
    title: "培训时长（小时）",
    dataIndex: "e"
  },
  {
    title: "培训机构",
    dataIndex: "f"
  },
  {
    title: "培训地点",
    dataIndex: "g"
  },
  {
    title: "操作",
    render: () => <a href="/">修改</a>
  }
];

export default index;
