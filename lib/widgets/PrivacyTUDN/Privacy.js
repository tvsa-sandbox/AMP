import React from "react";
import PropTypes from "prop-types";

import {
    PrivacyStyles,
    PrivacyBoxStyles,
    PrivacyBoxCaption,
    PrivacyIconStyles,
    PrivacyLabelStyles,
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

    return (
        <PrivacyStyles>
            <PrivacyBoxStyles variant="Transparent">
                <PrivacyBoxCaption>
                    <PrivacyIconStyles name="Close" variant="Inactive" />
                </PrivacyBoxCaption>
                <PrivacyBoxCaption variant="Transparent">
                    <PrivacyLabelStyles>USO DE COOKIES</PrivacyLabelStyles>
                </PrivacyBoxCaption>

                <PrivacyBoxDescription variant="Transparent">
                    <PrivacyTextStyles>{text}</PrivacyTextStyles>
                </PrivacyBoxDescription>
                <PrivacyBoxButton variant="Transparent">
                    <PrivacyAnchorStyles
                        variant="Focus"
                        href={url}
                        rel="noreferrer"
                        target="_blank"
                    >
                        VER MÁS
                    </PrivacyAnchorStyles>
                    <PrivacyButtonStyles>OK</PrivacyButtonStyles>
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
        "Este sitio utiliza cookies para ayudarnos a mejorar tu experiencia cada vez que lo visites. Al continuar navegando en él, estarás aceptando su uso. Podrás deshabilitarlas accediendo a la configuración de tu navegador.",
    url: "https://www.lasestrellas.tv/global/aviso-de-privacidad",
};

export default Privacy;
