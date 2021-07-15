import React from "react";
import { Title } from "accessories";
import { Spiner } from "accessories";

export default {
    title: "Desing System/Atoms/Spiner",
    component: Spiner,
};

export const SPINER = () => {
return (
    <div>
        <Title variant="h2">Spiner</Title>
        <Spiner type="tudn" />
    </div>
);
};
