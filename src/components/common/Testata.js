import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";

function Testata(props) {
  const [activeItem, setActiveItem] = useState("");

  function handleItemClick(event) {
    event.preventDefault();
  }

  return (
    <Menu pointing secondary>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Registrati</Button>
        </Menu.Item>
        <Menu.Item>
          <Button primary>Accedi</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Testata;
