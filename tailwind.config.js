const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            backgroundImage: (theme) => ({
                profile: "url('/storage/images/profile.png')",
            }),
            colors: {
                gold: {
                    lite: "#F0E68C",
                    md: "#FFD700",
                    dark: "#DAA520",
                    text: "#D4AF37",
                },
            },
            textColor: {
                gold: "#D4AF37",
            },

            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                serif: ["Orbitron"],
            },
            screens: {
                xs: "400px",
            },
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
