// import React, { useState, useRef } from 'react';

// const TestList: React.FC = () => {
//   return <div>1111222</div>;
// };

// export default TestList;

import React, { useRef } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { user } from '@/services/testUser/api';

type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueEnum: {
      '1': '男',
      '2': '女',
    },
  },
  {
    title: '手机号',
    dataIndex: 'mobile',
  },
  {
    title: '邮箱',
    dataIndex: 'address',
    copyable: true,
    search: false,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        详情
      </a>,
    ],
  },
];

export default () => {
  return <ProTable columns={columns} request={user} />;
};
