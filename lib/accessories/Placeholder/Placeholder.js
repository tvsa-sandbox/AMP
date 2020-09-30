import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { PlaceholderStyles, IconsStyles } from "./styles";

const Placeholder = props => {
    const { children, size, ratio, name } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    if (ui === "tudn") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Deportes" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "canal5") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="CanalCinco" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "elnueve") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Nueve" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "bandamax") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Bandamax" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "distritocomedia") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Distrito" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "telehit") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Telehit" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "unicable") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="CanalU" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "bitme") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="BitMe" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "codigoespagueti") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="CodigoEspagueti" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "erizos") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="ErizosMx" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "frentecreativo") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Frente" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "oinkoink") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="OinkOink" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "plumasatomicas") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="PlumasAtomicas" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "pleyers") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="LosPleyeres" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "viviendoencasa") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                <IconsStyles name="Viviendo" size={size} variant="Transparent" />
                {children}
            </PlaceholderStyles>
        );
    }
    return (
        <PlaceholderStyles ratio={ratio} {...props}>
            <IconsStyles name={name} size={size} variant="Transparent" />
            {children}
        </PlaceholderStyles>
    );
};

Placeholder.propTypes = {
    variant: PropTypes.string,
    ratio: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
};

Placeholder.defaultProps = {
    variant: "Solid",
    ratio: "aspect16x9",
    size: "50",
    name: "LasEstrellas",
    children: null,
};

export default Placeholder;
