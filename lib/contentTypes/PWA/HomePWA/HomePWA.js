import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import LayoutPWA from "../../../layoutPWA";
import { PageStyles, BoxBodyFull, BoxContainer } from "./styles";
import { GridHomePWA } from "../../../widgets";
import { ConnectionPWA } from "../../../widgets";

const HomePWA = props => {
    const { grid, items } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <LayoutPWA foot breadcrumbs={[]}>
            <ConnectionPWA />
            <PageStyles>
                <BoxBodyFull variant="Transparent">
                    <BoxContainer variant="Transparent"></BoxContainer>
                    <GridHomePWA src={grid} items={items} />
                </BoxBodyFull>
            </PageStyles>
        </LayoutPWA>
    );
};

HomePWA.propTypes = {
    grid: PropTypes.shape({}),
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

HomePWA.defaultProps = {
    grid: [],
    items: [],
};

export default HomePWA;
