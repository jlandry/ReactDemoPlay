import React, { Component } from "react";
import { Table, Body, Header, TableContext } from './table.component';

export default class TableContainer extends Component {
    state = {
        activeRow: null,
        data: [
            {
                Id: "1",
                Year: "1961",
                Make: "Jaguar",
                Model: "E-Type"
            },
            {    
                Id: "2",
                Year: "1969",
                Make: "Ferrari",
                Model: "365 GT 2 + 2"
            },
            {
                Id: "3",
                Year: "1989",
                Make: "Porsche",
                Model: "911"
            }
        ],
        columns: [
            {
                name: "Id",
                editable: false
            },
            {
                name: "Year",
                editable: true
            },
            {
                name: "Make",
                editable: true
            },
            {
                name: "Model",
                editable: true
            }
        ]
    };

    render() {
        const {data, columns, activeRow} = this.state;

        return (
            <div>
                <TableContext.Provider
                    value = {{
                        data,
                        columns,
                        activeRow,
                        selectRow: id => this.setState({ activeRow: id }),
                        updateRow: (...args) => this.updateRow(...args)
                    }}
                    >
                    <Table>
                        <Header/>
                        <Body/>
                    </Table>
                    {activeRow && (
                        <button onClick={() => this.setState({ activeRow: null })}>
                        Done
                        </button>
                    )}
                </TableContext.Provider>
                <button onClick={console.log(this.state.data)} >Log Car Data</button>
                
            </div>
        );
    }

    updateRow(rowId, field, value) {
        const { data } = this.state;
        const index = data.findIndex(({ Id }) => Id === rowId);
        data[index][field] = value;
        this.setState({ data });
    }
}