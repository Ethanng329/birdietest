//@flow
import React from 'react';

type Props = {
  lable: string
};

function TabelLabels({ lable = ' ' }: Props) {
  return (
    <tr className="tableLabelRow">
      <th className="tableCellOrder">#</th>
      <th className="tableCellLabel">{lable}</th>
      <th className="tableCellCount">count</th>
      <th className="tableCellCount">average</th>
    </tr>
  );
}

export default TabelLabels;
