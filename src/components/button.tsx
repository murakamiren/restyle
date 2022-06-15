import { ComponentProps, VFC } from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "./box";
import { Text } from "./text";

type RestyleProps = ComponentProps<typeof Box>;

type ButtonProps = RestyleProps & {
	onPress?: () => void;
	label: string;
};

const Button: VFC<ButtonProps> = ({ onPress, label, ...rest }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Box {...rest} justifyContent="center" alignItems="center" height={40} width={120} borderRadius={6}>
				<Text variant="body">{label}</Text>
			</Box>
		</TouchableOpacity>
	);
};

export default Button;
