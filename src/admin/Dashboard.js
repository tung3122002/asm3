import navadmin from "../commoden/navadmin";
import showpost from "./post";

const dashboard = {
    async  render() {
        return `
        ${navadmin.render()}
        ${await showpost.render()}`;
    },
};
export default dashboard;
