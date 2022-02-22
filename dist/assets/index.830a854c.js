var I=Object.defineProperty,j=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(t,e,i)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,k=(t,e)=>{for(var i in e||(e={}))H.call(e,i)&&w(t,i,e[i]);if(x)for(var i of x(e))P.call(e,i)&&w(t,i,e[i]);return t},S=(t,e)=>j(t,M(e));import{t as c,a as g,N as E}from"./vendor.3d4b9f01.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}};C();const T=async(t,e)=>{t&&(document.querySelector(e).innerHTML=await t.render(),t.afterRender&&t.afterRender())};const r={render(){return`
        <header class="header ">
      <div class="logo">
       <a href="/"> <img src="https://pubcdn.ivymoda.com/images/logo.png" alt=""></a>
      </div>
      <div class="menu">
        <li><a href="/#/nu"> N\u1EEE</a>
          <ul class="drop-dow">
            <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
            <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
            <li><a href="">\xC1o</a>
              <ul>
                <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
                <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
              </ul>
            </li>
            <li><a href="">Qu\u1EA7n</a>
              <ul>
                <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
                <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
              </ul>
            </li>
            <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
          </ul>
        </li>
        <li><a href="">NAM</a></li>
        <li><a href="">TR\u1EBA EM</a></li>
        <li><a href="">SALE BUNG N\u1ED4</a></li>
        <li><a href="">B\u1ED8 S\u01AF T\u1EACP</a></li>
        <li><a href="">TIN T\u1EE8C</a></li>
        <li><a href="">TH\xD4NG TIN</a></li>
      </div>
      <div class="other menu">
        <li><input type="text" placeholder="T\xECm" name="" id=""> <button class="fas fa-search"></button></li>
        <li><a class="fa fa-paw" href=""></a></li>
        <li><a class="fa fa-user" href="/#/signup"></a>
      ${localStorage.getItem("user")?`
      <ul class="drop-dow">
            <li id="email1"><a href=""></a></li>
            <li ><a href=""id="logout">\u0110\u0103ng xu\u1EA5t</a></li>
           
            <li><a href="">H\xE0ng m\u1EDBi v\u1EC1</a></li>
          </ul>
      `:""}  
        </li>
        <li><a class="fa fa-shopping-bag" href="/#/cart"></a>
        
        
        </li>
      </div>
    </header>
    
        `},afterRender(){console.log(JSON.parse(localStorage.getItem("user")));const t=document.getElementById("email1"),e=document.getElementById("logout");t&&(t.innerHTML=JSON.parse(localStorage.getItem("user")).email),e&&e.addEventListener("click",()=>{localStorage.removeItem("user"),T(r,"#app"),c.success("\u0110\xE3 \u0111\u0103ng xu\u1EA5t")})}},f={render(){return`  <footer>
        <section class="app-container">
          <p>T\u1EA3i \u1EE9ng d\u1EE5ng IVY moda</p>
          <div class="app-gg">
            <a href=""><img src="https://pubcdn.ivymoda.com/images/appstore.jpg" alt=""></a>
            <a href=""><img src="https://pubcdn.ivymoda.com/images/googleplay.jpg" alt=""></a>
          </div>
          <p>Nh\u1EADn b\u1EA3n tin IVY moda</p>
          <form action="">
            <input type="email" name="" id="" placeholder="Nh\u1EADp email c\u1EE7a b\u1EA1n v\xE0o \u0111\xE2y">
           
            <button> <i class="fa fa-long-arrow-left fa-lg" aria-hidden="true"></i></button>
          </form>
         
        </section>
        <section class="thong-tin"> 
          <div class="menu-thongtin">
            <li><a href="http://online.gov.vn/Home/WebDetails/36596"><img src="https://pubcdn.ivymoda.com/images/dathongbao.png" alt=""></a></li>
            <li><a href="">Li\xEAn h\u1EC7</a></li>
            <li><a href="">Tuy\u1EC3n d\u1EE5ng</a></li>
            <li><a href="">Gi\u1EDBi thi\u1EC7u</a></li>
            <li><a href="https://www.facebook.com/thoitrangivymoda/"><i class="fa fa-facebook"></i></a> <a href="https://www.youtube.com/user/thoitrangivymoda"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
          </div>
          <div class="conten-thongtin">
            <p>C\xF4ng ty C\u1ED5 ph\u1EA7n D\u1EF1 Kim v\u1EDBi s\u1ED1 \u0111\u0103ng k\xFD kinh doanh: 0105777650</p>
           
            <p>\u0110\u1ECBa ch\u1EC9 \u0111\u0103ng k\xFD: T\u1ED5 d\xE2n ph\u1ED1 Th\xE1p, P.\u0110\u1EA1i M\u1ED7, Q.Nam T\u1EEB Li\xEAm, TP.H\xE0 N\u1ED9i, Vi\u1EC7t Nam - 0243 205 2222</p>
            <p>\u0110\u1EB7t h\xE0ng online : <b>0246 662 3434 .</b> </p>
          </div>
        </section>
  <section class="copyright">
    <p>\xA9Ivymoda All rights reserved</p>
    
    <div id="editor">
    <p>Here goes the initial content of the editor.</p>
</div>
  </section>
      </footer>`}},q={render(){return` <section class="slider" id="slider">
        <div class="row1">
          <div class="large-12 columns">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <img src="./src/Saved Pictures/banner1.jpg" alt="">
              </div>
              <div class="item">
                <img src="./src/Saved Pictures/banner2.jpg" alt="">
              </div>
              <div class="item">
                <img src="./src/Saved Pictures/banner3.jpg" alt="">
              </div>
              <div class="item">
                <img src="./src/Saved Pictures/banner4.jpg" alt="">
              </div>
  
            </div>
  
  
  
          </div>
        </div>
      </section>`}},R={async render(){return`
        ${await r.render()}
        ${await q.render()}
        ${await f.render()}
       
        `},afterRender(){r.afterRender()}},l=g.create({baseURL:"http://localhost:3001",headers:{"Content-Type":"application/json"}}),N=()=>{const t="/posts";return l.get(t)},h=t=>{const e=`/posts/${t}`;return l.get(e)},A=t=>{const e=`/posts/${t}`;return l.delete(e)},G=t=>{const e=`/posts/${t.id}`;return l.put(e,t)},O=t=>{const e="/posts";return l.post(e,t)},B={async render(){const{data:t}=await N();return` <section class="catergory-nam">
        <div class="container">
          <div class="catergory-nam-top row">
            <p>Trang ch\u1EE7</p> <span>\u2192</span>
            <p>N\u1EEF</p> <span>\u2192</span>
            <p>H\xE0ng n\u1EEF m\u1EDBi v\u1EC1</p>
  
          </div>
          <div class="catergory-nam-conten">
            <div class="row">
              <div class="catergory-let">
                <ul>
                  <li class="catergory-let-li"><a href="">N\u1EEE</a>
                    <ul>
                      <li><a href="">H\xE0ng n\u1EEF m\u1EDBi v\u1EC1</a></li>
                      <li><a href="">H\xE0ng n\u1EEF m\u1EDBi v\u1EC1</a></li>
                      <li><a href="">H\xE0ng n\u1EEF m\u1EDBi v\u1EC1</a></li>
                    </ul>
  
                  </li>
                  <li class="catergory-let-li"><a href="">NAM</a></li>
                  <li><a href="">TR\u1EBA EM</a></li>
                  <li><a href="">SALE B\xD9NG N\u1ED4</a></li>
                </ul>
              </div>
              <div class="catergory-right row">
                <div class="catergory-right-top-item">
                  <p>H\xC0NG N\u1EEE M\u1EDAI V\u1EC0</p>
                </div>
                <div class="catergory-right-top-item">
                  <button><span>B\u1ED9 l\u1ECDc</span><i class="fa fa-sort-down"></i></button>
                </div>
                <div class="catergory-right-top-item">
                  <select name="" id="">
                    <option value="s\xE1pS">S\u1EAFp x\u1EBFp</option>
                    <option value="s\xE1pS">Gi\xE1 cao \u0111\u1EBFn th\u1EA5p</option>
                    <option value="s\xE1pS">Gi\xE1 th\u1EA5p \u0111\u1EBFn cao</option>
                  </select>
                </div>
                <div class="catergory-right-conten row">
                ${t.map(e=>`<div class="catergory-right-conten-item">
                <a href="/#/chitiet/${e.id}"><img
                    src="${e.img}"
                    alt=""></a>
                <p>
                <h1><a href="">${e.name}</a></h1>
                </p>
                <p><del>${e.pricecu} </del> <span>${e.pricemoi} <sup>\u0111</sup> </span></p>
              </div>`).join("")}
                  
                  
  
              </div>
  
  
            </div>
          </div>
        </div>
      </section>`}},D={async render(){return` 
        ${await r.render()}
        ${await B.render()}
        ${f.render()}`},afterRender(){r.afterRender()}};let u=[];localStorage.getItem("cart")&&(u=JSON.parse(localStorage.getItem("cart")));const J=(t,e)=>{const i=u.find(a=>a.id===t.id);i?i.quantity+=+t.quantity:u.push(t),localStorage.setItem("cart",JSON.stringify(u)),e()},U={async render(t){const{data:e}=await h(t);return` 
        ${await r.render()}
        
        <section class="products">
        <div class="container">

     


          <div class="products-top row">
            <p>Trang ch\u1EE7</p> <span>\u2192</span>
            <p>N\u1EEF</p>
          </div>
          <div class="products-conten">
            <div class="products-conten-let row">
              <div class="products-conten-let-big-img">
                <img
                  src="${e.img}"
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
                <h1>${e.name}</h1>
                <p>MSP: 71B8858</p>
              </div>
              <div class="products-conten-right-gia">
               <p><span><del>${e.pricecu}</del></span> <sup>\u0110</sup> <span>${e.pricemoi}</span> <sup>\u0110</sup>  </p>
                
              </div>
              <div class="products-conten-right-mau">
                <p></p>
                <p><span style="font-weight: bold">M\u1EA7u s\u1EAFc</span>:T\xEDm cam*</p>
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
                <p style="font-weight: bold;">S\u1ED1 l\u01B0\u1EE3ng</p>
                <input type="number"  id="inputValue">
               
              </div>
              <p style="color: red;">Vui l\xF2ng ch\u1ECDn size</p>
              <div class="products-conten-right-button">
           
                <button data-id="${e.id}" id="btnAddToCart"><i class="fa fa-shopping-basket" aria-hidden="true"></i><p>Mua H\xE0ng</p></button>
                <button><a href="">T\xCCM T\u1EA0I C\u1EECA H\xC0NG</a></button>
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
                     <p>Chi ti\u1EBFt</p>
                  </div>
                  <div class="products-conten-right-bottom-big-title">
                    <p>B\u1EA3o qu\u1EA3n</p>
                  </div>
                  <div class="products-conten-right-bottom-big-title">
                    <p>Tham kh\u1EA3o size</p>
                  </div>
                </div>
                <div class="products-conten-right-bottom-conten">
                  <div class="products-conten-right-bottom-conten-chitiet">
                  <p>${e.desc}</p>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      ${f.render()}`},afterRender(){const t=document.querySelector("#btnAddToCart"),{id:e}=t.dataset;console.log(e);const i=document.querySelector("#inputValue");t.addEventListener("click",async()=>{const{data:a}=await h(e);J(S(k({},a),{quantity:i.value?i.value:1}),()=>{c.success(`Th\xEAm s\u1EA3n ph\u1EA9m ${a.name} th\xE0nh c\xF4ng `)}),console.log(a)})}},v={render(){return`<!-- This example requires Tailwind CSS v2.0+ -->
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <!--
                    Icon when menu is closed.
        
                    Heroicon name: outline/menu
        
                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <!--
                    Icon when menu is open.
        
                    Heroicon name: outline/x
        
                    Menu open: "block", Menu closed: "hidden"
                  -->
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                  <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                  <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
                </div>
                <div class="hidden sm:block sm:ml-6">
                  <div class="flex space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="/" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Trang ch\u1EE7</a>
        
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
        
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
        
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">View notifications</span>
                  <!-- Heroicon name: outline/bell -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
        
                <!-- Profile dropdown -->
                <div class="ml-3 relative">
                  <div>
                    <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="sr-only">Open user menu</span>
                      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    </button>
                  </div>
        
                  <!--
                    Dropdown menu, show/hide based on menu state.
        
                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  -->
                  <div class="origin-top-right absolute hidden right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    <!-- Active: "bg-gray-100", Not Active: "" -->
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <!-- Mobile menu, show/hide based on menu state. -->
          <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
        
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
        
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
        
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
            </div>
          </div>
        </nav>`}},$={async render(){const{data:t}=await N();return` 
        <!-- This example requires Tailwind CSS v2.0+ -->
        ${v.render()}
        <h1>Qu\u1EA3n l\xFD tin t\u1EE9c</h1>   <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><a href="/addpost">Th\xEAm b\xE0i vi\u1EBFt</a></button>
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
        ${t.map(e=>`
                <a href="/chitiet/${e.id}"><!-- This example requires Tailwind CSS v2.0+ -->
                
                          <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-10 w-10">
                                    <img class="h-10 w-10 rounded-full" src="${e.img}" alt="">
                                  </div>
                                  <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">Jane Cooper</div>
                                    <div class="text-sm text-gray-500">jane.cooper@example.com</div>
                                  </div>
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${e.name}</div>
                                <div class="text-sm text-gray-500">Optimization</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                              </td>
                              <td class=" whitespace-nowrap text-right text-sm font-medium">
                              <div class="  text-right sm:px-6">
                              <button data-id="${e.id}"  class="btn btn-remove inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">DELETE</button>
                            </div>
                            
                            </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="/admin/posts/${e.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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

               
                  
  
      </section>`},afterRender(){document.querySelectorAll(".btn").forEach(e=>{const{id:i}=e.dataset;e.addEventListener("click",()=>{window.confirm("Ban co muon xoa bai viet nay khong?")&&(A(i),c.success("X\xF3a th\xE0nh c\xF4ng"),T($,"#app"))})})}},z={render(){return`
  






            ${v.render()}
            
            
    <div>
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form action="#" id="form-add-post" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              
    
              <div>
                <label for="about" class="block text-sm font-medium text-gray-700"> T\xEAn S\u1EA3n Ph\u1EA9m </label>
                <div class="mt-1">
                  <textarea id="post-name" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                </div>

              </div>
    
              <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
              <div class="mt-1">
                <textarea id="post-decs" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" ></textarea>
              </div>
              <label for="about" class="block text-sm font-medium text-gray-700"> Gi\xE1 c\u0169 </label>
              <div class="mt-1">
              <input id="post-price-cu" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500   border border-gray-300 rounded-md" type="number">
              </div>
              <label for="about" class="block text-sm font-medium text-gray-700"> Gi\xE1 m\u1EDBi </label>
              <div class="mt-1">
              <input id="post-price-moi" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500   border border-gray-300 rounded-md" type="number">
              </div>
        
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

            `},afterRender(){const t=document.querySelector("#form-add-post"),e="y6g4x0t8",i="https://api.cloudinary.com/v1_1/tr-n-t-ng/image/upload";t.addEventListener("submit",async a=>{a.preventDefault();const s=document.querySelector("#file-upload").files[0],o=new FormData;o.append("file",s),o.append("upload_preset",e);const{data:d}=await g.post(i,o,{headers:{"Content-Type":"application/form-data"}});O({name:document.querySelector("#post-name").value,img:d.url,desc:document.querySelector("#post-decs").value,pricecu:document.querySelector("#post-price-cu").value,pricemoi:document.querySelector("#post-price-moi").value}),document.location.href="/admin"})}},V={async render(t){const{data:e}=await h(t);return`
        
            ${v.render()}
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
                          <textarea id="post-name" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com">${e.title}</textarea>
                        </div>
                     
                      </div>
            
                      <div>
                      <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
                      <div class="mt-1">
                        <textarea id="post-decs" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com">${e.desc}</textarea>
                      </div>
                    
                    </div>
                    <label for="about" class="block text-sm font-medium text-gray-700"> Gi\xE1 c\u0169 </label>
                    <div class="mt-1">
                    <input id="post-price-cu" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500   border border-gray-300 rounded-md" type="number">
                    </div>
                    <label for="about" class="block text-sm font-medium text-gray-700"> Gi\xE1 m\u1EDBi </label>
                    <div class="mt-1">
                    <input id="post-price-moi" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500   border border-gray-300 rounded-md" type="number">
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
                            <div><img width="200" src="${e.img}" id="img-preview"/></div>
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

            `},afterRender(t){const e=document.querySelector("#img-preview");let i="";const a=document.querySelector("#file-upload"),s=document.querySelector("#form-edit-post"),o="y6g4x0t8",d="https://api.cloudinary.com/v1_1/tr-n-t-ng/image/upload";a.addEventListener("change",m=>{e.src=URL.createObjectURL(m.target.files[0])}),s.addEventListener("submit",async m=>{m.preventDefault();const y=a.files[0];if(y){const p=new FormData;p.append("file",y),p.append("upload_preset",o);const{data:L}=await g.post(d,p,{headers:{"Content-Type":"application/form-data"}});i=L.url}G({id:t,name:document.querySelector("#post-name").value,img:i||e.src,desc:document.querySelector("#post-decs").value,pricecu:document.querySelector("#post-price-cu").value,pricemoi:document.querySelector("#post-price-moi").value}),document.location.href="/#/admin"})}},Y=t=>{const e="/signup";return l.post(e,t)},_=t=>{const e="/signin";return l.post(e,t)},F={async render(){return`
        ${await r.render()}
        <section class="singup">
    <div class="login">
  <div class="form">
  <h2>Welcome</h2>
  <form id="formSignup">
  
  <input type="email" class="border border-black" id="email" placeholder="Your  email"/>
  <input type="password" class="border border-black" id="password" placeholder="Your  password"/>
  <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">\u0110\u0103ng k\xED</button>
  <a href="/signin" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">\u0110\u0103ng Nh\u1EADp</a>
</form>
  
   
  </div>
</div>
</section>

      `},afterRender(){document.querySelector("#formSignup").addEventListener("submit",e=>{e.preventDefault(),Y({email:document.getElementById("email").value,password:document.getElementById("password").value})})}},W={async render(){return`
  
     ${await r.render()}
     <section class="singup">
     
     <div class="login">
     <div class="form">
     <h2>Welcome</h2>
     <form id="formSignup">
     
     <input type="email" class="border border-black" id="email" placeholder="Your  email"/>
     <input type="password" class="border border-black" id="password" placeholder="Your  password"/>
     <button  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">\u0110\u0103ng Nh\u1EADp</button>
     <a href="/signup" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">\u0110\u0103ng k\xED</a>
   </form>
     
      
     </div>
   </div>
     </section>
   


      `},afterRender(){const t=document.querySelector("#formSignup");t.addEventListener("submit",async e=>{e.preventDefault();try{const{data:i}=await _({email:document.getElementById("email").value,password:document.getElementById("password").value});console.log(i.user),localStorage.setItem("user",JSON.stringify(i.user)),i.user.id===1?(c.success("\u0110\u0103ng k\xFD th\xE0nh c\xF4ng"),document.location.href="/#/admin"):document.location.href="/#/"}catch(i){c.error(i.response.data),console.log(i.response),t.reset()}})}},K={render(){let t=[];return localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),console.log(t),`
    ${r.render()}
    <section>
    <div class="container">
    
        <table>
            <thead>
        
                <th>S\u1EA2N PH\u1EA8M</th>
                <th>T\xCAN S\u1EA2N PH\u1EA8M</th>
                <th>M\xC0U</th>
                <th>SIZE</th>
                <th>SL</th>
                <th>TH\xC0NH TI\u1EC0N</th>
                <th>X\xD3A</th>
        
            </thead>
            <tbody>
            ${t.map(e=>`
            
            <td>     <img style="width: 100px;" src="${e.img}" alt=""></td>
            <td>${e.name}</td>
                <td>1</td>
                <td>1</td>
                <td>${e.name}</td>
                <td>1</td>
            
            `)}
                
            </tbody>
        </table>
    </div>
</section>
    `}},n=async(t,e)=>{document.querySelector("#app").innerHTML=await t.render(e),t.afterRender&&await t.afterRender(e)},b=new E("/",{linksSelector:"a",hash:!0});b.on("/admin/*/",()=>{},{before(t){localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).id==1?t():document.location.href="/"}});b.on({"/":async()=>n(await R),"/admin/posts/:id/edit":({data:t})=>n(V,t.id),"/nu":async()=>n(await D),"/admin":()=>n($),"/addpost":()=>n(z),"/signup":()=>n(F),"/signin":()=>n(W),"/chitiet/:id":({data:t})=>n(U,t.id),"/cart":()=>n(K)});b.resolve();const Q=document.querySelectorAll(".catergory-let-li");Q.forEach((t,e)=>{t.addEventListener("click",()=>{t.classList.toggle("block")})});
