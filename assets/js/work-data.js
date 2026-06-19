/* 
  ==============================================================
  ข้อมูลผลงานติดตั้ง (Work Gallery Data)
  ==============================================================
  วิธีเพิ่มผลงานใหม่:
  1. นำรูปภาพไปใส่ในโฟลเดอร์ assets/images/work/
  2. คัดลอกโค้ดด้านล่างนี้ไปวางไว้ที่ "บรรทัดบนสุด" ของรายการ
  
  {
      id: "รหัสใหม่_เช่น_25",
      title: "ชื่อผลงานหรือสถานที่",
      description: "รายละเอียดงาน (จะไปโชว์ที่หน้าแรก)",
      image: "assets/images/work/ชื่อรูป.jpg"
  },
  
  *หมายเหตุ: รูปภาพที่อยู่ 3 อันดับแรกบนสุด จะถูกนำไปโชว์ที่หน้าแรกอัตโนมัติ
  ส่วนรูปภาพที่ถูกดันลงมา จะไปอยู่ในหน้า "ผลงานทั้งหมด" (reviews.html)
  ==============================================================
*/

const workData = [
    {
        id: 24,
        title: "งานติดตั้งล่าสุด",
        description: "รายละเอียดงานติดตั้งระบบประตูอัตโนมัติคุณภาพสูง",
        image: "assets/images/work/1781251245082.jpg"
    },
    {
        id: 23,
        title: "งานติดตั้งล่าสุด",
        description: "รายละเอียดงานติดตั้งระบบประตูอัตโนมัติคุณภาพสูง",
        image: "assets/images/work/1781251245028.jpg"
    },
    {
        id: 22,
        title: "งานติดตั้งล่าสุด",
        description: "รายละเอียดงานติดตั้งระบบประตูอัตโนมัติคุณภาพสูง",
        image: "assets/images/work/1781251244950.jpg"
    },
    { id: 21, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251244817.jpg" },
    { id: 20, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251243212.jpg" },
    { id: 19, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251240996.jpg" },
    { id: 18, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251192703.jpg" },
    { id: 17, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251192638.jpg" },
    { id: 16, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251192568.jpg" },
    { id: 15, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251192484.jpg" },
    { id: 14, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251181623.jpg" },
    { id: 13, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251181553.jpg" },
    { id: 12, title: "ผลงานติดตั้ง", image: "assets/images/work/1781251181240.jpg" },
    { id: 11, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350496676.jpg" },
    { id: 10, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350489945.jpg" },
    { id: 9, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350485735.jpg" },
    { id: 8, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350483589.jpg" },
    { id: 7, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350477799.jpg" },
    { id: 6, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350475318.jpg" },
    { id: 5, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350467773.jpg" },
    { id: 4, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350459531.jpg" },
    { id: 3, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350452976.jpg" },
    { id: 2, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350448069.jpg" },
    { id: 1, title: "ผลงานติดตั้ง", image: "assets/images/work/1779350445418.jpg" }
];

function getAllWorks() {
    return workData;
}

// ดึงข้อมูลตามจำนวนที่ระบุ (โดยดึงจากตำแหน่งบนสุดของ Array)
function getLatestWorks(count = 3) {
    return workData.slice(0, count);
}
