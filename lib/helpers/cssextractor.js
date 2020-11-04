import css from "css";

// function getClassNames(node) {
//     return [node.className, ...Array.from(node.children).map(getClassNames)].flat();
// }

// export default function extractCSS(node) {
//     // Collect class names for a DOM subtree
//     // Works for styled-components and CSS modules (anything based on CSS classes)
//     const classNames = getClassNames(node)
//         .map(name => name.split(" "))
//         .flat()
//         .map(name => `.${name}`);

//     // Gets embedded CSS for the entire page(query for storybook styled components data-styled tag atributte )
//     const cssStyles = Array.from(document.head.querySelectorAll("[data-styled]"))
//         .map(style => style.innerHTML)
//         .join("");

//     console.log("estilos", cssStyles);

//     // Filters CSS for our classes
//     const parsedCSS = css.parse(cssStyles);
//     parsedCSS.stylesheet.rules = parsedCSS.stylesheet.rules
//         .filter(rule => rule.type === "rule")
//         .filter(rule =>
//             rule.selectors.some(selector => classNames.some(name => name === selector)),
//         );

//     return css.stringify(parsedCSS);
// }

export default function extractCSS() {
    const cssStyles = Array.from(document.head.querySelectorAll("[data-styled]"))
        .map(style => style.innerHTML)
        .join("");

    // console.log("estilos", cssStyles);

    return css.stringify(css.parse(cssStyles), { compress: true });
}
