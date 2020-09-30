import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    color: ${theme.colors.Interaction};
    text-decoration: none;
    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes.fbase};
    cursor: pointer;
    min-height: 48px;
`;

const Active = ({ theme }) => css`
    ${common}
    border-bottom: solid 2px;
    border-color: ${theme.colors.Interaction};
    width: 0px;
`;

const Focus = () => css`
    ${common}

    &:hover {
        opacity: 0.7;
    }
`;

const variant = variants("variant", {
    Active,
    Focus,
});

const Anchor = styled("a")(variant);

export default Anchor;
