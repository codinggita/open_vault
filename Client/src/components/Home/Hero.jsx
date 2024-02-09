import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const defaultTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function Hero() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='l'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 10,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginBottom: 20,
					}}
				>
					<Box component='form' noValidate sx={{ mt: 1 }}>
						<Button type='submit' variant='contained' sx={{ m: 3 }}>
							Encrypt File
						</Button>

						<Link to={"./drop"}>
							<Button
								type='submit'
								variant='contained'
								sx={{ m: 3 }}
							>
								Access Drop
							</Button>
						</Link>

						<Typography sx={{ color: "#90caf9" }}>
							Encrypt Files | Share Private Data
						</Typography>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
