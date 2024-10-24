// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import '../styles/footer.css'; // Import the custom CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link href="#" className="footer-logo">M Y</Link>
        <br />
        
        <div className="footer-links">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <Link key={item} href={`#${item}`} className="footer-link"> 
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="footer-social-icons">
          <Link href="https://www.linkedin.com/in/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/1.png" alt="LinkedIn" width={40} height={40} className="footer-icon" />
          </Link>
          <Link href="https://github.com/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/2.png" alt="GitHub" width={40} height={40} className="footer-icon" />
          </Link>
          <Link href="https://x.com/MYousuf-codes" target="_blank" rel="noopener noreferrer">
            <Image src="/3.png" alt="X" width={40} height={40} className="footer-icon" />
          </Link>
          <Link href="https://www.facebook.com/MuhammmadYousufMYM" target="_blank" rel="noopener noreferrer">
            <Image src="/4.png" alt="Facebook" width={40} height={40} className="footer-icon" />
          </Link>
          <Link href="https://www.instagram.com/m_yousuf575" target="_blank" rel="noopener noreferrer">
            <Image src="/5.png" alt="Instagram" width={40} height={40} className="footer-icon" />
          </Link>
          <Link href="https://wa.me/+923012381884" target="_blank" rel="noopener noreferrer">
            <Image src="/6.png" alt="WhatsApp" width={40} height={40} className="footer-icon" />
          </Link>
        </div>

        <p className="footer-text">&copy; 2024 Muhammad Yousuf. All rights reserved.</p>
      </div>
    </footer>
  );
}
