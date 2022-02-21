import header from "../commoden/header";

import { signup } from "../api/user";

const Signup = {
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
  <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng kí</button>
  <a href="/signin" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Đăng Nhập</a>
</form>
  
   
  </div>
</div>
</section>

      `;
    },
    afterRender() {
        // header.afterRender();
        const dangKy = document.querySelector("#formSignup");
        dangKy.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,

            });
        });
    },
};
export default Signup;
