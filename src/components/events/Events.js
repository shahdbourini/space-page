import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './style-event.css';

function Events(props) {
  return (
    <>
      <div className="title">
        <h1>UP COMING EVENTS</h1>
      </div>

      <Row
        gutter={[0, 24]}
        style={{ paddingLeft: `15%`, paddingTop: `45px`, paddingRight: `10%` }}
      >
        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-event">
            <h3>TECH EVENT</h3>
            <p>10/01/2020-09:00 AM</p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-event">
            <h3>TECH EVENT</h3>
            <p>10/01/2020-09:00 AM</p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-event">
            <h3>TECH EVENT</h3>
            <p>10/01/2020-09:00 AM</p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-event">
            <h3>TECH EVENT</h3>
            <p>10/01/2020-09:00 AM</p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-event">
            <h3>TECH EVENT</h3>
            <p>10/01/2020-09:00 AM</p>
          </div>
        </Col>

        <Col
          xs={{ span: 20, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-event">
            <h3>TECH EVENT</h3>
            <p>10/01/2020-09:00 AM</p>
          </div>
        </Col>
      </Row>
      <Button
        type="primary"
        size="large"
        style={{ width: `13%`, position: `relative`, left: '46%', top: '29px' }}
      >
        More Info
      </Button>
    </>
  );
}

export default Events;
