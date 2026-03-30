import { useFormik } from 'formik';
import useSubmit from '../hooks/useSubmit';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useReservation } from '../context/ReservationContext';
import FullScreenSection from './FullScreenSection';
import { useAlertContext } from '../context/alertContext';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack,
    Image,
    Flex,
    Text,
    Radio,
    RadioGroup,
    HStack
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { FaChevronDown } from 'react-icons/fa';
import creditcard from '../icons/creditcard.svg';
import API_BASE_URL from '../api/apiConfig';

function BookingSummary({ date, time, numberOfDiners }) {
    const navigate = useNavigate();
    const handleChevronClick = () => {
        navigate('/booking');
    }
    return (
        <Flex
            border='1px solid #ccc'
            borderRadius='md'
            p={3}
            bg='#EDEFEE'
            fontWeight='bold'
            fontSize='md'
            alignItems='center'
            w='100%'
            boxShadow='sm'
            justifyContent='space-between'
        >
            <Text bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={14} fontWeight={600}> {date} - {time} - {numberOfDiners} diners </Text>
            <FaChevronDown ml={2} color='#333' onClick={handleChevronClick} />
        </Flex>
    )
}

function Payment() {
    const { isLoading, response, submit } = useSubmit();
    const location = useLocation();
    const bookingIdFromState = location.state?.bookingId;
    const { reservationData } = useReservation();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            cardHolderName: '',
            expiryDate: '',
            cvv: '',
            bookingConfirmation: ''
        },
        onSubmit: async (values) => {
            if (!reservationData) return;
            const finalBookingId = bookingIdFromState || reservationData?.id;
            if (!finalBookingId) {
                alert("No booking ID found. Please go back and reserve your table again.");
                return;
            }
            console.log("Sending to backend ID:", finalBookingId);
            const response = await fetch(`${API_BASE_URL}/api/payments/confirm`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    bookingId: finalBookingId,
                    ...values
                })
            });
            if (response.ok) {
            submit(null, response);
            }
        },
        validationSchema: Yup.object({
            cardNumber: Yup.string().required('Card number is required').matches(/^\d{16}$/, 'Card number must be 16 digits'),
            cardHolderName: Yup.string().required('Card holder name is required'),
            expiryDate: Yup.string().required('Expiry date is required').matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Expiry date must be in MM/YY format'),
            cvv: Yup.string().required('CVV is required').matches(/^\d{3}$/, 'CVV must be 3 digits'),
            bookingConfirmation: Yup.string().required('Please choose how you would like to receive the booking confirmation details')
        }),
    });

    useEffect(() => {
        if (response && response.type === 'error') {
            onOpen(response.type, response.message);
        }
    }, [response, onOpen]);
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
                <Heading as="h2" pt='4rem' fontFamily={'MarkaziText'} fontSize={50} fontWeight={400} color='#EDEFEE'>Booking Details</Heading>
                <Box pt={6} rounded="md" w="100%">
                    {reservationData ?
                        <BookingSummary date={reservationData.date} time={reservationData.time} numberOfDiners={reservationData.numberOfDiners} />
                        :
                        <Box fontFamily={'MarkaziText'} fontSize={24} fontWeight={400} color='#EDEFEE'>No Booking data available</Box>
                    }
                    <Heading as="h2" pt='4rem' fontFamily={'MarkaziText'} fontSize={50} fontWeight={400} color='#EDEFEE'>Credit Card Details</Heading>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}>
                                <Input id="cardNumber" type="text" {...formik.getFieldProps('cardNumber')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Card Number' _placeholder={{ color: '#495E57', fontWeight: 600 }} />
                                <FormErrorMessage>{formik.errors.cardNumber}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.cardHolderName && Boolean(formik.errors.cardHolderName)}>
                                <Input id="cardHolderName" type="text" {...formik.getFieldProps('cardHolderName')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Card Holder Name' _placeholder={{ color: '#495E57', fontWeight: 600 }} />
                                <FormErrorMessage>{formik.errors.cardHolderName}</FormErrorMessage>
                            </FormControl>
                            <HStack spacing={4} align="end">
                                <FormControl isInvalid={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}>
                                    <FormLabel htmlFor="expiryDate" fontFamily={'Karla'} fontSize={16} fontWeight={400}>Exp Date</FormLabel>
                                    <Input
                                        id="expiryDate"
                                        type="text"
                                        placeholder="MM/ YYYY"
                                        _placeholder={{ color: '#333', fontWeight: 600 }}
                                        {...formik.getFieldProps('expiryDate')}
                                        bg='#EDEFEE'
                                        color='#333'
                                        fontFamily={'Karla'}
                                        fontSize={12}
                                        fontWeight={400}
                                    />
                                    <FormErrorMessage>{formik.errors.expiryDate}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={formik.touched.cvv && Boolean(formik.errors.cvv)}>
                                    <FormLabel htmlFor="cvv" fontFamily={'Karla'} fontSize={16} fontWeight={400}>CVV</FormLabel>
                                    <Flex align="center" bg="#EDEFEE" borderRadius="md">
                                        <Input
                                            id="cvv"
                                            type="text"
                                            {...formik.getFieldProps('cvv')}
                                            bg="transparent"
                                            border="none"
                                            color="#333"
                                            fontFamily={'Karla'}
                                            fontSize={12}
                                            fontWeight={400}
                                            _focus={{ border: 'none', outline: 'none' }}
                                            pr="0"
                                        />
                                        <Image src={creditcard} alt='credit card icon' h="30px" w="30px" mr="2" />
                                    </Flex>
                                    <FormErrorMessage>{formik.errors.cvv}</FormErrorMessage>
                                </FormControl>
                            </HStack>

                            <FormControl isInvalid={formik.touched.bookingConfirmation && Boolean(formik.errors.bookingConfirmation)}>
                                <RadioGroup
                                    id="bookingConfirmation"
                                    name="bookingConfirmation"
                                    value={formik.values.bookingConfirmation}
                                    onChange={(value) => formik.setFieldValue("bookingConfirmation", value)}
                                    color='#EDEFEE' fontFamily={'Karla'}
                                >
                                    <VStack align="start">
                                        <Radio value="TEXT" fontFamily="Karla" fontSize="14px">
                                            <Box fontFamily="Karla" fontSize="14px" color="white">
                                                Send me booking confirmation via text
                                            </Box>
                                        </Radio>
                                        <Radio value="EMAIL">
                                            <Box fontFamily="Karla" fontSize="14px" color="white">
                                                Send me booking confirmation via email
                                            </Box>

                                        </Radio>
                                    </VStack>
                                </RadioGroup>
                                <FormErrorMessage fontFamily={'Karla'} fontSize={12} fontWeight={400}>{formik.errors.seatingOptions}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" bg="#F4CE14" mt={4} fontFamily={'Karla'} fontSize={14} fontWeight={600} w='100%' isLoading={isLoading}>
                                Book
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    )
}

export default Payment
