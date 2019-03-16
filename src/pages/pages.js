import React from "react";
import { renderRoutes } from "react-router-config";
import HomePage from "./HomePage/HomePage";

/**
 * These are root pages
 */
const Home = () => {
    return <HomePage />;
};

const Services = () => {
    return (
        <div>
            <h3>Services</h3>
        </div>
    );
};

const Products = ({ route }) => {
    return (
        <div>
            <h3>Products</h3>
            {renderRoutes(route.routes)}
        </div>
    );
};

const Contact = () => {
    return <h3>Contact</h3>;
};

/**
 * These are pages nested in Services
 */
const AppDev = () => {
    return <h3>AppDev</h3>;
};

const Projects = () => {
    return <h3>Projects</h3>;
};

export { Home, Services, Products, Contact, AppDev, Projects };
