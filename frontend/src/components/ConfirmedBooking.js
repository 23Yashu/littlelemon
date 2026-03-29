import { Box, Heading, Text } from '@chakra-ui/react';

function ConfirmedBooking() {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h2" size="xl" color="green.500">Booking Confirmed!</Heading>
      <Text mt={4} fontSize="lg">Thank you for your reservation. We look forward to seeing you!</Text>
    </Box>
  );
}

export default ConfirmedBooking;