import React, { Fragment } from "react";
import Title from "accessories/Title";
import { InstallPWA } from "widgets";

export default {
    title: "Desing System/TemplatePWA/InstallPWA",
};

export const INSTALLPWA = args => {
    return (
        <Fragment>
            <Title variant="h2">Install PWA</Title>
            <InstallPWA {...args} />
        </Fragment>
    );
};
INSTALLPWA.args = {
    text: "Agréganos a tu pantalla de inicio para visitarnos más fácil y rápido",
    btncancel: "No por ahora",
    btnadd: "Agregar",
};
INSTALLPWA.argTypes = {
    texto: { control: "text" },
    btncancel: { control: "text" },
    btnadd: { control: "text" },
};
