//@flow

import React from 'react';

type Props = {
  order: number,
  label: string,
  count: number,
  average: number
};

function TableData({ order, label, count, average }: Props) {
  return (
    <tr className="tableDataRow">
      <td>{order}</td> <td className="labelText">{label}</td> <td>{count}</td>{' '}
      <td>{average}</td>
    </tr>
  );
}

export default TableData;
