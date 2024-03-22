import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/B016.jpeg" />

        <Title title="ประวัติส่วนตัว">


          <p>ชื่อ จักรพงศ์ ออกกิจวัตร</p>
          <p>ชื่อเล่น บอส</p>
          <p>อายุ 21 ปี</p>
          <p>วันเกิด {moment("2003/01/22").format("D MMM YYYY")}</p>

        </Title>

        <Title title="ช่องทางติดต่อ">
          <p>เบอร์โทร  080-786-3878</p>
          <p>LineID - jakkapong.boss7</p> 
          <p>Facebook - Jakkapong Boss</p> 
          <p>Email - s64122202016@ssru.ac.th </p> 
        </Title>

        <button onclick="window.location.href='#'">ดูเพิ่มเติม</button>



      </div>

      <div className="rightPort">
      <Title title="การศึกษา">
          <p>กำลังศึกษา ปริญญาตรีชั้นปีที่ 3 ที่ มหาวิทยาลัยราชภัฎสวนสุนนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ </p>
        </Title>

        <Title title="เกรดเฉลี่ย">
          <p>GPA เกรดเฉลี่ยสะสม 3.60</p>
        </Title>

        <Title title="ทักษะความสมารถ">
          <p>มีความคิดสร้างสรรค์ในการออกแบบงาน </p>
          <p>แต่งรูป , ตัดต่อวิดีโอ</p>
          <p>ออกแบบงานโฆษณาสินค้า</p>
          <p>ทักษะภาษาอังกฤษพื้นฐาน</p>

        </Title>
        <button onclick="window.location.href='#'">ดูเพิ่มเติม</button>
      </div>
    </main>
  )
}

export default App