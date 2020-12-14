import styled, { css } from "styled-components";
import { Title, Box, Anchor, Inputs, Icons } from "../../accessories";
import FormStyles from "../../accessories/Form/styles";
import { ButtonStyles } from "../../accessories/Button/styles";

const HeaderStyles = styled.div(
    ({ theme }) => css`
        background-color: ${theme.colors.darkfooter};
        position: relative;
        width: 100%;
        z-index: 15;

        ${FormStyles} {
            min-width: auto;
        }
    `,
);
const HeaderGrid = styled(Box)(
    ({ theme }) => css`
        display: ${props => (props.active ? "grid" : "none")};
        grid-template-columns: 100%;
        grid-template-rows: 75px 1fr auto;
        grid-template-areas:
            "logo"
            "navigation"
            "dinamic";
        position: fixed;
        background-color: ${theme.colors.darkfooter};
        width: 100vw;
        max-width: 1280px;
        height: 100vh;
        top: 0;
        overflow-y: scroll;
        margin: 0 auto;

        @media (min-width: 1025px) {
            display: grid;
            grid-template-rows: 68px;
            grid-template-columns: 15% 70% 15%;
            grid-template-areas: "logo navigation dinamic";
            position: relative;
            width: 100%;
            height: auto;
            background: none;
            overflow-y: hidden;
            padding-bottom: 9px;
        }
    `,
);

const HeaderMobile = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 75px;
        justify-content: space-between;
        border-bottom: ${theme.colors.Interaction} 4px solid;

        @media (min-width: 1025px) {
            display: none;
        }
    `,
);

const HeaderTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        text-transform: uppercase;
    `,
);

const HeaderLogo = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        grid-area: logo;
        height: 75px;
        justify-content: space-between;
        margin: 0;
        border-bottom: ${theme.colors.Interaction} 4px solid;

        @media (min-width: 1025px) {
            border-bottom: ${theme.colors.Interaction} 0px solid;
            margin: 0.375rem auto 0.1875rem;
        }

        ${ButtonStyles} {
            @media (min-width: 1025px) {
                display: none;
            }
        }
    `,
);

const HeaderNavigation = styled(Box)`
    grid-area: navigation;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 1025px) {
        align-items: center;
        justify-content: center;
    }
`;

const HeaderLinkContainer = styled(Box)`
    order: 2;
    width: 100%;
    padding: 0.75rem;

    @media (min-width: 1025px) {
        display: flex;
        justify-content: center;
        width: auto;
        padding: 0 0.5625rem;
    }
`;

const HeaderLink = styled(Anchor)(
    ({ theme }) => css`
        font-family: ${theme.fonts[3]};
        position: relative;
        font-weight: 700;
        letter-spacing: 2px;
        text-rendering: optimizeLegibility;
        font-size: ${theme.fontSizes.flg};
        line-height: 2.1rem;
        width: 100%;
        text-decoration: none;
        text-transform: uppercase;
        padding: 0.75rem;
        color: ${props => (props.active ? theme.colors.Interaction : theme.colors.gray)};

        @media (min-width: 1025px) {
            font-size: ${theme.fontSizes.fsm};
            width: auto;
            &:hover {
                opacity: 0.5;
            }
        }
    `,
);

const HeaderSubLink = styled(HeaderLink)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.flg};

        @media (min-width: 1025px) {
            display: none;
        }
    `,
);

const HeaderLiveLink = styled(HeaderLink)(
    ({ theme }) => css`
        @keyframes pulsar {
            0% {
                height: 7px;
                opacity: 0.2;
                width: 7px;
            }

            50% {
                height: 8px;
                opacity: 1;
                width: 8px;
            }

            100% {
                height: 7px;
                opacity: 0.2;
                width: 7px;
            }
        }
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &::before {
            background: red;
            animation-play-state: running;
            animation: pulsar 2s 0.5s ease-in-out infinite;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            height: 7px;
            width: 7px;
            margin-right: ${theme.space.xs};

            @media (min-width: 1025px) {
                justify-content: flex-start;
            }
        }
    `,
);

const HeaderLinkBox = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        text-align: right;
        margin: 1.5rem 0;

        @media (min-width: 1025px) {
            text-align: center;
            margin: ${theme.space.zero};
            width: auto;
        }
    `,
);

const HeaderDinamic = styled(Box)(
    ({ theme }) => css`
        grid-area: dinamic;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-top: ${theme.space.zero};
        padding: 0.75rem;

        @media (min-width: 1025px) {
            justify-content: space-around;
            padding: 0;
        }
    `,
);

const InnerSearch = styled(Box)`
    display: flex;
    order: 1;
    width: 100%;
    padding: 0.75rem;

    @media (min-width: 1025px) {
        display: none;
    }
`;

const InnerSearchContainer = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0.5625rem;
        background: ${theme.colors.Secondary};
    `,
);

const InnerSearchBox = styled(Box)(
    ({ theme }) => css`
        border-left: ${theme.colors.gray} 1px solid;
        flex-grow: 1;
        box-sizing: inherit;
    `,
);

const InnerSearchInput = styled(Inputs)(
    ({ theme }) => css`
        align-self: stretch;
        background: none;
        border: 0;
        box-sizing: content-box;
        color: ${theme.colors.Dark};
        flex-grow: 1;
        width: 90%;
        padding: 0 0.75rem;
        margin: ${theme.space.zero};
        line-height: 1.225rem;
    `,
);

const HeaderSocial = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-bottom: 0.75rem;
        padding: 0.75rem ${theme.space.zero};

        @media (min-width: 1025px) {
            display: none;
        }
    `,
);

const OpenSearch = styled(Box)`
    visibility: collapse;

    @media (min-width: 1025px) {
        visibility: visible;
        justify-content: flex-end;
    }
`;

const LogoDesktop = styled(Icons)`
    width: 160px;
`;

const HeaderStylesAMP = styled.header(
    ({ theme }) => css`
        display: flex;
        height: 50px;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        background-color: ${theme.colors.darkfooter};
    `,
);

export {
    HeaderStyles,
    HeaderGrid,
    HeaderMobile,
    HeaderTitle,
    HeaderLogo,
    HeaderLink,
    HeaderSubLink,
    HeaderLiveLink,
    HeaderLinkContainer,
    HeaderLinkBox,
    HeaderNavigation,
    HeaderDinamic,
    InnerSearch,
    InnerSearchContainer,
    InnerSearchBox,
    InnerSearchInput,
    HeaderSocial,
    OpenSearch,
    LogoDesktop,
    HeaderStylesAMP,
};
