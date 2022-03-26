require("babel-register")({
    presets: ["es2015", "react", 'stage-0']
});

require.extensions[".css"] = function () {
    return null;
};

require.extensions[".svg"] = function () {
    return null;
};

require.extensions[".png"] = function () {
    return null;
};

require.extensions[".webp"] = function () {
    return null;
};

require.extensions[".jpg"] = function () {
    return null;
};

require.extensions[".pdf"] = function () {
    return null;
};

const router = require('./src/router/router').default;
const Sitemap = require('react-router-sitemap').default;

(
    new Sitemap(router)
        .build('https://v2stech.com/')
        .save('./public/sitemap.xml')
);