import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { withHTML } from "@whitespace/storybook-addon-html/react";
import { withAmpDecorator } from "storybook-amp";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import * as whiteLabel from "../lib/themes/whiteLabel";
import * as lasEstrellas from "../lib/themes/lasEstrelllas";
import * as TUDN from "../lib/themes/tudn";
import * as Bandamax from "../lib/themes/bandamax";
import * as Canal5 from "../lib/themes/canal5";
import * as elnueve from "../lib/themes/elnueve";
import * as telehit from "../lib/themes/telehit";
import * as unicable from "../lib/themes/unicable";
import * as tvsacom from "../lib/themes/televisacom";
import * as video from "../lib/themes/videodigital";
import * as losplayers from "../lib/themes/pleyers";
import * as plumas from "../lib/themes/plumasatomicas";
import * as Erizos from "../lib/themes/erizos";
import * as Bitme from "../lib/themes/bitme";
import * as espagueti from "../lib/themes/codigoespagueti";
import * as frente from "../lib/themes/frentecreativo";
import * as news from "../lib/themes/televisanews";
import * as oink from "../lib/themes/oinkoink";
import * as viviendoencasa from "../lib/themes/viviendoencasa";
import * as distrito from "../lib/themes/distritocomedia";
import * as slang from "../lib/themes/slang";
import GlobalStyle from "../lib/accessories/GlobalStyles";
import merge from "lodash.merge";
import get from "lodash.get";
import css from "./styles";

const wl = whiteLabel;
const le = lasEstrellas;
const tudn = TUDN;
const bmx = Bandamax;
const cinco = Canal5;
const c9 = elnueve;
const hit = telehit;
const uni = unicable;
const vd = video;
const lp = losplayers;
const pa = plumas;
const ez = Erizos;
const bit = Bitme;
const ce = espagueti;
const fc = frente;
const tn = news;
const ok = oink;
const vc = viviendoencasa;
const dc = distrito;
const sl = slang;
const tvsa = tvsacom;

const modes = ["light", "dark"];

const getTheme = (mode, btheme) =>
    merge({}, btheme, {
        colors: get(btheme.colors.modes, mode, btheme.colors),
    });

// const [mode, setMode] = useState(modes[0]);

const THEMES = {
    "Las Estrellas": getTheme(modes[1], le),
    "Las Estrellas Light": getTheme(modes[0], le),
    TUDN: getTheme(modes[0], tudn),
    "Televisa News": getTheme(modes[0], tn),
    "Bandamax Light": getTheme(modes[0], bmx),
    "Bandamax Dark": getTheme(modes[1], bmx),
    "Canal 5": getTheme(modes[0], cinco),
    "El Nueve": getTheme(modes[1], c9),
    Telehit: getTheme(modes[0], hit),
    Unicable: getTheme(modes[0], uni),
    TelevisaCom: getTheme(modes[0], tvsa),
    "Video Digital": getTheme(modes[0], vd),
    "Video Digital": getTheme(modes[1], vd),
    WhiteLabel: getTheme(modes[0], wl),
    "WhiteLabel Dark": getTheme(modes[1], wl),
    "Los Pleyers": getTheme(modes[0], lp),
    "Plumas Atomicas": getTheme(modes[0], pa),
    Erizos: getTheme(modes[0], ez),
    Bitme: getTheme(modes[0], bit),
    "Codigo Espagueti": getTheme(modes[0], ce),
    "Frente Creativo": getTheme(modes[0], fc),
    "Oink Oink": getTheme(modes[0], ok),
    Slang: getTheme(modes[0], sl),
    "Viviendo Casa": getTheme(modes[0], vc),
    "Distrito Comedia": getTheme(modes[0], dc),
};
// console.log("tema", THEMES["las Estrellas"].ui.name);

const withThemeProvider = (Story, context) => {
    return (
        <ThemeProvider theme={select("Theme", THEMES, THEMES["Video Digital"])}>
            <GlobalStyle />
            <Story {...context} />
        </ThemeProvider>
    );
};

const customStyles = `${css}`; // `${css}`some styles

export const parameters = {
    amp: {
        isEnabled: true,
        styles: customStyles, // Custom styles from some string
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: "galaxys5",
    },
};

export const decorators = [withHTML, withThemeProvider, withAmpDecorator];
