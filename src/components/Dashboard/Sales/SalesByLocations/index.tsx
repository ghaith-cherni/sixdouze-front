"use client";

import React from "react";
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import styles from "../SalesByLocations/SalesByLocations.module.css";
import WorldMapContent from "./WorldMapContent";

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
  countryImg: string,
  countryName: string,
  orders: string,
  earnings: string,
) {
  return {
    id,
    countryImg,
    countryName,
    orders,
    earnings,
  };
}

const rows = [
  createData(
    "1",
    "/images/flags/usa.svg",
    "USA",
    "22,124",
    "$250.4k",
  ),
  createData(
    "2",
    "/images/flags/germany.svg",
    "Germany",
    "18,320",
    "$180.3",
  ),
  createData(
    "3",
    "/images/flags/uk.svg",
    "UK",
    "12,560",
    "$125.6k",
  ),
  createData(
    "4",
    "/images/flags/canada.svg",
    "Canada",
    "8,720",
    "$94.1k",
  ),
  createData(
    "5",
    "/images/flags/australia.svg",
    "Australia",
    "9,720",
    "$66.1k",
  ),
  createData(
    "6",
    "/images/flags/portugal.svg",
    "Portugal",
    "49,720",
    "$86.1k",
  ),
  createData(
    "7",
    "/images/flags/spain.svg",
    "Spain",
    "42,720",
    "$82.1k",
  ),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const SalesByLocations: React.FC = () => {
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
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

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
        className="rmui-card border"
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
            Sales by Locations
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              sx={{
                borderRadius: "0",
                padding: "0",

                "& .MuiButtonBase-root": {
                  padding: "0",
                },
              }}
            >
              <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: '-13px' }}>
          <WorldMapContent />
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
          <Table sx={{ minWidth: 400 }} className={styles.usersTable}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px", 
                  }}
                  className="border-bottom"
                >
                  Country
                </TableCell>

                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Orders
                </TableCell>
 
                <TableCell
                  sx={{
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: "end",
                  }}
                  className="border-bottom"
                >
                  Earnings
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
                          src={row.countryImg}
                          alt="Product"
                          width={22}
                          height={22}
                          style={{ borderRadius: "100px" }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: "500",
                          }}
                        >
                          {row.countryName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.orders}
                  </TableCell>
  
                  <TableCell
                    sx={{
                      padding: "10px 14px",
                      fontSize: "14px",
                      textAlign: "end",
                      fontWeight: "500",
                    }}
                    className="text-black border-bottom"
                  >
                    {row.earnings}
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={3} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
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

export default SalesByLocations;
