import header from "../commoden/header";
import footer from "../commoden/footer";
import baner from "../commoden/baner";

const homepage = {
    async  render() {
        return `
        ${await header.render()}
        ${await baner.render()}
        ${await footer.render()}
       
        `;
    },
    afterRender() {
        header.afterRender();
    },
};
export default homepage;
