import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, TablePagination} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function ShowsTable({ onShowSelect, onShowCreate }) {

    const [showsData, setShowsData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    const navigate = useNavigate();

    const handleCreateShow = () => {
        onShowCreate();
    };

    const handleRowClick = (show) => {
        onShowSelect(show);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/show', {
                    params: {
                        type: 'musical',
                        page: page,
                        size: rowsPerPage
                    }
                });
                console.log("totalcount", response.headers['totalcount']);
                setShowsData(response.data);
                setTotalCount(Number(response.headers['totalcount']));

            } catch (error) {
                console.error('axios 호출에 실패했습니다.', error);
            }
        };

        fetchData(); // 함수 호출
    }, [page, rowsPerPage]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Show ID</TableCell>
                            <TableCell align="right">제목</TableCell>
                            <TableCell align="right">공연기간</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {showsData.map((show) => (
                            <TableRow
                                key={show.showId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => handleRowClick(show)}
                                style={{ cursor: 'pointer' }}
                            >
                                <TableCell component="th" scope="row">
                                    {show.showId}
                                </TableCell>
                                <TableCell align="right">{show.title}</TableCell>
                                <TableCell align="right">{show.period}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                variant="contained"
                color="primary"
                onClick={handleCreateShow}
                style={{ margin: '20px' }}
            >
                생성
            </Button>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="행 개수:" // 페이지당 행 수 레이블 변경
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} 중 ${count !== -1 ? count : `more than ${to}`}`}
            />
        </>
    );
}
