import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Icons } from "../../accessories";
import { FooterStylesAMP, CopyRightStylesAMP, TextCopyStylesAMP } from "./styles";

const FooterAMP = props => {
    const { footertext } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    if (ui === "erizos") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "codigoespagueti") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "bitme") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "frentecreativo") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "pleyers") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "plumasatomicas") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "oinkoink") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "viviendoencasa") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="TodosLosJugadores" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    if (ui === "whitelabel") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="WhiteLabel" size={70} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }

    if (ui === "tudn") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="Logo" size={45} variant="Transparent" />
                    <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    return (
        <FooterStylesAMP>
            <CopyRightStylesAMP>
                <Icons color="#fff" name="Logo" size={45} variant="Transparent" />
                <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
            </CopyRightStylesAMP>
        </FooterStylesAMP>
    );
};

FooterAMP.propTypes = {
    footertext: PropTypes.string,
};

FooterAMP.defaultProps = {
    footertext: "Derechos Reservados @ Televisa S.A. de C.V.",
};

export default FooterAMP;
