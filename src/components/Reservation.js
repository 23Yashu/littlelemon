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
import restaurant from '../img/restaurant.jpg';
import restaurantChef from '../img/restaurantchefB.jpg';

export default function Reservation() {
    const ReservationSection = () => {
        // const {isLoading, response, submit} = useSubmit();
        // const {onOpen} = useAlertContext();
        const formik = useFormik({
            initialValues: {
                date: '',
                time: '',
                numberOfDiners: '',
                occasion: '',
                seatingOptions: ''
            },
            onSubmit: (values) => { SubmitEvent(null, values) },
            validationSchema: Yup.object({
                date: Yup.string().required('Date is required').matches(
                    /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/,
                    "Date must be in MM/DD/YYYY format"
                ),
                time: Yup.string().required('Time is required').matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Time must be in HH:MM format'),
                numberOfDiners: Yup.string().required('Please enter the number of diners').matches(/^[1-9][0-9]*$/, 'Number of diners must be a positive integer'),
                occasion: Yup.string().required('Please select an occasion'),
                seatingOptions: Yup.string().required('Please select a seating option')
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
            <Heading as="h2">Find a table for any occasion</Heading>
            <Image src={restaurant} alt="Restaurant Image" />
            <Image src={restaurantChef} alt="Restaurant Chef Image" />
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl isInvalid={formik.touched.date && Boolean(formik.errors.date)}>
                            <FormLabel htmlFor="date">Date</FormLabel>
                            <Input id="date" name="date" type="date" {...formik.getFieldProps('date')} />
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.time && Boolean(formik.errors.time)}>
                            <FormLabel htmlFor="time">Time</FormLabel>
                            <Input id="time" name="time" type="time" {...formik.getFieldProps('time')} />
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.numberOfDiners && Boolean(formik.errors.numberOfDiners)}>
                            <FormLabel htmlFor="numberOfDiners">Number of Diners</FormLabel>
                            <Input id="numberOfDiners" name="numberOfDiners" type="number" {...formik.getFieldProps('numberOfDiners')} />
                            <FormErrorMessage>{formik.errors.numberOfDiners}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.occasion && Boolean(formik.errors.occasion)}>
                            <FormLabel htmlFor="occasion">Occasion (Optional)</FormLabel>
                            <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')}>
                                <option value="">Select an occasion</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="other">Other</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.touched.seatingOptions && Boolean(formik.errors.seatingOptions)}>
                            <FormLabel htmlFor="seatingOptions">Seating Options</FormLabel>
                            <Box display='flex' alignItems='center'>
                                <Input type='radio' name='seatingOptions' value='standard' id='standard' {...formik.getFieldProps('seatingOptions')} />
                                Standard
                                <Input type='radio' name='seatingOptions' value='outside' id='outside' {...formik.getFieldProps('seatingOptions')} />
                                Outside
                            </Box>
                            <FormErrorMessage>{formik.errors.seatingOptions}</FormErrorMessage>
                        </FormControl>
                            <Button type="submit" colorScheme="teal" mt={4}>
                                Reserve Table
                            </Button>
                    </VStack>
                </form>
            </Box>
        </VStack>
    )
}
