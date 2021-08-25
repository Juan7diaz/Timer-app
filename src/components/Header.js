import React from 'react'
import { Navbar, Container} from 'react-bootstrap'

const Header = ({ title }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>{ title }</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
