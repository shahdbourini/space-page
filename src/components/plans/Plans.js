import { Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import './style-plans.css';

function Plans(props) {
  return (
    <>
      <div className="title">
        <h1>PLANS</h1>
      </div>

      <Row gutter={[0, 16]} className="plans" style={{ paddingRight: '15%' }}>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 7 }}
          lg={{ span: 7 }}
        >
          <div className="left"></div>
          <div className="box-feature style2">
            <h4 className="plan-title">HOT DESK</h4>
            <h6>CREAT FOR INDIVIDUALS</h6>
            <ul className="details">
              <li>SHARED WORKSPACE</li>
              <li>ACCESS 9AM-9PM/5-DAYS</li>
              <li>HIGH SPEED INTERNET</li>
              <li>COMMUNITY MEMBERSHIP</li>
              <li style={{ fontWeight: `700`, color: `black` }}>
                MEETING ROOMS
              </li>
            </ul>

            <Button type="primary" size="middle" className="btn3">
              Book Now
            </Button>
          </div>
        </Col>

        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-feature style2">
            <h4 className="plan-title">HOT DESK</h4>
            <h6>CREAT FOR INDIVIDUALS</h6>
            <ul className="details">
              <li>SHARED WORKSPACE</li>
              <li>ACCESS 9AM-9PM/5-DAYS</li>
              <li>HIGH SPEED INTERNET</li>
              <li>COMMUNITY MEMBERSHIP</li>
              <li style={{ fontWeight: `700`, color: `black` }}>
                MEETING ROOMS
              </li>
            </ul>

            <Button type="primary" size="middle" className="btn3">
              Book Now
            </Button>
          </div>
        </Col>

        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 7, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <div className="box-feature style2">
            <h4 className="plan-title">HOT DESK</h4>
            <h6>CREAT FOR INDIVIDUALS</h6>
            <ul className="details">
              <li>SHARED WORKSPACE</li>
              <li>ACCESS 9AM-9PM/5-DAYS</li>
              <li>HIGH SPEED INTERNET</li>
              <li>COMMUNITY MEMBERSHIP</li>
              <li style={{ fontWeight: `700`, color: `black` }}>
                MEETING ROOMS
              </li>
            </ul>

            <Button type="primary" size="middle" className="btn3">
              Book Now
            </Button>
          </div>
          <div className="right"></div>
        </Col>
      </Row>
    </>
  );
}

export default Plans;
