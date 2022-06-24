// CSS
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">Powered by</p>
      <p className="footer-link">
        <a className="open" href="https://openweathermap.org/" target="_blank" rel="noreferrer">
          OpenWeather
        </a>
      </p>
    </div>
  );
}
