import { Row, Col } from 'antd';
import brand from '../../images/brand.png';

function Startup(props) {
  return (
    <>
      <Row style={{ paddingTop: `220px`, paddingBottom: `100px` }}>
        <Col
          xs={{ span: 18, offset: 5 }}
          sm={{ span: 15, offset: 5 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 8, offset: 3 }}
        >
          <h1>
            STARTUP THAT WE WORK <bold style={{ color: `#fad98a` }}>WITH</bold>
          </h1>
        </Col>
        <Col
          xs={{ span: 25, offset: 1 }}
          sm={{ span: 20, offset: 1 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Row>
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 5, offset: 2 }}
            >
              <img src={brand} alt="img" />
            </Col>

            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 5, offset: 2 }}
            >
              <img src={brand} alt="img" />
            </Col>

            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 7, offset: 2 }}
            >
              <img src={brand} alt="img" />
            </Col>
            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 5, offset: 2 }}
            >
              <img src={brand} alt="img" />
            </Col>

            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 5, offset: 2 }}
            >
              <img src={brand} alt="img" />
            </Col>

            <Col
              xs={{ span: 10, offset: 1 }}
              sm={{ span: 6, offset: 2 }}
              md={{ span: 6, offset: 2 }}
              lg={{ span: 7, offset: 2 }}
            >
              <img src={brand} alt="img" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Startup;
