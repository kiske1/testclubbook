import React, { useState } from "react";
import { Header } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

function DataOra(props) {
  const [date, setDate] = useState("");

  function handleChange(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header as="h1">Scegli il tuo tee time</Header>
      <form>
          
        <DateInput
          name="date"
          placeholder="Date"
          value={date}
          iconPosition="left"
          onChange={handleChange}
          inline={true}
        />
      </form>
      <h1>text</h1>
    </>
  );
}

export default DataOra;
