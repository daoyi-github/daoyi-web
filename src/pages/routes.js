import {
    Home,
    Services,
    Products,
    Contact,
    DigitalHumanity,
    WebDev,
    AppDev
} from "./pages";
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
        component: Services,
        routes: [
            {
                name: "dh",
                path: `${rootPath}/service/dh`,
                component: DigitalHumanity
            },
            {
                name: "webdev",
                path: `${rootPath}/service/webdev`,
                component: WebDev
            },
            {
                name: "appdev",
                path: `${rootPath}/service/appdev`,
                component: AppDev
            }
        ]
    },
    {
        name: "products",
        path: `${rootPath}/products`,
        component: Products
    },
    {
        name: "contact",
        path: `${rootPath}/contact`,
        component: Contact
    }
];

export default routes;
