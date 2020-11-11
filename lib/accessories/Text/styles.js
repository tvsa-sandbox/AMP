import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    font-size: ${props => (props.size ? theme.fontSizes[props.size] : theme.fontSizes.fxs)};
    line-height: ${theme.lineHeights.lxl3};
    color: ${props => (props.color ? theme.colors[props.color] : null)};
`;

const Label = ({ theme }) => css`
    ${common}
    background-color: ${theme.colors.Interaction};
    border-radius: 3px;
    color: ${theme.colors.Light};
    width: auto;
    height: 29px;
    text-align: center;
    max-width: 170px;
    font-size: ${theme.fontSizes.fxs};
    font-weight: bold;
    padding-left:${theme.space.lg};
    padding-right:${theme.space.lg};
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
    display: inline-flex;
`;

const variant = variants("variant", {
    Label,
});

const Text = styled("p")(variant);
export default Text;
