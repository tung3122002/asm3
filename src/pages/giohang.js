import header from "../commoden/header";

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
            
            <td>     <img style="width: 100px;" src="${item.img}" alt=""></td>
            <td>${item.name}</td>
                <td>1</td>
                <td>1</td>
                <td>${item.name}</td>
                <td>1</td>
            
            `)}
                
            </tbody>
        </table>
    </div>
</section>
    `;
    },
};
export default giohang;
