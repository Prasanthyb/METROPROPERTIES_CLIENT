import React from "react";
import "./styleFooter.css";
const Footer = () => {
  
  //--------------------------- Data for the footer----------------------//

  const footerData = [
    
    {
      header: "QUICK LINKS",
      items: [
        "PROPERTY OWNERS",
        "TENANTS",
        "NEWS",
        "ABOUT US"
        
      ],
    },
    {
      header: "CONTACT US",
      items: ["093914642", "info@metronz.co.nz", "Level 33,ANZ Centre,23-29 Albert Street,Acckland CBD,1010"],
    }
          
    
  ];

  return (
  //------------------------- Footer container with a table structure----------------------//

    <footer className="footer">
      <table className="footer-table">
      <img  src="/logo.png" alt="" />
        <tbody>
          <tr>
  {/*--------------------------Map through the footer data to create columns-------------------*/}
          
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
};

export default Footer;
