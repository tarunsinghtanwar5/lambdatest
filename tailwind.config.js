module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg-primary": "#2e3c56",
        "bg-main": "#f8f9fa",
        "navbar-upgrade": "#0ebac5",
        "hover-sidebar": "#232e42",
        "bg-secondary-button": "#f3f4f5",
      },
      textColor: {
        "text-secondary-button": "#4a4a4a"
      },
      fontSize: {
        "xxs": "0.5625rem"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "160px",
        "3/4": "75%",
      },
      height: {
        "180px": "180px",
        "13": "3.25rem",
        "sidebar-icon-dimension": "27px",
      },
      width: {
        "180px": "180px",
        "sidebar-icon-dimension": "27px",
        "sidebar-min": "40px",
      },
      spacing: {
        "90%": "90%",
        "42": "10.43rem"
      },
      scale: {
        0: "0",
        25: ".25",
        50: ".5",
        75: ".75",
        80: ".8",
        95: ".95",
        100: "1",
        105: "1.05",
        110: "1.1",
        125: "1.25",
        150: "1.5",
        200: "2",
      },
    },
  },
  variants: {
    extend: {
      marginTop: ["first"],
    },
  },
  plugins: [],
};
