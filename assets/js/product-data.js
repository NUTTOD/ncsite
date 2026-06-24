const productsData = [
    {
        id: 'maxim_sliding',
        isPopular: true,
        name: 'MAXIM 1000',
        subtitle: 'ซีรีส์ใหม่ (รองรับ 1000 - 1800kg)',
        subtitleEn: 'New Series (Supports 1000 - 1800kg)',
        shortDesc: 'มอเตอร์บานเลื่อนสำหรับประตูบ้านและโครงการ ขดลวดทองแดงแท้ 100% มีให้เลือกตามน้ำหนักประตู',
        shortDescEn: 'Sliding gate motor for home and commercial projects. 100% pure copper coil. Available in various capacities.',
        image: 'assets/images/product/maxim_1000/main.jpg',
        images: [
            'assets/images/product/maxim_1000/main.jpg',
            'assets/images/product/maxim_1000/2.jpg',
            'assets/images/product/maxim_1000/1.jpg'
        ],
        variants: [
            {
                id: 'maxim370w',
                name: 'รุ่น 370W (1000kg)',
                nameEn: 'Model 370W (1000kg)',
                fullDesc: 'มอเตอร์ประตูบานเลื่อน MAXIM 370W รองรับน้ำหนักประตูได้สูงสุด 1,000 กิโลกรัม มอเตอร์ทำงานด้วยขดลวดทองแดงแท้ 100% มีระบบ Soft start และ Soft stop เพื่อการเปิด-ปิดที่นุ่มนวล พร้อมก้านปลดล็อคโลหะและรีโมทกันน้ำระดับ IP56',
                fullDescEn: 'MAXIM 370W sliding gate motor, supporting gates up to 1,000 kg. Operates on 100% pure copper coil, equipped with soft start and soft stop for smooth opening and closing. Features a sturdy metal manual release lever and an IP56 waterproof remote.',
                features: [
                    'ขดลวดทองแดงแท้ 100%',
                    'รองรับช่องเสียบการ์ดบลูทูธ เปิด-ปิด ทางมือถือ',
                    'อัตราเร็วในการเปิด-ปิด 12-14 เมตร/นาที',
                    'มีระบบเปิดปิดแบบนุ่มนวล (soft start/stop)',
                    'มีกุญแจเพื่อปลดล็อกมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ',
                    'แผงควบคุมสามารถจดจำสถานะการเปิด-ปิด เมื่อเวลาไฟดับ',
                    'ก้านปลดล็อคโลหะ แข็งแรงทนทาน',
                    'รีโมทกันน้ำระดับ IP56'
                ],
                featuresEn: [
                    '100% pure copper coil',
                    'Supports Bluetooth card slot for mobile control',
                    'Opening/closing speed: 12-14 meters/minute',
                    'Soft start & soft stop for smooth operation',
                    'Manual release key for emergency or power failure',
                    'Control board remembers gate state when power is cut',
                    'Durable metal manual release lever',
                    'IP56 waterproof remote control'
                ],
                specifications: {
                    'น้ำหนักประตูสูงสุด': '1000 kg',
                    'แหล่งจ่ายไฟ': '220 VAC/50Hz',
                    'กำลังมอเตอร์': '370W',
                    'ความเร็วในการเปิด-ปิด': '14 เมตร/นาที',
                    'ความเร็วรอบการหมุน': '1400 rpm',
                    'ระบบตัดการทำงานเมื่อร้อนเกิน (Overload cut-out)': '125°C',
                    'อุณหภูมิแวดล้อมที่รองรับ': '-45°C ถึง 78°C',
                    'ความถี่รีโมทคอนโทรล': '433 MHz'
                },
                specificationsEn: {
                    'Max Gate Weight': '1000 kg',
                    'Power Supply': '220 VAC/50Hz',
                    'Motor Power': '370W',
                    'Opening/Closing Speed': '14 m/min',
                    'Rotational Speed': '1400 rpm',
                    'Overload Cut-out': '125°C',
                    'Operating Temperature': '-45°C to 78°C',
                    'Remote Frequency': '433 MHz'
                }
            },
            {
                id: 'maxim550w',
                name: 'รุ่น 550W (1800kg)',
                nameEn: 'Model 550W (1800kg)',
                fullDesc: 'มอเตอร์ประตูบานเลื่อน MAXIM 550W รองรับน้ำหนักประตูได้สูงสุดถึง 1,800 กิโลกรัม เหมาะสำหรับประตูขนาดใหญ่หรือใช้งานหนัก มอเตอร์ทำจากขดลวดทองแดงแท้ 100% พร้อมระบบการทำงานที่เสถียรและนุ่มนวลด้วยระบบ Soft start/stop',
                fullDescEn: 'MAXIM 550W sliding gate motor, supporting gates up to 1,800 kg. Perfect for larger gates or intensive use. Operates on 100% pure copper coil and provides high stability with soft start and soft stop.',
                features: [
                    'ขดลวดทองแดงแท้ 100%',
                    'รองรับช่องเสียบการ์ดบลูทูธ เปิด-ปิด ทางมือถือ',
                    'อัตราเร็วในการเปิด-ปิด 12-14 เมตร/นาที',
                    'มีระบบเปิดปิดแบบนุ่มนวล (soft start/stop)',
                    'มีกุญแจเพื่อปลดล็อกมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ',
                    'แผงควบคุมสามารถจดจำสถานะการเปิด-ปิด เมื่อเวลาไฟดับ',
                    'ก้านปลดล็อคโลหะ แข็งแรงทนทาน',
                    'รีโมทกันน้ำระดับ IP56'
                ],
                featuresEn: [
                    '100% pure copper coil',
                    'Supports Bluetooth card slot for mobile control',
                    'Opening/closing speed: 12-14 meters/minute',
                    'Soft start & soft stop for smooth operation',
                    'Manual release key for emergency or power failure',
                    'Control board remembers gate state when power is cut',
                    'Durable metal manual release lever',
                    'IP56 waterproof remote control'
                ],
                specifications: {
                    'น้ำหนักประตูสูงสุด': '1800 kg',
                    'แหล่งจ่ายไฟ': '220 VAC/50Hz',
                    'กำลังมอเตอร์': '550W',
                    'ความเร็วในการเปิด-ปิด': '14 เมตร/นาที',
                    'ความเร็วรอบการหมุน': '1400 rpm',
                    'ระบบตัดการทำงานเมื่อร้อนเกิน (Overload cut-out)': '125°C',
                    'อุณหภูมิแวดล้อมที่รองรับ': '-45°C ถึง 78°C',
                    'ความถี่รีโมทคอนโทรล': '433 MHz'
                },
                specificationsEn: {
                    'Max Gate Weight': '1800 kg',
                    'Power Supply': '220 VAC/50Hz',
                    'Motor Power': '550W',
                    'Opening/Closing Speed': '14 m/min',
                    'Rotational Speed': '1400 rpm',
                    'Overload Cut-out': '125°C',
                    'Operating Temperature': '-45°C to 78°C',
                    'Remote Frequency': '433 MHz'
                }
            }
        ]
    },
    {
        id: 'albano2023y',
        isPopular: false,
        name: 'ALBANO 2023Y',
        subtitle: 'รุ่น 2023Y (1500-2000kg)',
        subtitleEn: 'Model 2023Y (1500-2000kg)',
        shortDesc: 'มอเตอร์ทรงพลังสำหรับงานหนัก น้ำหนัก 1,500-2,000 กก. ระบายความร้อนดีเยี่ยม',
        shortDescEn: 'Powerful motor for heavy duty use, supports 1,500-2,000 kg with excellent heat dissipation.',
        fullDesc: 'มอเตอร์บานเลื่อน ALBANO 2023Y ออกแบบมาสำหรับประตูขนาดใหญ่และหนัก รองรับน้ำหนัก 1,500 ถึง 2,000 กิโลกรัม มีระบบระบายความร้อนที่ดีเยี่ยม เหมาะสำหรับการเปิดปิดบ่อยครั้งในโครงการหรือโรงงาน',
        fullDescEn: 'ALBANO 2023Y sliding gate motor is designed for large and heavy gates. Supporting 1,500 to 2,000 kg, it features a superior cooling system, making it perfect for high-frequency operations in commercial projects and factories.',
        image: 'assets/images/product/albano_2023/main.jpg',
        images: [
            'assets/images/product/albano_2023/main.jpg',
            'assets/images/product/albano_2023/1.jpg'
        ],
        features: [
            'รองรับช่องเสียบการ์ดบลูทูธ เปิด-ปิด ทางมือถือ',
            'อัตราเร็วในการเปิด-ปิด 12-14 เมตร/นาที',
            'มีระบบ soft start and soft stop',
            'มีกุญแจเพื่อปลดล็อคมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ',
            'แผงควบคุมสามารถจดจำสถานะการเปิด-ปิด เมื่อเวลาไฟดับ'
        ],
        featuresEn: [
            'Supports Bluetooth card slot for mobile control',
            'Opening/closing speed: 12-14 meters/minute',
            'Soft start & soft stop system for smooth operation',
            'Manual release key for emergency or power failure',
            'Control board remembers gate state when power is cut'
        ],
        specifications: {
            'น้ำหนักประตูสูงสุด': '1500-2000 kg',
            'แหล่งจ่ายไฟ': '220 VAC/50Hz',
            'กำลังมอเตอร์': '450W',
            'ความเร็วในการเปิด-ปิด': '12 เมตร/นาที',
            'ความเร็วรอบการหมุน': '1400 rpm',
            'ระบบตัดการทำงานเมื่อร้อนเกิน (Overload cut-out)': '125°C',
            'อุณหภูมิแวดล้อมที่รองรับ': '-45°C ถึง 75°C',
            'ความถี่รีโมทคอนโทรล': '433 MHz'
        },
        specificationsEn: {
            'Max Gate Weight': '1500-2000 kg',
            'Power Supply': '220 VAC/50Hz',
            'Motor Power': '450W',
            'Opening/Closing Speed': '12 m/min',
            'Rotational Speed': '1400 rpm',
            'Overload Cut-out': '125°C',
            'Operating Temperature': '-45°C to 75°C',
            'Remote Frequency': '433 MHz'
        }
    },
    {
        id: 'albano2000y',
        isPopular: true,
        name: 'ALBANO 2000Y',
        subtitle: 'รุ่น 2000Y (1000-1500kg)',
        subtitleEn: 'Model 2000Y (1000-1500kg)',
        shortDesc: 'รองรับน้ำหนัก 1,000-1,500 กิโลกรัม โดดเด่นด้วยระบบการทำงานที่เสถียรและนิ่มนวล ลดการกระแทก',
        shortDescEn: 'supporting gates up to 1,000-1,500 kg. Known for stable and smooth operations',
        fullDesc: 'มอเตอร์ประตูรีโมท ALBANO รุ่น 2000Y รองรับน้ำหนัก 1,000-1,500 กิโลกรัม โดดเด่นด้วยระบบการทำงานที่เสถียรและนิ่มนวล ลดการกระแทก ช่วยยืดอายุการใช้งานของระบบฟันเฟือง',
        fullDescEn: 'ALBANO 2000Y sliding gate motor, supporting gates up to 1,000-1,500 kg. Known for stable and smooth operations, reducing gate impacts to extend gear life.',
        image: 'assets/images/product/albano_2000/main.jpg',
        images: [
            'assets/images/product/albano_2000/main.jpg',
            'assets/images/product/albano_2000/1.jpg',
            'assets/images/product/albano_2000/2.jpg'
        ],
        features: [
            'มอเตอร์ประตูรีโมท ALBANO รับน้ำหนักได้ไม่เกิน 1500 Kg',
            'ระบบเปิดปิดอย่างนิ่มนวล soft start and soft stop เพื่อลดการกระแทก เพิ่มอายุการใช้งานของระบบฟันเฟือง',
            'ระบบการออกตัวของมอเตอร์ มีความนิ่มนวลและเสถียรอย่างมีประสิทธิภาพ',
            'มีกุญแจเพื่อปลดล็อคมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ'
        ],
        featuresEn: [
            'Supports gates up to 1,500 kg',
            'Soft start & soft stop system for smooth operation',
            'Extends the lifespan of the gear system',
            'Smooth and highly efficient motor startup',
            'Manual release key for emergency or power failure'
        ],
        specifications: {
            'น้ำหนักประตูสูงสุด': '1000-1500 kg',
            'แหล่งจ่ายไฟ': '220 VAC/50Hz',
            'กำลังมอเตอร์': '400W',
            'ความเร็วในการเปิด-ปิด': '14 เมตร/นาที',
            'ความเร็วรอบการหมุน': '1400 rpm',
            'ระบบตัดการทำงานเมื่อร้อนเกิน (Overload cut-out)': '125°C',
            'อุณหภูมิแวดล้อมที่รองรับ': '-30°C ถึง 80°C',
            'ความถี่รีโมทคอนโทรล': '433 MHz'
        },
        specificationsEn: {
            'Max Gate Weight': '1000-1500 kg',
            'Power Supply': '220 VAC/50Hz',
            'Motor Power': '400W',
            'Opening/Closing Speed': '14 m/min',
            'Rotational Speed': '1400 rpm',
            'Overload Cut-out': '125°C',
            'Operating Temperature': '-30°C to 80°C',
            'Remote Frequency': '433 MHz'
        }
    },
    {
        id: 'quiko_ercole',
        isPopular: true,
        name: 'Quiko',
        subtitle: 'Ercole (2500kg)',
        subtitleEn: 'Ercole (2500kg)',
        shortDesc: 'มอเตอร์บานเลื่อนอุตสาหกรรมนำเข้าจากอิตาลี รองรับน้ำหนัก 2,500 กิโลกรัม ระบบเกียร์แช่ในน้ำมันทนทานพิเศษ',
        shortDescEn: 'Industrial sliding gate operator imported from Italy. Supports up to 2,500 kg weight with oil-bath lubrication.',
        fullDesc: 'มอเตอร์ประตูรีโมท Quiko รุ่น Ercole (QK-E2500) มอเตอร์ประตูบานเลื่อนเกรดอุตสาหกรรม ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100% ออกแบบมาเป็นพิเศษสำหรับการใช้งานหนักและการเปิด-ปิดถี่ต่อเนื่อง (Super Intensive Use) โดดเด่นด้วยระบบขับเคลื่อนห้องเกียร์หล่อลื่นแบบแช่ในอ่างน้ำมัน (Oil-bath lubrication) เพื่อลดการสึกหรอและระบายความร้อนได้อย่างรวดเร็ว พร้อมระบบคลัตช์เชิงกล (Mechanical Clutch) เพื่อความปลอดภัยสูงสุด',
        fullDescEn: 'Quiko Ercole (QK-E2500) industrial sliding gate operator, manufactured and imported from Italy. Designed specifically for heavy-duty and super intensive use (90% working cycle), featuring oil-bath lubrication to minimize wear and dissipate heat quickly, along with a mechanical clutch for ultimate safety.',
        image: 'assets/images/product/quiko_ercole/main.jpg',
        images: [
            'assets/images/product/quiko_ercole/main.jpg',
            'assets/images/product/quiko_ercole/1.jpg',
            'assets/images/product/quiko_ercole/2.jpg',
            'assets/images/product/quiko_ercole/3.jpg',
            'assets/images/product/quiko_ercole/4.jpg',
            'assets/images/product/quiko_ercole/5.jpg',
            'assets/images/product/quiko_ercole/6.jpg',
            'assets/images/product/quiko_ercole/7.jpg',
            'assets/images/product/quiko_ercole/8.jpg',
        ],
        features: [
            'ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100%',
            'ออกแบบสำหรับประตูอุตสาหกรรมขนาดใหญ่พิเศษ รองรับน้ำหนักได้สูงสุดถึง 2,500 kg',
            'ระบบเกียร์แช่ในอ่างน้ำมัน (Oil-bath lubrication) ระบายความร้อนดีเยี่ยมและยืดอายุการใช้งานระบบกลไก',
            'โครงสร้างตัวมอเตอร์ทำจากอลูมิเนียมหล่อและเหล็ก แข็งแรงทนทานเป็นพิเศษ',
            'ระบบคลัตช์เชิงกล (Mechanical Clutch) เพื่อความปลอดภัยป้องกันอุบัติเหตุชนหรือหนีบ',
            'อัตราการทำงานสูงถึง 90% (Super Intensive Working Cycle) รองรับการใช้งานหนักตลอดทั้งวัน',
            'กุญแจสำหรับไขปลดล็อคมอเตอร์ด้านหน้าตัวเครื่องเมื่อไฟฟ้าดับ เพื่อเปิด-ปิดด้วยมือได้อย่างง่ายดาย'
        ],
        featuresEn: [
            '100% Manufactured and imported from Italy (Made in Italy)',
            'Designed for large industrial gates, supporting up to 2,500 kg',
            'Oil-bath lubrication system for excellent cooling and extended mechanical life',
            'Extremely robust housing constructed of cast aluminum and steel',
            'Mechanical clutch system for crash prevention and safety',
            'Super Intensive Working Cycle (90%) for continuous operation throughout the day',
            'Frontal manual release lever with key for easy manual operation during power outages'
        ],
        specifications: {
            'น้ำหนักประตูสูงสุด': '2500 kg',
            'แหล่งจ่ายไฟ': '230 VAC / 400 VAC (3เฟส) (50/60Hz)',
            'กำลังมอเตอร์': '650W',
            'กระแสไฟฟ้าใช้งาน': '2.4 A',
            'ความเร็วในการเปิด-ปิด': '12 เมตร/นาที',
            'อัตราการทำงาน (Working Cycle)': '90% (Super Intensive)',
            'ระบบหล่อลื่นเกียร์': 'แช่ในอ่างน้ำมัน (Oil-bath)',
            'ระดับการป้องกันน้ำและฝุ่น': 'IP55',
            'ระดับความเป็นฉนวน': 'Class F',
            'ระบบตัดการทำงานเมื่อร้อนเกิน (Overload cut-out)': '130°C',
            'น้ำหนักตัวเครื่อง': '19 kg',
            'อุณหภูมิแวดล้อมที่รองรับ': '-30°C ถึง 70°C'
        },
        specificationsEn: {
            'Max Gate Weight': '2500 kg',
            'Power Supply': '230 VAC / 400 VAC (3-phase) (50/60Hz)',
            'Motor Power': '650W',
            'Absorbed Current': '2.4 A',
            'Opening/Closing Speed': '12 m/min',
            'Working Cycle': '90% (Super Intensive)',
            'Gear Lubrication': 'Oil-bath',
            'IP Protection Rating': 'IP55',
            'Insulation Class': 'Class F',
            'Overload Cut-out': '130°C',
            'Motor Weight': '19 kg',
            'Operating Temperature': '-30°C to 70°C'
        }
    },
    {
        id: 'maxim3500kg',
        isPopular: false,
        name: 'MAXIM 3500',
        subtitle: 'รุ่น 3500KG (Industrial)',
        subtitleEn: 'Model 3500KG (Industrial)',
        shortDesc: 'สุดยอดมอเตอร์สำหรับประตูโรงงานขนาดใหญ่ น้ำหนักสูงสุด 3,500 กก.',
        shortDescEn: 'The ultimate heavy-duty motor for industrial gates up to 3,500 kg.',
        fullDesc: 'มอเตอร์บานเลื่อน MAXIM 3500KG สำหรับอุตสาหกรรมและโรงงาน รองรับน้ำหนักมหาศาลถึง 3,500 กิโลกรัม ตัวมอเตอร์ขนาดใหญ่มาพร้อมพัดลมระบายความร้อนเพื่อการใช้งานต่อเนื่อง แผงควบคุมแยกส่วนเป็นอิสระเพื่อความปลอดภัยและความเสถียรสูงสุด',
        fullDescEn: 'MAXIM 3500KG heavy-duty industrial sliding gate motor, designed for factories and large industrial projects. Supports up to 3,500 kg weight. Features an integrated cooling fan for continuous high-load operations and an independent control cabinet for maximum safety and stability.',
        image: 'assets/images/product/maxim_3500/main.jpg',
        images: [
            'assets/images/product/maxim_3500/main.jpg',
            'assets/images/product/maxim_3500/1.png',
            'assets/images/product/maxim_3500/2.png'
        ],
        features: [
            'มอเตอร์ประตูรีโมท MAXIM รับน้ำหนักได้ไม่เกิน 3500 Kg',
            'มอเตอร์ขนาดใหญ่ มีพัดลมระบายความร้อน เหมาะกับประตูโรงงาน',
            'แผงวงจรควบคุมแยกเป็นอิสระจากตัวมอเตอร์',
            'มีกุญแจเพื่อปลดล็อคมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ'
        ],
        featuresEn: [
            'Supports industrial gates up to 3500 kg',
            'Large motor unit with integrated cooling fan for heavy industrial use',
            'Independent control panel cabinet',
            'Manual release key for emergency or power failure'
        ],
        specifications: {
            'น้ำหนักประตูสูงสุด': '3500 kg',
            'แหล่งจ่ายไฟ': '220 VAC/50Hz',
            'กำลังมอเตอร์': '1000W',
            'ความเร็วในการเปิด-ปิด': '11 เมตร/นาที',
            'ความเร็วรอบการหมุน': '1400 rpm',
            'ระบบตัดการทำงานเมื่อร้อนเกิน (Overload cut-out)': '130°C',
            'อุณหภูมิแวดล้อมที่รองรับ': '-20°C ถึง 100°C'
        },
        specificationsEn: {
            'Max Gate Weight': '3500 kg',
            'Power Supply': '220 VAC/50Hz',
            'Motor Power': '1000W',
            'Opening/Closing Speed': '11 m/min',
            'Rotational Speed': '1400 rpm',
            'Overload Cut-out': '130°C',
            'Operating Temperature': '-20°C to 100°C'
        }
    },
    {
        id: 'quiko_moovy',
        isPopular: false,
        name: 'Quiko MOOVY',
        subtitle: 'รุ่น QK-M800 (Sliding Gate)',
        subtitleEn: 'Model QK-M800 (Sliding Gate)',
        shortDesc: 'มอเตอร์บานเลื่อนนำเข้าจากอิตาลี โครงสร้างอลูมิเนียม บรอนซ์ และเหล็ก แข็งแรงทนทาน รองรับน้ำหนักประตูสูงสุด 800 กิโลกรัม',
        shortDescEn: 'Sliding gate operator imported from Italy. Built with robust aluminum, bronze, and steel. Supports gates up to 800 kg.',
        fullDesc: 'มอเตอร์ประตูรีโมท Quiko รุ่น MOOVY (QK-M800) ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100% เป็นระบบมอเตอร์บานเลื่อนอัตโนมัติ 230Vac เหมาะสำหรับบ้านพักอาศัยทั่วไปและกึ่งอุตสาหกรรม รองรับน้ำหนักประตูสูงสุด 800 กิโลกรัม ตัวเครื่องประกอบขึ้นจากวัสดุโลหะความทนทานสูง เช่น อลูมิเนียม บรอนซ์ และเหล็ก เพื่ออายุการใช้งานที่ยาวนาน ชุดเกียร์หล่อลื่นภายในด้วยจาระบีถาวรช่วยลดความร้อนและลดการสึกหรอ พร้อมระบบปลดล็อคด้วยกุญแจไขปลดล็อคด้านหน้าเมื่อระบบไฟฟ้าดับ',
        fullDescEn: 'Quiko MOOVY (QK-M800) sliding gate operator, 100% manufactured and imported from Italy. Designed as a high-reliability 230Vac sliding gate opener, ideal for residential and light commercial gates up to 800 kg. Constructed with heavy-duty materials including aluminum, bronze, and steel. Features permanent grease lubrication inside the reducer to minimize friction and wear, and a frontal manual release key system for power outages.',
        image: 'assets/images/product/quiko_moovy/main.jpg',
        images: [
            'assets/images/product/quiko_moovy/main.jpg',
            'assets/images/product/quiko_moovy/1.jpg',
            'assets/images/product/quiko_moovy/2.jpg',
            'assets/images/product/quiko_moovy/3.jpg',
            'assets/images/product/quiko_moovy/4.jpg'
        ],
        features: [
            'ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100%',
            'ออกแบบมาสำหรับประตูบานเลื่อนขนาดกลางและขนาดใหญ่ รองรับน้ำหนักสูงสุด 800 kg',
            'โครงสร้างทำจากวัสดุอลูมิเนียม บรอนซ์ และเหล็ก แข็งแรงและทนทานสูง',
            'ระบบเกียร์ขับเคลื่อนลดการสึกหรอด้วยการหล่อลื่นด้วยจาระบีถาวร (Permanent Grease)',
            'ก้านปลดล็อคมอเตอร์ด้านหน้าตัวเครื่องพร้อมกุญแจ เพื่อความสะดวกเมื่อไฟฟ้าดับ',
            'บอร์ดควบคุม 230Vac ประสิทธิภาพสูง ทำงานร่วมกับระบบความปลอดภัย'
        ],
        featuresEn: [
            '100% Manufactured and imported from Italy (Made in Italy)',
            'Designed for medium to large sliding gates, supporting up to 800 kg',
            'Built with highly robust housing constructed of aluminum, bronze, and steel',
            'Internal gear reducer lubricated with permanent grease to minimize maintenance',
            'Frontal manual release lever with key for easy manual operation during power failures',
            'High performance 230Vac control board'
        ],
        specifications: {
            'รุ่นสินค้า': 'QK-M800',
            'น้ำหนักประตูสูงสุด': '800 kg',
            'แหล่งจ่ายไฟ': '230 VAC 50/60Hz',
            'กำลังมอเตอร์': '270W',
            'กระแสไฟฟ้าใช้งาน': '1.3 A',
            'ตัวเก็บประจุ (Capacitor)': '16 μF',
            'ระดับการป้องกันน้ำและฝุ่น': 'IP54',
            'ความเร็วในการเปิด-ปิด': '12 เมตร/นาที',
            'อัตราการทำงาน (Working Cycle)': '50%',
            'ระดับความเป็นฉนวน': 'Class F',
            'ระบบตัดการทำงานเมื่อร้อนเกิน': '140°C',
            'น้ำหนักตัวเครื่อง': '12 kg'
        },
        specificationsEn: {
            'Model': 'QK-M800',
            'Max Gate Weight': '800 kg',
            'Power Supply': '230 VAC 50/60Hz',
            'Motor Power': '270W',
            'Absorbed Current': '1.3 A',
            'Capacitor': '16 μF',
            'IP Protection Rating': 'IP54',
            'Opening/Closing Speed': '12 m/min',
            'Working Cycle': '50%',
            'Insulation Class': 'Class F',
            'Overload Cut-out': '140°C',
            'Motor Weight': '12 kg'
        }
    },
    {
        id: 'quiko_hydro',
        isPopular: false,
        name: 'Quiko HYDRO',
        subtitle: 'รุ่น H400BAC (Swing Gate)',
        subtitleEn: 'Model H400BAC (Swing Gate)',
        shortDesc: 'มอเตอร์บานสวิงระบบไฮดรอลิกนำเข้าจากอิตาลี สำหรับใช้งานทั่วไปและงานหนักพิเศษ รองรับประตูยาวสูงสุด 6 เมตร',
        shortDescEn: 'Hydraulic swing gate operator imported from Italy for residential and intensive use. Supports leaf lengths up to 6m.',
        fullDesc: 'มอเตอร์บานสวิงระบบไฮดรอลิก Quiko รุ่น HYDRO (QK-H400BAC) ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100% ออกแบบมาเพื่อการใช้งานหนัก (Intensive Use) และบานประตูสวิงขนาดใหญ่พิเศษ รองรับความกว้างประตูสูงสุด 6 เมตรต่อบาน โดดเด่นด้วยระบบไฮดรอลิกที่ใช้น้ำมันหล่อลื่นชิ้นส่วนภายในทั้งหมด ช่วยยืดอายุการใช้งานยาวนานและระบายความร้อนได้ดีเยี่ยม ทำงานร่วมกับระบบชะลอความเร็วขณะปิด (Hydraulic Slow Down) และระบบความปลอดภัยในการปรับแรงผลักเปิด-ปิดที่แยกอิสระจากกันด้วยวาล์วปรับแรงดัน',
        fullDescEn: 'Quiko HYDRO (QK-H400BAC) hydraulic swing gate operator, 100% manufactured and imported from Italy. Designed for residential and intensive heavy-duty use on large swing gates up to 6m per leaf. Featuring internal oil-bath lubrication for all mechanical components to guarantee top-tier lifespan. Equipped with hydraulic slow-down on closing and independent thrust adjustment valves for opening and closing safety.',
        image: 'assets/images/product/quiko_hydro/main.jpg',
        images: [
            'assets/images/product/quiko_hydro/main.jpg',
            'assets/images/product/quiko_hydro/1.jpg',
            'assets/images/product/quiko_hydro/2.jpg',
            'assets/images/product/quiko_hydro/5.jpg',
            'assets/images/product/quiko_hydro/6.jpg',
            'assets/images/product/quiko_hydro/3.jpg',
            'assets/images/product/quiko_hydro/4.jpg',
            'assets/images/product/quiko_hydro/7.jpg',
            'assets/images/product/quiko_hydro/8.jpg'
        ],
        features: [
            'ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100%',
            'ออกแบบสำหรับประตูบานสวิงขนาดใหญ่พิเศษ รองรับความกว้างบานสูงสุดถึง 6 เมตร',
            'ระบบกลไกไฮดรอลิกแช่ในน้ำมันหล่อลื่นภายในทั้งหมด ทนทานและระบายความร้อนยอดเยี่ยม',
            'อัตราการทำงานสูงถึง 80% (Working Cycle 80%) รองรับการใช้งานต่อเนื่องและหนักหน่วง',
            'ระบบปรับแรงผลักแบบละเอียดแยกอิสระ (Force adjustment valves) สำหรับช่วงเปิดและปิด',
            'ระบบชะลอความเร็วขณะปิด (Hydraulic Slow Down) เพื่อลดการกระแทกและเสียงรบกวน',
            'ก้านปลดล็อคมอเตอร์ด้วยกุญแจยามฉุกเฉินหรือไฟฟ้าดับ ด้านหน้าตัวเครื่อง'
        ],
        featuresEn: [
            '100% Manufactured and imported from Italy (Made in Italy)',
            'Designed for large swing gates, supporting leaf lengths up to 6m',
            'Hydraulic system with internal oil lubrication for maximum durability and cooling',
            'High working cycle of 80% for residential and intensive use',
            'Independent force adjustment valves for opening and closing safety',
            'Hydraulic slow-down system during closing for smooth operation',
            'Manual key release system for power outages or emergencies'
        ],
        specifications: {
            'รุ่นสินค้า': 'QK-H400BAC',
            'น้ำหนักประตูสูงสุด': '1100 kg (ต่อบานที่ขนาด 2 ม.) / 600 kg (ต่อบานที่ขนาด 6 ม.)',
            'ความกว้างประตูสูงสุด': '6 m (ต่อบาน)',
            'แหล่งจ่ายไฟ': '230 VAC 50/60Hz',
            'กำลังมอเตอร์': '250W',
            'กระแสไฟฟ้าใช้งาน': '1 A',
            'ระดับการป้องกันน้ำและฝุ่น': 'IP55',
            'ความเร็วลูกสูบ': '1.3 cm/sec',
            'ระยะชักของลูกสูบ (Stroke)': '390 mm',
            'อัตราการทำงาน (Working Cycle)': '80%',
            'ระบบตัดการทำงานเมื่อร้อนเกิน': '120°C',
            'น้ำหนักตัวเครื่อง': '10 kg',
            'ขนาดตัวเครื่อง (A/B/C)': '1330 / 825 / 390 mm'
        },
        specificationsEn: {
            'Model': 'QK-H400BAC',
            'Max Gate Weight': '1100 kg (per leaf at 2m) / 600 kg (per leaf at 6m)',
            'Max Leaf Length': '6 m (per leaf)',
            'Power Supply': '230 VAC 50/60Hz',
            'Motor Power': '250W',
            'Absorbed Current': '1 A',
            'IP Protection Rating': 'IP55',
            'Cylinder Speed': '1.3 cm/sec',
            'Cylinder Stroke': '390 mm',
            'Working Cycle': '80%',
            'Overload Cut-out': '120°C',
            'Motor Weight': '10 kg',
            'Dimensions (A/B/C)': '1330 / 825 / 390 mm'
        }
    },
    {
        id: 'quiko_rotello',
        isPopular: false,
        name: 'Quiko ROTELLO',
        subtitle: 'รุ่น QK-R400 (Swing Gate)',
        subtitleEn: 'Model QK-R400 (Swing Gate)',
        shortDesc: 'มอเตอร์บานสวิงนำเข้าจากอิตาลี โครงสร้างอลูมิเนียม เฟืองเหล็กและบรอนซ์ ทนทาน เงียบเป็นพิเศษ รองรับยาวสูงสุด 4.5 เมตร',
        shortDescEn: 'Electromechanical swing gate operator imported from Italy. aluminum body. Supports up to 4.5m leaf length.',
        fullDesc: 'มอเตอร์ประตูรีโมท Quiko รุ่น ROTELLO (QK-R400) นำเข้าจากประเทศอิตาลี (Made in Italy) 100% เป็นมอเตอร์บานสวิงประเภท Electromechanical ที่ผ่านการออกแบบอย่างประณีตและติดตั้งง่าย รองรับประตูบานสวิงยาวสูงสุด 4.5 เมตรต่อบาน (และรับน้ำหนักสูงสุด 900 กิโลกรัมต่อบานที่ขนาด 2 เมตร) ตัวบอดี้ทำจากอลูมิเนียมหล่อขึ้นรูปเคลือบพ่นสีฝุ่นอย่างดี ชิ้นส่วนกลไกภายในทำจากเหล็กกล้าและบรอนซ์คุณภาพสูง แข็งแกร่งทนทานต่อการทำงานหนัก ทำงานได้อย่างเงียบสนิท ไม่ต้องบำรุงรักษาตลอดการใช้งาน และมาพร้อมระบบปลดล็อคด้วยกุญแจแบบไขปลดล็อคด้านข้างตัวเครื่องเมื่อเกิดเหตุไฟฟ้าดับ',
        fullDescEn: 'Quiko ROTELLO (QK-R400) electromechanical swing gate operator, (Made in Italy) 100% manufactured and imported from Italy. Designed to satisfy a variety of residential and intensive swing gate automations, supporting gates up to 4.5m per leaf. Constructed with a die-cast powder-painted aluminum body, and internal mechanisms made of ultra-resistant steel and bronze to ensure a silent, long-lasting, and maintenance-free lifecycle. Comes with a secure key-operated manual release system for power outages.',
        image: 'assets/images/product/quiko_rotello/main.jpg',
        images: [
            'assets/images/product/quiko_rotello/main.jpg',
            'assets/images/product/quiko_rotello/3.jpg',
            'assets/images/product/quiko_rotello/2.jpg',
            'assets/images/product/quiko_rotello/4.jpg',
            'assets/images/product/quiko_rotello/1.jpg',
            'assets/images/product/quiko_rotello/5.jpg',
            'assets/images/product/quiko_rotello/6.jpg'
        ],
        features: [
            'ผลิตและนำเข้าจากประเทศอิตาลี (Made in Italy) 100%',
            'รองรับประตูกว้างสูงสุด 4.5 เมตรต่อบาน (น้ำหนักสูงสุด 900 kg ที่ความกว้าง 2 เมตร)',
            'โครงสร้างบอดี้อลูมิเนียมหล่อขึ้นรูปพ่นสีฝุ่นอย่างดี (Die-cast powder painted aluminium body)',
            'เฟืองเหล็กกล้าและบรอนซ์ภายในมีความทนทานสูง (Ultra-resistant steel and bronze mechanisms)',
            'ระบบการทำงานที่เงียบเป็นพิเศษและไม่ต้องบำรุงรักษาตลอดอายุการใช้งาน (Maintenance free)',
            'มีระบบปลดล็อคด้านข้างด้วยกุญแจเพื่อควบคุมประตูด้วยมือในกรณีฉุกเฉินหรือไฟฟ้าดับ'
        ],
        featuresEn: [
            '100% Manufactured and imported from Italy (Made in Italy)',
            'Supports leaf lengths up to 4.5m (up to 900kg leaf weight at 2m)',
            'Sturdy housing constructed of die-cast powder-coated aluminum',
            'Internal mechanisms made of ultra-resistant steel and bronze',
            'Quiet operation and maintenance-free design',
            'Side-mounted manual key release system for power outages'
        ],
        specifications: {
            'รุ่นสินค้า': 'QK-R400',
            'น้ำหนักประตูสูงสุด': '900 kg (ต่อบานที่ขนาด 2 ม.) / 400 kg (ต่อบานที่ขนาด 4.5 ม.)',
            'ความกว้างประตูสูงสุด': '4.5 m (ต่อบาน)',
            'แหล่งจ่ายไฟ': '230 VAC 50/60Hz',
            'กำลังมอเตอร์': '320W',
            'กระแสไฟฟ้าใช้งาน': '0.9 - 1.4 A',
            'ตัวเก็บประจุ (Capacitor)': '10 μF',
            'ระดับการป้องกันน้ำและฝุ่น': 'IP54',
            'ระยะชักตัวแขนมอเตอร์': '300 mm',
            'แรงดึง-ดันสูงสุด (Max Thrust)': '3000 N',
            'เวลาในการเปิด (90 องศา)': '18 วินาที',
            'อัตราการทำงาน (Working Cycle)': '50%',
            'ระบบตัดการทำงานเมื่อร้อนเกิน': '140°C',
            'น้ำหนักตัวเครื่อง': '9 kg'
        },
        specificationsEn: {
            'Model': 'QK-R400',
            'Max Gate Weight': '900 kg (per leaf at 2m) / 400 kg (per leaf at 4.5m)',
            'Max Leaf Length': '4.5 m (per leaf)',
            'Power Supply': '230 VAC 50/60Hz',
            'Motor Power': '320W',
            'Absorbed Current': '0.9 - 1.4 A',
            'Capacitor': '10 μF',
            'IP Protection Rating': 'IP54',
            'Cylinder Stroke': '300 mm',
            'Max Thrust': '3000 N',
            'Opening Time': '18 sec',
            'Working Cycle': '50%',
            'Overload Cut-out': '140°C',
            'Motor Weight': '9 kg'
        }
    }
];

function getAllProducts() {
    return productsData;
}

function getProductById(id) {
    return productsData.find(product => product.id === id);
}
