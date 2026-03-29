import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Booking from '../components/Booking';
import { useNavigate } from 'react-router-dom';
import { useReservation } from '../context/ReservationContext';
import useSubmit from '../hooks/useSubmit';

jest.mock('@chakra-ui/react', () => {
    const React = require('react');

    const stripChakraProps = (props) => {
        const {
            isInvalid,
            isLoading,
            isDisabled,
            isReadOnly,
            variant,
            size,
            colorScheme,
            maxW,
            minHeight,
            maxWidth,
            alignItems,
            direction,
            spacing,
            fontSize,
            fontWeight,
            fontFamily,
            color,
            bg,
            backgroundColor,
            ...rest
        } = props;
        return rest;
    };

    const mock = (tag) => ({ children, ...props }) =>
        React.createElement('div', { 'data-testid': tag, ...stripChakraProps(props) }, children);

    return {
        Box: mock('Box'),
        VStack: mock('VStack'),
        HStack: mock('HStack'),
        FormControl: mock('FormControl'),
        FormLabel: ({ children, ...props }) => <label {...stripChakraProps(props)}>{children}</label>,
        FormErrorMessage: mock('FormErrorMessage'),
        Heading: mock('Heading'),
        Image: mock('Image'),

        Input: (props) => <input {...stripChakraProps(props)} />,
        Select: (props) => <select {...stripChakraProps(props)} />,

        Button: ({ children, ...props }) => (
            <button {...stripChakraProps(props)}>{children}</button>
        ),

        RadioGroup: ({ onChange, value, children }) => {
            return (
                <div role="radiogroup">
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, {
                            checked: child.props.value === value,
                            onChange: (e) => onChange(e.target.value),
                        })
                    )}
                </div>
            );
        },

        Radio: ({ value, checked, onChange, children }) => (
            <label>
                <input
                    type="radio"
                    name="seatingOptions"
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                {children || value}
            </label>
        ),


        NumberInput: ({ value, onChange, children }) => (
            <div>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        value,
                        onChange: (e) => onChange(e.target.value, parseFloat(e.target.value)),
                    })
                )}
            </div>
        ),

        NumberInputField: (props) => <input type="number" {...stripChakraProps(props)} />,
        NumberInputStepper: mock('NumberInputStepper'),
        NumberIncrementStepper: mock('NumberIncrementStepper'),
        NumberDecrementStepper: mock('NumberDecrementStepper'),
    };
});

jest.mock('../hooks/useSubmit', () => jest.fn());
jest.mock('../context/ReservationContext', () => ({
    useReservation: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Booking Component', () => {
    const mockSetReservationData = jest.fn();
    const mockNavigate = jest.fn();
    const mockDispatchAvailableTimes = jest.fn();

    beforeEach(() => {
        useNavigate.mockReturnValue(mockNavigate);
        useReservation.mockReturnValue({ setReservationData: mockSetReservationData });
        useSubmit.mockReturnValue({ isLoading: false });
    });

    const defaultAvailableTimes = ['17:00', '18:00', '19:00'];

    it('renders without crashing', () => {
        render(
            <Booking availableTimes={defaultAvailableTimes} dispatchAvailableTimes={mockDispatchAvailableTimes} />
        );

        expect(screen.getByText('Little Lemon')).toBeInTheDocument();
        expect(screen.getByText('Find a table for any occasion')).toBeInTheDocument();
    });

    it('shows validation errors when submitting empty form', async () => {
        render(
            <Booking availableTimes={defaultAvailableTimes} dispatchAvailableTimes={mockDispatchAvailableTimes} />
        );

        const submitButton = screen.getByRole('button', { name: /reserve table/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Date is required')).toBeInTheDocument();
            expect(screen.getByText('Time is required')).toBeInTheDocument();
            expect(screen.getByText('Please enter the number of diners')).toBeInTheDocument();
            expect(screen.getByText('Please select an occasion')).toBeInTheDocument();
            expect(screen.getByText('Please select a seating option')).toBeInTheDocument();
        });
    });

    it('submits form with valid data and navigates to payment', async () => {
        render(
            <Booking availableTimes={defaultAvailableTimes} dispatchAvailableTimes={mockDispatchAvailableTimes} />
        );

        const todayStr = new Date().toISOString().split('T')[0];

        fireEvent.change(screen.getByLabelText('Date'), {
            target: { value: todayStr },
        });
        fireEvent.change(screen.getByLabelText('Time'), {
            target: { value: '18:00' },
        });
        fireEvent.change(screen.getByLabelText('Number of Diners'), {
            target: { value: '2' },
        });
        fireEvent.change(screen.getByLabelText('Occasion (Optional)'), {
            target: { value: 'birthday' },
        });

        fireEvent.click(screen.getByLabelText('Standard'));

        const submitButton = screen.getByRole('button', { name: /reserve table/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockSetReservationData).toHaveBeenCalledWith({
                date: todayStr,
                time: '18:00',
                numberOfDiners: '2',
                occasion: 'birthday',
                seatingOptions: 'standard',
            });
            expect(mockNavigate).toHaveBeenCalledWith('/payment');
        });
    });
});
