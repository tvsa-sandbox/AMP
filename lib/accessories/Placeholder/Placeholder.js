import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { PlaceholderStyles, IconsStyles } from "./styles";

const Placeholder = props => {
    const { children, size, ratio, name, icon } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    const iconp = icon ? <IconsStyles name={name} size={size} variant="Transparent" /> : null;
    if (ui === "tudn") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Deportes" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "canal5") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="CanalCinco" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "elnueve") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Nueve" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "bandamax") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Bandamax" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "distritocomedia") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Distrito" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "telehit") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Telehit" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "unicable") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="CanalU" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "bitme") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="BitMe" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "codigoespagueti") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? (
                    <IconsStyles name="CodigoEspagueti" size={size} variant="Transparent" />
                ) : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "erizos") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="ErizosMx" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "frentecreativo") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Frente" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "oinkoink") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="OinkOink" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "plumasatomicas") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? (
                    <IconsStyles name="PlumasAtomicas" size={size} variant="Transparent" />
                ) : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "pleyers") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="LosPleyers" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "videodigital") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? (
                    <IconsStyles name="VideoTelevisaFull" size={size} variant="Transparent" />
                ) : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "viviendoencasa") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Viviendo" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "televisanews") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="News" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "slang") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Slang" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "televisacom") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="Logo" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    if (ui === "whitelabel") {
        return (
            <PlaceholderStyles ratio={ratio} {...props}>
                {icon ? <IconsStyles name="WhiteLabel" size={size} variant="Transparent" /> : null}
                {children}
            </PlaceholderStyles>
        );
    }
    return (
        <PlaceholderStyles ratio={ratio} {...props}>
            {icon ? <IconsStyles name={name} size={size} variant="Transparent" /> : null}
            {children}
        </PlaceholderStyles>
    );
};

Placeholder.propTypes = {
    variant: PropTypes.string,
    ratio: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.bool,
};

Placeholder.defaultProps = {
    variant: "Solid",
    ratio: "aspect16x9",
    size: 50,
    name: "LasEstrellas",
    children: null,
    icon: true,
};

export default Placeholder;
