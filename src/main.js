import Navigo from "navigo";
import homepage from "./pages/homepage";
import Catergory from "./pages/catergory-nu";
import products from "./pages/pruduct";
// import dashboard from "./admin/Dashboard";
import showpost from "./admin/post";
import addpost from "./admin/post/add";
import editpost from "./admin/post/edit";
import Signup from "./admin/signup";
import Signin from "./admin/singin";

const print = async (conten, id) => {
    document.querySelector("#app").innerHTML = await conten.render(id);
    if (conten.afterRender) await conten.afterRender(id);
};
const routes = new Navigo("/", { linksSelector: "a", hash: true });
routes.on("/admin/*/", () => {
}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            // eslint-disable-next-line eqeqeq
            if (userId == 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }
    },
});
routes.on({
    "/": async () => print(await homepage),
    "/admin/posts/:id/edit": ({ data }) => print(editpost, data.id),
    "/nu": async () => print(await Catergory),
    "/admin": () => print(showpost),
    "/addpost": () => print(addpost),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/chitiet/:id": ({ data }) => print(products, data.id),
    // "/admin/dashboard": () => print(DashboardPage),
    // "/admin/products": () => console.log("admin product"),
    // "/admin/news": () => print(AdminNews),
    // "/admin/news/add": () => print(AdminNewsAdd),
    // "/signup": () => print(Signup),
    // "/signin": () => print(Signin),
});
routes.resolve();

const itemsliderbar = document.querySelectorAll(".catergory-let-li");
// eslint-disable-next-line no-unused-vars
itemsliderbar.forEach((menu, index) => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("block");
    });
});

// js đăng nhập
