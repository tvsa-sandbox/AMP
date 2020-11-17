import React from "react";
import {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
} from "./styles";

const TabsMatch = props => {
    return (
        <TabsMatchStyles {...props}>
            <TabsMatchBoxStyles variant="Transparent">
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonActiveStyles href="/" variant="Solid">
                        Telenovelas
                    </TabsMatchButtonActiveStyles>
                </TabsMatchButtonContainerStyles>
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Outline">
                        Programas de TV
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Outline">
                        Comedia
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Outline">
                        Realities
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonStyles href="/" variant="Outline">
                        Tu TV
                    </TabsMatchButtonStyles>
                </TabsMatchButtonContainerStyles>
            </TabsMatchBoxStyles>
        </TabsMatchStyles>
    );
};

export default TabsMatch;
