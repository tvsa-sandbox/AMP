import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Icons, Title, IconDuration, Box, Text } from "accessories";

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

export default {
    decorators: [withKnobs],
    title: "Desing System/Atoms/Icons",
};

const iconlist = {
    "Las Estrellas": iconSetLe.icons,
    TUDN: iconSetTudn.icons,
    Bandamax: iconSetBdx.icons,
    "Canal 5": iconSetC5.icons,
    "El Nueve": iconSetC9.icons,
    Telehit: iconSetTht.icons,
    Unicable: iconSetUnc.icons,
    "White Label": iconSetLe.icons,
    "Los Pleyers": iconSetPlyr.icons,
    "Plumas Atomicas": iconSetPlm.icons,
    Erizos: iconSetEzs.icons,
    Bitme: iconSetBit.icons,
    "Codigo Espagueti": iconSetCodE.icons,
    "Frente Creativo": iconSetFrC.icons,
    "Oink Oink": iconSetOink.icons,
    "Viviendo Casa": iconSetVc.icons,
    "Distrito Comedia": iconSetDc.icons,
};

const BoxIcons = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: auto;
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
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
    `,
);

const IconsContainer = styled(Box)(
    ({ theme }) => css`
        display: grid;
        gap: 20px 10px;
        width: 100%;
        grid-template-columns: repeat(4, minmax(65px, 1fr));
        justify-content: center;
        align-items: center;
        margin: 15px auto;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
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
        justify-content: center;
        align-items: center;
        margin: ${theme.space.auto};
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
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 80px;
            height: 80px;
        }
    `,
);

export const ICONS = () => {
    const KEY = Object.keys(select("Iconos", iconlist, iconlist["Las Estrellas"]));
    const Iconame = select("Iconos", iconlist, iconlist["Las Estrellas"]);
    const name = text("Duration", "12:30");
    return (
        <Fragment style={{ backgroundColor: "red" }}>
            <BoxIcons variant="Transparent">
                <IconsDescription variant="Transparent">
                    <TitleIcons variant="h2">Icons</TitleIcons>
                    <CaptionIcons>
                        In the following lines we will find each of the logos and icons in the user
                        interface.
                    </CaptionIcons>
                </IconsDescription>
                <IconsContainer variant="Transparent">
                    {KEY.map(key => (
                        <IconsStyle variant="Transparent">
                            <Icons name={Iconame[key].properties.name} key={key} />
                        </IconsStyle>
                    ))}
                </IconsContainer>
            </BoxIcons>
            <BoxIcons variant="Transparent">
                <IconsDescription variant="Transparent">
                    <TitleIcons variant="h2">Icon Duration</TitleIcons>
                </IconsDescription>
                <IconsContainer variant="Transparent">
                    <IconsDurationStyle variant="Transparent">
                        <IconDuration>{name}</IconDuration>
                    </IconsDurationStyle>
                </IconsContainer>
            </BoxIcons>
        </Fragment>
    );
};
