import { createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { ComponentProps } from "react";
import { Theme } from "../theme/theme";
import { Box } from "./box";

type cardProps = ComponentProps<typeof Box> & VariantProps<Theme, "cardVariants">;

const Card = createRestyleComponent<cardProps, Theme>([createVariant({ themeKey: "cardVariants" })], Box);

export default Card;
