import header from "../commoden/header";
import footer from "../commoden/footer";
// import data from "../data";
import { get } from "../api/posts";

const products = {
    async  render(id) {
        const { data } = await get(id);
        return ` 
        ${await header.render()}
        
        <section class="products">
        <div class="container">

     


          <div class="products-top row">
            <p>Trang chủ</p> <span>→</span>
            <p>Nữ</p>
          </div>
          <div class="products-conten">
            <div class="products-conten-let row">
              <div class="products-conten-let-big-img">
                <img
                  src="${data.img}"
                  alt="">
              </div>
              <div class="products-conten-let-small-img">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"
                  alt="">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"
                  alt="">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"
                  alt="">
                <img
                  src="https://pubcdn.ivymoda.com/files/product/thumab/1400/2022/01/20/6970f927bf5344d8edc289a48e8dc743.JPG"
                  alt="">
              </div>
            </div>
            <div class="products-conten-right">
              <div class="products-conten-right-name">
                <h1>ÁO KHOÁC PHAO KÈM ĐAI MS 71B8858</h1>
                <p>MSP: 71B8858</p>
              </div>
              <div class="products-conten-right-gia">
               <p><span><del>2.790.000</del></span> <sup>Đ</sup> <span>2.790.000</span> <sup>Đ</sup>  </p>
                
              </div>
              <div class="products-conten-right-mau">
                <p></p>
                <p><span style="font-weight: bold">Mầu sắc</span>:Tím cam*</p>
                <div class="products-conten-right-mau-img">
                  <img src="https://pubcdn.ivymoda.com/images/color/014.png" alt="">
                </div>
  
              </div>
              <div class="products-conten-right-size">
              <p style="font-weight: bold;">Size</p>
              <div class="size">
              <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div class="space-x-2 flex text-sm">
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XS
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="s" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    S
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="m" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    M
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="l" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    L
                  </div>
                </label>
                <label>
                  <input class="sr-only peer" name="size" type="radio" value="xl" />
                  <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                    XL
                  </div>
                </label>
              </div>
            </div>
              </div>
              </div>
              <div class="soluong">
                <p style="font-weight: bold;">Số lượng</p>
                <input type="number" min="0" value="1" name="" id="">
               
              </div>
              <p style="color: red;">Vui lòng chọn size</p>
              <div class="products-conten-right-button">
                <button><i class="fa fa-shopping-basket" aria-hidden="true"></i><p>Mua Hàng</p></button>
                <button><a href="">TÌM TẠI CỬA HÀNG</a></button>
              </div>
              <div class="products-conten-right-icon">
               <div class="products-conten-right-icon-item">
                <i class="fa fa-phone" aria-hidden="true"></i><p>Hotline</p>
               </div>
               <div class="products-conten-right-icon-item">
                <i class="fa fa-comments-o fa-lg" aria-hidden="true"></i> <p>chat</p>
               </div>
               <div class="products-conten-right-icon-item">
                <p>mail</p>
               </div>
             
             
              </div>
              <div class="products-conten-right-qr">
                <img src="https://pubcdn.ivymoda.com/images/qrcode2.png" alt="">
              </div>
              <div class="products-conten-right-bottom">
                <div class="products-conten-right-bottom-top">
                  &#8744
                </div>
                <div class="products-conten-right-bottom-big">
                  <div class="products-conten-right-bottom-big-title">
                     <p>Chi tiết</p>
                  </div>
                  <div class="products-conten-right-bottom-big-title">
                    <p>Bảo quản</p>
                  </div>
                  <div class="products-conten-right-bottom-big-title">
                    <p>Tham khảo size</p>
                  </div>
                </div>
                <div class="products-conten-right-bottom-conten">
                  <div class="products-conten-right-bottom-conten-chitiet">
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  <p>Tham khảo size</p>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      ${footer.render()}`;
    },
};
export default products;
