import styled, { css } from "styled-components";
import Icons from "../Icons";
import styledMap from "../../helpers/stylemap";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    padding-left: ${theme.space.md};
    padding-right: ${theme.space.md};
    font-size: ${theme.fontSizes.fmd};
    font-family: ${theme.fonts[1]};
    min-height: 40px;
    min-width: 40px;
    border-radius: ${props => (props.rounded ? props.rounded : "3px")};
    cursor: pointer;
    display: flex;
    align-items: center;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }
`;

const Solid = ({ theme }) => css`
    ${common}
    background-color: ${props => (props.bg ? theme.colors[props.bg] : theme.colors.Interaction)};
    color:${styledMap("color", {
        elnueve: theme.colors.Secondary,
        default: theme.colors.gray,
    })};

    &:hover {
        opacity: 0.5;
    }
`;

const Active = ({ theme }) => css`
    ${common}
    background-color: ${theme.colors.Light};
    color: ${theme.colors.Interaction};
`;

const Outline = ({ theme }) => css`
    ${common}
    color: ${theme.colors.Interaction};
    border: solid 2px ${theme.colors.Interaction};
`;

const Inactive = ({ theme }) => css`
    ${common}
    background-color: ${theme.colors.Interaction};
    color: ${theme.colors.gray};
    opacity: .7;
`;

const Transparent = ({ theme }) => css`
    ${common}
    background-color: transparent;
    color: ${styledMap("color", {
        white: theme.colors.gray,
        default: theme.colors.Interaction,
    })};
`;

const variant = variants("variant", {
    Solid,
    Outline,
    Active,
    Inactive,
    Transparent,
});

const ButtonStyles = styled("button")(variant);

const ButtonIcon = styled(Icons)(
    ({ theme }) => css`
        fill: ${props => (props.iconcolor ? theme.colors[props.iconcolor] : theme.colors.gray)};
    `,
);

export { ButtonStyles, ButtonIcon };
