import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/dawitbelayalemneh", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/dawit-belay-b74492175", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:dawitbelay27@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dawit Belay is Awesome. You should hire him.
          </p>
        </div>
      </div>
    </footer>
  );
}

