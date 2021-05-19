import './header.css'
// function Header() {
//     return (
//         <header>
//             ACME MIS
//         </header>
//     )
// }


const Header=(props)=>{
    return (
        <header>
       {props.heading}
    </header>

    )
}

export default Header;