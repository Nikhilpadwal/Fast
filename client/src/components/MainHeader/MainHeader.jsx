import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import "./MainHeader.scss";
import Logo from "../Logo/Logo";
import { navLinks } from "../../constants/constants";

const MainHeader = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setNavOpen(false);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <nav className="navbar" onClick={() => setActiveDropdown(null)}>
      <Logo />

      {/* Desktop Navigation */}
      <div className="nav-links">
        {navLinks.map((item, index) => (
          <div
            key={item.title}
            className="nav-item"
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <p className="nav-link" onClick={() => handleNavClick(item.path)}>
              {item.title}
            </p>
            {item.subLinks && activeDropdown === index && (
              <div className="dropdown">
                {item.subLinks.map((subItem) => (
                  <p
                    key={subItem.title}
                    className="dropdown-link"
                    onClick={() => handleNavClick(subItem.path)}
                  >
                    {subItem.title}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hamburger Menu */}
      <div className="ham" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <RiCloseLine /> : <RiMenu3Fill />}
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          className="mobile-outer"
          onClick={() => {
            setActiveDropdown(null);
          }}
        >
          <div className="nav-links-mobile">
            {navLinks.map((item, index) => (
              <div key={item.title} className="nav-item">
                <p
                  className="nav-link"
                  onClick={() => {
                    toggleDropdown(index);
                    setActiveDropdown(null);
                    handleNavClick(item.path);
                  }}
                >
                  {item.title}
                </p>
                {item.subLinks && activeDropdown === index && (
                  <div className="dropdown">
                    {item.subLinks.map((subItem) => (
                      <p
                        key={subItem.title}
                        className="dropdown-link"
                        onClick={() => handleNavClick(subItem.path)}
                      >
                        {subItem.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainHeader;
