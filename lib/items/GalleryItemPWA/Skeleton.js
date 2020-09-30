import React from "react";
import Placeholder from "../../accessories/Placeholder";
import { SkeletonStyleAside, GalleryItemStyles, SkeletonStyleImage } from "../GalleryItem/styles";

const Skeleton = props => {
    return (
        <GalleryItemStyles variant="transparent">
            <SkeletonStyleImage>
                <Placeholder ratio="aspect16x9" />
            </SkeletonStyleImage>
            <SkeletonStyleAside />
        </GalleryItemStyles>
    );
};

export default Skeleton;
