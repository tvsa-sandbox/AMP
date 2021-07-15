import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "../../accessories/Image";
import {
    HighImpactItemStyles,
    HighImpactItemBox,
    HighImpactItemTimeStyles,
    HighImpactItemTimeBox,
    HighImpactItemLabelStyles,
    HighImpactItemTitleStyles,
    HighImpactItemTextStyles,
    HighImpactItemImageContent,
    HighImpactItemCaption,
} from "./styles";

const HighImpactItem= props => {
    const {
        ratio,
        src,
        datas,
    } = props;
    return (
       
            <HighImpactItemStyles>
                 {datas.map(data=> {
            return (
                <Fragment key={data.id}>
                <HighImpactItemBox variant="Transparent">
                    <HighImpactItemImageContent variant="Transparent">
                        <HighImpactItemTimeBox>
                        <HighImpactItemTimeStyles>{data.time}</HighImpactItemTimeStyles>
                        </HighImpactItemTimeBox>
                        <Image src={src} ratio={ratio} />
                    </HighImpactItemImageContent>
                    <HighImpactItemCaption variant="Transparent">
                                <HighImpactItemLabelStyles>
                                    {data.label}
                                </HighImpactItemLabelStyles>
                        <HighImpactItemTitleStyles variant="h2">{data.title}</HighImpactItemTitleStyles>
                        <HighImpactItemTextStyles>{data.text}</HighImpactItemTextStyles>
                    </HighImpactItemCaption>
                </HighImpactItemBox>
                </Fragment >
            );
        })}
            </HighImpactItemStyles>

    );
};

HighImpactItem.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    icon: PropTypes.bool,
};

HighImpactItem.defaultProps = {
    children: null,
    ratio: "aspect16x9",
    src: {},
};

export default HighImpactItem;
