import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchDBData } from './actions';
import TabelLabels from './TableLabels';
import TableData from './TableData';
import { filteredTable } from './selector';

const list = [
  'education',
  'birth country',
  'marital status',
  'sex',
  'citizenship'
];
class App extends Component {
  state = {
    filteredData: []
  };

  componentDidMount() {
    this.props.fetchDBData();
  }

  handleChange = event => {
    const filterType = event.target.value;
    const rawData = this.props.rawData;

    const displayData = filteredTable(rawData, filterType);

    this.setState({
      filterType: filterType,
      filteredData: displayData
    });
  };

  render() {
    return (
      <div>
        <div className="dropDownContainer">
          <select className="dropDownMenu" onChange={this.handleChange}>
            <option value="" selected disabled hidden>
              Choose a demographic
            </option>
            {list.map(item => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
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
}

const mapStateToProps = redux => ({
  rawData: redux.data
});

const mapDispatchToProps = dispatch => {
  return {
    fetchDBData: () => dispatch(fetchDBData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
