// src/components/Container.jsx
import React, { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';
import { Container as BootstrapContainer, Row, Col, Button, Card } from 'react-bootstrap';

const Container = () => {
    const [isSignInActive, setIsSignInActive] = useState(true);

    const toggle = () => {
        setIsSignInActive(!isSignInActive);
    };

    return (
        <BootstrapContainer fluid className="d-flex align-items-center justify-content-center vh-100">
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            {isSignInActive ? <SignIn toggle={toggle} /> : <SignUp toggle={toggle} />}
                            <div className="text-center mt-3">
                                <Button variant="link" onClick={toggle}>
                                    {isSignInActive ? 'Don\'t have an account? Sign Up!' : 'Already have an account? Sign In!'}
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </BootstrapContainer>
    );
};

export default Container;
