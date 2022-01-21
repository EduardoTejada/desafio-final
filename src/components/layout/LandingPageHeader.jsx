import { Link } from 'react-router-dom'

import Button from "./Button";
import mainHeaderStyle from "../UI/MainHeader.module.css"

function LandingPageHeader() {
    return (
    <>
    <header className={mainHeaderStyle.mainheader}>
        <img src="https://lh3.googleusercontent.com/BtoVHxmIOJomzigyqUJCCv09vyeK7LW_dYnk6uu6-a1lU0cJLkVHVIcuCrxar6YTFjyFQDF5udf6C3quz8Tok79c8LPbeBpfV_NuBVf6YXuiKeVsHkf02S8auO1cGcTdbETTSXpCBj8pkuZ40_5hXKlpILIJ8Jk-YF1woRwu_sc1lwEPNc5StBcFrIfkHNMiK4RYA_OOFf53zqcBWMrqd3jJYGO58ORj3CAL5xZFdWT3c0NEz9HEslst13sXiLBQ5xORXJSCpMVaYsbfj62TRF--tXJ_Sq6t5QEmqDiJ_juiQ5lTtIB25q-vNttX6bd9cQccP_6Nv4jY2sAHIVT2M2YP3LABXshp9SMVHSM4WUex0WFhdiMD8JuLxmnUhDIvVjp8YIh38B4xNqm0hJ_uyVIhPPIhreZa4zdpaY67BrBx9CnlhPr-t6F68vhG9NzGndsUwETqCCE3GTc8OVXXzQ8P0WY76ABjbWvk061JPRzsQJUbBdLlhV5jlJNODsUaLs1Lu6XnwrdaOrn0LpsvbbquKRGi7-OB0fm_3h0w2ZigCASCXBEjcYqJzdsdDBa5pUwmB7-3kf4J3I97ykc-ft7RmjlO48JGsEbAy2L36cegSVHLKZmLyhRrCY0vaj3hTPRWZ6ORejG1yDTASN6uqwHE1a72zwd5bX3pQ-R1yP_fb5yCTnTCdjgfpWeT554doQ7sdJ246CdNiSQNhlPlTKbO2A=w161-h35-no" alt="Logo 3035TECH" className={mainHeaderStyle.logo}/>
        <nav>
            <Link to="/login">
                <Button className={mainHeaderStyle.btn}>Fazer Login</Button>
            </Link>
            <Link to="/create-user">
                <Button className={mainHeaderStyle.btn}>Cadastre-se</Button>
            </Link>
        </nav>
    </header>
    </>
    )
}

export default LandingPageHeader;
