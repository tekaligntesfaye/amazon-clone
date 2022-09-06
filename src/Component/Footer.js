import { Link } from '@mui/material'
import React from 'react'
import './Footer.css'
import ReactLanguageSelect from 'react-languages-select';
 

function Footer() {
    return (
        <footer className="footer-container">
            <Link to='/'>
            <div className="back-to-top">
                <a href="" className="back-to-top-btn">Back to top</a>
            </div>
            </Link>
            <div className="links-top-container">
                <table className="footer-table">
                    <tbody>
                        <tr>
                            <td>
                                <div className="links-top-title">Get to Know Us</div>
                                <ul className="footer-link-list">
                                    <li className="footer-link"><a href="">Carrers</a></li>
                                    <li className="footer-link"><a href="">About Amazon</a></li>
                                    <li className="footer-link"><a href="">Investor Relations</a></li>
                                    <li className="footer-link"><a href="">Amazon Devices</a></li>
                                </ul>
                            </td>
                            <td className="footer-link-spacing"></td>
                            <td>
                                <div className="links-top-title">Make Money with Us</div>
                                <ul className="footer-link-list">
                                    <li className="footer-link">
                                        <a href="">Sell on Amazon</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Sell Your Services on Amazon</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Sell on Amazon Business</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Sell your apps on Amazon</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Become an Affiliate</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Advertise Your Products</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Self-Publish with Us</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Become an Amazon Vendor</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Sell Your Subscription on Amazon</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href=""><span><i className="fa fa-caret-right"></i></span>&nbsp; See all</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="footer-link-spacing"></td>
                            <td>
                                <div className="links-top-title">
                                    Amazon Payment Products
                                </div>
                                <ul className="footer-link-list">
                                    <li className="footer-link">
                                        <a href="">Amazon Rewards Visa Signature Cards</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Amazon.com Store Card</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Amazon.com Corporate Credit Line</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Shop with Points</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Credit Card Marketplace</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Reload Your Balance</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Amazon Currency Converter</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="footer-link-spacing"></td>
                            <td>
                                <div className="links-top-title">Let Us Help You</div>
                                <ul className="footer-link-list">
                                    <li className="footer-link">
                                        <a href="">Your Account</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Your Orders</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Shipping Rates & Policies</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Amazon Prime</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Returns & Replacements</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Manage Your Content and Devices</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Amazon Assistant</a>
                                    </li>
                                    <li className="footer-link">
                                        <a href="">Help</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bottom-footer-top">
                <div className="amz-logo-container">
                    <div className="amz-logo"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" width="100px" /></div>
                    <div className="language-btn"><span><i className="fa fa-globe"></i></span> <img src="https://thumbs.dreamstime.com/b/black-web-icon-symbol-website-illustration-isolated-white-backgroundflat-design-style-flat-197558293.jpg" width="15px" height="15px" />&nbsp; English</div>
                    <div className="country-btn"><span className="country-img"><img src="https://seeklogo.com/images/A/American_Flag-logo-4ECE0EED17-seeklogo.com.png" width="20px" height="10px" /> &nbsp;</span>United States</div>
                    {/* <ReactLanguageSelect
                   defaultLanguage="en" /> */}
                </div>
            </div>
            <div className="links-bottom-container">
                <table className="bottom-table">
                    <tbody>
                        <tr>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Music
                                    <br/>
                                    <span>
                                        Stream millions
                                        <br/>
                                        of songs
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Drive
                                    <br/>
                                    <span>
                                        Cloud storage
                                        <br/>
                                        from Amazon
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    6pm
                                    <br/>
                                    <span>
                                        Score deals
                                        <br/>
                                        on fashion brands
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    AbeBooks
                                    <br/>
                                    <span>
                                        Books, art
                                        <br/>
                                        & collectibles
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    ACX
                                    <br/>
                                    <span>
                                        Audiobook Publishing
                                        <br/>
                                        Made Easy
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Alexa
                                    <br/>
                                    <span>
                                        Actionable Analytics
                                        <br/>
                                        for the Web
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Business
                                    <br/>
                                    <span>
                                        Everything For
                                        <br/>
                                        Your Business
                                    </span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="bottom-table-height-spacing"></td>
                        </tr>
                        <tr>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    AmazonFresh
                                    <br/>
                                    <span>
                                        Groceries & More
                                        <br/>
                                        Right To Your Door
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    AmazonGlobal
                                    <br/>
                                    <span>
                                        Ship Orders
                                        <br/>
                                        Internationally
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Home Services
                                    <br/>
                                    <span>
                                        Handpicked Pros
                                        <br/>
                                        Happiness Guarantee
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Inspire
                                    <br/>
                                    <span>
                                        Digital Educational
                                        <br/>
                                        Resources
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Rapids
                                    <br/>
                                    <span>
                                        Fun stories for
                                        <br/>
                                        kids on the go
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Restaurants
                                    <br/>
                                    <span>
                                        Food delivery from
                                        <br/>
                                        local restaurants
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Video Direct
                                    <br/>
                                    <span>
                                        Video Distribution
                                        <br/>
                                        Made Easy
                                    </span>
                                </a>
                            </td>
                        </tr>
                        <tr><td className="bottom-table-height-spacing"></td></tr>
                        <tr>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Amazon Web Services
                                    <br/>
                                    <span>
                                        Scalable Cloud
                                        <br/>
                                        Computing Services
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Audible
                                    <br/>
                                    <span>
                                        Download
                                        <br/>
                                        Audio Books
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    AudiobookStand
                                    <br/>
                                    <span>
                                        Discount Audiobooks
                                        <br/>
                                        on Disc
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Book Depository
                                    <br/>
                                    <span>
                                        Books With Free
                                        <br/>
                                        Delivery Worldwide
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Box Office Mojo
                                    <br/>
                                    <span>
                                        Find Movie
                                        <br/>
                                        Box Office Data
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    ComiXology
                                    <br/>
                                    <span>
                                        Thousands of
                                        <br/>
                                        Digital Comics
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    CreateSpace
                                    <br/>
                                    <span>
                                        Indie Print Publishing
                                        <br/>
                                        Made Easy
                                    </span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="bottom-table-height-spacing"></td>
                        </tr>
                        <tr>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    DPReview
                                    <br/>
                                    <span>
                                        Digital
                                        <br/>
                                        Photography
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    East Dane
                                    <br/>
                                    <span>
                                        Designer Men's
                                        <br/>
                                        Fashion
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Fabric
                                    <br/>
                                    <span>
                                        Sewing, Quilting
                                        <br/>
                                        & Knitting
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Goodreads
                                    <br/>
                                    <span>
                                        Book reviews
                                        <br/>
                                        & recommendations
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    IMDb
                                    <br/>
                                    <span>
                                        Movies, TV
                                        <br/>
                                        & Celebrities
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    IMDbPro
                                    <br/>
                                    <span>
                                        Get Info Entertainment
                                        <br/>
                                        Professionals Need
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Junglee.com
                                    <br/>
                                    <span>
                                        Shop Online
                                        <br/>
                                        in India
                                    </span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="bottom-table-height-spacing"></td>
                        </tr>
                        <tr>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Kindle Direct Publishing
                                    <br/>
                                    <span>
                                        Indie Digital Publishing
                                        <br/>
                                        Made Easy
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Prime Now
                                    <br/>
                                    <span>
                                        FREE 2-Hour Delivery
                                        <br/>
                                        on Everyday Items
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Prime Photos
                                    <br/>
                                    <span>
                                        Unlimited Photo Storage
                                        <br/>
                                        Free With Prime
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Shopbop
                                    <br/>
                                    <span>
                                        Designer
                                        <br/>
                                        Fashion Brands
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    TenMarks.com
                                    <br/>
                                    <span>
                                        Math Activities
                                        <br/>
                                        for Kids & Schools
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Warehouse Deals
                                    <br/>
                                    <span>
                                        Open-Box
                                        <br/>
                                        Discounts
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Whispercast
                                    <br/>
                                    <span>
                                        Discover & Distribute
                                        <br/>
                                        Digital Content
                                    </span>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="bottom-table-height-spacing"></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Withoutabox
                                    <br/>
                                    <span>
                                        Submit to
                                        <br/>
                                        Film Festivals
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Woot!
                                    <br/>
                                    <span>
                                        Deals and 
                                        <br/>
                                        Shenanigans
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Zappos
                                    <br/>
                                    <span>
                                        Shoes &
                                        <br/>
                                        Clothing
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Souq.com
                                    <br/>
                                    <span>
                                        Shop Online in
                                        <br/>
                                        the Middle East
                                    </span>
                                </a>
                            </td>
                            <td className="bottom-table-spacing"></td>
                            <td className="bottom-links">
                                <a href="" className="bottom-link">
                                    Subscribe with Amazon
                                    <br/>
                                    <span>
                                        Discover & try
                                        <br/>
                                        subscription services
                                    </span>
                                </a>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
                <div className="copy-right">
                    Conditions of Use &nbsp; Privacy Notice &nbsp; Interest-Based Ads &nbsp;<span className="copy-right-span">&copy; 1996-2022, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer





// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Footer.css'



// const Footer = () => {
//     return (
//         <>
//         <div className="footer" style={{
//             background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('http://localhost:4001/assets/footer.jpg')",
//             backgroundPosition:'center',
//             backgroundRepeat:'no-repeat',
//             backgroundSize:'cover'
//         }}>
//            <NavLink to="/products" className="btn btn-warning">Continue Shopping</NavLink>
//             <h4 className="text-white p-3">Shop on the <span style={{color:'#F7B030'}}>Your Shop </span>| Fast, convenient and secure | Over 17 crore products in your pocket</h4>

//         </div>
            
//         </>
//     )
// }

// export default Footer


// import React from 'react'
// import './Footer.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Footer() {
//     return (
//         <footer className="w-full flex flex-col relative">
//           <div className="bg-gray-700 w-full flex justify-center items-center mx-auto px-2 py-1 md:py-2">
//             <a href="#" className="text-white text-base leading-4 text-center">
//               Back to top
//             </a>
//           </div>
//           <div className="bg-gray-800 w-full flex flex-col text-center md:text-left md:flex-row justify-center md:justify-between items-center md:items-start mx-auto px-2 md:px-48 lg:px-96 py-4 md:py-10">
//             <section className="my-2 md:my-0">
//               <h5 className="font-bold text-white text-base">Get to Know Us</h5>
//               <ul className="text-gray-200 text-base">
//                 <li className="leading-5">
//                   <a href="#">Careers</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Blog</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">About Amazon</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Sustainability</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Investor Relations</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Amazon Devices</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Amazon Tours</a>
//                 </li>
//               </ul>
//             </section>
//             <section className="my-2 md:my-0">
//               <h5 className="font-bold text-white text-base">Make Money with Us</h5>
//               <ul className="text-gray-200 text-base">
//                 <li className="leading-5">
//                   <a href="#">Sell products on Amazon</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Sell apps on Amazon</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Become an Affiliate</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Advertise Your Products</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Self-publish with Us</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Host an Amazon Hub</a>
//                 </li>
//               </ul>
//             </section>
//             <section className="my-2 md:my-0">
//               <h5 className="font-bold text-white text-base">
//                 Amazon Payment Products
//               </h5>
//               <ul className="text-gray-200 text-base">
//                 <li className="leading-5">
//                   <a href="#">Amazon Business Card</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Shop With Points</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Reload Your Balance</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Amazon Currency Converter</a>
//                 </li>
//               </ul>
//             </section>
//             <section className="my-2 md:my-0">
//               <h5 className="font-bold text-white text-base">Let Us Help You</h5>
//               <ul className="text-gray-200 text-base">
//                 <li className="leading-5">
//                   <a href="#">Amazon and COVID-19</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Your Account</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Your Orders</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Shipping Rates and Policies</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Returns and Replacements</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Manage Your Content and Devices</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Amazon Assistant</a>
//                 </li>
//                 <li className="leading-5">
//                   <a href="#">Help</a>
//                 </li>
//               </ul>
//             </section>
//           </div>
//           <div className="bg-gray-800 w-full flex justify-center items-center mx-auto py-4 lg:py-6 border-t border-gray-700">
//             <div className="inline-flex">
//               <a className="_o6689fn" href="/">
//                 <img src="/logo-white.png" className="w-24" alt="Logo"></img>
//               </a>
//             </div>
//           </div>
//           <div className="footer-2 bg-black w-full flex justify-center items-center mx-auto py-2 border-t border-gray-700 ">
//             <ul className="text-white flex text-base d-flex mx-3">
//               <li>
//                 <a href="#" className="font-bold mr-2">
//                   Conditions of Use
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="font-bold mr-2">
//                   Privacy Notice
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="font-bold mr-2">
//                   Interest-Based Ads
//                 </a>
//               </li>
//               <li>
//                 <span className="text-gray-400">
//                   &copy; 1996-2022, Amazon.com, Inc. or its affiliates
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </footer>
//       );
    

//     }
// export default Footer