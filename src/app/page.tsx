import Image from "next/image";
import logo from '../res/nova-main-logo.png';

export default function Home() {
    return (
        <div className="Page-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div className="Logo Main-logo" style={{ width: "35%" }}>
                <img src={logo.src} alt="nova"/>
            </div>
        </div>
    );
}