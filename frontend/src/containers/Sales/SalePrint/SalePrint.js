import React from "react";
import "./style.scss";
import Logo from "../../../../public/img/logo.png";

export default class SalePrint extends React.PureComponent {
  render() {
    return (
      <div className="SalePrint">
        <header>
          <img src={Logo} />
          <div id="content">
            <span className="title">Gr Cartuchos</span>
            <p>CNPJ: 22.925.297/0001-39</p>
            <p>
              Rua Andr&eacute; Madsen, 377 - Vila Kallil - Cosm&oacute;polis
            </p>
            <p>Telefone: 3872-4872 | Celular: 9 9203-7662</p>
          </div>
          <div id="data" />
        </header>
      </div>
    );
  }
}
