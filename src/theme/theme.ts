import { Dimensions } from "react-native";

const palette = {
	white: "#F0F2F3",
	black: "#0B0B0B",
	blue: "#006FBB",
};

export const theme = {
	colors: {
		mainBackgroundColor: palette.white,
		textHeader: palette.blue,
		black: palette.black,
	},
	spacing: {
		s: 8,
		sm: 12,
		m: 16,
		l: 24,
		xl: 40,
	},
	breakpoints: {
		phone: 0,
		tablet: 768,
	},
	textVariants: {
		header: {
			// fontFamily: "ShopifySans-Bold",
			fontWeight: "bold",
			fontSize: 34,
			lineHeight: 42.5,
			color: "black",
		},
		subheader: {
			// fontFamily: "ShopifySans-SemiBold",
			fontWeight: "600",
			fontSize: 28,
			lineHeight: 36,
			color: "black",
		},
		body: {
			// fontFamily: "ShopifySans",
			fontSize: 12,
			lineHeight: 24,
			color: "black",
		},
	},
	cardVariants: {
		base: {
			width: Dimensions.get("window").width * 0.9,
			padding: "m",
			marginTop: "m",
			borderRadius: 12,
		},
	},
};

export type Theme = typeof theme;
