import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import YouTube from 'react-youtube';
import './style-about.css';

function About(props) {
  const opts = {
    height: '285px',
    width: '100%',
    borderRadius: '50px',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Row>
        <Col
          xs={{ span: 15, offset: 3 }}
          sm={{ span: 15, offset: 3 }}
          md={{ span: 15, offset: 2 }}
          lg={{ span: 9, offset: 2 }}
        >
          <div style={{ borderRadius: `50px` }}>
            <YouTube videoId="oCwWQHKjEgA" opts={opts} />
          </div>
        </Col>

        <Col
          xs={{ span: 15, offset: 3 }}
          sm={{ span: 15, offset: 3 }}
          md={{ span: 15, offset: 2 }}
          lg={{ span: 8, offset: 1 }}
        >
          <div className="about">
            <h2>
              WHO'S <bold className="about-title">THE SPACE?</bold>
            </h2>
            <p>
              We’re a bunch of change-makers and innovators willing to meet the
              thirst! The thirst for knowledge, community, and collaboration. We
              build innovation hubs and spread them all over the Kingdom’s
              organizations to increase productivity. We create and provide
              entrepreneurs with Co-working spaces to enhance the experience.
            </p>
            <span>
              learn more <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default About;
