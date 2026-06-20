export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Suganthi. All rights reserved.</p>
        <p className="footer__made">Built with React · Vite</p>
      </div>
    </footer>
  )
}
