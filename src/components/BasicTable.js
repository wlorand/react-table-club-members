import { useMemo } from 'react';

// react-table lib
import { useTable } from 'react-table';

// data and data utils
import mock_member_data from '../mock-data/mock_member_data.json';
import { tableColumns } from '../ui-utils/tableColumns';

// styles
import '../styles/basic-table.css';

function BasicTable() {
  // wrap your cols and data in useMemo for performance
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => mock_member_data, []);

  // return a table instance from useTable
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns,
    data: data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BasicTable;
