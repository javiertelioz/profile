module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/profile/" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "<Your new title>";
      return args;
    });
  },
};
