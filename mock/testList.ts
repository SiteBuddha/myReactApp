import { Request, Response } from 'express';

const getlenList = (current: number, pageSize: number) => {
  const tableListDataSource: any[] = [];

  for (let i = 0; i < pageSize; i++) {
    const index = (current - 1) * 10 + i + 1;
    tableListDataSource.push({
      id: index,
      name: `姓名${index}`,
      sex: [1, 2][index % 2],
      mobile: 12345678911,
      address: `notily ${index}`,
      email: ['', '', ''],
    });
  }
  return tableListDataSource;
};
let tableListDataSource = getlenList(1, 10);

function getUserList(req: Request, res: Response) {
  const result = {
    success: true,
    message: 'ok',
    data: tableListDataSource,
    total: tableListDataSource.length,
  };
  return res.json(result);
}

export default {
  'GET /api/getUserList': getUserList,
};
