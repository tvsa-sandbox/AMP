import React from "react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Utils from "@televisadigital/nxtv-utilities";
import { Title, Box, Image } from "accessories";

import EndCard from "../../lib/widgets/EndCard";

import Mock from "./imageMock.json";

export default {
    decorators: [withKnobs],
    title: "Desing System/widgets/EndCard",
};

export const ENDCARD = args => {
    const { aspect = "aspect16x9", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    const progress = number("Progreso", 90);
    const title = text("Titulo", "Una Familia de Diez");
    const btntext = text("Botón", "Detener");
    return (
        <div>
            <Title variant="h2">End Card</Title>
            <Box
                style={{
                    position: "relative",
                    maxWidth: "768px",
                    margin: "2em auto",
                }}
                color="Danger"
            >
                <Image src={SRC} />
                <EndCard
                    ratio={aspect}
                    src={SRC}
                    progress={progress}
                    title={title}
                    btntext={btntext}
                />
            </Box>
        </div>
    );
};
