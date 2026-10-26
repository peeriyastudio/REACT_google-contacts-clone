import * as React from "react";
import { Button, IconButton, Link } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CssBaseline } from "@mui/material";
import sidebarTheme from './sidebarTheme';

export default function Sidebar() {
  return (
    <ThemeProvider theme={sidebarTheme}>
    <CssBaseline />
    <div className="sidebar">
      <Button className="add-item"><AddIcon sx={{ fontSize: 26 }} /><span className="text-[15px] pl-[8px]">Create contact</span></Button>
      <ul className="with-indicator">
        <li className="active flex items-center justify-between">
          <Link>
            <PersonIcon sx={{ fontSize: 24, marginRight: 1, }} />
            <span>Contacts</span>
          </Link>
          <span className="inline-block ml-2 mr-2 text-sm">3</span>
        </li>
        <li className="flex items-center justify-between">
          <Link>
            <HistoryIcon sx={{ fontSize: 24, marginRight: 1, }} />
            <span>Frequent</span>
          </Link>
          <span className="inline-block ml-2 mr-2 text-sm">3</span>
        </li>
        <li className="flex items-center justify-between">
          <Link>
            <FolderOutlinedIcon sx={{ fontSize: 24, marginRight: 1, }} />
            <span>Other contacts</span>
          </Link>
          <span className="inline-block ml-2"><InfoOutlinedIcon sx={{ fontSize: 22, opacity: 0.65, }} /></span>
        </li>
        <li className="no-style"><span className="font-semibold text-sm">Fix and manage</span></li>
      </ul>
      <ul>
        <li><Link><HandymanOutlinedIcon sx={{ fontSize: 24, marginRight: 1, }} /><span>Merge and fix</span></Link></li>
        <li><Link><FileDownloadOutlinedIcon sx={{ fontSize: 24, marginRight: 1, }} /><span>Import</span></Link></li>
        <li><Link><DeleteOutlineIcon sx={{ fontSize: 24, marginRight: 1, }} /><span>Bin</span></Link></li>
        <li className="no-style">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm">Labels</span>
            <IconButton size="large" color="inherit">
              <AddIcon sx={{ fontSize: 24, }} />
            </IconButton>
          </div>
        </li>
      </ul>
    </div>
    </ThemeProvider>
  );
}