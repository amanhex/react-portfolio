import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="bg-red">
            <div className="container mx-auto px-8">
                <div className="flex flex-wrap justify-between items-center">
                    <SocialMediaIcons />
                    <div className="md:flex justify-center md:justify-between text-center">
                        <p className="font-playfair text-md text-yellow text-xl pb-5">
                            <span className="font-semibold">©️2023 - </span> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;