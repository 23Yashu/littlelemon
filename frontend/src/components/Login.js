import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useAlertContext } from '../context/alertContext';
import useLogin from '../hooks/useLogin';
import FullScreenSection from './FullScreenSection';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    Flex,
    Heading,
    Input,
    VStack,
    Image
} from '@chakra-ui/react';
import * as Yup from 'yup';
import eyeIcon from '../icons/eye-icon.svg';

function Login() {
        const {isLoading, response} = useLogin();
        const {onOpen} = useAlertContext();
        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                request: ''
            },
            onSubmit: async (values) => {
                try {
                    const response = await fetch("/api/users/register", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            phoneNumber: values.phoneNumber,
                            email: values.email,
                            password: values.password,
                            specialRequest: values.request
                        })
                    });

                    const data = await response.json();

                    if (response.ok) {
                        onOpen("success", `Welcome ${data.firstName}! You earned ${data.points} points.`);
                        formik.resetForm();
                    } else {
                        onOpen("error", data.message || "Registration failed");
                    }
                } catch (error) {
                    onOpen("error", "Server is down. Please try again later.");
                }
            },
            validationSchema: Yup.object({
                firstName: Yup.string().required('First name is required'),
                lastName: Yup.string().required('Last name is required'),
                phoneNumber: Yup.string().matches(/^((\+\d{1,3}([- ])?\(?\d\)?([- ])?\d{1,3})|(\(?\d{2,3}\)?))([- ])?(\d{3,4})([- ])?(\d{4})(( x| ext)\d{1,5}){0,1}$/, 'Phone number is not valid').required('Phone number is required'),
                email: Yup.string().email('Invalid email address'),
                password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
                request: Yup.string().max(150, 'Request must be 150 characters or less')
            }),

        });

        useEffect(() => {
            if (response) {
                onOpen(response.type, response.message);
                if (response.type === 'success') {
                    formik.resetForm();
                }
            }
        }, [response]);

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
                <Heading as='h1' fontFamily={'MarkaziText'} fontSize={64} fontWeight={800} color='#F4CE14'>Little Lemon</Heading>
                <Heading as='h2' fontFamily={'MarkaziText'} fontSize={32} fontWeight={400} color='#EDEFEE'>Chicago</Heading>
                <Heading as='h2' pt='4rem' fontFamily={'MarkaziText'} fontSize={50} fontWeight={400} color='#EDEFEE'>Sign in to collect points</Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                                <Input id="firstName" name="firstName" {...formik.getFieldProps('firstName')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='First Name' _placeholder={{color: '#333', fontWeight:600}} />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.lastName && Boolean(formik.errors.lastName)}>
                                <Input id="lastName" name="lastName" {...formik.getFieldProps('lastName')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Last Name' _placeholder={{color: '#333', fontWeight:600}} />
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}>
                                <Input id="phoneNumber" name="phoneNumber" {...formik.getFieldProps('phoneNumber')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Phone Number' _placeholder={{color: '#333', fontWeight:600}} />
                                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                                <Input id="email" name="email" {...formik.getFieldProps('email')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Email' _placeholder={{color: '#333', fontWeight:600}} />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.password && Boolean(formik.errors.password)}>
                                <Flex align="center" bg="#EDEFEE" borderRadius="md">
                                <Input id="password" name="password" {...formik.getFieldProps('password')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Password' _placeholder={{color: '#333', fontWeight:600}} />
                                <Image src={eyeIcon} alt='password icon' h="20px" w="20px" mr="2" />
                                </Flex>
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.request && Boolean(formik.errors.request)}>
                                <Input type='text' id="request" name="request" height={150} {...formik.getFieldProps('request')} bg='#EDEFEE' color='#333' fontFamily={'Karla'} fontSize={12} fontWeight={400} placeholder='Add a special request (Optional)' _placeholder={{color: '#333', fontWeight:600, pt: 0}} />
                                <FormErrorMessage>{formik.errors.request}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" bg="#F4CE14" mt={4} fontFamily={'Karla'} fontSize={14} fontWeight={600} w='100%' isLoading={isLoading}>
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
            </FullScreenSection>
        );
    }

export default Login;
