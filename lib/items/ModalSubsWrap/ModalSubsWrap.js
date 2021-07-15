import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icons, Box } from "../../accessories";
import { ModalSubsWrapStyles, ModalGrid, ModalSubsNumber, ModalBoxStyles, ModalSubsText, ModalSubsStatus, ModalBoxHead, ModalSubsSection, ModalSubsStatics, ModalBoxInfo } from "./styles";

const ModalSubsWrap = ({ active, handleModal }) => {

    return (
        <ModalSubsWrapStyles active={active} id="ModalSearch" handleClose={handleModal}>
            <ModalBoxStyles variant="Transparent">
                <ModalBoxHead variant="Transparent">
                    <Box variant="Flex">
                        <ModalSubsNumber>19</ModalSubsNumber>
                        <ModalSubsText>Ozan Kabak</ModalSubsText>
                    </Box>
                    <Box variant="Flex">
                        <Icons name="Link" variant="Outline" size="30" />
                        <ModalSubsStatus>Ingresa 68' (sale Curtis Jones)</ModalSubsStatus>
                    </Box>
                </ModalBoxHead>
                <Box variant="Transparent">
                    <ModalGrid variant="Transparent">
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics >1</ModalSubsStatics >
                            <ModalSubsSection>Remates</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>0</ModalSubsStatics>
                            <ModalSubsSection>Remates a puerta</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>0</ModalSubsStatics>
                            <ModalSubsSection>Jugadas creadas</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>7</ModalSubsStatics>
                            <ModalSubsSection>Toques</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>3</ModalSubsStatics>
                            <ModalSubsSection>Pases</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>66,77%</ModalSubsStatics>
                            <ModalSubsSection>Precisión de pases</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>1</ModalSubsStatics>
                            <ModalSubsSection>Quites</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>0</ModalSubsStatics>
                            <ModalSubsSection>Faltas recibidas</ModalSubsSection>
                        </ModalBoxInfo>
                        <ModalBoxInfo variant="Transparent">
                            <ModalSubsStatics>0</ModalSubsStatics>
                            <ModalSubsSection>Faltas cometidas</ModalSubsSection>
                        </ModalBoxInfo>
                    </ModalGrid >
                </Box>
            </ModalBoxStyles>
        </ModalSubsWrapStyles>
    );
};

ModalSubsWrap.propTypes = {
    active: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};

export default ModalSubsWrap;
