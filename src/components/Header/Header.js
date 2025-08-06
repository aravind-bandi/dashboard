import { Link } from "react-router-dom";

const Header = () =>{
return(
   <>
   <header className="d-flex align-items-center">
    <div className="container-fluid w-100">
       <div className="row d-flex align-items-center">
             {/* logo */}
             <div className="col-xs-3">
               <Link to={'/'} className="d-flex  align-items-center">
               <img src="https://w7.pngwing.com/pngs/990/719/png-transparent-logo-letter-alphabet-design-angle-triangle-logo-thumbnail.png" className="logo"/>
               <span className="ml-2">RAVIND</span>
               </Link>
             </div>
       </div>
    </div>
   </header>
   
   </>
)
}
export default Header;