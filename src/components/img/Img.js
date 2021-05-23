import main from '../../images/main.png';
import { Row, Col, Select, Button } from 'antd';
import 'antd/dist/antd.css';
import './style-img.css';

function Img(props) {
  const { Option } = Select;
  return (
    <>
      <Row className="main">
        <Col
          xs={{ span: 15, offset: 5 }}
          sm={{ span: 15, offset: 6 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 8, offset: 2 }}
        >
          <div className="box">
            <h4>
              The Future Start <bold style={{ color: `#957BAA` }}>Here</bold>
            </h4>
            <p>Be part of the largest startup community in the region </p>
            <span className="title-select">Find Co-Working Space In</span>
            <Select
              showSearch
              style={{ width: `69%` }}
              placeholder="Select a country"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              size="large"
            >
              <Option value="Palestine">Palestine</Option>
              <Option value="Saudi">Saudi Arabia-Riyad</Option>
              <Option value="Nablus">Nablus</Option>
            </Select>

            <div className="button">
              <Button type="primary" size="large">
                Book Now
              </Button>
              <Button
                size="large"
                style={{
                  background: `white`,
                  color: `#957baa`,
                  border: `1px solid #957baa`,
                }}
              >
                More info
              </Button>
            </div>
          </div>
        </Col>

        {/* <Col
          xs={{ span: 2, offset: 7 }}
          sm={{ span: 2, offset: 10 }}
          md={{ span: 2, offset: 12 }}
          lg={{ span: 2, offset: 12 }}
        >
          <span className="circle">
            <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
          </span>
        </Col> */}
      </Row>
    </>
  );
}

export default Img;
