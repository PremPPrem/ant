import './App.scss';
import {Row,Col} from 'antd'


function App() {
  return (
<>

<Row gutter={[48, 8] } className='c'>
  <Col className='a' span={4} ><div className='b'><span className='left'></span></div></Col>
  <Col className='a' span={8} ><div className='b three'><span className="up one"></span><span className="g "></span><span className="down two"></span></div></Col>
  <Col className='a' span={4} ><div className='b'><span className='right'></span></div></Col>
</Row>
</>
  );
}

export default App;
