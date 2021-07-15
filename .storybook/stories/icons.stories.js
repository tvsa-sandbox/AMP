import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import styled, { css } from "styled-components";

import { Icons, Title, IconDuration, Box, Text, Info } from "accessories";

import iconSetTudn from "../../lib/accessories/Icons/selectiontudn.json";
import iconSetLe from "../../lib/accessories/Icons/selection.json";
import iconSetBdx from "../../lib/accessories/Icons/selectionbandamax.json";
import iconSetC5 from "../../lib/accessories/Icons/selectioncanal5.json";
import iconSetC9 from "../../lib/accessories/Icons/selectioncanal9.json";
import iconSetTht from "../../lib/accessories/Icons/selectiontelehit.json";
import iconSetUnc from "../../lib/accessories/Icons/selectionunicable.json";
import iconSetBit from "../../lib/accessories/Icons/selectionbitme.json";
import iconSetCodE from "../../lib/accessories/Icons/selectioncodigoesp.json";
import iconSetFrC from "../../lib/accessories/Icons/selectionfrentecreativo.json";
import iconSetEzs from "../../lib/accessories/Icons/selectionerizos.json";
import iconSetDc from "../../lib/accessories/Icons/selectiondistritocomedia.json";
import iconSetOink from "../../lib/accessories/Icons/selectionoinkoink.json";
import iconSetPlyr from "../../lib/accessories/Icons/selectionpleyers.json";
import iconSetPlm from "../../lib/accessories/Icons/selectionplumas.json";
import iconSetVc from "../../lib/accessories/Icons/selectionviviendoencasa.json";
import iconSetTvsa from "../../lib/accessories/Icons/selectiontelevisacom.json";
import iconSetSl from "../../lib/accessories/Icons/selectionslang.json";
import iconSetNews from "../../lib/accessories/Icons/selectionnews.json";
import iconSetVD from "../../lib/accessories/Icons/selectionvideodigital.json";
import iconSetWL from "../../lib/accessories/Icons/selectionwhitelabel.json";

export default {
    title: "Desing System/Atoms/Icons",
};

const iconlist = {
    lasEstrellas: iconSetLe,
    tudn: iconSetTudn,
    bandamax: iconSetBdx,
    canal5: iconSetC5,
    elnueve: iconSetC9,
    telehit: iconSetTht,
    unicable: iconSetUnc,
    whitelabel: iconSetWL,
    pleyers: iconSetPlyr,
    plumasatomicas: iconSetPlm,
    erizos: iconSetEzs,
    bitme: iconSetBit,
    codigoespagueti: iconSetCodE,
    frentecreativo: iconSetFrC,
    oinkoink: iconSetOink,
    viviendoencasa: iconSetVc,
    distritocomedia: iconSetDc,
    televisacom: iconSetTvsa,
    slang: iconSetSl,
    televisanews: iconSetNews,
    videodigital: iconSetVD,
};

const BoxIcons = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: auto;
        margin-bottom: ${theme.space.xl3};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const IconsDescription = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const TitleIcons = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionIcons = styled(Text)(
    ({ theme }) => css`
        padding-top: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const IconsBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-items: center;
`;
const IconsContainer = styled(Box)(
    ({ theme }) => css`
        display: grid;
        gap: 20px 10px;
        width: 100%;
        grid-template-columns: repeat(4, minmax(65px, 1fr));
        justify-content: center;
        align-items: center;
        padding-right: ${theme.space.xs};
        padding-left: ${theme.space.xs};
        margin-bottom: ${theme.space.xl3};
        @media (min-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(8, minmax(80px, 1fr));
            gap: 20px 10px;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
            grid-template-columns: repeat(9, minmax(80px, 1fr));
            gap: 20px 10px;
        }
    `,
);

const IconsDurationStyle = styled(Box)(
    ({ theme }) => css`
        display: inline-flex;
        width: 100%;
        min-width: 65px;
        height: 30px;
        justify-content: flex-start;
        align-items: center;
        padding-left: ${theme.space.lg};
        padding-top: ${theme.space.xxl};
    `,
);

const IconsInfo = styled(Info)(
    ({ theme }) => css`
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: ${theme.colors.graycataloge};
    `,
);

const IconsStyle = styled(Box)(
    ({ theme }) => css`
        display: inline-flex;
        border: solid 1px #cccccc;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        margin: ${theme.space.sm};
        @media (min-width: ${theme.breakpoints.md}) {
            width: 60px;
            height: 60px;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 80px;
            height: 80px;
        }
    `,
);

export const ICONS = args => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    let IconSet = iconlist[ui];
    const Iconame = IconSet.icons;
    const KEY = Object.keys(Iconame);
    return (
        <Fragment>
            <BoxIcons variant="Transparent">
                <IconsDescription variant="Transparent">
                    <TitleIcons variant="h1">Icons</TitleIcons>
                    <CaptionIcons>
                        In the following lines we will find each of the logos and icons in the user
                        interface.
                    </CaptionIcons>
                </IconsDescription>
                <IconsContainer variant="Transparent">
                    {KEY.map(key => (
                        <IconsBox variant="Transparent" key={key}>
                            <IconsStyle variant="Transparent">
                                <Icons
                                    iconSet={IconSet}
                                    name={Iconame[key].properties.name}
                                    {...args}
                                />
                            </IconsStyle>
                            <IconsInfo>{Iconame[key].properties.name}</IconsInfo>
                        </IconsBox>
                    ))}
                </IconsContainer>
            </BoxIcons>
            <BoxIcons variant="Transparent">
                <IconsDescription variant="Transparent">
                    <TitleIcons variant="h1">Icon Duration</TitleIcons>
                    <CaptionIcons>Duration time icon.</CaptionIcons>
                </IconsDescription>
                <IconsDurationStyle variant="Transparent">
                    <IconDuration>12:30</IconDuration>
                </IconsDurationStyle>
            </BoxIcons>
        </Fragment>
    );
};
ICONS.args = {
    variant: "Transparent",
};
ICONS.argTypes = {
    variant: {
        description: "Iconos",
        control: {
            type: "select",
            options: ["Active", "Focus", "Solid", "Transparent", "Outline", "Footer"],
        },
    },
};
