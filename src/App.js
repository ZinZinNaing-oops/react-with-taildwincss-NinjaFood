import React,{Component} from "react";
class App extends Component {
  componentDidMount(){
    const burger=document.querySelector('#burger');
    const menu=document.querySelector('#menu');
    burger.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})
  }
  render(){
  return (
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right"> 
              <div className="flex justify-between items-center">
                  <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-cus">
                    <a href="/" >Food Ninja</a>
                  </h1>
                  <div className="md:hidden px-4 cursor-pointer" id="burger">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
              </div>
              <ul className="mt-6 text-sm hidden md:block" id="menu">
                <li class="py-1">
                  <a href="#" className="px-4 flex justify-end border-r-2 border-primary">
                    <span>Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </a>
                </li>
                <li class="py-1">
                  <a href="#" className="px-4 flex justify-end border-r-2 border-white">
                    <span>About</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </li>
                <li class="py-1">
                  <a href="#" className="px-4 flex justify-end border-r-2 border-white">
                    <span>Contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </li>
              </ul>
          </nav> 
      </div>
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div class='flex md:justify-end justify-center'>
          <a href="#" class='text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-3000'>Login</a>
          <a href="#" class='text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white'>Sign Up</a>
        </div>
        <header>
          <h2>Recipes</h2>
          <h3>For Ninjas</h3>
        </header>
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <div className="card">
              <img src="./images/stew.jpg" alt="stew" className="w-full h-32 small:h-48 object-cover"/>
              <div className="m-4">
                <span class='font-bold'>5 Bean Chilli Stew</span>
                <span class='block text-gray-500 text-sm'>Recipe By Mario</span>
              </div>
              <div className="badge">
                <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img src="./images/noodles.jpg" alt="noodles" className="w-full h-32 small:h-48 object-cover"/>
              <div className="m-4">
                <span class='font-bold'>Veg Noodle</span>
                <span class='block text-gray-500 text-sm'>Recipe By Mario</span>
              </div>
              <div className="badge">
                <svg class="w-5 inline-block" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className="card">
              <img src="./images/curry.jpg" alt="curry" className="w-full h-32 small:h-48 object-cover"/>
              <div className="m-4">
                <span class='font-bold'>Tofu Curry</span>
                <span class='block text-gray-500 text-sm'>Recipe By Mario</span>
              </div>
              <div className="badge">
                <svg className="w-5 inline-block" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200"> Most Popular</h4>
          <div class='mt-8'>
          </div>
          <div className="flex justify-center " >
            <div class='btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 hover:scale-125 transition ease-out duration-5000'>Load more...</div>
          </div>
        </div>
      </main>
    </div>

  );
}
}
export default App;
