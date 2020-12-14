import React, { Fragment } from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Title from "accessories/Title";
import { InstallPWA } from "widgets";

export default {
    decorators: [withKnobs],
    title: "Desing System/TemplatePWA/InstallPWA",
};
const texto = text("Texto", "Agréganos a tu pantalla de inicio para visitarnos más fácil y rápido");
const btncancel = text("Botoncencelar", "No por ahora");
const btnadd = text("Botonagregar", "Agregar");
export const INSTALLPWA = () => {
    return (
        <Fragment>
            <Title variant="h2">Install PWA</Title>
            <InstallPWA btnadd={btnadd} btncancel={btncancel} text={texto} />
        </Fragment>
    );
};
