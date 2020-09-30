import styled, { css } from "styled-components";

const InfoStyles = ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes.fxs};
`;

const Info = styled("span")(InfoStyles);
export default Info;
