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
    TextArea,
    VStack
} from '@chakra-ui/react';
import * as Yup from 'yup';

function Login() {
    const loginSection = () => {
        // const {isLoading, response, submit} = useSubmit();
        // const {onOpen} = useAlertContext();
        const formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                password: '',
                request: ''
            },
            onSubmit: (values) => { SubmitEvent(null, values) },
            validationSchema: Yup.object({
                firstName: Yup.string().required('First name is required'),
                lastName: Yup.string().required('Last name is required'),
                phoneNumber: Yup.string().phoneNumber("Invalid phone number").required('Phone number is required'),
                email: Yup.string().email('Invalid email address'),
                password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
                request: Yup.string().max(150, 'Request must be 150 characters or less')
            }),

        });
    };

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
                <Heading as='h1'>Little Lemon</Heading>
                <Heading as='h2'>Chicago</Heading>
                <Heading as='h2'>Sign in to collect points</Heading>
                <Box p={6} rounded="md" w="100%">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4}>
                            <FormControl isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                                <FormLabel htmlFor="firstName">First Name</FormLabel>
                                <Input id="firstName" name="firstName" {...formik.getFieldProps('firstName')} />
                                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.lastName && Boolean(formik.errors.lastName)}>
                                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                <Input id="lastName" name="lastName" {...formik.getFieldProps('lastName')} />
                                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}>
                                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                                <Input id="phoneNumber" name="phoneNumber" {...formik.getFieldProps('phoneNumber')} />
                                <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.email && Boolean(formik.errors.email)}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" name="email" {...formik.getFieldProps('email')} />
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.password && Boolean(formik.errors.password)}>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input id="password" name="password" {...formik.getFieldProps('password')} />
                                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={formik.touched.request && Boolean(formik.errors.request)}>
                                <FormLabel htmlFor="request">Add a special request (Optional)</FormLabel>
                                <TextArea id="request" name="request" height={150} {...formik.getFieldProps('request')} />
                                <FormErrorMessage>{formik.errors.request}</FormErrorMessage>
                            </FormControl>
                            <Button type="submit" >
                                Submit
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        );
    };

    export default Login;
