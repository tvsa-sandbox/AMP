import React, { Fragment } from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { Icons, Title, IconDuration, Box } from "accessories";

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

export const ICONS = () => {
    const KEY = Object.keys(select("Iconos", iconlist, iconlist["Las Estrellas"]));
    const Iconame = select("Iconos", iconlist, iconlist["Las Estrellas"]);
    return (
        <Fragment>
            <Title variant="h2">Icons</Title>
            {KEY.map(key => (
                <Icons name={Iconame[key].properties.name} key={key} />
            ))}
        </Fragment>
    );
};

export const ICONDURATION = () => {
    const name = text("Duration", "12:30");
    return (
        <Fragment>
            <Title variant="h2">Icon Duration</Title>
            <Box variant="Transparent" style={{ height: "30px" }}>
                <IconDuration>{name}</IconDuration>
            </Box>
        </Fragment>
    );
};
