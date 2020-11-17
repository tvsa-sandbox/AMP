import React from "react";
import { Icons } from "../../accessories";
import { SocialBoxStyles, ButtonSocial } from "./styles";

const SocialBox = props => {
    return (
        <SocialBoxStyles variant="Flex">
            <ButtonSocial bg="facebook" rounded="50px" aria-label="botoncompartir">
                <Icons name="Facebook" variant="Transparent" color="white" />
            </ButtonSocial>
            <ButtonSocial bg="twitter" rounded="50px" aria-label="botoncompartir">
                <Icons name="Twitter" variant="Transparent" color="white" />
            </ButtonSocial>
            <ButtonSocial bg="gray" rounded="50px" aria-label="botoncompartir">
                <Icons name="Email" variant="Transparent" color="black" />
            </ButtonSocial>
            <ButtonSocial bg="gray" rounded="50px" aria-label="botoncompartir">
                <Icons name="Link" variant="Transparent" color="black" />
            </ButtonSocial>
        </SocialBoxStyles>
    );
};

export default SocialBox;
