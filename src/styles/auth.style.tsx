import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../utils/constants/theme';

export default StyleSheet.create({
    title: {
        margin: 2 * SIZES.margin,
        ...FONTS.h2
    },
    logo: {
        borderRadius: 100,
        margin: 2 * SIZES.margin,
        height: 100,
        width: 100,
        backgroundColor: COLORS.primary
    },
    input: {
        width: "80%",
        marginBottom: SIZES.margin2
    },
    borderInput: {
        borderColor: COLORS.primary,
        borderRadius: 15,
        borderWidth: 1
    },
    primaryColorText: {
        color:COLORS.primary,
        fontWeight: "bold",
    },
    forgotPassword: {
        width:"80%",
        alignItems:"flex-end"
    },
    signInButton: {
        width:"80%",
        height: 60,
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        marginBottom: SIZES.margin
    },
    googleLogo: {
        height: 30,
        width: 30,
    },
    googleContainer: {
        marginTop: SIZES.margin,
        padding:SIZES.margin / 2,
        backgroundColor: COLORS.gray,
        borderRadius: 12
    }
});