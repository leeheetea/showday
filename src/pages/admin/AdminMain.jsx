import * as React from 'react';
import {styled, createTheme, ThemeProvider, useTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InventoryIcon from '@mui/icons-material/Inventory'; // 상품관리 아이콘
import PeopleIcon from '@mui/icons-material/People'; // 고객관리 아이콘
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useState} from "react";
import ShowsTable from "./ShowsTable";
import ShowDetail from "./ShowDetail";
import CreateShowForm from "./CreateShowForm";


const drawerWidth = 240;

const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        height: '100vh', // 사이드바 높이를 화면 전체 높이로 설정
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}));



const defaultTheme = createTheme();

export default function AdminDashboard() {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const [selectedMenu, setSelectedMenu] = useState('');

    const [selectedShow, setSelectedShow] = useState('');

    const showContentManagement = () => {
        setSelectedMenu('contentManagement'); // ShowsTable 컴포넌트를 보여주기 위해 상태 변경
    };

    const handleCreateShow = () => {
        setSelectedMenu('createShow');
    };

    const handleMenuItemClick = (menu) => {
        setSelectedMenu(menu);
        if (menu !== 'showDetail') {
            setSelectedShow(null); // 다른 메뉴를 선택하면 상세 보기를 리셋합니다.
        }
    };

    const handleShowSelect = (show) => {
        setSelectedShow(show); // 선택된 show를 상태에 저장합니다.
        setSelectedMenu('showDetail'); // 메뉴를 'showDetail'로 설정하여 상세 보기를 활성화합니다.
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            edge="start"
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            관리자 페이지
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List sx={{marginTop: '2rem'}}>
                        <ListItem button onClick={() => handleMenuItemClick('contentManagement')}>
                            <ListItemIcon>
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="컨텐츠 관리" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="고객관리" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ShoppingBasketIcon />
                            </ListItemIcon>
                            <ListItemText primary="주문관리" />
                        </ListItem>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        height: '100vh',
                        overflow: 'auto',
                        marginRight: '10rem',
                        marginLeft: `10rem`,
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginTop: `${defaultTheme.mixins.toolbar.minHeight + 30}px`
                    }}
                >
                    {/* 선택된 메뉴에 따라 컨텐츠를 조건부 렌더링합니다. */}

                    {selectedMenu === 'contentManagement' && <ShowsTable onShowSelect={handleShowSelect} onShowCreate={handleCreateShow} />}
                    {selectedMenu === 'showDetail' && selectedShow && <ShowDetail show={selectedShow} onBack={showContentManagement} />}
                    {selectedMenu === 'createShow' && (<CreateShowForm onBack={showContentManagement} />
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
