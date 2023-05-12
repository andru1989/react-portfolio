import HeaderImage from '../../assets/header4.jpg';
import data from './data';
import './header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="" />
        </div>
        <h3>Andrés Vizcaíno</h3>

        <p>
          I am a software developer who graduated from SENA and has approximately 11 years of experience as a web developer. I have worked on the backend using Ruby and its libraries or frameworks such as Rails, Hanami, Sinatra, etc., integrating them with databases like PostgreSQL and MySQL.
        </p>

        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => {
              const DynamicIcon = item.icon;

              return (
                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
                  <DynamicIcon />
                </a>
              );
            })
          }
        </div>
      </div>
    </header>
  );
};

export default Header;