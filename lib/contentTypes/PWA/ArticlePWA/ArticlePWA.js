import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import LayoutPWA from "../../../layoutPWA";
import {
    PageStyles,
    BoxBodyFull,
    BoxData,
    BoxTitle,
    TitleStyles,
    BoxAuthor,
    BoxLabel,
    BoxContainer,
    AuthorStyles,
    TimeStyles,
    TextDescription,
    BoxShare,
    BoxTime,
    LabelStyles,
    ArticleText,
    AdsArticleStyles,
} from "./styles";
import { ContentCarouselThumbStyles } from "../../../widgets/ContentCarousel/styles";
import {
    GridGallery,
    ContentCarouselPWA,
    EnhancementImage,
    Quote,
    RelatedContent,
    LeadImage,
} from "../../../widgets";
import { ItemCarouselPWA } from "../../../items";

const ArticlePWA = props => {
    const { grid, imgs, carrousel, rel, gal } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <LayoutPWA
            foot={false}
            breadcrumbs={[]}
            uri="https://tvsa-sandbox.github.io/widgets-beta/"
            filter=""
        >
            <PageStyles>
                <BoxBodyFull variant="Transparent">
                    <BoxContainer variant="Transparent">
                        <BoxLabel variant="Transparent">
                            <LabelStyles href="./" aria-label="seccion">
                                Espectáculos
                            </LabelStyles>
                        </BoxLabel>
                        <BoxTitle variant="Transparent">
                            <TitleStyles variant="h2">
                                Angelique Boyer regresa a TikTok con divertido video y sus fans
                                enloquecen: ´Eres la mejor´
                            </TitleStyles>
                        </BoxTitle>
                        <BoxData variant="Transparent">
                            <TextDescription>
                                Los fieles admiradores de la actriz no solo destacaron su habilidad
                                para la aplicación, también lo bonita que luce
                            </TextDescription>
                        </BoxData>
                        <BoxAuthor variant="Transparent">
                            {ui === "tudn" ? (
                                <AuthorStyles color="gray3">Por: Erik Solís</AuthorStyles>
                            ) : (
                                    <AuthorStyles color="gray3">Por: Valeria Contreras N.</AuthorStyles>
                                )}
                        </BoxAuthor>
                    </BoxContainer>
                    <LeadImage src={imgs} />
                    <ArticleText>
                        Hace unos días, <b>Angelique Boyer</b> destacó que a diferencia de su novio
                        Sebastián Rulli, ella se alejó de <b>TikTok</b>; pese a sus declaraciones,
                        la actriz sorprendió a sus seguidores y se volvió tendencia al regresar a la
                        aplicación con un divertido video.
                    </ArticleText>
                    <ArticleText>
                        Tanto en su cuenta oficial de Instagram como en su perfil de TikTok, la
                        protagonista de <a href="./">telenovelas</a> como ´
                        <b>Lo que la vida me robó</b>´ y ´<b>Amar a muerte</b>´ publicó una
                        grabación en la que aparece haciendo peculiares muecas, que provocaron
                        consiguiera en cuestión de horas casi dos millones de reproducciones.
                    </ArticleText>
                    <EnhancementImage src={imgs} />
                    <ArticleText>
                        &quot;Imita el emoji. Solo por diversión&quot;, señaló la estrella de
                        televisión como descripción de la grabación, la cual recaudó más de 188 mil
                        ´Me gusta´ e infinidad de mensajes, en los que sus admiradores no solo le
                        agradecieron que haya regresado a la aplicación, también destacaron su
                        habilidad para hacer el video y lo bonita que lucía.
                    </ArticleText>
                    <ArticleText>
                        &quot;Eres la mejor, te quedó increíble&quot;, &quot;Ya te
                        extranábamos&quot;, &quot;Qué bonita te ves, eres una persona
                        espectacular&quot;, &quot;La carita de enojo es la mejor&quot;,
                        &quot;Preciosa, todo te queda bien&quot;, &quot;Te salieron igualitas todas
                        las caras&quot;, &quot;Hermosa como siempre&quot;, &quot;Angelique, eres la
                        mejor&quot;, fueron algunos de los mensajes que recibió{" "}
                        <b>Angelique Boyer</b>.
                    </ArticleText>
                    <RelatedContent img={rel} />
                    <ArticleText>
                        Días antes, la actriz reveló que a pesar de que en muy poco tiempo tanto
                        ella como Sebastian Rulli causaron revuelo en TikTok con sus múltiples
                        bailes, arriesgados retos y divertidas imitaciones, ella se alejó de la red
                        social por falta de tiempo.
                    </ArticleText>
                    <Quote />
                    <ArticleText>
                        &quot;Ya no hago tiktoks porque ya no tengo tiempo, andamos muy
                        apurados&quot;, declaró a De Primera Mano. Y es que la francesa esta
                        enfocada en las grabaciones de su nueva telenovela ´Imperio de mentiras´en
                        la que comparte créditos con Andrés Palacios, Leticia Calderón, Susana
                        González, Alejandro Camacho, Alejandro Robles Gil, Iván Arana, Hernán
                        Mendoza, entre otros.
                    </ArticleText>
                    <ArticleText>
                        &quot;Ya no hago tiktoks porque ya no tengo tiempo, andamos muy
                        apurados&quot;, declaró a De Primera Mano. Y es que la francesa esta
                        enfocada en las grabaciones de su nueva telenovela ´Imperio de mentiras´en
                        la que comparte créditos con Andrés Palacios, Leticia Calderón, Susana
                        González, Alejandro Camacho, Alejandro Robles Gil, Iván Arana, Hernán
                        Mendoza, entre otros.
                    </ArticleText>
                    <GridGallery src={grid} gal={gal} />
                    <ArticleText>
                        &quot;Ya no hago tiktoks porque ya no tengo tiempo, andamos muy
                        apurados&quot;, declaró a De Primera Mano. Y es que la francesa esta
                        enfocada en las grabaciones de su nueva telenovela ´Imperio de mentiras´en
                        la que comparte créditos con Andrés Palacios, Leticia Calderón, Susana
                        González, Alejandro Camacho, Alejandro Robles Gil, Iván Arana, Hernán
                        Mendoza, entre otros.
                    </ArticleText>
                    <ArticleText>
                        &quot;Ya no hago tiktoks porque ya no tengo tiempo, andamos muy
                        apurados&quot;, declaró a De Primera Mano. Y es que la francesa esta
                        enfocada en las grabaciones de su nueva telenovela ´Imperio de mentiras´en
                        la que comparte créditos con Andrés Palacios, Leticia Calderón, Susana
                        González, Alejandro Camacho, Alejandro Robles Gil, Iván Arana, Hernán
                        Mendoza, entre otros.
                    </ArticleText>
                    <BoxShare variant="Transparent">
                        <BoxTime variant="Transparent">
                            <TimeStyles variant="Airtime" color="gray3">
                                Septiembre 2, 2020
                            </TimeStyles>
                        </BoxTime>
                    </BoxShare>

                    <ContentCarouselPWA>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA size="28" image={carrousel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA size="28" image={carrousel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA size="28" image={carrousel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA size="28" image={carrousel} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselPWA size="28" image={carrousel} />
                        </ContentCarouselThumbStyles>
                    </ContentCarouselPWA>
                </BoxBodyFull>
            </PageStyles>
        </LayoutPWA>
    );
};
ArticlePWA.propTypes = {
    grid: PropTypes.shape({}),
    imgs: PropTypes.shape({}),
    carrousel: PropTypes.shape({}),
    rel: PropTypes.shape({}),
    gal: PropTypes.shape({}),
};

ArticlePWA.defaultProps = {
    grid: [],
    imgs: [],
    carrousel: [],
    rel: [],
    gal: [],
};
export default ArticlePWA;
