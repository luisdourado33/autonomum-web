import React, { useState, useEffect } from 'react';

/**
 * Formik
 */
import { Formik } from 'formik';

/**
 * Styles
 */
import { 
    Container
} from './styles';

function SignIn() {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);

    return (
        <Container>
            <h3>hello, world</h3>
        </Container>
    );
}

export default SignIn;