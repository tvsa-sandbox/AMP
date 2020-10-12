import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";

import {
    PrivacyStyles,
    PrivacyBoxStyles,
    PrivacyIconStyles,
    PrivacyBoxDescription,
    PrivacyTextStyles,
    PrivacyBoxButton,
    PrivacyButtonStyles,
    PrivacyAnchorStyles,
} from "./styles";

const Privacy = ({ url, text }) => {
    // const [viewCookies, setViewCookies] = useState(false);
    // const [DATE] = useState(new Date());

    // const addCookie = () => {
    //     setViewCookies(false);
    //     const verificar = document.cookie;
    //     if (!verificar.includes("_tvsPrivacy=true")) {
    //         DATE.setDate(DATE.getDate() + 180);
    //         document.cookie = `_tvsPrivacy=true;Expires=${DATE.toGMTString()}`;
    //     }
    // };

    // useEffect(() => {
    //     const verificar = document.cookie;
    //     let ScrollMove = 0;
    //     window.addEventListener("scroll", () => {
    //         ScrollMove = window.scrollY;
    //         if (ScrollMove >= 500 && !viewCookies) {
    //             addCookie();
    //         }
    //     });
    //     if (!verificar.includes("_tvsPrivacy=true")) {
    //         setViewCookies(true);
    //     }
    // });
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <PrivacyStyles color={ui === "tudn" || ui === "elnueve" ? "darkfooter" : null}>
            <PrivacyBoxStyles variant="Transparent">
                <PrivacyBoxDescription variant="Transparent">
                    <PrivacyIconStyles
                        name="Close"
                        variant="Inactive"
                        color={ui === "tudn" || ui === "elnueve" ? "#fff" : null}
                    />
                    <PrivacyTextStyles color={ui === "tudn" || ui === "elnueve" ? "gray" : null}>
                        {text}
                    </PrivacyTextStyles>
                </PrivacyBoxDescription>

                <PrivacyBoxButton variant="Transparent">
                    <PrivacyAnchorStyles
                        variant="Focus"
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Ver más
                    </PrivacyAnchorStyles>
                    <PrivacyButtonStyles
                        color={ui === "tudn" || ui === "elnueve" ? "darkfooter" : null}
                    >
                        OK
                    </PrivacyButtonStyles>
                </PrivacyBoxButton>
            </PrivacyBoxStyles>
        </PrivacyStyles>
    );
};

Privacy.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
};

Privacy.defaultProps = {
    text:
        "Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas su uso. Puedes deshabilitarlas desde tu navegador.",
    url: "https://www.lasestrellas.tv/global/aviso-de-privacidad",
};

export default Privacy;
