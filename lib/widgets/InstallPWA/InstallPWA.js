import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";

import {
    InstallPWAStyles,
    InstallButtonTextStyles,
    InstallButtonStyles,
    InstallTextStyles,
    InstallThumbStyles,
    InstallBoxStyles,
    InstallBoxCta,
    InstallIconStyles,
} from "./styles";

import Box from "../../accessories/Box";

const InstallPWA = ({ size, text, name, btncancel, btnadd }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <InstallPWAStyles id="pwa-banner">
            <InstallBoxStyles variant="Transparent">
                <InstallThumbStyles variant="Transparent">
                    {ui === "tudn" ? (
                        <InstallIconStyles name="Deportes" size={size} />
                    ) : ui === "canal5" ? (
                        <InstallIconStyles name="CanalCinco" size={size} />
                    ) : ui === "bandamax" ? (
                        <InstallIconStyles name="Bandamax" size={size} />
                    ) : ui === "unicable" ? (
                        <InstallIconStyles name="CanalU" size={size} />
                    ) : ui === "telehit" ? (
                        <InstallIconStyles name="Telehit" size={size} />
                    ) : ui === "elnueve" ? (
                        <InstallIconStyles name="Nueve" size={size} />
                    ) : ui === "distritocomedia" ? (
                        <InstallIconStyles name="Distrito" size={size} />
                    ) : ui === "codigoespagueti" ? (
                        <InstallIconStyles name="CodigoEspagueti" size={size} />
                    ) : ui === "erizos" ? (
                        <InstallIconStyles name="Erizos" size={size} />
                    ) : ui === "frentecreativo" ? (
                        <InstallIconStyles name="Frente" size={size} />
                    ) : ui === "plumasatomicas" ? (
                        <InstallIconStyles name="PlumasAtomicas" size={size} />
                    ) : ui === "oinkoink" ? (
                        <InstallIconStyles name="OinkOink" size={size} />
                    ) : ui === "bitme" ? (
                        <InstallIconStyles name="BitMe" size={size} />
                    ) : ui === "pleyers" ? (
                        <InstallIconStyles name="LosPleyeres" size={size} />
                    ) : ui === "viviendoencasa" ? (
                        <InstallIconStyles name="Viviendo" size={size} />
                    ) : ui === "televisanews" ? (
                        <InstallIconStyles name="News" size={size} />
                    ) : ui === "whiteLabel" ? (
                        <InstallIconStyles name="WhiteLabel" size={size} />
                    ) : ui === "videodigital" ? (
                        <InstallIconStyles name="Logo" size={size} />
                    ) : ui === "televisacom" ? (
                        <InstallIconStyles name="Logo" size={size} />
                    ) : ui === "slang" ? (
                        <InstallIconStyles name="Slang" size={size} />
                    ) : (
                        <InstallIconStyles name={name} size={size} />
                    )}
                </InstallThumbStyles>
                <InstallBoxCta variant="Transparent">
                    <InstallTextStyles>{text}</InstallTextStyles>
                    <Box variant="Flex">
                        <InstallButtonTextStyles>{btncancel}</InstallButtonTextStyles>
                        <InstallButtonStyles>{btnadd}</InstallButtonStyles>
                    </Box>
                </InstallBoxCta>
            </InstallBoxStyles>
        </InstallPWAStyles>
    );
};

InstallPWA.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
    btnadd: PropTypes.string,
    btncancel: PropTypes.string,
};

InstallPWA.defaultProps = {
    text: "Agréganos a tu pantalla de inicio para visitarnos más fácil y rápido",
    size: "50",
    name: "LasEstrellas",
    btnadd: "Agregar",
    btncancel: "No por ahora",
};

export default InstallPWA;
