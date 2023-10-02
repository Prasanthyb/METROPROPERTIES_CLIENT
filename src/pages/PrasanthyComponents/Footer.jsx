import React from 'react';
import './styleFooter.css';
const Footer = () => {
    const footerData = [
        {
          header: 'COMPANY',
          items: ['About Us', 'Careers', 'Partners'],
        },
        {
          header: 'COURSES',
          items: ['Register', 'Login', 'Projects', 'Teachers', 'Parents', 'Resources'],
        },
        {
          header: 'SUPPORT',
          items: ['FAQs', 'Helpdesk', 'Contact Us'],
        },
        {
          header: 'LEGAL',
          items: ['Terms & Conditions', 'Privacy Policy'],
        },
        {
          header: 'LevelUp Works',
          items: ['LevelUp Works is an Auckland-based', 'enterprise dedicated to developing game-', 'based learning software to help teachers in', 'response to the NewZealand Digital ', 'Technologies & Hangarau Matihiko.', 'alan@levelupworks.com','(021)668 185.'],
        },
      ];


  return (
    <footer className="footer">
      <table className="footer-table">
        <tbody>
          <tr>
            {footerData.map((column, columnIndex) => (
              <td key={columnIndex}>
                <h3>{column.header}</h3>
                <ul>
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                    ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </footer>
  );
}

export default Footer;
