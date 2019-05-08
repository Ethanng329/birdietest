import React from 'react';

function TabelLabels({ label = ' ' }) {
  return (
    <tr className="tableLabelRow">
      <th className="tableCellOrder">#</th>
      <th className="tableCellLabel">{label}</th>
      <th className="tableCellCount">count</th>
      <th className="tableCellCount">average</th>
    </tr>
  );
}

export default TabelLabels;
