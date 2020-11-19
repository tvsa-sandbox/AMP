import styled, { css } from "styled-components";
import styledMap from "../../helpers/stylemap";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    width: 100%;
    height: auto;
    display: block;
    align-items: center;
    margin: ${props => (props.my ? props.theme.space[props.my] : null)} 0;
`;

const Solid = ({ theme }) => css`
    ${common}
    background: ${props => (props.color ? theme.colors[props.color] : theme.colors.Light)};
    position: relative;
`;

const Transparent = () => css`
    ${common}
    background: transparent;
    position: relative;
`;

const Flex = () => css`
    ${common}
    display: flex;
    justify-content: ${styledMap("align", {
        left: "flex-start",
        right: "flex-end",
        center: "center",
        default: "flex-start",
    })};
`;

const Space = ({ theme }) => css`
    ${common}
    margin: ${theme.space.lg};
`;

const Auto = ({ theme }) => css`
    ${common}
    width: auto;
`;

const variant = variants("variant", {
    Solid,
    Space,
    Flex,
    Transparent,
    Auto,
});

const Box = styled("div")(variant);
export default Box;
