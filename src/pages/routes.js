import { Home, Services, Products, Contact, AppDev, Projects } from "./pages";
// const rootPath = process.env.PUBLIC_URL;
const rootPath = "";

const routes = [
    {
        name: "home",
        path: `${rootPath}/`,
        component: Home,
        exact: true
    },
    {
        name: "service",
        path: `${rootPath}/service`,
        component: Services
    },
    {
        name: "products",
        path: `${rootPath}/products`,
        component: Products,
        routes: [
            {
                name: "apps",
                path: `${rootPath}/products/apps`,
                component: AppDev
            },
            {
                name: "projects",
                path: `${rootPath}/products/projects`,
                component: Projects
            }
        ]
    },
    {
        name: "contact",
        path: `${rootPath}/contact`,
        component: Contact
    }
];

export default routes;
