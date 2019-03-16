import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const menuList = (routes, activeItem, handleItemClick) => {
    return routes.map(r => {
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
                <Menu inverted pointing secondary>
                    {menuItems}
                </Menu>
            </Segment>
        );
    }
}

export default NavBar;
