import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icons, Button, Modal } from "../../accessories";
import { ModalSearchBox, ModalSearchInput } from "./styles";

const ModalHeaderTUDN = ({ active, handleModal, filter }) => {
    const [textToSearch, setTextToSearch] = useState("");
    const handleSearch = () => {
        window.location = `/busqueda?q=${textToSearch}${filter}`;
    };

    const handleInput = e => {
        if (e.key === "Enter") {
            handleSearch();
        } else {
            setTextToSearch(e.target.value);
        }
    };

    return (
        <Modal active={active} id="ModalSearch" handleClose={handleModal}>
            <ModalSearchBox variant="Transparent">
                <Button variant="Transparent">
                    <Icons color="#fff" name="Search" variant="Transparent" />
                </Button>
                <ModalSearchInput
                    placeholder="Encuentra videos, galerías, artículos..."
                    autoFocus
                    onKeyUp={e => handleInput(e)}
                />
            </ModalSearchBox>
            <Button onClick={() => handleSearch}>Buscar</Button>
        </Modal>
    );
};

ModalHeaderTUDN.propTypes = {
    active: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default ModalHeaderTUDN;
