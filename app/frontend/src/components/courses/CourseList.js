import React, { useCallback, useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import CourseFilter from './CourseFilter';
import RowActions from './RowActions';

import { createPath, editPath, showPath } from '../../utility/router';
import Course from '../../model/Course';
import { formatDate } from '../../utility/date';

const course = new Course();

const TableWrapper = styled.div`
    padding: 30px 0;
`;

const CourseList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [filters, setFilters] = useState({ page: 1, perPage: 10 });

    const history = useHistory();
    const match = useRouteMatch();

    const toggleReload = () => {
        setReload(reload => !reload);
    }

    useEffect(() => {
        const fetch = async () => {
            setLoading(true);

            try {
                const data = await course.get(filters);

                setData(data);
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        };

        fetch();
    }, [reload, filters]);

    const handleDelete = async row => {
        if (window.confirm('Are you sure?')) {
            setLoading(true);

            await course.delete(row.pk);

            toggleReload();
        }
    }
    const handleEdit = row => {
        history.push(editPath(match.url, row));
    }

    const handleRowClick = useCallback(row => {
        history.push(showPath(match.url, row));
    }, [history, match.url]);
    const handlePageChange = useCallback((page) => {
        setFilters(filters => ({ ...filters, page }))
    }, []);
    const handlePerPageChange = useCallback((perPage) => {
        setFilters(filters => ({ ...filters, perPage }))
    }, []);

    const columns = useMemo(() => [
        {
            name: 'Name',
            selector: 'name',
        },
        {
            name: 'Start date',
            selector: row => formatDate(row.start_date),
        },
        {
            name: 'End date',
            selector: row => formatDate(row.end_date),
        },
        {
            name: 'Number of lectures',
            selector: 'lectures_quantity',
        },
        {
            cell: row => <RowActions row={row} onEdit={handleEdit} onDelete={handleDelete}/>,
            button: true,
            allowOverflow: true,
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
    ], []);

    const subHeader = useMemo(() => {
        return <CourseFilter setFilters={setFilters}/>
    }, []);

    return (
        <TableWrapper>
            <DataTable
                title="Courses"
                columns={columns}
                data={data.results}
                progressPending={loading}
                onRowClicked={handleRowClick}
                actions={actions}
                subHeader={true}
                subHeaderComponent={subHeader}
                highlightOnHover
                pointerOnHover
                pagination
                paginationServer
                paginationTotalRows={data.count || 0}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerPageChange}
                overflowY
            />
        </TableWrapper>
    );
};

const Actions = () => {
    const history = useHistory();
    const match = useRouteMatch();

    const handleClick = () => {
        history.push(createPath(match.url));
    }

    return (
        <Button variant="primary" size="sm" onClick={handleClick}>+ Create</Button>
    );
}

const actions = <Actions/>;

export default CourseList;
