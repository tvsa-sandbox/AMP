import React from "react";
import {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
} from "./styles";

const TabsMatch = props => {
    return (
        <TabsMatchStyles {...props}>
            <TabsMatchBoxStyles variant="Transparent">
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Solid">
                        Últimos
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Inactive">
                        A - Z
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Inactive">
                        Lo más visto
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
            </TabsMatchBoxStyles>
        </TabsMatchStyles>
    );
};

export default TabsMatch;
