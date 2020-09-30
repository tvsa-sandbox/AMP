import PropTypes from "prop-types";
import Ads from "../Ads";

const AdsAmp = (props) => {
    const { adUnit, rtc } = props;
    const RTC_ADS = JSON.stringify(rtc);
    return (
        <Ads className="banner">
            <amp-ad
                width="300"
                height="250"
                type="doubleclick"
                data-slot={adUnit}
                rtc-config={RTC_ADS}
            />
        </Ads>
    );
};

AdsAmp.propTypes = {
    adUnit: PropTypes.string,
    rtc: PropTypes.shape({
        vendors: PropTypes.shape({
            lotame: PropTypes.shape({
                CLIENT_ID: PropTypes.string,
                AD_NETWORK: PropTypes.string,
            }),
        }),
    }),
};

AdsAmp.defaultProps = {
    adUnit: "/5644/es.networks.test/ampproject",
    rtc: {
        vendors: {
            lotame: {
                CLIENT_ID: "12380",
                AD_NETWORK: "DC",
            },
        },
    },
};

export default AdsAmp;
