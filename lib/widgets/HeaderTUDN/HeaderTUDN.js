import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Utils from "@televisadigital/nxtv-utilities";
import { ModalHeaderTUDN } from "../../items";
import { Anchor, Button, Icons, Form } from "../../accessories";
import navigation from "./navigation.json";
import BlimSvg from "../../../assets/blimlogo.svg";

import {
    HeaderStyles,
    HeaderMobile,
    HeaderGrid,
    HeaderLogo,
    HeaderLink,
    HeaderSubLink,
    HeaderLiveLink,
    HeaderLinkContainer,
    HeaderNavigation,
    HeaderDinamic,
    InnerSearch,
    InnerSearchContainer,
    InnerSearchBox,
    InnerSearchInput,
    HeaderLinkBox,
    HeaderSocial,
    OpenSearch,
    SocialText,
    LogoAnchor,
    Blim,
    BlimIcon,
} from "./styles";

const HeaderTUDN = ({ breadcrumbs, uri, blim }) => {
    const [search, handleSearch] = useState(false);
    const [menu, handleMenu] = useState(false);
    const [blimCta, handleBlimCta] = useState(true);
    const blimButton = blim && (
        <Blim
            href="https://app.blim.com/Cs9x/lectabotonheader"
            target="_blank"
            aria-label="Blim"
            active={blimCta}
        >
            <BlimIcon src={BlimSvg} />
        </Blim>
    );

    return (
        <HeaderStyles as="header" id="Header">
            <HeaderMobile variant="Transparent" as="section">
                <LogoAnchor>
                    <Icons color="#fff" name="Deportes" size="120" variant="Transparent" />
                </LogoAnchor>
                {blimButton}
                <Button
                    aria-label="Menu"
                    variant="Transparent"
                    onClick={() => {
                        handleMenu(true);
                        handleBlimCta(true);
                    }}
                >
                    <Icons color="#fff" name="Menu" variant="Transparent" />
                </Button>
            </HeaderMobile>
            <HeaderGrid variant="Transparent" id="Navigation" active={menu}>
                <HeaderLogo variant="Transparent" as="section">
                    <LogoAnchor href="/">
                        <Icons color="#fff" name="Deportes" size="120" variant="Transparent" />
                    </LogoAnchor>
                    <Button
                        variant="Transparent"
                        onClick={() => {
                            handleMenu(false);
                            handleBlimCta(false);
                        }}
                        m="0"
                    >
                        <Icons color="#fff" name="Close" variant="Transparent" />
                    </Button>
                </HeaderLogo>
                <HeaderNavigation variant="Transparent" as="section">
                    <HeaderLinkContainer variant="Transparent" as="nav">
                        <HeaderLinkBox variant="Transparent">
                            {navigation.map(nav => {
                                let LinkTag;
                                if (nav.live) {
                                    LinkTag = HeaderLiveLink;
                                } else if (nav.subnav) {
                                    LinkTag = HeaderSubLink;
                                } else {
                                    LinkTag = HeaderLink;
                                }

                                return (
                                    <LinkTag
                                        href={nav.path}
                                        key={nav.name}
                                        // active={breadcrumbs[0].uri === nav.path}
                                    >
                                        {nav.name}
                                    </LinkTag>
                                );
                            })}
                        </HeaderLinkBox>
                    </HeaderLinkContainer>
                    {blimButton}
                    <InnerSearch variant="Transparent" as="section">
                        <InnerSearchContainer variant="Transparent">
                            <InnerSearchBox variant="Transparent">
                                <Form>
                                    <InnerSearchInput placeholder="Buscar" autoFocus />
                                </Form>
                            </InnerSearchBox>
                            <Button variant="Transparent" aria-label="hamburger">
                                <Icons color="#fff" name="Search" variant="Transparent" />
                            </Button>
                        </InnerSearchContainer>
                    </InnerSearch>
                </HeaderNavigation>
                <HeaderDinamic variant="Transparent">
                    <ModalHeaderTUDN active={search} handleModal={() => handleSearch(!search)} />
                    <SocialText>Síguenos en </SocialText>
                    <HeaderSocial variant="Transparent" as="nav">
                        <Anchor href="./">
                            <Icons color="#fff" name="Facebook" variant="Transparent" />
                        </Anchor>
                        <Anchor href="./">
                            <Icons color="#fff" name="Twitter" variant="Transparent" />
                        </Anchor>
                        <Anchor href="./">
                            <Icons color="#fff" name="YouTube" variant="Transparent" />
                        </Anchor>
                        <Anchor href="./">
                            <Icons color="#fff" name="Instagram" variant="Transparent" />
                        </Anchor>
                    </HeaderSocial>
                    <OpenSearch variant="Flex">
                        <Button variant="Transparent" onClick={() => handleSearch(true)}>
                            <Icons color="#fff" name="Search" size="30" variant="Transparent" />
                        </Button>
                    </OpenSearch>
                </HeaderDinamic>
            </HeaderGrid>
        </HeaderStyles>
    );
};

HeaderTUDN.propTypes = {
    // breadcrumbs: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         uri: PropTypes.string.isRequired,
    //     }),
    // ).isRequired,
    // uri: PropTypes.string.isRequired,
    blim: PropTypes.bool,
};
HeaderTUDN.defaultProps = {
    blim: false,
};

export default HeaderTUDN;
