"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,  
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "../BrowserUsedByUsers/BrowserUsedByUsers.module.css"

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
  browserImg: string,
  browserName: string,
  users: string,
  sessions: string,
  bounceRate: string,
  avgsDuration: string,
) {
  return {
    id,
    browserImg,
    browserName,
    users,
    sessions,
    bounceRate,
    avgsDuration,
  };
}

const rows = [
  createData(
    "1",
    "/images/browsers/google-chrome.svg",
    "Google Chrome",
    "58.4%",
    "12,345",
    "34.2%", 
    "3m 15s",
  ),
  createData(
    "2",
    "/images/browsers/safari.svg",
    "Safari",
    "25.1%",
    "5,289",
    "40.5%", 
    "2m 45s",
  ),
  createData(
    "3",
    "/images/browsers/microsoft-edge.svg",
    "Microsoft Edge",
    "10.2%",
    "2,134",
    "29.8%", 
    "4m 05s",
  ),
  createData(
    "4",
    "/images/browsers/mozilla-firefox.svg",
    "Mozilla Firefox",
    "4.3%",
    "897",
    "38.0%", 
    "3m 00s",
  ),
  createData(
    "5",
    "/images/browsers/opera-mini.svg",
    "Opera Mini",
    "1.5%",
    "315",
    "35.7%", 
    "2m 30s",
  ),
  createData(
    "6",
    "/images/browsers/others.svg",
    "Others",
    "0.5%",
    "105",
    "42.1%", 
    "2m 10s",
  ),
  createData(
    "7",
    "/images/browsers/safari.svg",
    "Safari",
    "25.1%",
    "5,289",
    "40.5%", 
    "2m 45s",
  ),
  createData(
    "8",
    "/images/browsers/mozilla-firefox.svg",
    "Mozilla Firefox",
    "4.3%",
    "897",
    "38.0%", 
    "3m 00s",
  ),
  createData(
    "9",
    "/images/browsers/opera-mini.svg",
    "Opera Mini",
    "1.5%",
    "315",
    "35.7%", 
    "2m 30s",
  ),
  createData(
    "10",
    "/images/browsers/microsoft-edge.svg",
    "Microsoft Edge",
    "10.2%",
    "2,134",
    "29.8%", 
    "4m 05s",
  ),
  createData(
    "11",
    "/images/browsers/others.svg",
    "Others",
    "0.5%",
    "105",
    "42.1%", 
    "2m 10s",
  ),
  createData(
    "12",
    "/images/browsers/google-chrome.svg",
    "Google Chrome",
    "58.4%",
    "12,345",
    "34.2%", 
    "3m 15s",
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const BrowserUsedByUsers: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            Browser Used By Users
          </Typography>
 
          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: '0px',
                padding: '1px 2px',
                fontSize: '14px', 
              }}
            >
              Oct 01 - Oct 31, 2024 <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,

                sx: {
                  overflow: "visible",
                  boxShadow: "0 4px 45px #0000001a",
                  mt: 0,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Sep 01 - Sep 30, 2024</MenuItem>
              <MenuItem>Aug 01 - Aug 31, 2024</MenuItem>
              <MenuItem>Jul 01 - Jul 31, 2024</MenuItem> 
            </Menu>
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
          <Table sx={{ minWidth: 650 }} className={styles.usersTable}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'center'
                  }}
                  className="border-bottom"
                >
                  Browser
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Users (%)
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Sessions
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

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Avg. Session Duration
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
                      padding: "10px 14px",
                      fontSize: "14px",
                    }}
                    className="text-black border-bottom"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Box sx={{ flexShrink: "0" }}>
                        <Image
                          src={row.browserImg}
                          alt="Product"
                          width={16}
                          height={16}
                          style={{ borderRadius: "100px" }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "500",
                          }}
                        >
                          {row.browserName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.users}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.sessions}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.bounceRate}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.avgsDuration}
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
                  colSpan={9}
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

export default BrowserUsedByUsers;
