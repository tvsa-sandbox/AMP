import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import LayoutPWA from "../../../layoutPWA";
import { PageStyles, BoxBodyFull, BoxContainer } from "./styles";
import { GridHomePWA } from "../../../widgets";

const HomePWA = props => {
    const { grid } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <LayoutPWA foot breadcrumbs={[]}>
            <PageStyles>
                <BoxBodyFull variant="Transparent">
                    <BoxContainer variant="Transparent"></BoxContainer>
                    <GridHomePWA src={grid} />
                </BoxBodyFull>
            </PageStyles>
        </LayoutPWA>
    );
};

HomePWA.propTypes = {
    grid: PropTypes.shape({}),
};

HomePWA.defaultProps = {
    grid: [],
};

export default HomePWA;
