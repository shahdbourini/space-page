import './style-line.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Lines(props) {
  return (
    <>
      <Row style={{ direction: `rtl` }}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </Row>
    </>
  );
}

export default Lines;
