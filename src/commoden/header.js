import toastr from "toastr";
import { reRender } from "../rerender/rerender";
import "toastr/build/toastr.min.css";

const header = {
    render() {
        return `
        <header class="header ">
      <div class="logo">
       <a href="/"> <img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""></a>
      </div>
      <div class="menu">
        <li><a href="/#/nu"> NỮ</a>
          <ul class="drop-dow">
            <li><a href="">Hàng mới về</a></li>
            <li><a href="">Hàng mới về</a></li>
            <li><a href="">Áo</a>
              <ul>
                <li><a href="">Hàng mới về</a></li>
                <li><a href="">Hàng mới về</a></li>
              </ul>
            </li>
            <li><a href="">Quần</a>
              <ul>
                <li><a href="">Hàng mới về</a></li>
                <li><a href="">Hàng mới về</a></li>
              </ul>
            </li>
            <li><a href="">Hàng mới về</a></li>
          </ul>
        </li>
        <li><a href="">NAM</a></li>
        <li><a href="">TRẺ EM</a></li>
        <li><a href="">SALE BUNG NỔ</a></li>
        <li><a href="">BỘ SƯ TẬP</a></li>
        <li><a href="">TIN TỨC</a></li>
        <li><a href="">THÔNG TIN</a></li>
      </div>
      <div class="other menu">
        <li><input type="text" placeholder="Tìm" name="" id=""> <button class="fas fa-search"></button></li>
        <li><a class="fa fa-paw" href=""></a></li>
        <li><a class="fa fa-user" href="/signup"></a>
      ${localStorage.getItem("user") ? `
      <ul class="drop-dow">
            <li id="email1"><a href=""></a></li>
            <li ><a href=""id="logout">Đăng xuất</a></li>
           
            <li><a href="">Hàng mới về</a></li>
          </ul>
      ` : ""}  
        </li>
        <li><a class="fa fa-shopping-bag" href=""></a>
        
        
        </li>
      </div>
    </header>
    
        `;
    },
    afterRender() {
        console.log(JSON.parse(localStorage.getItem("user")));
        const email1 = document.getElementById("email1");
        const logout = document.getElementById("logout");
        if (email1) {
            email1.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");

                reRender(header, "#app");
                toastr.success("Đã đăng xuất");
            });
        }
    },
};
export default header;
