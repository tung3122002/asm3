import catergory from "../commoden/catergory";
import header from "../commoden/header";
import footer from "../commoden/footer";

const Catergory = {
    async render() {
        return ` 
        ${await header.render()}
        ${await catergory.render()}
        ${footer.render()}`;
    },
    afterRender() {
        header.afterRender();
    },
};
export default Catergory;
