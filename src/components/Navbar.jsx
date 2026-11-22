

const Navbar = () => {



    return (
        <nav className="w-full bg-white shadow-sm mb-6 ">

            <div className="flex justify-between items-center px-6 py-5 max-w-7xl mx-auto">

               <a href='#home'>
                      <h3 className='text-2xl font-bold text-purple-600'>

                    RupaJoy <span className='text-grey-800'>.com</span>
                
                </h3>

               </a>

                 {/* mobile manu bar */}

                 



                <ul className='flex gap-8 text-grey-700 font-medium text-sm'>

                    <li>
                        <a href='#home' className='hover:text-purple-600 cursor-pointer duration-300'>Home

                        </a>
                    
                    </li>

                    <li> 
                        <a href='#products' className='hover:text-purple-600 cursor-pointer duration-300'>Products

                        </a>

                    </li>

                    <li> 
                        <a href='#blogs' className='hover:text-purple-600 cursor-pointer duration-300'>Blogs

                        </a>

                    </li>

                    <li> 
                        <a href='#contact' className='hover:text-purple-600 cursor-pointer duration-300'>Contact

                        </a>

                    </li>

                    <li> 
                        <a href='#about us' className='hover:text-purple-600 cursor-pointer duration-300'>About us

                        </a>

                     </li>

                </ul>

                <button className ="bg-purple-600 px-6 py-2 shadow-md text-white rounded-full
                 hover:bg-purple-700 transition cursor-pointer font-medium "> Login </button>

            </div>

        </nav>
    );
};

export default Navbar;