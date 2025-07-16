import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <Card className="bg-primary-subtle text-dark border-0 rounded-0">
      <CardBody className="text-center py-3">
        <h1 className="fw-bold text-wrap text-break m-0 px-2 px-sm-3 px-md-4 fs-4 fs-md-3 fs-lg-2">
          Welcome To Course Management Application
        </h1>
      </CardBody>
    </Card>
  );
}

export default Header;
