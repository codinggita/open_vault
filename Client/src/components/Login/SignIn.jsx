import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import Logo from "../accessibility/Logo";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{"Copyright © "}
			<Link color='inherit' href='https://openvault.onrender.com'>
				openVault
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const defaultTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function SignIn() {
	const navigate = useNavigate();
	const { setToken } = useAuth();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const data = new FormData(event.currentTarget);
			const reqBody = {
				email: data.get("email"),
				password: data.get("password"),
			};
			const res = await axios.post(
				"http://localhost:5500/user/auth/login",
				reqBody
			);

			if (res.status === 200) {
				setToken(res.data.accessToken);
				navigate("/", { replace: true });
			} else {
				console.log("dsfad");
			}
			console.log("sdaf", res);
		} catch (err) {
			console.log("err", err);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Logo />

					{/* <Typography component="h1" variant="h6" sx={{ color: '#90caf9' }}>
                        Sign in
                    </Typography> */}
					<Box
						component='form'
						onSubmit={handleSubmit}
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link href='/signUp' variant='body2'>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}
