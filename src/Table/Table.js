import { Table } from 'antd';
import React, { useEffect } from 'react';

const columns = [
  {
    title: 'domains',
    dataIndex: 'domains',
    key: 'domains',
  },
  {
    title: 'country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'state-province',
    dataIndex: 'state-province',
    key: 'state-province',
  },
  {
    title: 'web_pages',
    dataIndex: 'web_pages',
    key: 'web_pages',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'alpha_two_code',
    dataIndex: 'alpha_two_code',
    key: 'alpha_two_code',
  },
];

const MyTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default MyTable;
