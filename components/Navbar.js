import React from "react";
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
     <nav className="nav">
  <Link href="/"><a className="nav-link active">Home</a></Link>
  <Link href="/blog"><a className="nav-link" >Blog</a></Link>
<Link href="/github"><a className="nav-link" >Github</a></Link>
  
</nav>
      
        
      
    </div>
  );
};

export default Navbar;
