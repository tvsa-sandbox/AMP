import React from "react";
import PropTypes from "prop-types";
import { SocialBoxStyles, ButtonSocial, IconsStyles } from "./styles";

const SocialBox = props => {
    const { items } = props;
    return (
        <SocialBoxStyles variant="Flex">
            {items.map((item, index) => {
                const KEY = `${items.title}-${index}`;
                return (
                    <ButtonSocial aria-label="botoncompartir" key={KEY}>
                        <IconsStyles name={item.name} variant="Transparent" color={item.name} {...item} />
                    </ButtonSocial>
                );
            })}
        </SocialBoxStyles>
    );
};

SocialBox.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

SocialBox.defaultProps = {
    items: [],
};

export default SocialBox;
