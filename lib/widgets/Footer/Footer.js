import React from "react";
import {
    FooterStyles,
    NetworksStyles,
    AboutStyles,
    SectionStyles,
    SectionTextStyles,
    ContactStyles,
    SectionInfoStyles,
    CopyRightStyles,
    TextCopyStyles,
    SectionMobileStyles,
    CopyIconStyles,
    NetworkIconStyles,
    MobileIconStyles,
    ComboStyles,
    SelectStyles,
    LabelStyles,
} from "./styles";
import Box from "../../accessories/Box";

const Footer = () => {
    const handleSelect = event => {
        window.open(event.target.value, "_self");
    };

    return (
        <FooterStyles id="Footer">
            <SectionMobileStyles href="/">
                <Box variant="Transparent">
                    <MobileIconStyles name="Televisa" variant="Footer" />
                </Box>
                <ComboStyles>
                    <LabelStyles htmlFor="tvsasites">Otros Portales Televisa</LabelStyles>
                    <SelectStyles id="tvsasites" name="tvsasites" onChange={handleSelect}>
                        <option value="https://www.televisa.com/">Televisa</option>
                        <option value="https://www.tudn.mx/">TUDN</option>
                        <option value="https://www.lasestrellas.tv/">Las Estrellas</option>
                        <option value="https://noticieros.televisa.com/">Noticierolevisa</option>
                        <option value="https://www.televisa.com/gala-tv/">Nueve</option>
                        <option value="http://www.televisa.com/canal5/">Canal 5</option>
                        <option value="http://www.telehit.com/"> Telehit</option>
                        <option value="https://www.bandamax.tv/">Bandamax</option>
                        <option value="https://noticieros.televisa.com/noticiaso-foro-tv/">
                            Foro Tv
                        </option>
                        <option value="https://www.lasestrellas.tv/cea/">CEA</option>
                    </SelectStyles>
                </ComboStyles>
            </SectionMobileStyles>
            <SectionStyles>
                <NetworksStyles href="https://www.televisa.com/" aria-label="Footer">
                    <NetworkIconStyles name="Televisa" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.tudn.mx/" aria-label="Footer">
                    <NetworkIconStyles name="Deportes" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.lasestrellas.tv/" aria-label="Footer">
                    <NetworkIconStyles
                        name="LasEstrellas"
                        variant="Footer"
                        aria-label="FooterIcon"
                    />
                </NetworksStyles>
                <NetworksStyles href="https://noticieros.televisa.com/" aria-label="FooterIcon">
                    <NetworkIconStyles name="News" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.televisa.com/gala-tv/" aria-label="FooterIcon">
                    <NetworkIconStyles name="Nueve" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles
                    href="https://noticieros.televisa.com/noticias-vivo-foro-tv/"
                    aria-label="FooterIcon"
                >
                    <NetworkIconStyles name="ForoTV" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.televisa.com/canal5/" aria-label="FooterIcon">
                    <NetworkIconStyles name="CanalCinco" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.telehit.com/" aria-label="FooterIcon">
                    <NetworkIconStyles name="Telehit" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.bandamax.tv/" aria-label="FooterIcon">
                    <NetworkIconStyles name="Bandamax" variant="Footer" />
                </NetworksStyles>
                <NetworksStyles href="https://www.lasestrellas.tv/cea/" aria-label="FooterIcon">
                    <NetworkIconStyles name="CEA" variant="Footer" />
                </NetworksStyles>
            </SectionStyles>
            <SectionTextStyles>
                <AboutStyles href="https://www.televisa.com/corporativo/" aria-label="Footer">
                    Acerca de Televisa
                </AboutStyles>
                <AboutStyles href="https://www.televisa.com/sala-de-prensa/" aria-label="Footer">
                    Sala de Prensa
                </AboutStyles>
                <AboutStyles href="http://www.televisair.com/" aria-label="Footer">
                    Inversionistas
                </AboutStyles>
                <AboutStyles
                    href="http://www.televisair.com/~/media/Files/T/Televisa-IR/documents/sostenibilidad19grif-esp.pdf"
                    aria-label="Footer"
                >
                    Sostentabilidad
                </AboutStyles>
                <AboutStyles href="https://www.frentecreativo.com/" aria-label="Footer">
                    NEWSLETTER FRENTE CREATIVO
                </AboutStyles>
            </SectionTextStyles>
            <SectionInfoStyles>
                <ContactStyles
                    href="https://www.televisa.com/informacion/aplicaciones/"
                    aria-label="Footer"
                >
                    Apps
                </ContactStyles>
                <ContactStyles href="http://televisaventas.tv/" aria-label="Footer">
                    Anúnciate
                </ContactStyles>
                <ContactStyles
                    href="http://www.televisa.com/corporativo/contacto/"
                    aria-label="Footer"
                >
                    Contáctanos
                </ContactStyles>
                <ContactStyles
                    href="http://www.televisa.com/responsable-derecho-replica/"
                    aria-label="Footer"
                >
                    Responsable derecho de réplica
                </ContactStyles>
                <ContactStyles
                    href="http://www.televisa.com/convenio-de-usuario/"
                    aria-label="Footer"
                >
                    Convenio del usuario
                </ContactStyles>
                <ContactStyles
                    href="http://www.televisa.com/politica-de-privacidad/"
                    aria-label="Footer"
                >
                    Política de privacidad
                </ContactStyles>
                <ContactStyles href="http://www.televisa.com/opi/" aria-label="Footer">
                    Oferta pública de infraestructura
                </ContactStyles>
            </SectionInfoStyles>
            <CopyRightStyles>
                <CopyIconStyles name="Logo" variant="Footer" />
                <TextCopyStyles>
                    Derechos Reservados @ Televisa S.A. de C.V. TELEVISA y el logotipo de TELEVISA
                    son marcas registradas
                </TextCopyStyles>
            </CopyRightStyles>
        </FooterStyles>
    );
};

export default Footer;
