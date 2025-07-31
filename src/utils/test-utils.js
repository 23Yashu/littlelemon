import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ReservationProvider } from "../context/ReservationContext";
import { ChakraProvider } from "@chakra-ui/react";

export function renderWithProviders(ui, options) {
  return render(
    <MemoryRouter>
      <ReservationProvider>
        <ChakraProvider>
          {ui}
        </ChakraProvider>
      </ReservationProvider>
    </MemoryRouter>,
    options
  );
}

