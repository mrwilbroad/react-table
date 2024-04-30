import { useState } from "react";
import "./App.css";
import T01Basictable from "./Components/T01Basictable";
import T02Basictable from "./Components/T02Basictable";
import T03Basictable from "./Components/T03Basictable";
import T04Basictable from "./Components/T04Basictable";
import T05Basictable from "./Components/T05Basictable";
import { Tabs, Tab, Nav } from "react-bootstrap";
import QRcodegenerator from "./Components/QRCode/QRcodegenerator";
import WebComeT from "./Components/webcam/WebComeT";

function App() {
  const Links = [
    {
      title: "Basic table",
      com: <T01Basictable />,
    },
    {
      title: "Header Grouping",
      com: <T02Basictable />,
    },
    {
      title: "Sorting/Formating Columns",
      com: <T03Basictable />,
    },

    {
      title: "Global Filtering",
      com: <T04Basictable />,
    },
    {
      title: "Pagination",
      com: <T05Basictable />,
    },
    {
      title: "QRCode",
      com: <QRcodegenerator />,
    },

    {
      title: "webcome",
      com: <WebComeT />,
    },
  ];
  const [Tkey, setTkey] = useState(Links[0].title);

  return (
    <div className="container  bg-light p-2 border border-info ">
      <h5>React-table</h5>

      <Tab.Container
        id="tab-container-id"
        activeKey={Tkey}
        onSelect={(k) => setTkey(k)}
      >
        <Nav variant="pills">
          {Links.map((lin, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={lin.title}>{lin.title}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {Links.map((lin, index) => {
            return (
              lin.title === Tkey && (
                <Tab.Pane key={index} eventKey={lin.title}>
                  {lin.com}
                </Tab.Pane>
              )
            );
          })}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default App;
