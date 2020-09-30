import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { ModalHeader } from "../../items";
import { Anchor, Button, Icons, Form } from "../../accessories";
import navigation from "./navigation.json";

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
} from "./styles";

const Header = ({ filter, breadcrumbs, social }) => {
    const [logo, setLogo] = useState("LasEstrellas");
    const [logoSize, setLogoSize] = useState("60");
    const [search, handleSearch] = useState(false);
    const [menu, handleMenu] = useState(false);
    const URI = breadcrumbs.length > 0 ? breadcrumbs[0].uri : "";
    // const SECTION = URI.match(/^\/[a-z]+[a-z$]/g);

    useEffect(() => {
        const BODY = document.querySelector("body");
        if (BODY) {
            BODY.style.overflow = menu ? "hidden" : "visible";
        }
        setLogo(window.innerWidth > 1024 ? "LasEstrellasFull" : "LasEstrellas");
        setLogoSize(window.innerWidth > 1024 ? "160" : "60");
    });

    return (
        <HeaderStyles as="header" id="Header">
            <HeaderMobile variant="Transparent" as="section">
                <Anchor aria-label="Logo" href="/">
                    <Icons color="#fff" name="LasEstrellas" size="60" variant="Transparent" />
                </Anchor>
                <Button aria-label="Menu" variant="Transparent" onClick={() => handleMenu(true)}>
                    <Icons color="#fff" name="Menu" variant="Transparent" />
                </Button>
            </HeaderMobile>
            <HeaderGrid variant="Transparent" id="Navigation" active={menu}>
                <HeaderLogo variant="Transparent" as="section">
                    <Anchor aria-label="Menu" href="/">
                        <Icons color="#fff" name={logo} size={logoSize} variant="Transparent" />
                    </Anchor>
                    <Button variant="Transparent" onClick={() => handleMenu(false)}>
                        <Icons color="#fff" name="Close" variant="Transparent" />
                    </Button>
                </HeaderLogo>
                <HeaderNavigation variant="Transparent" as="section">
                    <HeaderLinkContainer variant="Transparent" as="nav" aria-label="mainnavigation">
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
                                        // active={SECTION[0] === nav.path}
                                    >
                                        {nav.name}
                                    </LinkTag>
                                );
                            })}
                        </HeaderLinkBox>
                    </HeaderLinkContainer>
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
                    <ModalHeader
                        active={search}
                        handleModal={() => handleSearch(!search)}
                        filter={filter}
                    />
                    <HeaderSocial variant="Transparent" as="nav">
                        {social.map(item => (
                            <Anchor href={item.href} key={item.name} target="_blank">
                                <Icons color={item.color} name={item.name} variant="Transparent" />
                            </Anchor>
                        ))}
                    </HeaderSocial>
                    <OpenSearch variant="Flex">
                        <Button
                            variant="Transparent"
                            onClick={() => handleSearch(true)}
                            aria-label="buscar"
                        >
                            <Icons color="#fff" name="Search" size="30" variant="Transparent" />
                        </Button>
                    </OpenSearch>
                </HeaderDinamic>
            </HeaderGrid>
        </HeaderStyles>
    );
};

Header.propTypes = {
    // breadcrumbs: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         uri: PropTypes.string.isRequired,
    //     }),
    // ).isRequired,
    filter: PropTypes.string,
    social: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            color: PropTypes.string,
            href: PropTypes.string,
        }),
    ).isRequired,
};
Header.defaultProps = {
    filter: "",
};

export default Header;
