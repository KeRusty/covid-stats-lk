import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// styles
import './CountryTable.scss';

function CountryTable({tableData}:{tableData:any}) {

  console.log(tableData, "TABLE");

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell >Code</TableCell>
            <TableCell>Total Confirmed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row:any) => (
            <TableRow
              key={row.CountryCode}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.Country}</TableCell>
              <TableCell >{row.CountryCode}</TableCell>
              <TableCell >{row.TotalConfirmed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CountryTable;
