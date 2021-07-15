import React from "react";
import PropTypes from "prop-types";
import { Image, Box, ProgressRing } from "../../accessories";
import { EndCardItem } from "../../items";

import {
    EndCardBox,
    EndCardImageBox,
    ButtonText,
    EndCardIcon,
    EndCardTitleBox,
    EndCardTitle,
    EndCardCopy,
    EndCardButton,
    EndCardBoxControls,
    EndCardPause,
    EndCardPlay,
    EndCardBoxThumbs,
    EndCardControls,
} from "./styles";

const EndCard = ({ title, src, ratio, progress, btntext, copy, replayCopy, related }) => {
    const thumbs = related.map(thumb => <EndCardItem imgsrc={thumb.src} />);
    return (
        <EndCardBox variant="Flex">
            <Box variant="Flex">
                <EndCardImageBox>
                    <EndCardControls>
                        <EndCardButton
                            icon="Replay"
                            variant="Transparent"
                            btniconsize={35}
                            aria-label="replay"
                        />
                        <EndCardIcon>
                            <EndCardPause
                                icon="Pause"
                                variant="Transparent"
                                btniconsize={35}
                                aria-label="pause"
                            />
                            <ProgressRing progress={progress} radius={30} stroke={3} />
                        </EndCardIcon>
                        <EndCardPlay
                            icon="Video"
                            variant="Transparent"
                            btniconsize={35}
                            aria-label="play"
                        />
                    </EndCardControls>
                    <Image src={src} ratio={ratio} />
                </EndCardImageBox>
                <EndCardTitleBox variant="Transparent">
                    <EndCardCopy color="gray">{copy}</EndCardCopy>
                    <EndCardTitle variant="Bold" color="gray">
                        {title}
                    </EndCardTitle>
                </EndCardTitleBox>
            </Box>
            {related ? <EndCardBoxThumbs variant="Flex">{thumbs}</EndCardBoxThumbs> : null}
        </EndCardBox>
    );
};

EndCard.propTypes = {
    ratio: PropTypes.string,
    Title: PropTypes.string,
    btntext: PropTypes.string,
    copy: PropTypes.string,
    replayCopy: PropTypes.string,
    progress: PropTypes.number,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
    related: PropTypes.arrayOf(PropTypes.shape({})),
};

EndCard.defaultProps = {
    ratio: "aspect16x9",
    title: "“¡Me enamoré, mamá!”: Clara le cuenta la verdad a Nieves",
    btntext: "Cancelar",
    copy: "A continuación",
    replayCopy: "Volver a Ver",
    progress: 0,
    src: {
        desktop: {},
        mobile: {},
    },
    related: [],
};

export default EndCard;
