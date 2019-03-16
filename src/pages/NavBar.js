import React, { Component } from "react";
import { Menu, Segment, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const dropdownItem = r => {
    return (
        <Dropdown.Item key={r.name} as={Link} to={r.path}>
            {r.name}
        </Dropdown.Item>
    );
};

const dropdownList = (route, handleItemClick) => {
    const dropdownItems = route.routes.map(r => {
        return dropdownItem(r);
    });

    return (
        <Dropdown
            text={route.name}
            pointing
            key={route.name}
            name={route.name}
            className="link item"
            onClick={handleItemClick}
        >
            <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
        </Dropdown>
    );
};

const menuList = (routes, activeItem, handleItemClick) => {
    return routes.map(r => {
        if (r.dropDown) {
            return dropdownList(r, handleItemClick);
        }
        return (
            <Menu.Item
                key={r.name}
                as={Link}
                to={r.path}
                name={r.name}
                active={activeItem === r.name}
                onClick={handleItemClick}
            />
        );
    });
};

class NavBar extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        let menuItems = null;

        if (this.props.routes) {
            menuItems = menuList(
                this.props.routes,
                activeItem,
                this.handleItemClick
            );
        }

        return (
            <Segment inverted>
                <Menu inverted pointing secondary compact>
                    <Menu.Item
                        as={Link}
                        to={"/"}
                        name={"home"}
                        onClick={this.handleItemClick}
                    >
                        <Image src={logo} size="tiny" />
                    </Menu.Item>
                    {menuItems}
                </Menu>
            </Segment>
        );
    }
}

export default NavBar;
