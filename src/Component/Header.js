import React,{useState} from 'react'
import './Header.css'
import Loc2 from './Loc2.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import RoomIcon from '@mui/icons-material/Room';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {
  const [name, setName] = useState("");
  
  const [{basket,user},dispatch] = useStateValue()
  const filterelement= basket.filter((item)=>item.category ===name)
  // basket=filterelement;
  if(user){
    var useremail = user.email;
  }
  else {
    var useremail = 'Guest';
  }
  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  };
  const Search = () =>{
    // let category
    dispatch({
      type:'SEARCH_ITEM',
      item:{
        category:name,
      }}
    )}
    console.log(name)
  return (
    <div className='header'>
      <Link to="/">
      <img 
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_border deliverBorder">
        <div className="header_deliver">
          <RoomIcon />
          <LocationOnIcon />
          <RoomOutlinedIcon />
          <img  className="Loc"
           src={Loc2} />
          <div className="header_option">
            <span className="header_optionLineOne">Deliver to</span>
            <span className="header_optionLineTwo">Ethiopia</span>
          </div>
        </div>
      </div>
        <div className='header_search'>
            <input className='header_searchInput' type='text' onChange={(e)=>setName(curr=>e.target.value)} />
        </div>
        <SearchIcon className='header_searchIcon'onClick={Search} />
        <div className='header_nav'>
        <Link to={!user && "/Login"} className='header_clearlink'>
            <div onClick={handleAuthentication} className='header_option'>
             <span className='header_optionLineOne'> Hello {useremail} </span>
             <span className='header_optionLineTwo'>{user? 'Sign Out':'Sign In'}</span>
            </div>
            </Link>
            <Link to="/Orders" className='header_clearlink'>
            <div className='header_option'>
             <span className='header_optionLineOne'> Returns</span>
             <span className='header_optionLineTwo'>& Orders</span>
            </div>
            </Link>
            <div className='header_option'>
             <span className='header_optionLineOne'> Your</span>
             <span className='header_optionLineTwo'>Prime</span>
            </div>
            <Link to="/Checkout" className='header_clearlink'>
            <div className='header_optionBasket'>
                {/* <ShoppingBasketIcon /> */}
                <ShoppingCartOutlinedIcon />
                {/* <span className='header_optionLineTwo header_basketCount'>
                    {basket.length}
                </span> */}
                <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header