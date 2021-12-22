import {
	Button,
	colors,
	CssBaseline,
	Input,
	Typography,
	useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useLayoutEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const io = (className) =>
	new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			entry.intersectionRatio > 0
				? entry.target.classList.add(className)
				: entry.target.classList.remove(className);
			// observer.unobserve(entry.target);
		});
	});

const formIo = (time) =>
	new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			entry.intersectionRatio > 0 &&
				entry.target.animate([{ transform: "translateY(0)" }], {
					duration: time,
				});
		});
	});

const App = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	let [down, setDown] = useState(0);

	useLayoutEffect(() => {
		document.querySelectorAll(".aboutCard").forEach((el) => {
			io("active").observe(el);
		});

		document.querySelectorAll(".forFadeUp").forEach((el, i) => {
			io(`fadeUp${i + 1}`).observe(el);
		});

		io("fadeLeft").observe(document.querySelector(".weAlsoCard"));
		io("skewX").observe(document.querySelector(".weAlsoBg"));
		io("fadeZoom").observe(document.querySelector(".landingIntro"));
		io("fadeUp1").observe(document.querySelector(".weAlsoText"));
		io("fadeUp2").observe(document.querySelector(".weAlsoBtn"));
		document.querySelectorAll(".forFadeLeft").forEach((el) => {
			io("fadeLeft2").observe(el);
		});

		document.addEventListener("scroll", () => {
			setDown(window.scrollY / 10);
		});

		document.querySelectorAll(".input").forEach((el, i) => {
			io(`fadeUp${(i % 3) + 1}`).observe(el);
		});
	}, []);

	return (
		<>
			<CssBaseline />
			<Box className="app">
				{/* landing */}
				<Box sx={classes.landingContainer}>
					<Box sx={classes.landingContent}>
						<Box sx={classes.landingIntro} className="landingIntro">
							<Box
								component="section"
								sx={{
									mt: down,
									transition: "all .1s ease",
								}}
							>
								<Typography component="h2" variant="h1">
									Cyra
								</Typography>
								<Typography paragraph>
									Tag line goes here more content with extra content here and
									more.
								</Typography>
								<Button
									variant="contained"
									disableElevation
									sx={classes.landingBtn}
								/>
							</Box>
						</Box>

						<Box sx={classes.anchorGrid}>
							<Box sx={classes.anchorCard} id="contactUsCard">
								<Typography paragraph>Contact us</Typography>
							</Box>
							<Box sx={{ ...classes.anchorCard, position: "relative" }}>
								<Typography paragraph>About us</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				{/* about us */}
				<Box
					sx={{
						backgroundColor: colors.grey[200],
					}}
				>
					<Box
						sx={{
							maxWidth: 1600,
							width: "100%",
							height: "100%",
							mx: "auto",
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "space-around",
							px: 3,
							pt: 20,
							pb: 15,
							[theme.breakpoints.down("md")]: {
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								py: 12,
								"& h3": {
									fontSize: 32,
									lineHeight: 1.5,
								},
								"& h5": { fontSize: 21 },
								"& p": { fontSize: "1.2rem" },
							},
							"& .forFadeUp": {
								transform: "translateY(2.5rem)",
							},
						}}
					>
						<Box sx={{ maxWidth: 500 }}>
							<Typography sx={{ fontSize: "1.25rem", fontWeight: "light" }}>
								About us
							</Typography>
							<Typography
								variant="h3"
								sx={{ fontWeight: 900, mt: 1, mb: 5, lineHeight: 1.3 }}
							>
								The meaning of{" "}
								<div
									style={{
										position: "relative",
										display: "inline-block",
										textDecorationThickness: 5,
										textDecorationColor: colors.yellow[800],
									}}
								>
									<Box
										component="span"
										sx={{
											position: "relative",
											zIndex: 1,
											"&::before": {
												content: `""`,
												display: "inline-block",
												height: 10,
												width: 140,
												backgroundColor: colors.yellow[800],
												position: "absolute",
												bottom: 7.5,
												left: 0,
												zIndex: -1,
												[theme.breakpoints.down("md")]: {
													width: 88,
													bottom: 5,
												},
											},
										}}
									>
										CYRA
									</Box>
								</div>{" "}
								comes from greek meaning comes from the <i>SUN</i>.
							</Typography>
							<Box className="forFadeUp">
								<Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
									Lorem ipsum
								</Typography>
								<Typography
									paragraph
									sx={{
										fontSize: "1.375rem",
										fontWeight: "light",
										lineHeight: 1.75,
									}}
								>
									Founded and registered in the year 2021. The company's first
									project is a farm project near Madurai.
								</Typography>
							</Box>
							<Box className="forFadeUp">
								<Typography variant="h5" sx={{ fontWeight: 900, mt: 5, mb: 2 }}>
									Lorem ipsum
								</Typography>
								<Typography
									paragraph
									sx={{
										fontSize: "1.375rem",
										fontWeight: "light",
										lineHeight: 1.75,
									}}
								>
									The farm project consists of one acre plots roughly costing 10
									to 20 lakhs.
								</Typography>
							</Box>

							<Button
								className="forFadeUp"
								sx={{ ...classes.aboutBtn, mt: 5 }}
								variant="contained"
								disableElevation
								disableRipple
							/>
						</Box>

						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gridTemplateRows: "repeat(2, 1fr)",
								gap: 5,
								[theme.breakpoints.down("md")]: {
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "center",
									gap: 3.5,
									mt: 10,
								},
							}}
						>
							{[1, 2, 3, 4].map((i) => (
								<Box key={i} sx={classes.aboutCard}>
									<Box
										className="aboutCard"
										sx={{
											position: "absolute",
											top: 0,
											left: 0,
											width: 0,
											height: "100%",
											backgroundColor: colors.grey[400],
										}}
									/>
								</Box>
							))}
						</Box>
					</Box>
				</Box>

				{/* services */}
				<Box sx={classes.serviceContainer}>
					<Box sx={classes.serviceContent}>
						<Typography
							variant="h3"
							sx={{
								position: "relative",
								[theme.breakpoints.down("md")]: {
									fontSize: 32,
								},
							}}
						>
							<Box
								className="forFadeLeft"
								sx={{
									position: "absolute",
									width: 0,
									overflow: "hidden",
									whiteSpace: "nowrap",
								}}
							>
								Services
							</Box>
						</Typography>

						<Box sx={classes.serviceGrid}>
							{[1, 2, 3, 4, 5, 6].map((i) => (
								<Tilt key={i} tiltReverse={true} perspective={500}>
									<Box sx={classes.serviceCard}>
										<Typography paragraph>
											Property Management Services
										</Typography>
									</Box>
								</Tilt>
							))}
						</Box>
					</Box>
				</Box>

				{/* also */}
				{/* container */}
				<Box
					sx={{
						backgroundColor: colors.grey[50],
						[theme.breakpoints.up("md")]: {
							height: "100vh",
						},
					}}
				>
					<Box
						sx={{
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							[theme.breakpoints.down("md")]: {
								flexDirection: "column-reverse",
							},
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								[theme.breakpoints.down("md")]: {
									alignItems: "center",
									justifyContent: "center",
								},
							}}
						>
							<Typography
								className="weAlsoCard"
								variant="h3"
								sx={{
									fontWeight: 900,
									backgroundColor: colors.grey[50],
									p: 5,
									maxWidth: 500,
									textAlign: "right",
									mr: 0,
									opacity: 0.5,
									zIndex: 10,
									lineHeight: 1.5,
									transition: "1.25s ease",
									[theme.breakpoints.down("md")]: {
										px: 3.5,
										py: 5,
										textAlign: "center",
										fontSize: 32,
										backgroundColor: "transparent",
									},
								}}
							>
								We also do buying and selling of properties.
							</Typography>
							<Typography
								className="weAlsoText"
								sx={{
									p: 5,
									maxWidth: 400,
									fontSize: 24,
									color: colors.grey[800],
									textAlign: "right",
									mr: 2.5,
									fontWeight: "light",
									lineHeight: 1.75,
									transform: "scale(1.25)",
									[theme.breakpoints.down("md")]: {
										textAlign: "center",
										mr: 0,
										fontSize: "1.25rem",
										px: 3.5,
										pt: 0,
									},
									transform: "translateY(2rem)",
								}}
							>
								The farm project consists of one acre plots roughly costing from
								10 to 20 lakhs.
							</Typography>

							<Box
								className="weAlsoBtn"
								sx={{
									height: 60,
									width: 200,
									backgroundColor: colors.yellow[800],
									mb: -12.25,
									mr: 7.5,
									[theme.breakpoints.down("md")]: {
										m: 0,
										mb: 10,
									},
									transform: "translateY(2rem)",
								}}
							/>
						</Box>
						<Box
							className="weAlsoBg"
							sx={{
								height: 650,
								width: 650,
								transform: "skew(0deg, 3.5deg)",
								transition: "1s ease",
								backgroundColor: colors.yellow[800],
								boxShadow: `10px 10px 50px -15px ${colors.yellow[800]}`,
								[theme.breakpoints.down("md")]: {
									height: 350,
									width: 350,
									mt: 7.5,
								},
							}}
						/>
					</Box>
				</Box>

				{/* gallery */}
				<Box
					sx={{
						backgroundColor: colors.grey[200],
					}}
				>
					<Box
						sx={{
							maxWidth: 1600,
							mx: "auto",
							px: 12.5,
							py: 15,
							[theme.breakpoints.down("md")]: {
								px: 3.5,
								py: 10,
								"& h3": {
									fontSize: 32,
									mb: 10,
								},
							},
						}}
					>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 900,
								position: "relative",
								mb: 15,
							}}
						>
							<Box
								className="forFadeLeft"
								sx={{
									position: "absolute",
									width: 0,
									overflow: "hidden",
									whiteSpace: "nowrap",
								}}
							>
								Gallery
							</Box>
						</Typography>

						<Box
							sx={{
								display: "grid",
								gridTemplateRows: "repeat(2, minmax(425px, 1fr))",
								gridTemplateColumns: "repeat(3, minmax(400px, 1fr))",
								gap: 3,
								[theme.breakpoints.down("md")]: {
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "center",
									"& div": {
										height: 350,
										width: 350,
									},
								},
							}}
						>
							<Box
								sx={{
									backgroundColor: colors.grey[400],
									gridRow: "1",
									gridColumn: "1",
									"& img": {
										objectFit: "cover",
										transition: "all 1s ease",
										"&:hover": {
											transform: "scale(1.25)",
											transition: "all 1s ease",
										},
									},
									overflow: "hidden",
								}}
							>
								<img src={"/assets/landing.jpg"} width="100%" height="100%" />
							</Box>
							<Box
								sx={{
									backgroundColor: colors.grey[400],
									gridRow: "2",
									gridColumn: "1",
								}}
							/>
							<Box
								sx={{
									backgroundColor: colors.grey[400],
									gridRow: "1/3",
									gridColumn: "2/4",
								}}
							/>
						</Box>
					</Box>
				</Box>

				{/* contact form */}
				<Box
					sx={{
						backgroundColor: colors.grey[50],
					}}
				>
					<Box
						sx={{
							maxWidth: 1600,
							px: 12.5,
							py: 15,
							mx: "auto",
							[theme.breakpoints.down("md")]: {
								px: 3.5,
								py: 10,
								"& h3": {
									fontSize: 32,
									mb: 10,
								},
							},
						}}
					>
						<Typography
							variant="h3"
							sx={{
								fontWeight: 900,
								mb: 15,
								position: "relative",
							}}
						>
							<Box
								className="forFadeLeft"
								sx={{
									position: "absolute",
									overflow: "hidden",
									width: 0,
									whiteSpace: "nowrap",
								}}
							>
								Contact form
							</Box>
						</Typography>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(2, 1fr)",
								gridTemplateRows: "repeat(4, 1fr)",
								gap: 7.5,
								[theme.breakpoints.down("md")]: {
									display: "flex",
									flexDirection: "column",
									gap: 5,
									"& label": {
										fontSize: "1.2rem",
									},
									"& input": {
										fontSize: "1rem",
									},
								},
								"& .input": {
									transform: "translateY(2rem)",
								},
							}}
						>
							<Box className="input" sx={{ gridRow: "1", gridColumn: "1" }}>
								<Typography
									component="label"
									htmlFor="fullName"
									sx={{
										fontWeight: 900,
										display: "inline-block",
										mb: 1,
										fontSize: 24,
									}}
								>
									Enter your full name
								</Typography>
								<Input
									placeholder="Name"
									fullWidth
									sx={{ py: 1, fontSize: 20 }}
								/>
							</Box>
							<Box className="input" sx={{ gridRow: "1", gridColumn: "2" }}>
								<Typography
									component="label"
									htmlFor="fullName"
									sx={{
										fontWeight: 900,
										display: "inline-block",
										mb: 1,
										fontSize: 24,
									}}
								>
									Enter your full name
								</Typography>
								<Input
									placeholder="Name"
									fullWidth
									sx={{ py: 1, fontSize: 20 }}
								/>
							</Box>
							<Box className="input" sx={{ gridRow: "2", gridColumn: "1" }}>
								<Typography
									component="label"
									htmlFor="fullName"
									sx={{
										fontWeight: 900,
										display: "inline-block",
										mb: 1,
										fontSize: 24,
									}}
								>
									Enter your full name
								</Typography>
								<Input
									placeholder="Name"
									fullWidth
									sx={{ py: 1, fontSize: 20 }}
								/>
							</Box>
							<Box className="input" sx={{ gridRow: "2", gridColumn: "2" }}>
								<Typography
									component="label"
									htmlFor="fullName"
									sx={{
										fontWeight: 900,
										display: "inline-block",
										mb: 1,
										fontSize: 24,
									}}
								>
									Enter your full name
								</Typography>
								<Input
									placeholder="Name"
									fullWidth
									sx={{ py: 1, fontSize: 20 }}
								/>
							</Box>
							<Box className="input" sx={{ gridRow: "3", gridColumn: "1/3" }}>
								<Typography
									component="label"
									htmlFor="fullName"
									sx={{
										fontWeight: 900,
										display: "inline-block",
										mb: 1,
										fontSize: 24,
									}}
								>
									Enter your full name
								</Typography>
								<Input
									placeholder="Name"
									fullWidth
									sx={{ py: 1, fontSize: 20 }}
								/>
							</Box>
							<Box
								className="input"
								sx={{
									gridRow: "4",
									gridColumn: "1/3",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Button sx={classes.submitBtn} disableElevation disableRipple />
							</Box>
						</Box>
					</Box>
				</Box>

				{/* footer */}
				<Box
					sx={{
						backgroundColor: colors.grey[900],
						position: "sticky",
						bottom: 0,
						zIndex: -1,
					}}
				>
					<Box
						sx={{
							px: 12.5,
							py: 15,
							maxWidth: 1600,
							mx: "auto",
							[theme.breakpoints.down("md")]: {
								px: 3.5,
								py: 7.5,
							},
						}}
					>
						<Box
							sx={{
								display: "grid",
								gridTemplateColumns: "repeat(3, 300px)",
								gridTemplateRows: "repeat(2, 1fr)",
								color: colors.grey[50],
								gap: 7.5,
								placeContent: "space-between",
								[theme.breakpoints.between("sm", "lg")]: {
									display: "flex",
									flexWrap: "wrap",
									gap: 5,
									"& .footer-header": {
										fontSize: "1.5rem",
									},
									"& p": {
										fontSize: "1.2rem",
									},
								},
								[theme.breakpoints.down("sm")]: {
									display: "flex",
									flexDirection: "column",
									gap: 5,
									"& .footer-header": {
										fontSize: "1.35rem",
									},
									"& p": {
										fontSize: "1.2rem",
									},
								},
							}}
						>
							<Box sx={{ gridRow: "1", gridColumn: "1" }}>
								<Typography
									sx={{ fontWeight: 900, fontSize: 27 }}
									className="footer-header"
								>
									Logo
								</Typography>
								<Typography
									paragraph
									sx={{
										fontWeight: "light",
										fontSize: 22,
										mt: 1.5,
										color: colors.grey[400],
										lineHeight: 1.8,
									}}
								>
									Lorem ipsum dolor sit aor leggo sit amit deur sit amet
									lorenzom
								</Typography>
							</Box>

							<Box sx={{ gridRow: "1", gridColumn: "2" }}>
								<Typography
									sx={{ fontWeight: 900, fontSize: 27 }}
									className="footer-header"
								>
									Contact
								</Typography>
								<Typography
									paragraph
									sx={{
										fontWeight: "light",
										fontSize: 22,
										mt: 1.5,
										color: colors.grey[400],
										lineHeight: 1.8,
									}}
								>
									Email ID here
									<br />
									Phone number
								</Typography>
							</Box>

							<Box sx={{ gridRow: "2", gridColumn: "1" }}>
								<Typography
									sx={{
										fontWeight: 900,
										fontSize: 27,
									}}
									className="footer-header"
								>
									Social Media
								</Typography>
								<Typography
									paragraph
									sx={{
										fontWeight: "light",
										fontSize: 22,
										mt: 1.5,
										color: colors.grey[400],
										lineHeight: 1.8,
									}}
								>
									Instagram
									<br />
									Facebook
									<br />
									Youtube
								</Typography>
							</Box>

							<Box sx={{ gridRow: "2", gridColumn: "2" }}>
								<Typography
									sx={{ fontWeight: 900, fontSize: 27 }}
									className="footer-header"
								>
									Address
								</Typography>
								<Typography
									paragraph
									sx={{
										fontWeight: "light",
										fontSize: 22,
										mt: 1.5,
										color: colors.grey[400],
										lineHeight: 1.8,
									}}
								>
									Address Line #1
									<br />
									Line #2 with zipcode
								</Typography>
							</Box>

							<Box sx={{ gridRow: "1/3", gridColumn: "3" }}>
								<Typography
									sx={{ fontWeight: 900, fontSize: 27 }}
									className="footer-header"
								>
									Location
								</Typography>
								<Typography
									paragraph
									sx={{
										backgroundColor: colors.yellow[800],
										height: "100%",
										mt: 3.5,
										fontSize: 20,
										fontWeight: "light",
										borderRadius: "10px",
										[theme.breakpoints.down("md")]: {
											height: 300,
										},
									}}
								>
									<iframe
										width="100%"
										height="100%"
										frameBorder="0"
										scrolling="no"
										marginHeight="0"
										marginWidth="0"
										src="https://www.openstreetmap.org/export/embed.html?bbox=79.73121643066408%2C12.774973346083751%2C80.63758850097658%2C13.391623526422052&amp;layer=mapnik"
										style={{ borderRadius: "10px" }}
										title="null"
									/>
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

const useStyles = (theme) => ({
	landingContainer: {
		height: "100vh",
		backgroundColor: "transparent",
		position: "relative",
		zIndex: 1,
		"&::after": {
			content: `""`,
			zIndex: -1,
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			backgroundColor: colors.grey[700],
			animation: "zeroToFull 1s linear",
			objectFit: "fill",
		},
		"&::before": {
			content: `""`,
			zIndex: -2,
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			backgroundColor: colors.grey[50],
		},
	},
	landingContent: {
		maxWidth: 1600,
		height: "100%",
		width: "100%",
		px: 5,
		mx: "auto",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			justifyContent: "space-between",
		},
		[theme.breakpoints.between("sm", "lg")]: {
			flexDirection: "column",
			justifyContent: "space-evenly",
		},
	},
	landingIntro: {
		maxWidth: 600,
		height: 350,
		overflow: "hidden",
		opacity: 0,
		transform: "scale(1.25)",
		"& h2": {
			fontWeight: 900,
			color: colors.grey[50],
		},

		"& p": {
			fontSize: 32,
			mt: 3,
			mb: 5,
			color: colors.grey[200],
			fontWeight: 200,
			lineHeight: 1.75,
		},
		[theme.breakpoints.down("sm")]: {
			"& h2": {
				fontSize: 42,
				mt: "7.5rem",
			},
			"& p": {
				fontSize: 20,
			},
		},
		[theme.breakpoints.between("sm", "lg")]: {
			"& h2": {
				fontSize: 48,
			},
			"& p": {
				fontSize: 28,
			},
			mb: -5,
		},
	},
	landingBtn: {
		textTransform: "capitalize",
		backgroundColor: colors.grey[50],
		"&:hover": {
			backgroundColor: colors.grey[50],
		},
		height: 55,
		width: 165,
		borderRadius: 2.5,
		[theme.breakpoints.down("md")]: {
			height: 45,
			width: 135,
		},
	},
	anchorGrid: {
		display: "grid",
		gridTemplateRows: "repeat(2, 1fr)",
		gridTemplateColumns: "repeat(2, 1fr)",
		alignSelf: "flex-end",
		[theme.breakpoints.down("md")]: {
			alignSelf: "center",
		},
	},
	anchorCard: {
		height: 350,
		width: 350,
		p: 4.5,
		position: "relative",
		zIndex: 1,

		[theme.breakpoints.down("sm")]: {
			height: 200,
			width: 200,
		},
		[theme.breakpoints.between("sm", "lg")]: {
			height: 300,
			width: 300,
		},

		"&:nth-of-type(1)": {
			gridColumn: 1,
			gridRow: 2,
			"&::after": {
				content: `""`,
				height: "100%",
				width: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				backgroundColor: colors.yellow[800],
				zIndex: -1,
				animation: "zeroToFull .75s linear",
			},
		},
		"&:nth-of-type(2)": {
			gridColumn: 2,
			gridRow: 1,
			"&::after": {
				content: `""`,
				height: "100%",
				width: "100%",
				position: "absolute",
				top: 0,
				left: 0,
				backgroundColor: colors.grey[800],
				zIndex: -1,
				animation: "zeroToFull 1s linear",
			},
		},

		"& p": {
			fontSize: 27,
			color: colors.grey[50],
			[theme.breakpoints.down("md")]: {
				fontSize: 20,
			},
		},
	},
	aboutCard: {
		width: 350,
		height: 400,
		position: "relative",
		"&:nth-of-type(2)": { mt: 5 },
		"&:nth-of-type(3)": { mt: -5 },
		[theme.breakpoints.down("md")]: {
			"&:nth-of-type(2), &:nth-of-type(3)": { mt: 0 },
			width: 300,
			height: 350,
		},
	},
	aboutBtn: {
		textTransform: "capitalize",
		backgroundColor: colors.yellow[800],
		"&:hover": {
			backgroundColor: colors.yellow[800],
		},
		height: 55,
		width: 165,
		borderRadius: 2.5,
		[theme.breakpoints.down("md")]: {
			height: 45,
			width: 135,
			mt: 3.5,
		},
	},
	serviceContainer: {
		backgroundColor: colors.grey[50],
	},
	serviceContent: {
		maxWidth: 1600,
		mx: "auto",
		px: 12.5,
		py: 15,
		"& h3 div": {
			display: "inline-block",
			fontWeight: 900,
			mb: 7.5,
			position: "relative",
			display: "inline-block",
		},
		[theme.breakpoints.down("md")]: {
			px: 3.5,
			py: 10,
		},
	},
	serviceGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
		gap: 3,
		[theme.breakpoints.down("md")]: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
		},
	},
	serviceCard: {
		height: 450,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.grey[400],
		transition: ".25s ease",
		transformStyle: "preserve-3d",
		"& p": {
			height: 175,
			maxWidth: 175,
			width: "100%",
			p: 2,
			backgroundColor: colors.grey[50],
			fontWeight: "bold",
			color: colors.grey[500],
			fontSize: 20,
			boxShadow: "0px 0px 30px -15px rgb(0,0,0)",
			transform: "translateZ(60px)",
		},
		[theme.breakpoints.down("md")]: {
			width: 350,
			height: 350,
		},
	},
	submitBtn: {
		textTransform: "capitalize",
		backgroundColor: colors.yellow[800],
		"&:hover": {
			backgroundColor: colors.yellow[800],
		},
		height: 60,
		width: 185,
		borderRadius: 2.5,
		[theme.breakpoints.down("md")]: {
			height: 45,
			width: 150,
		},
	},
});

export default App;
