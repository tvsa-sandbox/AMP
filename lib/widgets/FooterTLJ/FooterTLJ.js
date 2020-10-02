import React from "react";
import { Box, Icons } from "../../accessories";
import {
    FooterTLJStyles,
    CopyRightTljStyles,
    IconBoxStyles,
    BoxTextTljStyles,
    TextTljStyles,
    SectionStyles,
    AboutBoxStyles,
    AboutStyles,
} from "./styles";
const FooterTLJ = () => {
    // const handleSelect = event => {
    //     window.open(event.target.value, "_self");
    // };
    return (
        <FooterTLJStyles id="FooterTLJ">
            <Box variant="Transparent">
                <CopyRightTljStyles variant="Transparent">
                    <IconBoxStyles variant="Transparent">
                        <Icons name="TodosLosJugadores" size="120" variant="Transparent" />
                    </IconBoxStyles>
                    <BoxTextTljStyles variant="Transparent">
                        <TextTljStyles>Derechos reservados © Todos Los Jugadores.</TextTljStyles>
                        <TextTljStyles>TLJ y el logo de TLJ son marcas registradas.</TextTljStyles>
                    </BoxTextTljStyles>
                </CopyRightTljStyles>
            </Box>
            <SectionStyles variant="Transparent">
                <AboutBoxStyles variant="Transparent">
                    <AboutStyles href="/" aria-label="Footer">
                        ¿Quiénes somos?
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footer">
                        Términos y Condiciones
                    </AboutStyles>
                </AboutBoxStyles>
                <AboutBoxStyles variant="Transparent">
                    <AboutStyles href="/" aria-label="Footer">
                        Contacto
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footer">
                        Política de Privacidad
                    </AboutStyles>
                </AboutBoxStyles>
            </SectionStyles>
        </FooterTLJStyles>
    );
};

export default FooterTLJ;
