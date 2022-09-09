import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    vydstream_primary: '#171738',
    vydstream_button: '#E63462',
    vydstream_primary_back: 'rgba(23, 23, 56, 0.9)',
    vydstream_white:'#FDFFFC',
    vydstream_links: '#5FA8D3',
    vydstream_tabBar: 'rgba(0,0,0,0.1)'
};
export const SIZES = {
    /*global sizes*/
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    /*app dimensions */
    width,
    height
};
export const FONTS = {
    pacificoRegularFont: { fontFamily: "Pacifico-Regular" },
    poppinsRegularFont:{fontFamily: "Poppins-Regular"},
    poppinsSemiBoldFont:{fontFamily: "Poppins-SemiBold"},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;