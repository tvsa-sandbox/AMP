import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Icons } from "../../accessories";
import { FooterStylesAMP, CopyRightStylesAMP, TextCopyStylesAMP } from "./styles";

const FooterAMP = () => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    if (ui === "tudn") {
        return (
            <FooterStylesAMP>
                <CopyRightStylesAMP>
                    <Icons color="#fff" name="Logo" size="45" variant="Transparent" />
                    <TextCopyStylesAMP>
                        Derechos Reservados @ Televisa S.A. de C.V.
                    </TextCopyStylesAMP>
                </CopyRightStylesAMP>
            </FooterStylesAMP>
        );
    }
    return (
        <FooterStylesAMP>
            <CopyRightStylesAMP>
                <Icons color="#fff" name="Logo" size="45" variant="Transparent" />
                <TextCopyStylesAMP>Derechos Reservados @ Televisa S.A. de C.V.</TextCopyStylesAMP>
            </CopyRightStylesAMP>
        </FooterStylesAMP>
    );
};

export default FooterAMP;
