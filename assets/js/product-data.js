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
            'assets/images/product/maxim_1000/main.jpg'
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
            'assets/images/product/albano_2023/main.jpg'
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
        shortDesc: 'มอเตอร์ทนทาน มีระบบ LARM พร้อมช่องพอร์ทสำหรับไฟหัวเสา',
        shortDescEn: 'Durable motor, equipped with LARM system and lamp ports.',
        fullDesc: 'มอเตอร์ประตูรีโมท ALBANO รุ่น 2000Y รองรับน้ำหนัก 1,000-1,500 กิโลกรัม โดดเด่นด้วยระบบการทำงานที่เสถียรและนิ่มนวล ลดการกระแทก ช่วยยืดอายุการใช้งานของระบบฟันเฟือง พร้อมช่องพอร์ทพิเศษ (LARM) สำหรับไฟหัวเสา',
        fullDescEn: 'ALBANO 2000Y sliding gate motor, supporting gates up to 1,000-1,500 kg. Known for stable and smooth operations, reducing gate impacts to extend gear life. Comes with a dedicated LARM port for gate pillar lights.',
        image: 'assets/images/product/albano_2000/main.jpg',
        images: [
            'assets/images/product/albano_2000/main.jpg'
        ],
        features: [
            'มอเตอร์ประตูรีโมท ALBANO รับน้ำหนักได้ไม่เกิน 1500 Kg',
            'ระบบเปิดปิดอย่างนิ่มนวล soft start and soft stop เพื่อลดการกระแทก',
            'เพิ่มอายุการใช้งานของระบบฟันเฟือง',
            'ระบบการออกตัวของมอเตอร์ มีความนิ่มนวลและเสถียรอย่างมีประสิทธิภาพ',
            'มีกุญแจเพื่อปลดล็อคมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ',
            'LARM มีช่องพอร์ทสำหรับไฟหัวเสา'
        ],
        featuresEn: [
            'Supports gates up to 1,500 kg',
            'Soft start & soft stop system for smooth operation',
            'Extends the lifespan of the gear system',
            'Smooth and highly efficient motor startup',
            'Manual release key for emergency or power failure',
            'Dedicated LARM port for pillar lights'
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
            'assets/images/product/quiko_ercole/main.jpg'
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
            'ความเร็วในการเปิด-ปิด': '12 เมตร/นาที (รุ่นปกติ) / สูงสุด 20 เมตร/นาที (รุ่น Inverter)',
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
            'Opening/Closing Speed': '12 m/min (Standard) / Up to 20 m/min (Inverter)',
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
        id: 'maxim300swing',
        isPopular: false,
        name: 'MAXIM มอเตอร์บานสวิง ',
        subtitle: 'รุ่น 300KG (Swing Gate)',
        subtitleEn: 'Model 300KG (Swing Gate)',
        shortDesc: 'มอเตอร์บานสวิง แผงวงจรแยกอิสระ รองรับระบบป้องกันประตูกระแทก',
        shortDescEn: 'Swing gate operator, independent control panel, supports anti-collision protection.',
        fullDesc: 'ชุดมอเตอร์ประตูรีโมทแบบบานสวิง MAXIM 300KG รองรับน้ำหนักประตูต่อบานได้ 300-350 กิโลกรัม ทำงานด้วยมอเตอร์ 24VDC คู่ ให้การเปิด-ปิดที่นิ่มนวล แผงวงจรควบคุมถูกออกแบบให้แยกอิสระจากตัวมอเตอร์เพื่อความทนทาน และรองรับระบบป้องกันประตูกระแทกชนสิ่งกีดขวาง',
        fullDescEn: 'MAXIM 300KG swing gate operator kit, supporting up to 300-350 kg weight per gate leaf. Operates on dual 24VDC motors for soft start/stop, features an independent control panel for longevity, and supports obstacle detection anti-crush safety.',
        image: 'assets/images/product/maxim_swing_300/main.jpg',
        images: [
            'assets/images/product/maxim_swing_300/main.jpg'
        ],
        features: [
            'มอเตอร์ประตูรีโมท MAXIM รับน้ำหนักได้ไม่เกิน 350 Kg (ต่อบาน)',
            'ระบบเปิด-ปิด อย่างนิ่มนวล soft start / soft stop เพื่อลดการกระแทก',
            'แผงวงจรควบคุมแยกเป็นอิสระจากตัวมอเตอร์',
            'รองรับระบบป้องกันประตูกระแทกชนสิ่งกีดขวาง',
            'มีกุญแจเพื่อปลดล็อคมอเตอร์ เมื่อเกิดเหตุฉุกเฉิน หรือไฟฟ้าดับ'
        ],
        featuresEn: [
            'Supports gates up to 350 kg per leaf',
            'Soft start & soft stop system for smooth operation',
            'Control panel is completely independent of the motor units',
            'Supports anti-collision obstacle detection protection',
            'Manual release key for emergency or power failure'
        ],
        specifications: {
            'น้ำหนักประตูสูงสุด': '300-350 kg (ต่อบาน)',
            'ความกว้างประตูสูงสุด': '2.5-3.5 m (ต่อบาน)',
            'แหล่งจ่ายไฟ': '220V / 110V',
            'กำลังมอเตอร์': '24VDC 60W x 2',
            'ความเร็วรอบการหมุน': '100 rpm',
            'ระยะยืดหดของแขนมอเตอร์ (Actuator Stroke)': '300-400 mm',
            'อุณหภูมิแวดล้อมที่รองรับ': '-20°C ถึง 50°C',
            'ระดับการป้องกันน้ำและฝุ่น': 'IP55',
            'กระแสไฟฟ้า': '5A'
        },
        specificationsEn: {
            'Max Gate Weight': '300-350 kg (per leaf)',
            'Max Gate Width': '2.5-3.5 m (per leaf)',
            'Power Supply': '220V / 110V',
            'Motor Power': '24VDC 60W x 2',
            'Rotational Speed': '100 rpm',
            'Actuator Stroke': '300-400 mm',
            'Operating Temperature': '-20°C to 50°C',
            'IP Protection Rating': 'IP55',
            'Current': '5A'
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
            'assets/images/product/maxim_3500/main.jpg'
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
    }
];

function getAllProducts() {
    return productsData;
}

function getProductById(id) {
    return productsData.find(product => product.id === id);
}
