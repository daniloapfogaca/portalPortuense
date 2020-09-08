import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';

function DataTableGenerica(props) {

    const columns = props.columns;
    const data = props.data;
    const title = props.title;

    const customRowsPerPageText = {
        rowsPerPageText: 'Linhas por página: ',
        rangeSeparatorText: 'de ',
        noRowsPerPage: false,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos '
    }

    const customStyles = {
        headCells: {
            style: {
                background: '#f8f3ed',
                color: 'var(--color-primary)',
                fontSize: '1em'
            },
        },
        rows: {
            style: {
                background: '#f8f3ed',
                fontSize: '0.9em'
            },
        },
        pagination: {
            style: {
                background: '#f8f3ed',
            },
        }
    };

    return (
        <Fragment>
            <DataTable className="data-table"
                noHeader={true}
                title={title}
                columns={columns}
                data={data}
                highlightOnHover={true}
                responsive={true}
                pagination={true}
                customStyles={customStyles}
                paginationComponentOptions={customRowsPerPageText}
            />
        </Fragment>
    )
}
export default DataTableGenerica;