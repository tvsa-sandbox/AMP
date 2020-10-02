import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import IconStyles from "./styles";
import iconSetTudn from "./selectiontudn.json";
import iconSetLe from "./selection.json";
import iconSetBdx from "./selectionbandamax.json";
import iconSetC5 from "./selectioncanal5.json";
import iconSetC9 from "./selectioncanal9.json";
import iconSetTht from "./selectiontelehit.json";
import iconSetUnc from "./selectionunicable.json";
import iconSetNws from "./selectionnews.json";
import iconSetBit from "./selectionbitme.json";
import iconSetCodE from "./selectioncodigoesp.json";
import iconSetFrC from "./selectionfrentecreativo.json";
import iconSetEzs from "./selectionerizos.json";
import iconSetDc from "./selectiondistritocomedia.json";
import iconSetOink from "./selectionoinkoink.json";
import iconSetPlyr from "./selectionpleyers.json";
import iconSetPlm from "./selectionplumas.json";
import iconSetVc from "./selectionviviendoencasa.json";

const Icons = props => {
    const { name, size } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    if (ui === "tudn") {
        return <IconStyles iconSet={iconSetTudn} icon={name} size={size} {...props} />;
    }
    if (ui === "canal5") {
        return <IconStyles iconSet={iconSetC5} icon={name} size={size} {...props} />;
    }
    if (ui === "elnueve") {
        return <IconStyles iconSet={iconSetC9} icon={name} size={size} {...props} />;
    }
    if (ui === "bandamax") {
        return <IconStyles iconSet={iconSetBdx} icon={name} size={size} {...props} />;
    }
    if (ui === "distritocomedia") {
        return <IconStyles iconSet={iconSetDc} icon={name} size={size} {...props} />;
    }
    if (ui === "telehit") {
        return <IconStyles iconSet={iconSetTht} icon={name} size={size} {...props} />;
    }
    if (ui === "unicable") {
        return <IconStyles iconSet={iconSetUnc} icon={name} size={size} {...props} />;
    }
    if (ui === "televisanews") {
        return <IconStyles iconSet={iconSetNws} icon={name} size={size} {...props} />;
    }
    if (ui === "bitme") {
        return <IconStyles iconSet={iconSetBit} icon={name} size={size} {...props} />;
    }
    if (ui === "codigoespagueti") {
        return <IconStyles iconSet={iconSetCodE} icon={name} size={size} {...props} />;
    }
    if (ui === "erizos") {
        return <IconStyles iconSet={iconSetEzs} icon={name} size={size} {...props} />;
    }
    if (ui === "frentecreativo") {
        return <IconStyles iconSet={iconSetFrC} icon={name} size={size} {...props} />;
    }
    if (ui === "oinkoink") {
        return <IconStyles iconSet={iconSetOink} icon={name} size={size} {...props} />;
    }
    if (ui === "plumasatomicas") {
        return <IconStyles iconSet={iconSetPlm} icon={name} size={size} {...props} />;
    }
    if (ui === "pleyers") {
        return <IconStyles iconSet={iconSetPlyr} icon={name} size={size} {...props} />;
    }
    if (ui === "viviendoencasa") {
        return <IconStyles iconSet={iconSetVc} icon={name} size={size} {...props} />;
    }
    return <IconStyles iconSet={iconSetLe} icon={name} size={size} {...props} />;
};

Icons.propTypes = {
    name: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
};

Icons.defaultProps = {
    name: "",
    variant: "Transparent",
    size: "40",
};

export default Icons;
