// src/components/Auth.jsx
import React, { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggle = () => {
        setIsSignIn((prev) => !prev);
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <div className="mb-4">
                        <Button variant="link" onClick={toggle}>
                            {isSignIn ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
                        </Button>
                    </div>
                    {isSignIn ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;
