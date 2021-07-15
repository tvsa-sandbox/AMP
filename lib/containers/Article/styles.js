import styled from "styled-components";
import { Box, Time, Title, Text, Info, Icons, Image } from "accessories";

const ArticleStyles = styled.section(
    {
        width: "100%",
    },
    layout,
    color,
);

ArticleStyles.defaultProps = {
    bg: "Light.main",
};

const ArticleBoxStyles = styled(Box)(
    {
        maxWidth: "1440px",
        width: "100%",
        height: "100%",
        margin: "auto",
    },
    color,
    layout,
    space,
);

const ArticleBoxLeftStyles = styled(Box)(
    {
        maxWidth: "1440px",
        height: "auto",
        top: 0,
        overflow: "hidden",
    },
    // TODO ver estos estilo de style system
    variant({
        variants: {
            Responsive: {
                width: ["100%", "45%"],
                position: ["relative", "sticky"],
                maxHeight: ["311px", "100vh"],
            },
        },
    }),
    color,
    layout,
    space,
);

ArticleBoxLeftStyles.defaultProps = {
    marginBottom: ["xl", "zreo"],
};

const ArticleRightStyles = styled.aside(
    {
        right: 0,
        margin: 0,
        top: 0,
        overflowY: "scroll",
        height: "100%",
    },
    variant({
        variants: {
            Responsive: {
                width: ["100%", "55%"],
                position: ["inherit", "absolute"],
            },
        },
    }),
    layout,
    size,
    space,
);

ArticleRightStyles.defaultProps = {
    padding: ["md", "xl3"],
};

const ArticleBoxIconStyles = styled(Box)(
    {
        position: "absolute",
        justifyContent: "center",
        display: "flex",
    },
    variant({
        variants: {
            Responsive: {
                top: ["282px", "40%"],
                flexDirection: ["row", "column"],
            },
        },
    }),
    layout,
    space,
    size,
);

ArticleBoxIconStyles.defaultProps = {
    width: ["100%", "90%"],
};

const ArticleIconStyles = styled(Icons)(layout, space, size);

ArticleIconStyles.defaultProps = {
    margin: ["md", "md"],
    cursor: "pointer",
};

const ArticleBoxImageStyles = styled(Box)(
    {
        width: "100%",
        overflow: "hidden",
        height: "100%",
    },
    color,
    layout,
    space,
);

const ArticleImageStyles = styled(Image)({}, layout, space);

const ArticleInfoStyles = styled(Box)(
    {
        width: "100%",
        display: "flex",
        "::after": {
            background: "#212121",
            bottom: 0,
            opacity: 0.2,
            content: '""',
            display: "flex",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            height: "1px",
            width: "100%",
        },
    },
    color,
    layout,
    space,
);

ArticleInfoStyles.defaultProps = {
    mx: ["base", "lg"],
    my: ["base", "zero"],
};

const ArticleTitleStyles = styled(Title)(color, layout, space);

ArticleTitleStyles.defaultProps = {
    margin: ["md", "xl"],
};

const ArticleTextBodyStyles = styled(Text)(color, layout, space, typography);

ArticleTextBodyStyles.defaultProps = {
    margin: "lg",
    fontSize: ["base", "lg"],
    lineHeight: "28px",
};

const ArticleDescriptionStyles = styled(Text)(color, layout, space, typography);

ArticleDescriptionStyles.defaultProps = {
    mx: ["base", "lg"],
    my: ["base", "zero"],
};

const ArticleTimeStyles = styled(Time)(color, layout, space);

ArticleTimeStyles.defaultProps = {
    mx: "sm",
    my: "xl",
    color: "Dark.t60",
};

const ArticleCreditStyles = styled(Info)(color, layout, space);

ArticleCreditStyles.defaultProps = {
    margin: "xl",
    color: "Dark.t50",
};

export {
    ArticleStyles,
    ArticleBoxStyles,
    ArticleBoxLeftStyles,
    ArticleRightStyles,
    ArticleBoxIconStyles,
    ArticleBoxImageStyles,
    ArticleImageStyles,
    ArticleTitleStyles,
    ArticleTextBodyStyles,
    ArticleDescriptionStyles,
    ArticleInfoStyles,
    ArticleTimeStyles,
    ArticleCreditStyles,
    ArticleIconStyles,
};
