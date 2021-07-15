import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "../../accessories/Box";
import { SubsWrapStyles, SubsWrapTitle, SubsWrapBox, SubsWrapBoxPlayer, SubsWrapContainer, SubsWrapNumberHome, SubsWrapNumberAway, SubsWrapName, SubsWrapIcons, SubsWrapBoxName } from "./styles";

import ModalSubsWrap from "../../items/ModalSubsWrap";

const SubsWrap = props => {
  const { ratio, name, number, jugadores } = props;
  const [statidistics, handleStadistics] = useState(false);
  return (
    <SubsWrapStyles>
      <ModalSubsWrap active={statidistics} handleModal={() => handleStadistics(!statidistics)} />
      <SubsWrapTitle variant="h3">
        Suplentes
      </SubsWrapTitle>
      <SubsWrapContainer variant="Flex">

        {jugadores.map(subs => {

          return (
            < Fragment key={subs.suplentes} >
              <SubsWrapBox variant="Transparent" >
                {subs.suplentes.Local.map(local => {

                  return (
                    <SubsWrapBoxPlayer variant="Transparent">
                      <SubsWrapNumberHome onClick={() => handleStadistics(true)}>
                        {local.number}
                      </SubsWrapNumberHome>
                      <SubsWrapBoxName variant="Transparent">
                        <SubsWrapName>
                          {local.name}
                        </SubsWrapName>
                        <SubsWrapIcons name="Link" />
                      </SubsWrapBoxName>
                    </SubsWrapBoxPlayer>

                  )
                })
                }
              </SubsWrapBox>
              <SubsWrapBox variant="Transparent" >
                {subs.suplentes.Away.map(away => {

                  return (
                    <SubsWrapBoxPlayer variant="Transparent" key={away.number} >
                      <SubsWrapNumberAway onClick={() => handleStadistics(true)}>
                        {away.number}
                      </SubsWrapNumberAway>
                      <SubsWrapBoxName variant="Transparent">
                        <SubsWrapName>
                          {away.name}
                        </SubsWrapName>
                        <SubsWrapIcons name="Link" />
                      </SubsWrapBoxName>
                    </SubsWrapBoxPlayer>

                  )
                })
                }
              </SubsWrapBox>
            </Fragment>
          );
        }
        )
        }
      </SubsWrapContainer>
    </SubsWrapStyles >
  );
};

SubsWrap.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  suplentes: PropTypes.arrayOf(PropTypes.shape({})),
};

SubsWrap.defaultProps = {
  name: "Manchester United",
  number: "9",
  suplentes: [],
};

export default SubsWrap;
