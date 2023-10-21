import React from 'react';
import { Navigate } from "react-router-dom";

export default class Redirect extends React.Component {

    render() {
        return <Navigate to="/wel" />
    }

}

