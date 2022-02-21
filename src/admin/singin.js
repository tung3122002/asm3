import toastr from "toastr";
import header from "../commoden/header";

import "toastr/build/toastr.min.css";
import { signin } from "../api/user";

const Signin = {
    async render() {
        return `
  
     ${await header.render()}
     <section class="singup">
     
     <div class="login">
     <div class="form">
     <h2>Welcome</h2>
     <form id="formSignup">
     
     <input type="email" class="border border-black" id="email" placeholder="Your  email"/>
     <input type="password" class="border border-black" id="password" placeholder="Your  password"/>
     <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng Nhập</button>
     <a href="/signup" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng kí</a>
   </form>
     
      
     </div>
   </div>
     </section>
   


      `;
    },
    afterRender() {
        // header.afterRender();
        const dangKy = document.querySelector("#formSignup");
        dangKy.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,

                });
                console.log(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.user.id === 1) {
                    toastr.success("Đăng ký thành công");

                    document.location.href = ("/#/admin");
                } else {
                    document.location.href = ("/#/");
                }
            } catch (error) {
                toastr.error(error.response.data);
                console.log(error.response);
                dangKy.reset();
            }
        });
    },
};
export default Signin;
