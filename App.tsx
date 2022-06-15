import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView } from "react-native";
import { Box } from "./src/components/box";
import Button from "./src/components/button";
import Card from "./src/components/card";
import { Text } from "./src/components/text";
import { theme } from "./src/theme/theme";

const list: string[] = ["hello", "whats up", "afternoon", "react native", "expo"];

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box flex={1} alignItems="center" mt="xl">
				<Text variant="body">Open up App.tsx to start working on your app!</Text>
				{/* <FlatList
					data={list}
					renderItem={({ item }) => {
						return (
							<Card variant="base" backgroundColor="mainBackgroundColor">
								<Text variant="body">{item}</Text>
							</Card>
						);
					}}
				/> */}
				<Button backgroundColor="mainBackgroundColor" label="button" />
			</Box>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
