import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { LeadImageStyles, LeadImageInfo, LeadImageText, BoxTextStyles } from "./styles";
import Image from "../../accessories/Image";

const LeadImage = ({ attribution, src, ratio }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;

    return (
        <LeadImageStyles variant="Transparent">
            <Image alt="Lead" ratio={ratio} src={src} />
            <BoxTextStyles variant="Transparent">
                {attribution && (
                    <LeadImageInfo color={ui === "tudn" ? "Dark" : null}>
                        {attribution}
                    </LeadImageInfo>
                )}
                <LeadImageText>
                    Angelique Boyer con toda la mejor actitud en su regreso triunfal a Tik Tok por
                    segunda vez
                </LeadImageText>
            </BoxTextStyles>
        </LeadImageStyles>
    );
};

LeadImage.propTypes = {
    attribution: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

LeadImage.defaultProps = {
    attribution: "Maddie Meyer/Getty Images",
    src: {},
    ratio: "aspect16x9",
};

export default LeadImage;
