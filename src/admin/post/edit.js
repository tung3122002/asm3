import axios from "axios";
import navadmin from "../../commoden/navadmin";
import { edit, get } from "../../api/posts";

const addpost = {
    async render(id) {
        const { data } = await get(id);
        // console.log(data);
        return /* html */ `
        
            ${navadmin.render()}
            <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" id="form-edit-post" method="POST">
                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      
            
                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                        <div class="mt-1">
                          <textarea id="post-name" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com">${data.title}</textarea>
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                      </div>
            
                      <div>
                      <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                      <div class="mt-1">
                        <textarea id="post-decs" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com">${data.desc}</textarea>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                    </div>
                      <div>
                        
                       
                      </div>
            
                      <div>
                        <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                            <div><img width="200" src="${data.img}" id="img-preview"/></div>
                              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                              </label>
                              <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            </div>

            `;
    },
    afterRender(id) {
        const imgPreview = document.querySelector("#img-preview");
        let imgLink = "";
        const imgPost = document.querySelector("#file-upload");
        const formeditPost = document.querySelector("#form-edit-post");
        const CLOUDINARY_PRESET = "y6g4x0t8";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/tr-n-t-ng/image/upload";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        // formeditPost.addEventListener("submit", async (e) => {
        //     e.preventDefault();
        //     const file = document.querySelector("#file-upload").files[0];
        //     const formData = new FormData();
        //     formData.append("file", file);
        //     formData.append("upload_preset", CLOUDINARY_PRESET);

        //     const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
        //         headers: {
        //             "Content-Type": "application/form-data",
        //         },
        //     });

        formeditPost.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];

            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            edit({
                id,
                title: document.querySelector("#post-name").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#post-decs").value,
            });
            document.location.href = "/#/admin";
        });
    },
};
export default addpost;
