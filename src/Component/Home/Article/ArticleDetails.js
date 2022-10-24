import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

function ArticleDetails({ data }) {
  return (
    <Card className="m-5">
      <Card.Img variant="top" src={data?.picture} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text className="fs-3 fw-bold">{data.heading}</Card.Text>
        {data.paragraph ? (
          <Card.Text>{data.paragraph}</Card.Text>
        ) : data.time ? (
          <div>
            <div>
              <p>{data.time}</p>
            </div>
            <div>
              <p>{data.location}</p>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <p>{data.company} </p>
            </div>
            <div>
              <p>{data.location}</p>
            </div>
          </div>
        )}
      </Card.Body>
      {data.btn && <button>{data.btn}</button>}
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
