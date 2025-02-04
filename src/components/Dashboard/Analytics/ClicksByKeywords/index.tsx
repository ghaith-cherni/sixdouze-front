"use client";

import * as React from "react"; 
import {
  Card,
  Box,
  Typography,
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
  Menu
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "../ClicksByKeywords/ClicksByKeywords.module.css"

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
  dimension: string,
  impressionsIcon: string,
  impressionsNumber: number,
  clicksIcon: string,
  clicksNumber: number,
) {
  return {
    id,
    dimension,
    impressionsIcon,
    impressionsNumber,
    clicksIcon,
    clicksNumber,
  };
}

const rows = [
  createData(
    "1",
    "data metrics",
    "bx-trending-up",
    949,
    "bx-trending-down",
    656,
  ),
  createData(
    "2",
    "sales metric",
    "bx-trending-down",
    842,
    "bx-trending-up",
    420,
  ),
  createData(
    "3",
    "analytics dashboard",
    "bx-trending-up",
    640,
    "bx-trending-down",
    534,
  ),
  createData(
    "4",
    "saas metrics",
    "bx-trending-up",
    865,
    "bx-trending-up",
    560,
  ),
  createData(
    "5",
    "hubspot analytics",
    "bx-trending-down",
    435,
    "bx-trending-up",
    328,
  ),
  createData(
    "6",
    "smart goals",
    "bx-trending-up",
    756,
    "bx-trending-down",
    235,
  ),
  createData(
    "7",
    "google analytics",
    "bx-trending-up",
    578,
    "bx-trending-up",
    456,
  ),
  createData(
    "8",
    "trezo dashboard",
    "bx-trending-up",
    660,
    "bx-trending-down",
    478,
  ),
  createData(
    "9",
    "trezo dashboard",
    "bx-trending-up",
    660,
    "bx-trending-down",
    478,
  ),
  createData(
    "10",
    "google analytics",
    "bx-trending-up",
    578,
    "bx-trending-up",
    456,
  ),
  createData(
    "11",
    "smart goals",
    "bx-trending-up",
    756,
    "bx-trending-down",
    235,
  ),
  createData(
    "12",
    "hubspot analytics",
    "bx-trending-down",
    435,
    "bx-trending-up",
    328,
  ),
  createData(
    "13",
    "saas metrics",
    "bx-trending-up",
    865,
    "bx-trending-up",
    560,
  ),
  createData(
    "14",
    "analytics dashboard",
    "bx-trending-up",
    640,
    "bx-trending-down",
    534,
  ),
  createData(
    "15",
    "sales metrics",
    "bx-trending-down",
    842,
    "bx-trending-up",
    420,
  ),
  createData(
    "16",
    "data metric",
    "bx-trending-up",
    949,
    "bx-trending-down",
    656,
  ),
].sort((a, b) => (a.id < b.id ? 1 : 1));

const ClicksByKeywords: React.FC = () => {
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
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

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
            Clicks/Impressions by Keywords
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
          className="rmui-table cikTable"
        >
          <Table sx={{ minWidth: 650 }} className={styles.cikTable}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px", 
                    width: '30px'
                  }}
                  className="border-bottom"
                >
                  #
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px", 
                  }}
                  className="border-bottom"
                >
                  Dimension
                </TableCell>

                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Impressions
                </TableCell>
 
                <TableCell
                  sx={{ 
                    padding: "0 14px 7px",
                    fontSize: "12px",
                    textAlign: 'end'
                  }}
                  className="border-bottom"
                >
                  Clicks
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
                      padding: "11px 14px",
                      fontSize: "14px", 
                      fontWeight: '500',
                      width: '30px'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.id}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "11px 14px",
                      fontSize: "14px", 
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    {row.dimension}
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "11px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    <Box  
                      sx={{
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '6px'
                      }}
                    >
                      <i 
                        className={`bx ${row.impressionsIcon}`}
                        style={{
                          fontSize: '20px',
                          lineHeight: 0,
                        }}
                      ></i> 
                      {row.impressionsNumber}
                    </Box>
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "11px 14px",
                      fontSize: "14px",
                      textAlign: 'end',
                      fontWeight: '500'
                    }}
                    className="text-black border-bottom"
                  >
                    <Box  
                      sx={{
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '6px'
                      }}
                    >
                      <i 
                        className={`bx ${row.clicksIcon}`}
                        style={{
                          fontSize: '20px',
                          lineHeight: 0,
                        }}
                      ></i>
                      {row.clicksNumber}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={4} />
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
                  colSpan={4}
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

export default ClicksByKeywords;
