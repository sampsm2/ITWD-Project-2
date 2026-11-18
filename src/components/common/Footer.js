//Functions
function Footer() {
    const footerStyle = {
        minHeight: '10vh',
        backgroundColor: '#2C3E50',
        color: 'white',
        fontSize: '1.2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    //UI
    return(
        <>
            <header style={footerStyle}>
                <p>Advanced Web Application Development 2026</p>
            </header>
        </>
    )
}

//Export
export default Footer;