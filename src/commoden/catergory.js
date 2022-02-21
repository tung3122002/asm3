// import axios from "axios";
// import news from "../data";
import { getAll } from "../api/posts";

const catergory = {
    async  render() {
        const { data } = await getAll();

        return ` <section class="catergory-nam">
        <div class="container">
          <div class="catergory-nam-top row">
            <p>Trang chủ</p> <span>→</span>
            <p>Nữ</p> <span>→</span>
            <p>Hàng nữ mới về</p>
  
          </div>
          <div class="catergory-nam-conten">
            <div class="row">
              <div class="catergory-let">
                <ul>
                  <li class="catergory-let-li"><a href="">NỮ</a>
                    <ul>
                      <li><a href="">Hàng nữ mới về</a></li>
                      <li><a href="">Hàng nữ mới về</a></li>
                      <li><a href="">Hàng nữ mới về</a></li>
                    </ul>
  
                  </li>
                  <li class="catergory-let-li"><a href="">NAM</a></li>
                  <li><a href="">TRẺ EM</a></li>
                  <li><a href="">SALE BÙNG NỔ</a></li>
                </ul>
              </div>
              <div class="catergory-right row">
                <div class="catergory-right-top-item">
                  <p>HÀNG NỮ MỚI VỀ</p>
                </div>
                <div class="catergory-right-top-item">
                  <button><span>Bộ lọc</span><i class="fa fa-sort-down"></i></button>
                </div>
                <div class="catergory-right-top-item">
                  <select name="" id="">
                    <option value="sápS">Sắp xếp</option>
                    <option value="sápS">Giá cao đến thấp</option>
                    <option value="sápS">Giá thấp đến cao</option>
                  </select>
                </div>
                <div class="catergory-right-conten row">
                ${data.map((post) => `<div class="catergory-right-conten-item">
                <a href="/#/chitiet/${post.id}"><img
                    src="${post.img}"
                    alt=""></a>
                <p>
                <h1><a href="">${post.title}</a></h1>
                </p>
                <p><del>1.890.000 </del> <span>945.000 <sup>đ</sup> </span></p>
              </div>`).join("")}
                  
                  
  
              </div>
  
  
            </div>
          </div>
        </div>
      </section>`;
    },
};
export default catergory;
