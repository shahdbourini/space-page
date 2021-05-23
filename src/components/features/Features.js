import './style-feature.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Features(props) {
  return (
    <>
      <div className="title">
        <h1>Features</h1>
      </div>

      <Row
        gutter={[0, 24]}
        style={{ paddingLeft: `15%`, paddingTop: `45px`, paddingRight: `10%` }}
      >
        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>

        <Col
          xs={{ span: 9, offset: 1 }}
          sm={{ span: 9, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
        >
          <div className="box-feature">
            <h3 style={{ paddingTop: '32px' }}>WIFI</h3>
            <p>HIGH SPAEED RELIABLE INTERNET</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Features;
