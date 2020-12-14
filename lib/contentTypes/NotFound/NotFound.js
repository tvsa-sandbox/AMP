import React from "react";
import {
    NotFoundItemStyles,
    NotFoundBoxStyles,
    NotFoundIconStyles,
    NotFoundTextStyles,
    NotFoundButtonStyles,
    NotFoundBoxTextStyles,
} from "./styles";

const Error = () => (
    <NotFoundItemStyles>
        <NotFoundBoxStyles variant="Transparent">
            <NotFoundIconStyles icon="NotFound" color="#fff" />
            <NotFoundBoxTextStyles variant="Transparent">
                <NotFoundTextStyles>
                    Ups!
                <br />Algo salió mal,
                <br />
                intenta de nuevo
            </NotFoundTextStyles>
            </NotFoundBoxTextStyles>
            <NotFoundButtonStyles href="/" variant="Active">
                Ir al inicio
            </NotFoundButtonStyles>
        </NotFoundBoxStyles >
    </NotFoundItemStyles >
);

export default Error;
