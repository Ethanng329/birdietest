import React from 'react';

function TableData({ order, label, count, average }) {
  return (
    <tr className="tableDataRow">
      <td>{order}</td> <td className="labelText">{label}</td> <td>{count}</td> <td>{average}</td>
    </tr>
  );
}

export default TableData;
