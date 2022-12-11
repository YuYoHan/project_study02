// 색상

const palette = {
    primary: {
        100: "#BFDEE",
        200: "#9DCDE7",
        300: "#3AA5DD",
    },
    subColor: {
        100: "#EBF1F4",
    },
    white: "#fff",
    black: "#000",
    warnubg: "#ffbf00",
    error: "#fa5b4a",

    gray: {
        50: "#f8f9fa",
        60: "#f5f6f7",
        80: "#f1f3f5",
        100: "#e9ecef",
        200: "#dee2e6",
        300: "#ced4da",
        400: "#adb5bd",
        500: "#848c94",
        600: "#666d75",
        700: "#495056",
        800: "#343a40",
        900: "212529",
    },
    blue: {
        50: "#f5fbff",
        80: "#e7f4fd",
        100: "#cbe7fd",
        200: "#a7d4f9",
        300: "#79bef5",
        400: "#51abf3",
        500: "#2b96ed",
        600: "#1583db",
        700: "#0a70c2",
        800: "#025ba5",
        900: "#01457d",
    },
    green: {
        50: "#e6f8f3",
        80: "#d7f6ee",
        100: "#94e7d1",
        200: "#71d2b8",
        300: "#58caab",
        400: "#33b893",
        500: "#27ab86",
        600: "#1c9674",
        700: "#137b5e",
        800: "#10634c",
        900: "#0a4534",
    },
    yellow: {
        50: "#fff8e1",
        80: "#fff2c6",
        100: "#ffe182",
        200: "#ffd74e",
        300: "#ffc929",
        400: "#ffbf00",
        500: "#ffad01",
        600: "#ff9a00",
        700: "#f78000",
        800: "#db5600",
        900: "#b94100",
    },
    red: {
        50: "#fbf1ef",
        80: "#ffd4cc",
        100: "#ffaea1",
        200: "#ff8d7c",
        300: "#fe6a54",
        400: "#fa5b4a",
        500: "#ec4937",
        600: "#dd3c2a",
        700: "#c83323",
        800: "#aa2a1b",
        900: "#8d2115",
    },
};

// 폰트크기
const fontsize = {
    small: "14px",
    medium: "16px",
    large: "18px",
    xLarge: "24px",
    xxLarge: "32px",
};
// 굵기
const fontwight = {
    thin: "100",
    regular: "400",
    medium: "500",
    bold: "800",
};
// 행간
const lineHeight = {
    small: "16px",
    medium: "20px",
    large: "24px",
    xLarge: "28px",
};

export const theme = {
    palette,
    fontsize,
    fontwight,
    lineHeight,
};
/* ex) theme.palette.primary[300] = "#3AA5DD" */
