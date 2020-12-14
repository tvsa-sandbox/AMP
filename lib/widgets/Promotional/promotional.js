import React from "react";
import PropTypes from "prop-types";
import { Box, Image, Title, Time } from "../../accessories";
import { PromotionalBox, PromotionalButton } from "./styles";

const Promotional = props => {
    const { title, date, btntext, imgsrc, imgratio } = props;
    return (
        <Box variant="Transparent">
            <Image ratio={imgratio} src={imgsrc} />
            <PromotionalBox variant="Transparent">
                <Title variant="h3">{title}</Title>
                <Time>{date}</Time>
                <PromotionalButton>{btntext}</PromotionalButton>
            </PromotionalBox>
        </Box>
    );
};
Promotional.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    btntext: PropTypes.string,
    imgsrc: PropTypes.shape({}),
    imgratio: PropTypes.string,
};
Promotional.defaultProps = {
    title: "¿Quién es la máscara? 2020",
    date: "Domingo 8:30 pm",
    btntext: "Todo sobre episodio 6",
    imgsrc: {},
    imgratio: "aspect16x9",
};

export default Promotional;
