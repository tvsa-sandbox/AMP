import React from "react";
import PropTypes from "prop-types";
import { Image, Box, Text, Icons, ProgressRing } from "../../accessories";
import { EndCardBox, EndCardImageBox, EndCardButton, EndCardIcon, EndCardTitleBox } from "./styles";

const EndCard = ({ title, src, ratio }) => {
    return (
        <EndCardBox variant="Flex">
            <Box variant="Flex">
                <EndCardImageBox>
                    <EndCardIcon>
                        <ProgressRing progress={90} radius={33} />
                        <Icons name="Video" color="white" />
                    </EndCardIcon>
                    <Image src={src} ratio={ratio} />
                </EndCardImageBox>
                <EndCardTitleBox variant="Transparent">
                    <Text color="gray">A continuación</Text>
                    <Text variant="Bold" color="gray" size="fsm" lh="lbase">
                        {title}
                    </Text>
                </EndCardTitleBox>
            </Box>
            <EndCardButton>Cancelar</EndCardButton>
        </EndCardBox>
    );
};

EndCard.propTypes = {
    ratio: PropTypes.string,
    Title: PropTypes.string,
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
    title: "Titulo de Video",
    src: {
        desktop: {},
        mobile: {},
    },
};

export default EndCard;
