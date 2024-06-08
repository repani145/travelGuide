
const Footer = (prop)=>{
    const {stle}=prop;
    return(
        <>
            <div style={{display:'flex',justifyContent:'space-around',border:'1px solid black',padding:'20px',backgroundColor:'black',color:'white',marginTop:'30px'}}>
                <div>
                    <h3>AboutUs</h3>
                    <p>OurMotive</p>
                    <p>History and Present</p>
                    <p>Our Success Story</p>
                </div>
                <div>
                    <h3>HELP AND CONTACT</h3>
                    <p>@siva on Twitter</p>
                    <p>History and Present</p>
                    <p>Guides & contact from</p>
                </div>
            </div>
        </>
    )
}

export default Footer;