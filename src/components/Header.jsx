// to access data shared to a component we use the concept of function parameter
//functionName({propname, propname2})
import "../App.css"
function Header({title, subtitle}){
    return(
        <header className="header">
            <h2>{title}</h2>
            <blockquote>{subtitle}</blockquote>
        </header>

    )
}

export default Header