import { Link } from "react-router-dom";


function Navbar() {
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };


  
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <ul className="links-container">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to='/new-recipe'>New Recipe</Link>
            </li>
            <li>
              <a href="#" onClick={scrollToBottom}>
                ⬇️
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
