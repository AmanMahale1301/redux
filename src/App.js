import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Space } from 'antd';
import SideBar from './Components/SideBar/SideBar';
import PageContent from './Components/PageContent/PageContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Space className='spc'>
        <SideBar></SideBar>
        <PageContent></PageContent>
      </Space>
      <Footer/>
    </div>
  );
}

export default App;
