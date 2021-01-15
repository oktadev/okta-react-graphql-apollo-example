import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { Navbar, Nav, Form, Button } from 'react-bootstrap'

const Header = () => {
    const { oktaAuth, authState } = useOktaAuth();

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    const button = authState.isAuthenticated ?
        <Button variant="secondary" onClick={() => { oktaAuth.signOut("/") }}>Logout</Button> :
        <Button variant="secondary" onClick={() => { oktaAuth.signInWithRedirect("/Blastoff") }}>Login</Button>

    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">BlastOff!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Blastoff">History</Nav.Link>
                </Nav>
                <Form inline>
                    {button}
                </Form>
            </Navbar.Collapse>
        </Navbar>

    );
};
export default Header;
