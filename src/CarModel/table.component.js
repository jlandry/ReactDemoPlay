import React, { createContext } from "react";
// import { Input } from "../shared/inputs";

export const TableContext = createContext();

const Row = ({ row }) => (
  <TableContext.Consumer>
    {({ columns }) =>
      columns.map((field, i) => <td key={i}>{row[field.name]}</td>)
    }
  </TableContext.Consumer>
);

const EditRow = ({ row }) => (
  <TableContext.Consumer>
    {({ columns, updateRow }) =>
      columns.map((field, i) => (
        <td key={i}>
          {field.editable ? (
            <input
              value={row[field.name]}
              onChange={e => updateRow(row.Id, field.name, e.target.value)}
            />
          ) : (
            row[field.name]
          )}
        </td>
      ))
    }
  </TableContext.Consumer>
);

export const Body = () => (
  <TableContext.Consumer>
    {({ columns, data, activeRow, selectRow }) => (
      <tbody>
        {data.map((row, i) => (
          <tr key={row.Id} onClick={() => selectRow(row.Id)}>
            {activeRow === row.Id ? <EditRow row={row} /> : <Row row={row} />}
          </tr>
        ))}
      </tbody>
    )}
  </TableContext.Consumer>
);

export const Header = () => (
  <TableContext.Consumer>
    {({ columns }) => (
      <thead>
        <tr>{columns.map((field, i) => <th key={i}>{field.name}</th>)}</tr>
      </thead>
    )}
  </TableContext.Consumer>
);

export const Table = ({ children }) => <table>{children}</table>;