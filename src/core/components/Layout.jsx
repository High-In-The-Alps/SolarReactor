import React from 'react';
import { Container } from "reactstrap";
import "./coreStyles.css"

const Layout = ({ children }) => (
    <Container>
        <div className="layoutWrapper">
            {children}
        </div>
    </Container>
)

export default Layout
