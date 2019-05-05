import React, { Component } from "react";
import ReactSWFCompat from "react-swf/compat";

class HomePage extends Component {
    render() {
        return (
            <ReactSWFCompat
                container={<div style={{ background: "#cccccc" }} />}
                src="swf/example.swf"
                id="guid_001"
                width="80%"
                height="80%"
                wmode="transparent"
                flashVars={{ foo: "A", bar: 1 }}
            />
        );
    }
}

export default HomePage;
