import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import {
    Home,
} from '../screens';
import { SvgImage } from '../components'
import { COLORS, svgIcons, SIZES, FONTS } from '../constants';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                     {/* change back to white */}
                    <View style={{ flex: 1, backgroundColor: COLORS.vydstream_tabBar }}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        {/* change back to white */}
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.vydstream_tabBar} 
                        />
                    </Svg>
                    {/* change back to white */}
                    <View style={{ flex: 1, backgroundColor:COLORS.vydstream_tabBar }}></View> 
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        backgroundColor: COLORS.vydstream_white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor:COLORS.vydstream_tabBar //changed from white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}

            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.vydstream_white
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: COLORS.vydstream_primary,
                    elevation: 0,
                    height: 55
                },
                // tabBarBackground: () => (
                //   <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
                // ), 
            }}
            // tabBarOptions={{
            //     showLabel: true,
            //     // style: {
            //     //     borderTopWidth: 0,
            //     //     backgroundColor: 'transparent',
            //     //     elevation: 0, height: 55
            //     // }
            // }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgImage
                            containerStyle={{
                                width: `${27}px`,
                                height: `${27}px`,
                                icon_name: focused ? svgIcons.pink_home_icon : svgIcons.white_home_icon
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='PlayList'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgImage
                            containerStyle={{
                                width: `${27}px`,
                                height: `${27}px`,
                                icon_name: focused ? svgIcons.pink_playlist_icon : svgIcons.playlist_icon
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Search'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgImage
                            containerStyle={{
                                width: `${27}px`,
                                height: `${27}px`,
                                icon_name: focused ? svgIcons.pink_search_icon : svgIcons.search_icon
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Notification'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgImage
                            containerStyle={{
                                width: `${27}px`,
                                height: `${27}px`,
                                icon_name: focused ? svgIcons.pink_notification_icon : svgIcons.notification_icon
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <SvgImage
                            containerStyle={{
                                width: `${27}px`,
                                height: `${27}px`,
                                icon_name: focused ? svgIcons.pink_profile_icon : svgIcons.profile_icon
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;