import { Col, Row, Button } from 'antd';
import 'antd/dist/antd.css';
import './style-contact.css';

function Contact(props) {
  return (
    <div
      className="image"
      style={{ marginTop: `129px`, marginBottom: `100px` }}
    >
      <Row style={{ paddingTop: '10%' }}>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 9 }}
        >
          <h1>GET IN TOUCH NOW !</h1>
        </Col>

        <Col
          xs={{ span: 5, offset: 5 }}
          sm={{ span: 5, offset: 6 }}
          md={{ span: 5, offset: 7 }}
          lg={{ span: 5, offset: 9 }}
        >
          <Button size="large" style={{ width: `86%` }}>
            More info
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
