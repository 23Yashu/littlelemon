import { useNavigate } from 'react-router-dom';
import useSubmit from '../hooks/useSubmit';
import { useReservation } from '../context/ReservationContext';
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
    HStack,
    Image,
    Radio,
    RadioGroup,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import restaurant from '../img/restaurant.jpg';
import restaurantChef from '../img/restaurantchefB.jpg';
import FullScreenSection from './FullScreenSection';

export default function Booking({ availableTimes, dispatchAvailableTimes }) {
    const { isLoading } = useSubmit();
    const navigate = useNavigate();
    const { setReservationData } = useReservation();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    maxDate.setHours(23, 59, 59, 999);
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            numberOfDiners: '',
            occasion: '',
            seatingOptions: ''
        },
        onSubmit: (values) => { 
            setReservationData(values)
            navigate('/payment');
         },
        validationSchema: Yup.object({
            date: Yup.string().required('Date is required')
                .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
                .test('within-range', 'Date must be within today and one month from now', function (value) {
                    if (!value) return false;

                    const selected = new Date(value + 'T00:00:00');

                    return selected >= today && selected <= maxDate;
                }),
            time: Yup.string().required('Time is required'),
            numberOfDiners: Yup.string().required('Please enter the number of diners').matches(/^[1-9][0-9]*$/, 'Number of diners must be a positive integer'),
            occasion: Yup.string().required('Please select an occasion'),
            seatingOptions: Yup.string().required('Please select a seating option')
        }),

    });

    return (
        <FullScreenSection
            isDarkBackground
            backgroundColor="#495E57"
            py={16}
            spacing={8}
        >
            <VStack w="100%"
                maxW="1024px"
                px={{ base: 4, md: 8 }}
                spacing={8}
                alignItems="flex-start">
                <Heading as="h1" fontFamily={'MarkaziText'} fontSize={64} fontWeight={800} color='#F4CE14'>Little Lemon</Heading>
                <Heading as="h2" fontFamily={'MarkaziText'} fontSize={32} fontWeight={400} color='#EDEFEE'>Chicago</Heading>
                <Heading as="h2" pt='4rem'>Find a table for any occasion</Heading>
                <HStack spacing={4}>
                    <Image src={restaurant} alt="Restaurant Image" w='40vw' h='40vh' />
                    <Image src={restaurantChef} alt="Restaurant Chef Image" w='40vw' h='40vh' />
                </HStack>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.date && Boolean(formik.errors.date)}>
                                <FormLabel htmlFor="date" fontFamily={'Karla'} fontSize={16} fontWeight={400}>Date</FormLabel>
                                <Input id="date" name="date" type="date" min={new Date().toISOString()}
                                    max={new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString()} {...formik.getFieldProps('date')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400}
                                    onChange={(e) => {
                                        const newDate = e.target.value;
                                        formik.setFieldValue('date', newDate);
                                        dispatchAvailableTimes({ type: 'UPDATE_TIMES', date: newDate });
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                <FormErrorMessage fontFamily={'Karla'} fontSize={12} fontWeight={400}>{formik.errors.date}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.time && Boolean(formik.errors.time)}>
                                <FormLabel htmlFor="time" fontFamily={'Karla'} fontSize={16} fontWeight={400}>Time</FormLabel>
                                <Select id="time" name="time" {...formik.getFieldProps('time')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400}>
                                    {availableTimes.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </Select>
                                <FormErrorMessage fontFamily={'Karla'} fontSize={12} fontWeight={400}>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.numberOfDiners && Boolean(formik.errors.numberOfDiners)}>
                                <FormLabel htmlFor="numberOfDiners" fontFamily={'Karla'} fontSize={16} fontWeight={400}>Number of Diners</FormLabel>
                                <NumberInput
                                    width="100%"
                                    min={1}
                                    max={10}
                                    value={formik.values.numberOfDiners}
                                    onChange={(value) => formik.setFieldValue('numberOfDiners', value)}
                                >
                                    <NumberInputField
                                        id="numberOfDiners"
                                        name="numberOfDiners"
                                        bg="#EDEFEE"
                                        color="#333"
                                        fontFamily="Karla"
                                        fontSize={12}
                                        fontWeight={400}
                                        onBlur={formik.handleBlur}
                                    />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper color="#495E57" />
                                        <NumberDecrementStepper color="#495E57" />
                                    </NumberInputStepper>
                                </NumberInput>
                                {/* <Input id="numberOfDiners" name="numberOfDiners" type="number" min={1}
                                    max={10} {...formik.getFieldProps('numberOfDiners')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} /> */}
                                <FormErrorMessage fontFamily={'Karla'} fontSize={12} fontWeight={400}>{formik.errors.numberOfDiners}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.occasion && Boolean(formik.errors.occasion)}>
                                <FormLabel htmlFor="occasion" fontFamily={'Karla'} fontSize={16} fontWeight={400}>Occasion (Optional)</FormLabel>
                                <Select id="occasion" name="occasion" {...formik.getFieldProps('occasion')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400}>
                                    <option value="" bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} >Select an occasion</option>
                                    <option value="birthday" bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400}>Birthday</option>
                                    <option value="anniversary" bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400}>Anniversary</option>
                                    <option value="other" bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400}>Other</option>
                                </Select>
                                <FormErrorMessage fontFamily={'Karla'} fontSize={12} fontWeight={400}>{formik.errors.occasion}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.seatingOptions && Boolean(formik.errors.seatingOptions)}>
                                <FormLabel htmlFor="seatingOptions" fontFamily={'Karla'} fontSize={18} fontWeight={400}>Seating Options</FormLabel>
                                <RadioGroup
                                    id="seatingOptions"
                                    name="seatingOptions"
                                    value={formik.values.seatingOptions}
                                    onChange={(value) => formik.setFieldValue("seatingOptions", value)}
                                    color='#EDEFEE' fontFamily={'Karla'}
                                >
                                    <VStack align="start">
                                        <Radio value="standard" fontFamily="Karla" fontSize="14px">
                                            <Box fontFamily="Karla" fontSize="14px" color="white">
                                                Standard
                                            </Box>
                                        </Radio>
                                        <Radio value="outside"><Box fontFamily="Karla" fontSize="14px" color="white">
                                            Outside
                                        </Box>
                                        </Radio>
                                    </VStack>
                                </RadioGroup>
                                <FormErrorMessage fontFamily={'Karla'} fontSize={12} fontWeight={400}>{formik.errors.seatingOptions}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" bg="#F4CE14" mt={4} fontFamily={'Karla'} fontSize={14} fontWeight={500} w='100%' isLoading={isLoading}>
                                Reserve Table
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}
