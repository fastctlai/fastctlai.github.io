import { GithubIcon, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 FastCTL AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/company/fastctl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/fastctlai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 