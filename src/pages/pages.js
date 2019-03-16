import React from "react";
import { renderRoutes } from "react-router-config";

/**
 * These are root pages
 */
const Home = ({ location }) => {
    return <h3>Home</h3>;
};

const Services = ({ route, location }) => {
    return (
        <div>
            <h3>Services</h3>
            {renderRoutes(route.routes)}
        </div>
    );
};

const Products = ({ location }) => {
    return (
        <div>
            <h3>Products</h3>
        </div>
    );
};

const Contact = ({ location }) => {
    return <h3>Contact</h3>;
};

/**
 * These are pages nested in Services
 */
const DigitalHumanity = () => {
    return <h3>DigitalHumanity</h3>;
};

const WebDev = () => {
    return <h3>WebDev</h3>;
};

const AppDev = () => {
    return <h3>AppDev</h3>;
};

export { Home, Services, Products, Contact, DigitalHumanity, WebDev, AppDev };
