import styled, { css } from "styled-components";
import { Box, Anchor, Info } from "../../accessories";

const SignupItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 340px;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 450px;
        }
    `,
);

const SignupPrivacyContent = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 300px;
        margin: ${theme.space.md} ${theme.space.auto};
        text-align: left;
    `,
);

const SignupInfoStyles = styled(Info)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.graycataloge};
        line-height: ${theme.lineHeights.lsm};
    `,
);

const SignupAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.graycataloge};
        text-decoration: underline;
    `,
);

export { SignupItemStyles, SignupAnchorStyles, SignupInfoStyles, SignupPrivacyContent };
