const workData = [
    {
        id: 24,
        title: { th: "งานติดตั้งล่าสุด", en: "Recent Installation" },
        description: { th: "รายละเอียดงานติดตั้งระบบประตูอัตโนมัติคุณภาพสูง", en: "Details of high-quality automatic gate installation" },
        image: "assets/images/work/1781251245082.jpg"
    },
    {
        id: 23,
        title: { th: "งานติดตั้งล่าสุด", en: "Recent Installation" },
        description: { th: "รายละเอียดงานติดตั้งระบบประตูอัตโนมัติคุณภาพสูง", en: "Details of high-quality automatic gate installation" },
        image: "assets/images/work/1781251245028.jpg"
    },
    {
        id: 22,
        title: { th: "งานติดตั้งล่าสุด", en: "Recent Installation" },
        description: { th: "รายละเอียดงานติดตั้งระบบประตูอัตโนมัติคุณภาพสูง", en: "Details of high-quality automatic gate installation" },
        image: "assets/images/work/1781251244950.jpg"
    },
    { id: 21, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251244817.jpg" },
    { id: 20, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251243212.jpg" },
    { id: 19, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251240996.jpg" },
    { id: 18, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251192703.jpg" },
    { id: 17, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251192638.jpg" },
    { id: 16, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251192568.jpg" },
    { id: 15, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251192484.jpg" },
    { id: 14, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251181623.jpg" },
    { id: 13, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251181553.jpg" },
    { id: 12, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1781251181240.jpg" },
    { id: 11, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350496676.jpg" },
    { id: 10, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350489945.jpg" },
    { id: 9, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350485735.jpg" },
    { id: 8, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350483589.jpg" },
    { id: 7, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350477799.jpg" },
    { id: 6, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350475318.jpg" },
    { id: 5, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350467773.jpg" },
    { id: 4, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350459531.jpg" },
    { id: 3, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350452976.jpg" },
    { id: 2, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350448069.jpg" },
    { id: 1, title: { th: "ผลงานติดตั้ง", en: "Installation Project" }, image: "assets/images/work/1779350445418.jpg" }
];

function getAllWorks() {
    return workData;
}

function getLatestWorks(count = 3) {
    return workData.slice(0, count);
}
