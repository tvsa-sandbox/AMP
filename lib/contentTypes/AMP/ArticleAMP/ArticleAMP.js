import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import LayoutPWA from "../../../layoutPWA";
import ItemCarouselAMP from "../../../items/ItemCarouselAMP";
import { ContentCarouselThumbStyles } from "../../../widgets/ContentCarouselAMP/styles";
import ContentCarouselAMP from "../../../widgets/ContentCarouselAMP";
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
    LeadImageAMP,
    AdsArticleStyles,
} from "./styles";
import Ads from "../../../accessories/Ads";
import FooterAMP from "../../../widgets/Footer/FooterAMP";

const ArticleAMP = props => {
    const { grid, imgs, carrousel, rel, gal, items, slides } = props;
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
                        <BoxTitle variant="Transparent">
                            <TitleStyles variant="h2">
                                Barcelona 1-1 PSG, Champions League: Video, goles y resumen
                            </TitleStyles>
                        </BoxTitle>
                        <BoxData variant="Transparent">
                            <TextDescription>
                                Mbappé marcó tres goles en Camp Nou y humilló al Barcelona de Messi.
                            </TextDescription>
                        </BoxData>
                        <BoxAuthor variant="Transparent">
                            {ui === "tudn" ? (
                                <AuthorStyles color="gray3">Por: ÁLVARO CRUZ SANTIBÁÑEZ</AuthorStyles>
                            ) : (
                                    <AuthorStyles color="gray3">Por: Valeria Contreras N.</AuthorStyles>
                                )}
                        </BoxAuthor>
                        <BoxShare variant="Transparent">
                            <BoxTime variant="Transparent">
                                <TimeStyles variant="Airtime" color="gray3">
                                    FEBRERO 16, 2021 - 15:53
                            </TimeStyles>
                            </BoxTime>
                        </BoxShare>
                    </BoxContainer>
                    <LeadImageAMP src={items} />
                    <ArticleText>
                        Su majestad Mbappé se plantó con autoridad en el Camp Nou y humilló al Barcelona de <b>Messi</b> con tres goles en su cuenta,
                        más uno de <b>Moise Kean</b> , que casi sepultaron las aspiraciones culés en la Champions League.<b> Cristiano Ronaldo</b> (doblete)
                        y Mbappé dominaron la casa blaugrana en los dos últimos juegos.
                    </ArticleText>
                    <Ads>
                        <img src="https://s0.2mdn.net/simgad/12933903298611564420" alt="Advertisement" />
                    </Ads>
                    <ArticleText>
                        Barcelona vino con un lanzamiento en largo para De Jong, un defensor de PSG tocó al neerlandés y hubo penal.
                    <a href="./">Messi </a>cobró al ángulo para vencer a Navas; octavo gol de Leo al arquero tico.
                    </ArticleText>
                    <ArticleText>
                        Poco tiempo pasó para que llegara la respuesta del <a href="./">Paris Saint Germain</a>, y fue en una jugada por izquierda
                    en la que Kurzawa apareció solo para meter el balón al área, de primera asistieron
                    a Mbappé, que con recorte se quitó a la defensa y reventó la red.
                    </ArticleText>
                    <ArticleText>
                        De ahí en más vino el dominio asfixiante de PSG, que tuvo tres opciones claras en las que Ter Stegen
                        intervino con su calidad acostumbrada.
                        &quot;Griezmann&quot; escapó en una contra y casi marca, pero el balón salió desviado.
                    </ArticleText>
                    <Ads>
                        <img src="https://s0.2mdn.net/9784212/Matterkind_300x600_GreenLandisp.jpg" alt="Advertisement" />
                    </Ads>
                    <ArticleText>
                        No aguantó mucho Barcelona los embates de PSG y fue en otra descolgada magistral que hicieron agua su defensa,
                    que después de un rebote vio a <b>Mbappé </b> mandar el balón a la red por segunda ocasión consecutiva.
                    </ArticleText>

                    <ArticleText>
                        Poco después vino la sentencia del juego con otra pifia defensiva que les costó caro cuando <b>Moise Kean</b>    llegó presto a
                    definir sin problemas ante Ter Stegen y marcar el tercer gol del partido para la visita.
                    </ArticleText>
                    <ArticleText>
                        El clavo final al ataúd llegó en una contra asombrosa de PSG que puso el balón en posición ventajosa para Mbappé
                        y con una preciosa definición marcó su triplete en Camp Nou.
                    </ArticleText>
                    <Ads>
                        <img src="https://tpc.googlesyndication.com/simgad/3256261967643976044?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnHfFVBCFF80lQFaqltnbIo3HLLyQ" alt="Advertisement" />
                    </Ads>
                    <ContentCarouselAMP>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselAMP ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselAMP ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselAMP ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselAMP ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                        <ContentCarouselThumbStyles>
                            <ItemCarouselAMP ratio="aspect16x9" image={items} />
                        </ContentCarouselThumbStyles>
                    </ContentCarouselAMP>
                </BoxBodyFull>
            </PageStyles>
            <FooterAMP />
        </LayoutPWA>
    );
};
ArticleAMP.propTypes = {
    grid: PropTypes.shape({}),
    imgs: PropTypes.shape({}),
    carrousel: PropTypes.shape({}),
    rel: PropTypes.shape({}),
    gal: PropTypes.shape({}),
    items: PropTypes.shape({}),
};

ArticleAMP.defaultProps = {
    grid: [],
    imgs: [],
    carrousel: [],
    rel: [],
    gal: [],
    items: [],
};
export default ArticleAMP;
