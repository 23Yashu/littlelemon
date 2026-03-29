import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, backgroundColor, ...rest }) => {
    return (
        <>
            <VStack backgroundColor={backgroundColor} color={isDarkBackground ? "white" : "black"}>
                <VStack maxWidth="1280px" minHeight="100vh" {...rest}>
                    {children}
                </VStack>
            </VStack>
        </>
    );
};

export default FullScreenSection;
