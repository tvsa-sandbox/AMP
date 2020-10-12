import React from "react";
import { Box, Icons } from "../../accessories";
import {
    FooterNewsStyles,
    AnchorNewsIcon,
    BoxTextNewsStyles,
    CopyyBoxStyles,
    TextNewsStyles,
    SectionStyles,
    SocialBoxStyles,
    SocialTextStyles,
    AnchorIcon,
    AboutBoxStyles,
    AboutStyles,
    AboutTextStyles,
} from "./styles";
const FooterNews = () => {
    // const handleSelect = event => {
    //     window.open(event.target.value, "_self");
    // };
    return (
        <FooterNewsStyles id="FooterNews">
            <CopyyBoxStyles variant="Transparent">
                <AnchorNewsIcon href="./" aria-label="footernews">
                    <Icons name="NewsFull" size="220" color="#fff" variant="Transparent" />
                </AnchorNewsIcon>
                <BoxTextNewsStyles variant="Transparent">
                    <TextNewsStyles>Derechos reservados © Televisa S.A de C.V.</TextNewsStyles>
                    <TextNewsStyles>
                        Televisa y el logo de Televisa son marcas registradas.
                    </TextNewsStyles>
                </BoxTextNewsStyles>
            </CopyyBoxStyles>
            <SectionStyles variant="Transparent">
                <SocialBoxStyles variant="Transparent">
                    <SocialTextStyles>Síguenos en </SocialTextStyles>
                    <AnchorIcon href="./" aria-label="footernewsface">
                        <Icons name="Facebook" color="#fff" variant="Transparent" />
                        Facebook
                    </AnchorIcon>
                    <AnchorIcon href="./" aria-label="footernewsyoutube">
                        <Icons name="YouTube" color="#fff" variant="Transparent" />
                        Youtube
                    </AnchorIcon>
                    <AnchorIcon href="./" aria-label="footernewsinstagram">
                        <Icons name="Instagram" color="#fff" variant="Transparent" />
                        Instagram
                    </AnchorIcon>
                    <AnchorIcon href="./" aria-label="footernewsflipboard">
                        <Icons name="Flipboard" color="#fff" variant="Transparent" />
                        Flipboard
                    </AnchorIcon>
                    <AnchorIcon href="./" aria-label="footernewstwitter">
                        <Icons name="Twitter" color="#fff" variant="Transparent" />
                        Twitter
                    </AnchorIcon>
                </SocialBoxStyles>
                <AboutBoxStyles variant="Transparent">
                    <AboutTextStyles>Términos de Uso </AboutTextStyles>
                    <AboutStyles href="/" aria-label="Footernews">
                        Derecho de Réplica
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footernews">
                        Política de Privacidad
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footernews">
                        Código de Ética
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footernews">
                        Convenio del Usuario
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footernews">
                        Acerca de
                    </AboutStyles>
                    <AboutStyles href="/" aria-label="Footernews">
                        Mapa de Sitio
                    </AboutStyles>
                </AboutBoxStyles>
            </SectionStyles>
        </FooterNewsStyles>
    );
};

export default FooterNews;
