import toastr from "toastr";
import { getAll, remove } from "../../api/posts";
// import news from "../data";
import { reRender } from "../../rerender/rerender";
import navadmin from "../../commoden/navadmin";
import "toastr/build/toastr.min.css";

const showpost = {
    async  render() {
        const { data } = await getAll();
        // console.log(data);

        return /* html */ ` 
        <!-- This example requires Tailwind CSS v2.0+ -->
        ${navadmin.render()}
        <h1>Quản lý tin tức</h1>   <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><a href="/addpost">Thêm bài viết</a></button>
      </div>
<div class="flex flex-col">
<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        ${data.map((post) => `
                <a href="/chitiet/${post.id}"><!-- This example requires Tailwind CSS v2.0+ -->
                
                          <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                                  </div>
                                  <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                                    <div class="text-sm text-gray-500">jane.cooper@example.com</div>
                                  </div>
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${post.title}</div>
                                <div class="text-sm text-gray-500">Optimization</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                              </td>
                              <td class=" whitespace-nowrap text-right text-sm font-medium">
                              <div class="  text-right sm:px-6">
                              <button data-id="${post.id}"  class="btn btn-remove inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">DELETE</button>
                            </div>
                            
                            </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="/admin/posts/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                              </td>
                            </tr>
                
                            <!-- More people... -->
                          </tbody>
                        
                `).join("")}
                  
      </table>
    </div>
  </div>
</div>
</div>

               
                  
  
      </section>`;
    },
    afterRender() {
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll(".btn");
        // tạo vòng lặp cho nodelist button
        buttons.forEach((btn) => {
            // console.log(btn.dataset);
            // lấy ID từ thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                // eslint-disable-next-line no-alert
                const confirm = window.confirm("Ban co muon xoa bai viet nay khong?");
                if (confirm) {
                    remove(id);
                    // eslint-disable-next-line no-alert
                    toastr.success("Xóa thành công");
                    reRender(showpost, "#app");
                }
            });
        });
    },
};
export default showpost;
