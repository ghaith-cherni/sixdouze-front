"use client";

import * as React from "react"; 
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Paper,
  IconButton,
  TableHead,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"; 
import styles from "../TopBrowsingPagesToday/TopBrowsingPagesToday.module.css"

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        flexShrink: 0,
        display: "flex",
        gap: "10px",
        padding: "0 20px",
      }}
    >
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        sx={{
          borderRadius: "4px",
          padding: "6px",
        }}
        className="border"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
}

function createData(
  id: any,
  page_url: string,
  source: string,
  avg_time: string,
  page_views: string,
  bounce_rate: string,
) {
  return {
    id,
    page_url,
    source,
    avg_time,
    page_views,
    bounce_rate,
  };
}

const rows = [
  createData(
    "1",
    "/dashboard-overview",
    "Organic",
    "3m 45s", 
    "350", 
    "30.5%", 
  ),
  createData(
    "2",
    "/custom-reports/generate",
    "Paid",
    "7m 00s", 
    "400", 
    "24.9%", 
  ),
  createData(
    "3",
    "/export-data",
    "Direct",
    "2m 30s", 
    "125", 
    "50.0%", 
  ),
  createData(
    "4",
    "/realtime-users",
    "Referral",
    "3m 00s", 
    "190", 
    "40.2%", 
  ),
  createData(
    "5",
    "/account-preferences",
    "Organic",
    "2m 50s", 
    "180", 
    "42.1%", 
  ),
  createData(
    "6",
    '/apis-and-reports',
    'Paid',
    '4m 15s',
    '320',
    '28.7%'
  ),
  createData(
    "7",
    '/apis-and-reports',
    'Paid',
    '4m 15s',
    '320',
    '28.7%'
  ),
  createData(
    "8",
    '/account-preferences',
    'Organic',
    '2m 50s',
    '180',
    '42.1%'
  ),
  createData(
    "9",
    '/realtime-users',
    'Referral',
    '3m 00s',
    '190',
    '40.2%'
  ),
  createData(
    "10",
    '/export-data',
    'Direct',
    '2m 30s',
    '125',
    '50.0%'
  ),
  createData(
    "11",
    '/custom-reports/generate',
    'Paid',
    '7m 00s',
    '400',
    '24.9%'
  ),
  createData(
    "12",
    '/dashboard-overview',
    'Organic',
    '3m 45s',
    '350',
    '30.5%'
  )
].sort((a, b) => (b.id < a.id ? 1 : 1));

const TopBrowsingPagesToday: React.FC = () => {
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Top Browsing Pages Today
          </Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              gap: "10px",
            }}
          >
            <form className='t-search-form'>
              <label>
                <i className="material-symbols-outlined">search</i>
              </label>
              <input
                type="text"
                className='t-input'
                placeholder="Search here....."
              />
            </form>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "0",
          }}
          className="rmui-table"
        >
          <Table sx={{ minWidth: 650 }} className={styles.tbptTable}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px", 
                  }}
                  className="border-bottom"
                >
                  Page URL
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px", 
                  }}
                  className="border-bottom"
                >
                  Source
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Avg Time
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Page Views
                </TableCell>
 
                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Bounce Rate (%)
                </TableCell> 
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    sx={{
                      padding: "9px 14px",
                      fontSize: "14px", 
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    <a href="#" className="text-secondary">
                      {row.page_url}
                    </a>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "9px 14px",
                      fontSize: "14px", 
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.source}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "9px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.avg_time}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "9px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.page_views}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "9px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.bounce_rate}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[
                    5,
                    10,
                    25,
                    { label: "All", value: -1 },
                  ]}
                  colSpan={5}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                  sx={{
                    border: "none",
                  }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default TopBrowsingPagesToday;
