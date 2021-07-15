import React from "react";
import PropTypes from "prop-types";
import { SwitchStyles, CircleStyles, LabelStyles } from "./styles";

const SwitchButton = props => {
    const { value, checked, onChange, id, disabled, title } = props;
    return (
        <LabelStyles disabled={disabled} title={title}>
            <SwitchStyles
                id={id}
                type="checkbox"
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <CircleStyles />
        </LabelStyles>
    );
};

SwitchButton.propTypes = {
    disabled: PropTypes.bool,
};
SwitchButton.defaultProps = {
    disabled: false,
};

export default SwitchButton;
