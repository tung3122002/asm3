import toastr from "toastr";
import header from "../commoden/header";
import { increaseQuantity, removeItemInCart } from "../rerender/cart";
import { reRender } from "../rerender/rerender";
import "toastr/build/toastr.min.css";

const giohang = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        console.log(cart);
        return `
    ${header.render()}
    <section>
    <div class="container">
    
        <table>
            <thead>
        
                <th>SẢN PHẨM</th>
                <th>TÊN SẢN PHẨM</th>
                <th>MÀU</th>
                <th>SIZE</th>
                <th>SL</th>
                <th>THÀNH TIỀN</th>
                <th>XÓA</th>
        
            </thead>
            <tbody>
            ${cart.map((item) => `
            <tr>
            <td>     <img style="width: 100px;" src="${item.img}" alt=""></td>
            <td>${item.name}</td>
                <td>1</td>
                <td>1</td>
           
                <td>1</td>
                <td>
                <button data-id="${item.id}" class="btn btn-increase">Tăng</button>
                <button data-id="${item.id}" class="btn btn-decrease">Giảm</button>
            </td>
            <td>
                <button data-id="${item.id}" class="btn btn-remove">Xóa Giỏ Hàng</button>
            </td>
            </tr>
            `)}
                
            </tbody>
        </table>
    </div>
</section>
    `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        console.log(btns);
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id);
                } else {
                    removeItemInCart(id, () => {
                        reRender(giohang, "#app");
                    });
                }
            });
        });
    },
};
export default giohang;
