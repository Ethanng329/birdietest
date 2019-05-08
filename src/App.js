import React from 'react';
import logo from './logo.svg';
import './App.css';

import TabelLabels from './TableLabels';
import TableData from './TableData';
        <table className="tableContainer">
          <TabelLabels label={this.state.filterType} />
          {this.state.filteredData
            ? this.state.filteredData.map((item, index) => {
  return (
                  <TableData
                    order={index + 1}
                    label={item.item}
                    count={item.count}
                    average={item.count}
                  />
                );
              })
            : null}
        </table>
    </div>
  );
}

export default App;
