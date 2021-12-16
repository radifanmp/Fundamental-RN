import React from "react";
import { Text, Box } from "native-base";

export default function Hello() {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text
        fontSize={30}
        fontStyle="normal"
        fontWeight={400}
        fontFamily="heading"
      >
        Must Be Goo One
      </Text>
    </Box>
  );
}
