import React from "react";
// import { withKnobs, select } from "@storybook/addon-knobs";
import { withHTML } from "@whitespace/storybook-addon-html/react";
import { withAmpDecorator } from "storybook-amp";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
// import { StoryContext, StoryGetter, StoryWrapper } from "@storybook/addons";
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

const getThemeMode = (mode, btheme) =>
    merge({}, btheme, {
        colors: get(btheme.colors.modes, mode, btheme.colors),
    });

// const [mode, setMode] = useState(modes[0]);

const THEMES = {
    "Las Estrellas": getThemeMode(modes[1], le),
    "Las Estrellas Light": getThemeMode(modes[0], le),
    TUDN: getThemeMode(modes[0], tudn),
    "Televisa News": getThemeMode(modes[0], tn),
    "Bandamax Light": getThemeMode(modes[0], bmx),
    "Bandamax Dark": getThemeMode(modes[1], bmx),
    "Canal 5": getThemeMode(modes[0], cinco),
    "El Nueve": getThemeMode(modes[1], c9),
    Telehit: getThemeMode(modes[0], hit),
    Unicable: getThemeMode(modes[0], uni),
    TelevisaCom: getThemeMode(modes[0], tvsa),
    "Video Digital": getThemeMode(modes[1], vd),
    WhiteLabel: getThemeMode(modes[0], wl),
    "WhiteLabel Dark": getThemeMode(modes[1], wl),
    "Los Pleyers": getThemeMode(modes[0], lp),
    "Plumas Atomicas": getThemeMode(modes[0], pa),
    Erizos: getThemeMode(modes[0], ez),
    Bitme: getThemeMode(modes[0], bit),
    "Codigo Espagueti": getThemeMode(modes[0], ce),
    "Frente Creativo": getThemeMode(modes[0], fc),
    "Oink Oink": getThemeMode(modes[0], ok),
    Slang: getThemeMode(modes[0], sl),
    "Viviendo Casa": getThemeMode(modes[0], vc),
    "Distrito Comedia": getThemeMode(modes[0], dc),
};

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "Video Digital",
        toolbar: {
            icon: "document",
            // array of plain string values or MenuItem shape (see below)
            items: Object.keys(THEMES),
        },
    },
};

const withThemeProvider = (Story, context) => {
    const theme = THEMES[context.globals.theme];
    // console.log("tema", context.globals.theme);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story {...context} />
        </ThemeProvider>
    );
};


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
