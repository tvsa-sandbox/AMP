import styled, { css, keyframes } from "styled-components";

const SwitchButtonStyles = ({ theme }) => css`
    opacity: 0;
    width: 0;
    height: 0;
    z-index: -1;
`;
const SwitchStyles = styled.input.attrs({ type: "checkbox" })(SwitchButtonStyles);
const LabelStyles = styled("label")(
    ({ theme }) => css`
        background-color: ${props =>
            props.disabled ? theme.colors.Interaction : theme.colors.grayfooter};
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        border-radius: 34px;
    `,
);
const CircleStyles = styled("div")(
    ({ theme }) => css`
        position: absolute;
        cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.4s;

        &::before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: ${theme.colors.gray};
            transition: 0.4s;
            border-radius: 50%;
        }

        ${SwitchStyles}:checked + & {
            background-color: ${theme.colors.Interaction};
            border-radius: 34px;
        }

        ${SwitchStyles}:checked + &::before {
            transform: translateX(26px);
        }

        ${SwitchStyles}:focus + & {
            box-shadow: 0 0 0.1em ${theme.colors.Interaction};
        }

        ${SwitchStyles}:disabled + & {
            pointer-events: none;
            background: ${theme.colors.grayfooter};
            border-radius: 34px;
        }
    `,
);

export { SwitchStyles, CircleStyles, LabelStyles };
