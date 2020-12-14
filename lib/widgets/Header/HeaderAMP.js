import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Anchor, Icons } from "../../accessories";
import { HeaderStylesAMP } from "./styles";
import { HeaderStylesCv } from "./stylescv";

const HeaderAMP = props => {
    const { size, name, smallsize, mediumsize } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    if (ui === "tudn") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="Deportes" size={size} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "canal5") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="CanalCinco" size={smallsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "elnueve") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="Nueve" size={size} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "bandamax") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="Bandamax" size={size} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "distritocomedia") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="Distrito" size={mediumsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "telehit") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="Telehit" size={smallsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "unicable") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="CanalU" size={smallsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "bitme") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="BitMeFull" size={mediumsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "codigoespagueti") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons
                        color="#fff"
                        name="CodigoEspagueti"
                        size={smallsize}
                        variant="Transparent"
                    />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "erizos") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="ErizosMx" size={size} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "frentecreativo") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons name="FrenteCreativoDark" size={size} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "oinkoink") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="OinkOink" size={smallsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "plumasatomicas") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons
                        color="#fff"
                        name="PlumasAtomicas"
                        size={smallsize}
                        variant="Transparent"
                    />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "pleyers") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="LosPleyeres" size={smallsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "viviendoencasa") {
        return (
            <HeaderStylesAMP>
                <Anchor>
                    <Icons color="#fff" name="Viviendo" size={mediumsize} variant="Transparent" />
                </Anchor>
            </HeaderStylesAMP>
        );
    }
    if (ui === "videodigital") {
        return (
            <HeaderStylesCv id="header" title="header">
                <Anchor href="./" aria-label="HomeButton">
                    <Icons name="VideoTelevisa" size={size} variant="Transparent" />
                </Anchor>
            </HeaderStylesCv>
        );
    }

    return (
        <HeaderStylesAMP>
            <Anchor>
                <Icons color="#fff" name={name} size={size} variant="Transparent" />
            </Anchor>
        </HeaderStylesAMP>
    );
};

HeaderAMP.propTypes = {
    variant: PropTypes.string,
    size: PropTypes.number,
    mediumsize: PropTypes.string,
    verticalsize: PropTypes.string,
    name: PropTypes.string,
};

HeaderAMP.defaultProps = {
    variant: "Solid",
    size: 120,
    mediumsize: "100",
    smallsize: "50",
    name: "LasEstrellasFull",
};

export default HeaderAMP;
