import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, Text } from "../../accessories";
import SocialBox from "../SocialBox";
import { SocialContainer } from "./styles";

const SocialModal = ({ active, handleModal, closebtn, social }) => {
    return (
        <Modal active={active} id="ModalSearch" handleClose={handleModal} closebtn={closebtn}>
            <SocialContainer variant="Flex" color="darkfooter">
                <Text size="fxs" color="gray">
                    COMPARTIR
                </Text>
                <SocialBox items={social} />
                <Button color="white" variant="Transparent" onClick={() => alert("funcionvacia")}>
                    Cancelar
                </Button>
            </SocialContainer>
        </Modal>
    );
};

SocialModal.propTypes = {
    active: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    closebtn: PropTypes.bool,
};

export default SocialModal;
