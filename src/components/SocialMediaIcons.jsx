
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/amansingh4958/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/linkedin.png')} alt='linkedin-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-2"
                href="https://github.com/amanhex/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/github-icon.svg').default} alt='github-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-0.5"
                href="https://www.leetcode.com/amansingh4958/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/leetcode-icon.png')} alt='leetcode-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/__.amann/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/instagram.png')} alt='instagram-link' />
            </a>
        </div>
    )
}

export default SocialMediaIcons;