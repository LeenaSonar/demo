import React, { Component } from 'react';

// import 
//     Table, TableBody, TableCell,
//     TableHead, TableRow,
//     TablePagination, Paper, TableSortLabel,
//  from '@material-ui/core';
import Table from "@material-ui/core/Table"; 
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

import PropTypes from 'prop-types';


class CountryTable extends Component {
    createSortHandler = field => (event) => {
        // const { onSort } = this.props;
        // onSort(event, field);
    }

    handlerColumn = () => {
        
        const {
            columns, orderBy, sort,
        } = this.props;
        const columnFields = columns.map(Column => (
            <TableCell align={Column.align}>
                <TableSortLabel
                    active={orderBy === Column.field}
                    direction={sort}
                    onClick={this.createSortHandler(Column.field)}
                >
                    {Column.label || Column.field}
                </TableSortLabel>
            </TableCell>
        ));
        return columnFields;
    };

    render() {
        const {
            columns,
            data, page,
            count,
            rowsPerPage,
            loading, onChangePage,
        } = this.props;
        const rowData = Array.from(data);
        
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>{this.handlerColumn()}</TableRow>
                    </TableHead>
                    {
                        rowData.map((row, index) => (
                            <TableBody>
                                <TableRow hover style={{ cursor: 'pointer' }} selected={index % 2 === 0}>
                                    {columns.map(items => (
                                        <TableCell
                                            align={items.align}
                                        >
                                            {(items.format) ? items.format(row[items.field]) : row[items.field]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        ))}
                </Table>
                <TablePagination
                    component="div"
                    count={count}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    rowsPerPageOptions={[]}
                    loading={loading}
                    // dataLength={dataLength}
                    onChangePage={onChangePage}
                />
            </Paper>
        );

    }
}
export default CountryTable;


