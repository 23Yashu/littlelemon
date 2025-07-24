import { useFormik } from 'formik';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    VStack,
    Image
} from '@chakra-ui/react';
import * as Yup from 'yup';

function Booking() {
    const BookingSection = () => {
        // const {isLoading, response, submit} = useSubmit();
        // const {onOpen} = useAlertContext();
        const formik = useFormik({
            initialValues: {
                cardNumber: '',
                cardHolderName: '',
                expiryDate: '',
                cvv: '',
                bookingConfirmationviaText: false,
                bookingConfirmationviaEmail: false
            },
            onSubmit: (values) => { SubmitEvent(null, values) },
            validationSchema: Yup.object({
                cardNumber: Yup.string().required('Card number is required').matches(/^\d{16}$/, 'Card number must be 16 digits'),
                cardHolderName: Yup.string().required('Card holder name is required'),
                expiryDate: Yup.string().required('Expiry date is required').matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Expiry date must be in MM/YY format'),
                cvv: Yup.string().required('CVV is required').matches(/^\d{3}$/, 'CVV must be 3 digits'),
                bookingConfirmationviaText: Yup.boolean(),
                bookingConfirmationviaEmail: Yup.boolean()
            }),
            });
        }
    // useEffect(() => {
    //     if (response) {
    //         onpointerenter(response.type, response.message);
    //         if (response.type === 'success') {
    //             formik.resetForm();
    //         }
    //     }
    // }, [response]);
  return (
    <VStack>
      <Heading as="h1">Little Lemon</Heading>
      <Heading as="h2">Chicago</Heading>
      <Heading as="h2">Booking Details</Heading>
      <Box>
      //To Do for displaying date, time and number of diners from Reservation component
      <Heading as="h2">Credit Card Details</Heading>
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}>
                <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                <Input id="cardNumber" type="text" {...formik.getFieldProps('cardNumber')} />
                <FormErrorMessage>{formik.errors.cardNumber}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.cardHolderName && Boolean(formik.errors.cardHolderName)}>
                <FormLabel htmlFor="cardHolderName">Card Holder Name</FormLabel>
                <Input id="cardHolderName" type="text" {...formik.getFieldProps('cardHolderName')} />
                <FormErrorMessage>{formik.errors.cardHolderName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}>
                <FormLabel htmlFor="expiryDate">Expiry Date (MM/YY)</FormLabel>
                <Input id="expiryDate" type="text" {...formik.getFieldProps('expiryDate')} />
                <FormErrorMessage>{formik.errors.expiryDate}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.cvv && Boolean(formik.errors.cvv)}>
                <FormLabel htmlFor="cvv">CVV</FormLabel>
                <Input id="cvv" type="text" {...formik.getFieldProps('cvv')} />
                <FormErrorMessage>{formik.errors.cvv}</FormErrorMessage>
            </FormControl>
            <FormControl>
                <Input type="checkbox" id="bookingConfirmationviaText" {...formik.getFieldProps('bookingConfirmationviaText')} />
                <FormLabel htmlFor="bookingConfirmationviaText">Send me Booking Confirmation via Text</FormLabel>
            </FormControl>
            <FormControl>
                <Input type="checkbox" id="bookingConfirmationviaEmail" {...formik.getFieldProps('bookingConfirmationviaEmail')} />
                <FormLabel htmlFor="bookingConfirmationviaEmail">Send me Booking Confirmation via Email</FormLabel>
            </FormControl>
            <Button type="submit" colorScheme="teal" mt={4}>
                Book
            </Button>
        </VStack>
      </form>
      </Box>
    </VStack>
  )
}

export default Booking
