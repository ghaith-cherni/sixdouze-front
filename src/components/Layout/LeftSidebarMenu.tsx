// File path: /styles/left-sidebar-menu.scss

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#3a4252" : "#f6f7f9",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface LeftSidebarProps {
  toggleActive: () => void;
}

const LeftSidebarMenu: React.FC<LeftSidebarProps> = ({ toggleActive }) => {
  const pathname = usePathname();

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Box className="leftSidebarDark">
        <Box className="left-sidebar-menu">
          <Box className="logo">
            <Link href="/dashboard/ecommerce/">
              <Image
                src="\images\sixdouze_logo_elsi_font.png"
                alt="logo-icon"
                width={200}
                height={50}
              />
            </Link>
          </Box>

          <Box className="burger-menu" onClick={toggleActive}>
            <Typography component={"span"} className="top-bar"></Typography>
            <Typography component={"span"} className="middle-bar"></Typography>
            <Typography component={"span"} className="bottom-bar"></Typography>
          </Box>

          <Box className="sidebar-inner">
            <Box className="sidebar-menu">
              <Typography
                className="sub-title"
                sx={{
                  display: "block",
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                MAIN
              </Typography>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <i className="material-symbols-outlined">dashboard</i>
                  <Typography component={"span"} className="title">
                    Dashboard
                  </Typography>
                  <Typography component={"span"} className="trezo-badge">
                    18
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">

                    <li className="sidemenu-item">
                      <Link
                        href="/dashboard/add-more/"
                        className={`sidemenu-link ${
                          pathname === "/dashboard/analytics/" ? "active" : ""
                        }`}
                      >
                        add more
                      </Link>
                    </li>

                    <li className="sidemenu-item">
                      <Link
                        href="/dashboard/add-more/"
                        className={`sidemenu-link ${
                          pathname === "/dashboard/saas/" ? "active" : ""
                        }`}
                      >
                        add more
                        <Typography component={"span"} className="trezo-badge">
                          New
                        </Typography>
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Link
                href="/my-profile/"
                className={`sidebar-menu-link ${
                  pathname === "/my-profile/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined">account_circle</i>
                <Typography component={"span"} className="title">
                  My Profile
                </Typography>
              </Link>

              <Accordion
                expanded={expanded === "panel26"}
                onChange={handleChange("panel26")}
                className="mat-accordion"
              >
                <AccordionSummary
                  className="mat-summary"
                  aria-controls="panel23d-content"
                  id="panel23d-header"
                >
                  <i className="material-symbols-outlined">settings</i>
                  <Typography component={"span"} className="title">
                    Settings
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="mat-details">
                  <ul className="sidebar-sub-menu">
                    <li className="sidemenu-item">
                      <Link
                        href="/settings/"
                        className={`sidemenu-link ${
                          pathname === "/settings/" ? "active" : ""
                        }`}
                      >
                        Account Settings
                      </Link>
                    </li>

                    <li className="sidemenu-item">
                      <Link
                        href="/settings/change-password/"
                        className={`sidemenu-link ${
                          pathname === "/settings/change-password/"
                            ? "active"
                            : ""
                        }`}
                      >
                        Change Password
                      </Link>
                    </li>

                    <li className="sidemenu-item">
                      <Link
                        href="/settings/connections/"
                        className={`sidemenu-link ${
                          pathname === "/settings/connections/" ? "active" : ""
                        }`}
                      >
                        Connections
                      </Link>
                    </li>

                    <li className="sidemenu-item">
                      <Link
                        href="/settings/privacy-policy/"
                        className={`sidemenu-link ${
                          pathname === "/settings/privacy-policy/"
                            ? "active"
                            : ""
                        }`}
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="sidemenu-item">
                      <Link
                        href="/settings/terms-conditions/"
                        className={`sidemenu-link ${
                          pathname === "/settings/terms-conditions/"
                            ? "active"
                            : ""
                        }`}
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </AccordionDetails>
              </Accordion>

              <Link
                href="/authentication/logout/"
                className="sidebar-menu-link"
              >
                <i className="material-symbols-outlined">logout</i>
                <Typography component={"span"} className="title">
                  Logout
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LeftSidebarMenu;
