import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../accessories/Button";
import Icon from "../../accessories/Icons";
import { CommentaryTitle, CommentaryContainerStyles, BoxTitle } from "./styles";
import {
  CommentaryStyles,
  CommentaryTitleStyles,
  CommentaryPlaceStyles,
  CommentaryBoxStyles,
  CommentaryBoxIcon,
  CommentaryBoxImage,
  CommentaryBoxCaption,
  CommentaryTextStyles,
  CommentaryDescriptionStyles,
} from "../../items/CommentaryItem/styles";

const Commentary = props => {
  const { ratio, src, matchs } = props;
  return (
    <CommentaryContainerStyles>
      <BoxTitle variant="Flex">
        <CommentaryTitle variant="h2">All Commentary</CommentaryTitle>
      </BoxTitle>
      {matchs.map(match => {
        return (
          <Fragment key={match.id}>
            <CommentaryStyles variant="Transparent">
              <CommentaryBoxStyles variant="Flex">
                <CommentaryBoxIcon variant="Transparent">
                  <Icon name={match.icon} variant="Transparent" />
                </CommentaryBoxIcon>
                <CommentaryTitleStyles variant="h3">
                  {match.status}
                </CommentaryTitleStyles>
                <CommentaryBoxImage variant="Transparent">
                  <CommentaryPlaceStyles icon={false} ratio={ratio} src={src} />
                </CommentaryBoxImage>
              </CommentaryBoxStyles>
              <CommentaryBoxCaption variant="Solid">
                <CommentaryTextStyles>{match.event}</CommentaryTextStyles>
                <CommentaryDescriptionStyles>
                  {match.description}
                </CommentaryDescriptionStyles>
              </CommentaryBoxCaption>
            </CommentaryStyles>
          </Fragment>
        );
      })}
      <Button>Load More</Button>
    </CommentaryContainerStyles>
  );
};

Commentary.propTypes = {
  src: PropTypes.shape({}),
  ratio: PropTypes.string,
  matchs: PropTypes.arrayOf(PropTypes.shape({})),
};

Commentary.defaultProps = {
  src: {},
  ratio: "aspect1x1",
  matchs: [],
};

export default Commentary;
