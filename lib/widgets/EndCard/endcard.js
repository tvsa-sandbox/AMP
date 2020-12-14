import React from "react";
import PropTypes from "prop-types";
import { Image, Box, Text, Icons, ProgressRing } from "../../accessories";
import {
    EndCardBox,
    EndCardImageBox,
    EndCardButton,
    EndCardIcon,
    EndCardTitleBox,
    EndCardTitle,
    EndCardCopy,
} from "./styles";

const EndCard = ({ title, src, ratio, progress, btntext, copy }) => {
    return (
        <EndCardBox variant="Flex">
            <Box variant="Flex">
                <EndCardImageBox>
                    <EndCardIcon>
                        <ProgressRing progress={progress} radius={33} />
                        <Icons name="Video" color="white" />
                    </EndCardIcon>
                    <Image src={src} ratio={ratio} />
                </EndCardImageBox>
                <EndCardTitleBox variant="Transparent">
                    <EndCardCopy color="gray">{copy}</EndCardCopy>
                    <EndCardTitle variant="Bold" color="gray">
                        {title}
                    </EndCardTitle>
                </EndCardTitleBox>
            </Box>
            <EndCardButton>{btntext}</EndCardButton>
        </EndCardBox>
    );
};

EndCard.propTypes = {
    ratio: PropTypes.string,
    Title: PropTypes.string,
    btntext: PropTypes.string,
    copy: PropTypes.string,
    progress: PropTypes.number,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
};

EndCard.defaultProps = {
    ratio: "aspect16x9",
    title: "“¡Me enamoré, mamá!”: Clara le cuenta la verdad a Nieves",
    btntext: "Cancelar",
    copy: "A continuación",
    progress: 0,
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EndCard;
