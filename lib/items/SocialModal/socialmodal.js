import React from "react";
import PropTypes from "prop-types";
import { Icons, Button, Modal, Text } from "../../accessories";
import { SocialBox, SocialContainer, ButtonSocial } from "./styles";

const SocialModal = ({ active, handleModal }) => {
    return (
        <Modal active={active} id="ModalSearch" handleClose={handleModal}>
            <SocialContainer variant="Flex" color="darkfooter">
                <Text size="fxs" color="gray">
                    COMPARTIR
                </Text>
                <SocialBox variant="Flex">
                    <ButtonSocial bg="facebook" rounded="50px">
                        <Icons name="Facebook" variant="Transparent" color="white" />
                    </ButtonSocial>
                    <ButtonSocial bg="twitter" rounded="50px">
                        <Icons name="Twitter" variant="Transparent" color="white" />
                    </ButtonSocial>
                    <ButtonSocial bg="gray" rounded="50px">
                        <Icons name="Email" variant="Transparent" color="black" />
                    </ButtonSocial>
                    <ButtonSocial bg="gray" rounded="50px">
                        <Icons name="Link" variant="Transparent" color="black" />
                    </ButtonSocial>
                </SocialBox>
                <Button variant="Transparent" onClick={() => handleModal}>
                    Cerrar
                </Button>
            </SocialContainer>
        </Modal>
    );
};

SocialModal.propTypes = {
    active: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default SocialModal;
