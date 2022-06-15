import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { Box } from "./src/components/box";
import { Text } from "./src/components/text";
import { theme } from "./src/theme/theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box flex={1} justifyContent="center" alignItems="center">
				<Text variant="body">Open up App.tsx to start working on your app!</Text>
				<StatusBar style="auto" />
			</Box>
		</ThemeProvider>
	);
}
