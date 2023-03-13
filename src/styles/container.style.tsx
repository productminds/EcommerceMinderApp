import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../utils/constants/theme';

export default StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: COLORS.white,
    },
    subcontainer: {
        backgroundColor: COLORS.white,
        alignItems: "center",
        margin: SIZES.margin
    },
    subcontainerHorizontal: {
        width: "100%",
        margin: SIZES.margin,
        flexDirection:"row",
        backgroundColor: COLORS.white,
        justifyContent: "space-evenly"
    },
});