import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

function SvgImage({ ...props }) {

    const {
        containerStyle: {
            icon_name,
            width,
            height
        }
        , icon_style } = props;

    const SvgImage = () => <SvgXml xml={icon_name} width={`${width}`} height={`${height}`} />;

    return (
        <View style={{ ...icon_style }}>
            <SvgImage />
        </View>
    );
}

export default SvgImage;
