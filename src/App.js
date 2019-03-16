import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import { Container } from "semantic-ui-react";
import routes from "./pages/routes";
import NavBar from "./pages/NavBar";

class App extends Component {
    render() {
        return (
            <Container>
                <NavBar routes={routes} />
                {renderRoutes(routes)}
            </Container>
        );
    }
}

export default App;
