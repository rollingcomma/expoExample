import React from "react";
import { Container, Tab, Tabs } from "native-base";
import { MessageBox, Request}  from "./"

export default Inbox = () => {
  return(
    <Container>
      <Tabs>
        <Tab
          heading="Messages">
          <MessageBox />
        </Tab>
        <Tab
          heading="Requests">
          <Request />
        </Tab>
      </Tabs>
    </Container>
  )
}