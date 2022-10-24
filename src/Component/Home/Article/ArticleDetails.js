import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

function ArticleDetails({ data }) {
  return (
    <Card className="m-5">
      <Card.Img variant="top" src={data?.picture} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Text className="fs-3 fw-bold">{data.heading}</Card.Text>
          </div>
          <div>
            <ButtonGroup className="bg-light">
              <DropdownButton
                className=""
                // as={ButtonGroup}
                title="..."
                id="bg-nested-dropdown"
              >
                <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                <Dropdown.Item eventKey="3">Option 3</Dropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
        </div>
        {data.paragraph ? (
          <Card.Text>{data.paragraph}</Card.Text>
        ) : data.time ? (
          <div className="d-flex">
            <div>
              <p className="me-5">
                <FontAwesomeIcon icon={faCalendarDay} /> {data.time}
              </p>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> {data.location}
              </p>
            </div>
          </div>
        ) : (
          <div className="d-flex">
            <div>
              <p className="me-5">
                <FontAwesomeIcon icon={faBriefcase} /> {data.company}{" "}
              </p>
            </div>
            <div>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> {data.location}
              </p>
            </div>
          </div>
        )}
      </Card.Body>
      {data.btn && (
        <button className="btn border text-success mx-3">{data.btn}</button>
      )}
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center profile">
            <img src={data.logo} alt="" />
            <p className="ps-2">{data.name}</p>
          </div>
          <div>
            <span className="pe-2">{data.views}k views</span>
            <button className="border-0 p-3">
              <FontAwesomeIcon icon={faShareNodes} />
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArticleDetails;
