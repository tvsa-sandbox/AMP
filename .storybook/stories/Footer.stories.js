import React, { Fragment } from "react";
import { Footer, FooterTLJ, FooterNews } from "widgets";
import { Title, Box } from "accessories";

import FooterAMP from "../../lib/widgets/Footer/FooterAMP";

export default {
    title: "Desing System/Widgets/Footer",
};

export const FOOTER = () => {
    return (
        <div>
            <Title variant="h2">Footer</Title>
            <Footer />
        </div>
    );
};

export const FOOTERAMP = () => {
    return (
        <div>
            <Title variant="h2">Footer AMP</Title>
            <FooterAMP />
        </div>
    );
};

export const FOOTERTLJ = () => {
    return (
        <div>
            <Title variant="h2">FooterTLJ</Title>
            <FooterTLJ />
        </div>
    );
};

export const FOOTERNEWS = () => {
    return (
        <div>
            <Title variant="h2">FooterNews</Title>
            <FooterNews />
        </div>
    );
};
