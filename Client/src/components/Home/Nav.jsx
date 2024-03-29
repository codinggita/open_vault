import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import navLogo from "./../../assets/navBarLogo.svg";

const defaultTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

import avt from "./../../assets/avatarSVG.svg";

const pages = ["Drop", "Encrypt", "About", "Contact"];

const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleNavigate = (event) => {
        
		let targetNav = event.currentTarget.innerText;
		const val  = targetNav.toLowerCase();

		switch (val) {
			case "drop":
				navigate("/drop");
				break;
			case "encrypt":
				navigate("/encrypt");
				break;
			case "about":
				navigate("/about");
				break;
			case "contact":
				navigate("/contact");
				break;
			case "profile":
				navigate("/user");
				handleCloseUserMenu();
				break;
			case "logout":
				handleLogout();
				handleCloseUserMenu();
				break;
			default:
				console.log("Default Switch: Redirect to Root");
                navigate('/');
				break;
		}
	};

	const handleLogout = () => {};
	return (
		<ThemeProvider theme={defaultTheme}>
			<AppBar
				position='static'
				elevation={0}
				sx={{ background: "#202020" }}
			>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<Typography
							variant='h6'
							noWrap
							component='a'
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
                            onClick={handleNavigate}
						>
							<img src={navLogo} alt='openVault logo' />
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}
									>
										<Typography
											onClick={handleNavigate}
											textAlign='center'
										>
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography
							variant='h5'
							noWrap
							component='a'
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
                            onClick={handleNavigate}
						>
							<img src={navLogo} alt='openVault logo' />
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleNavigate}
									sx={{
										my: 2,
										color: "white",
										display: "block",
									}}
								>
									{page}
								</Button>
							))}
						</Box>

						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ p: 0, border: "solid 0.1px #90ca9f" }}
								>
									<Avatar alt='Remy Sharp' src={avt} />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem
										key={setting}
										onClick={handleNavigate}
									>
										<Typography textAlign='center'>
											{setting}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
}
export default ResponsiveAppBar;
