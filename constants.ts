import { Project, Writing, Experience, Skill, Socials } from './types';

export const SOCIALS: Socials = {
  github: "https://github.com/ardelyo",
  instagram: "https://instagram.com/ardel.yo",
  tiktok: "https://tiktok.com/@ardel.yo",
  email: "mailto:hello@ardelyo.com"
};

export const PROFILE = {
  name: "Ardellio Satria Anindito",
  alias: "Ardelyo",
  location: {
    en: "Bandung, West Java",
    id: "Bandung, Jawa Barat"
  },
  role: {
    en: "Student • Developer • Creative",
    id: "Pelajar • Pengembang • Kreatif"
  },
  intro: {
    en: "I am a 10th-grade high school student (2025-2026) based in Bandung, West Java. I have a deep passion for coding, photography, graphic design, and writing. I build things not just for function, but for meaning.",
    id: "Aku hanyalah siswa SMA kelas 10 (2025-2026) yang tinggal di Kota Bandung, Jawa Barat. Aku menyukai koding, fotografi, desain grafis, dan menulis. Aku membangun sesuatu bukan hanya untuk fungsi, tapi untuk makna."
  }
};

export const PROJECTS: Project[] = [
  {
    id: 'ourcreativity',
    title: 'OurCreativity',
    description: {
      en: 'A community platform containing stories, teams, and announcements for the OurCreativity collective.',
      id: 'Platform komunitas yang berisi cerita, tim, dan pengumuman untuk kolektif OurCreativity.'
    },
    details: {
      en: "OurCreativity is more than just a website; it's a digital home for a collective of creative minds. Built to bridge the gap between creators and their audience, this platform serves as a central hub for updates, team introductions, and the stories behind our projects. The design focuses on inclusivity and warmth, reflecting the community's core values.",
      id: "OurCreativity lebih dari sekadar situs web; ini adalah rumah digital bagi kolektif pemikiran kreatif. Dibangun untuk menjembatani kesenjangan antara pencipta dan audiens mereka, platform ini berfungsi sebagai pusat pembaruan, perkenalan tim, dan cerita di balik proyek-proyek kami. Desainnya berfokus pada inklusivitas dan kehangatan, mencerminkan nilai-nilai inti komunitas."
    },
    status: 'Live Project',
    link: 'https://github.com/ardelyo/ourcreativity',
    hasReadMore: true,
    techStack: ['Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    role: { en: 'Lead Developer & Designer', id: 'Lead Developer & Designer' },
    year: '2024'
  },
  {
    id: 'greenkode',
    title: 'GreenKode',
    description: {
      en: 'A professional CLI tool to measure and optimize code carbon footprints. World of 8 Billion competition entry.',
      id: 'Alat CLI profesional untuk mengukur dan mengoptimalkan jejak karbon kode. Entri kompetisi World of 8 Billion.'
    },
    details: {
      en: "GreenKode is a creative solution developed for the World of 8 Billion international competition under the Energy and Climate Change topic. It acts as a professional CLI tool empowering developers to measure, analyze, and optimize the carbon footprint of their code. By making energy consumption visible, we help developers write more sustainable software.",
      id: "GreenKode adalah solusi kreatif yang dikembangkan untuk kompetisi internasional World of 8 Billion dengan topik Energi dan Perubahan Iklim. Ini bertindak sebagai alat CLI profesional yang memberdayakan pengembang untuk mengukur, menganalisis, dan mengoptimalkan jejak karbon kode mereka. Dengan membuat konsumsi energi terlihat, kami membantu pengembang menulis perangkat lunak yang lebih berkelanjutan."
    },
    status: 'Live Project',
    link: 'https://github.com/ardelyo/greenkode',
    hasReadMore: true,
    techStack: ['Node.js', 'Rust', 'CLI Architecture', 'Carbon API'],
    role: { en: 'Solo Developer', id: 'Solo Developer' },
    year: '2025'
  },
  {
    id: 'kursorin',
    title: 'Kursorin',
    description: {
      en: 'Accessibility solution enabling mouse control via hand/head tracking. Eye tracking coming soon.',
      id: 'Solusi aksesibilitas kontrol mouse via pelacakan tangan/kepala. Pelacakan mata segera hadir.'
    },
    details: {
      en: "Kursorin is a project close to my heart, designed to bridge the digital divide. It provides mouse accessibility for people with disabilities using hand and head tracking technology via standard webcams. We are currently working on a 'To Be Soon' feature: eye tracking that requires no expensive hardware, making digital accessibility free and universal.",
      id: "Kursorin adalah proyek yang dekat di hati saya, dirancang untuk menjembatani kesenjangan digital. Ini menyediakan aksesibilitas mouse bagi penyandang disabilitas menggunakan teknologi pelacakan tangan dan kepala melalui webcam standar. Kami saat ini sedang mengerjakan fitur 'Segera Hadir': pelacakan mata yang tidak memerlukan perangkat keras mahal, membuat aksesibilitas digital gratis dan universal."
    },
    status: 'Under Maintenance',
    link: 'https://github.com/ardelyo/kursorin',
    hasReadMore: true,
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    role: { en: 'AI Engineer', id: 'AI Engineer' },
    year: '2024'
  },
  {
    id: 'piketin',
    title: 'Piketin',
    description: {
      en: 'A digital picket management system with gamification to make chores engaging.',
      id: 'Sistem manajemen piket digital dengan gamifikasi agar tugas kelas lebih menarik.'
    },
    details: {
      en: "Piketin transforms the mundane task of classroom chores into an engaging, gamified experience. By tracking contributions and adding competitive elements, it ensures fairness and consistency in maintaining shared spaces. It's a digital solution to a very human problem: responsibility.",
      id: "Piketin mengubah tugas biasa piket kelas menjadi pengalaman yang menarik dan tergamifikasi. Dengan melacak kontribusi dan menambahkan elemen kompetitif, ini memastikan keadilan dan konsistensi dalam menjaga ruang bersama. Ini adalah solusi digital untuk masalah yang sangat manusiawi: tanggung jawab."
    },
    status: 'Live Project',
    link: 'https://github.com/ardelyo/piketin',
    hasReadMore: true,
    techStack: ['React Native', 'Firebase', 'Gamification Logic'],
    role: { en: 'Full Stack Developer', id: 'Full Stack Developer' },
    year: '2023'
  },
  {
    id: 'artefak',
    title: 'ARTEFAK',
    description: {
      en: 'AI agentic-first workspace for organizing and synthesizing complex information.',
      id: 'Ruang kerja berbasis AI agentic-first untuk mengatur dan mensintesis informasi kompleks.'
    },
    details: {
      en: "ARTEFAK is a versatile workspace based on AI agentic-first principles. It is designed for researchers, students, and professionals who need to organize, synthesize, and retrieve complex information efficiently. It acts as a second brain that actively helps you connect the dots.",
      id: "ARTEFAK adalah ruang kerja serbaguna berbasis prinsip AI agentic-first. Dirancang untuk peneliti, pelajar, dan profesional yang perlu mengatur, mensintesis, dan mengambil informasi kompleks secara efisien. Ini bertindak sebagai otak kedua yang secara aktif membantu Anda menghubungkan titik-titik."
    },
    status: 'Live Project',
    link: 'https://github.com/ardelyo/artefak',
    hasReadMore: true,
    techStack: ['LangChain', 'Next.js', 'Pinecone', 'OpenAI API'],
    role: { en: 'Lead Architect', id: 'Lead Architect' },
    year: '2025'
  },
  {
    id: 'lya-ai',
    title: 'Lya AI',
    description: {
      en: 'A fine-tuned Gemini API model creating a unique, personalized AI personality.',
      id: 'Model Gemini API yang disesuaikan untuk menciptakan kepribadian AI yang unik.'
    },
    details: {
      en: "Lya AI explores the boundaries of artificial personality. Using fine-tuned Google Gemini models, Lya isn't just a chatbot; she has a distinct tone, memory, and personality quirks that make interactions feel genuinely unique and less robotic.",
      id: "Lya AI mengeksplorasi batas-batas kepribadian buatan. Menggunakan model Google Gemini yang disesuaikan, Lya bukan hanya chatbot; dia memiliki nada, ingatan, dan keunikan kepribadian yang membuat interaksi terasa benar-benar unik dan tidak kaku."
    },
    status: 'Live Project',
    link: 'https://github.com/ardelyo/lya-ai',
    hasReadMore: true,
    techStack: ['Google Gemini API', 'Prompt Engineering', 'Python'],
    role: { en: 'AI Researcher', id: 'AI Researcher' },
    year: '2024'
  },
];

export const WRITINGS: Writing[] = [
  {
    id: 'rupanya',
    title: 'Rupanya Engkau Lebih Dicintai Tuhan',
    subtitle: {
      en: "It Seems You're More Beloved by God",
      id: "Sepertinya Engkau Lebih Dicintai Tuhan"
    },
    excerpt: {
      en: "A deep emotional journey about a grandson's relationship with his grandfather.",
      id: "Perjalanan emosional mendalam tentang hubungan seorang cucu dengan kakeknya."
    },
    content: {
      en: "The night air was heavy, heavier than I had ever felt before. The phone rang at 3:00 AM, a sound that universally heralds bad news. I didn't want to pick it up. I didn't want to know. But deep down, in the quiet corners of my soul, I already knew.\n\nHe was gone.\n\nMy grandfather wasn't a man of many words. He was a man of action, of soil, of hard work. I remember his hands—calloused, rough, yet capable of the gentlest touch when he held my small hands as a child. He taught me that the earth gives back what you put into it. He taught me patience, not through lectures, but by waiting for the harvest.\n\nIn the days following his departure, I found myself wandering through his garden. The plants he tended to were still there, swaying in the wind, unaware that their caretaker had left. I felt a surge of anger. Why? Why him? He was the pillar of our family, the silent strength that held us together.\n\nThen, I had a dream. In it, he was sitting on his favorite porch chair, bathed in a light so bright it felt like liquid gold. He wasn't old or frail anymore. He looked... peaceful. Radiant. He smiled at me, a smile that erased all the pain of the last few days. He didn't speak, but the message was clear: 'I am home.'\n\nI woke up with tears streaming down my face, but the heaviness was gone. I realized then that my grief was selfish. I wanted him here, with us, even if he was in pain. But God... God wanted him home. God loved him more than I ever could. His work here was done, his harvest complete. And now, he rests.",
      id: "Udara malam terasa berat, lebih berat dari yang pernah kurasakan sebelumnya. Telepon berdering pukul 03.00 pagi, suara yang secara universal menandakan kabar buruk. Aku tidak ingin mengangkatnya. Aku tidak ingin tahu. Tapi jauh di lubuk hati, di sudut sunyi jiwaku, aku sudah tahu.\n\nBeliau telah tiada.\n\nKakekku bukanlah orang yang banyak bicara. Beliau adalah orang yang bertindak, orang yang bergelut dengan tanah, orang yang bekerja keras. Aku ingat tangannya—kapalan, kasar, namun mampu memberikan sentuhan paling lembut saat beliau memegang tangan kecilku sewaktu kecil. Beliau mengajariku bahwa bumi memberikan kembali apa yang kau tanam di dalamnya. Beliau mengajariku kesabaran, bukan melalui ceramah, tetapi dengan menunggu masa panen.\n\nDi hari-hari setelah kepergiannya, aku mendapati diriku berkeliaran di kebunnya. Tanaman yang beliau rawat masih ada di sana, bergoyang tertiup angin, tidak sadar bahwa penjaganya telah pergi. Aku merasakan gelombang kemarahan. Mengapa? Mengapa beliau? Beliau adalah pilar keluarga kami, kekuatan diam yang menyatukan kami.\n\nKemudian, aku bermimpi. Di dalamnya, beliau duduk di kursi teras favoritnya, bermandikan cahaya yang begitu terang hingga terasa seperti emas cair. Beliau tidak tua atau lemah lagi. Beliau terlihat... damai. Berseri-seri. Beliau tersenyum padaku, senyum yang menghapus semua rasa sakit beberapa hari terakhir. Beliau tidak berbicara, tetapi pesannya jelas: 'Aku sudah pulang.'\n\nAku terbangun dengan air mata mengalir di wajahku, tetapi rasa berat itu telah hilang. Aku menyadari saat itu bahwa kesedihanku egois. Aku menginginkannya di sini, bersama kami, meskipun beliau kesakitan. Tapi Tuhan... Tuhan menginginkannya pulang. Tuhan mencintainya lebih dari yang aku bisa. Pekerjaannya di sini sudah selesai, panennya sudah lengkap. Dan sekarang, beliau beristirahat."
    }
  },
  {
    id: 'ayahku',
    title: 'Ayahku, Kondekturku',
    subtitle: {
      en: 'My Father, My Conductor',
      id: 'Ayahku, Kondekturku'
    },
    excerpt: {
      en: 'A tribute to an extraordinary father figure and his sacrifice.',
      id: 'Penghormatan untuk sosok ayah yang luar biasa dan pengorbanannya.'
    },
    content: {
      en: "Every morning, before the sun even considered rising, the sound of a diesel engine would roar to life outside our window. That was my alarm clock. That was my father leaving for war. Not a war with guns and trenches, but a war against poverty, a war to put food on our table.\n\nMy father was a bus conductor. To the world, he was just another man in a uniform, punching tickets and shouting destinations. But to me, he was the captain of a massive land ship. I used to watch him sometimes, hiding behind the fence of my school as his bus passed by. I saw how he handled the crowd, how he balanced on the moving steps with the grace of a dancer, how he commanded respect with just a look.\n\nHe smelled of exhaust fumes, cheap tobacco, and sweat. It wasn't a pleasant smell to most, but to me, it was the smell of safety. It was the smell of sacrifice. He would come home late, his uniform stained, his eyes red from the dust and wind. But he never complained. Not once.\n\nOne night, I asked him, 'Pa, aren't you tired?' He looked at me, his face softened by the dim light of our living room, and said, 'Seeing you study, seeing you dream... that washes all the tired away.'\n\nHe wasn't a musician, but he conducted our lives with a rhythm that kept us moving forward. He didn't have a baton; he had a ticket puncher. He didn't have an orchestra; he had the roar of traffic and the voices of passengers. But he made sure our melody never faltered. He made sure I could have the future he never did.\n\nNow, as I sit here building digital worlds, I realize I am still riding his bus. He paved the road, he paid the fare, and he is the reason I have reached this destination.",
      id: "Setiap pagi, sebelum matahari bahkan berpikir untuk terbit, suara mesin diesel akan menderu di luar jendela kami. Itu adalah jam alarmku. Itu adalah ayahku yang berangkat perang. Bukan perang dengan senjata dan parit, tapi perang melawan kemiskinan, perang untuk menyajikan makanan di meja kami.\n\nAyahku adalah seorang kondektur bus. Bagi dunia, dia hanyalah pria berseragam lainnya, melubangi tiket dan meneriakkan tujuan. Tapi bagiku, dia adalah kapten kapal darat yang besar. Aku sering melihatnya kadang-kadang, bersembunyi di balik pagar sekolahku saat busnya lewat. Aku melihat bagaimana dia menangani kerumunan, bagaimana dia menyeimbangkan diri di tangga yang bergerak dengan anggun seperti penari, bagaimana dia menuntut rasa hormat hanya dengan tatapan.\n\nDia berbau asap knalpot, tembakau murah, dan keringat. Itu bukan bau yang menyenangkan bagi kebanyakan orang, tapi bagiku, itu adalah bau keamanan. Itu adalah bau pengorbanan. Dia akan pulang terlambat, seragamnya bernoda, matanya merah karena debu dan angin. Tapi dia tidak pernah mengeluh. Tidak sekali pun.\n\nSuatu malam, aku bertanya padanya, 'Pa, apa Papa tidak lelah?' Dia menatapku, wajahnya melembut oleh cahaya redup ruang tamu kami, dan berkata, 'Melihatmu belajar, melihatmu bermimpi... itu menghapus semua rasa lelah.'\n\nDia bukan musisi, tapi dia memimpin hidup kami dengan ritme yang membuat kami terus bergerak maju. Dia tidak punya tongkat konduktor; dia punya pelubang tiket. Dia tidak punya orkestra; dia punya deru lalu lintas dan suara penumpang. Tapi dia memastikan melodi kami tidak pernah goyah. Dia memastikan aku bisa memiliki masa depan yang tidak pernah dia miliki.\n\nSekarang, saat aku duduk di sini membangun dunia digital, aku sadar aku masih menumpang busnya. Dia yang mengaspal jalan, dia yang membayar ongkosnya, dan dialah alasan aku sampai di tujuan ini."
    }
  },
  {
    id: 'perjalanan',
    title: 'Perjalanan Menuju Kota Impian',
    subtitle: {
      en: 'Journey to the Dream City',
      id: 'Perjalanan Menuju Kota Impian'
    },
    excerpt: {
      en: 'A writing and illustration collaboration with my beloved sister.',
      id: 'Kolaborasi penulisan dan ilustrasi dengan adik tercinta.'
    },
    content: {
      en: "The map was drawn in crayon. Rivers were blue scribbles, mountains were purple triangles, and the 'Dream City' was a giant golden star at the top right corner of the paper. My sister, only seven years old, slapped it onto the table with the authority of a general. 'We leave at dawn,' she declared.\n\nThis project wasn't just about writing a story; it was about capturing a moment in time. We sat on the floor, surrounded by colored pencils and crumpled paper. I wrote the words, she drew the world. The story was simple: two siblings traveling to a magical city where candy grew on trees and homework was illegal.\n\nBut as we worked, the story evolved. It became less about the destination and more about the obstacles. The 'Monster of Doubt' (a black blob with angry eyes) blocked the bridge. The 'River of Laziness' (a very long, flat blue line) tried to put us to sleep. We had to fight them.\n\n'How do we defeat the Monster of Doubt?' I asked her.\nShe didn't hesitate. 'We hold hands and walk past it. If we are together, it's not scary.'\n\nI stopped writing. I looked at her, really looked at her. In her innocence, she had unlocked a profound truth. The journey to any dream city—whether it's becoming a developer, an artist, or just a good person—is terrifying if you do it alone. But with companionship, with support, the monsters shrink.\n\nWe finished the book. It's not a bestseller. It's stapled together and the cover is slightly torn. But it is my most prized possession. It reminds me that the Dream City isn't a place you find; it's a place you build, step by step, hand in hand.",
      id: "Peta itu digambar dengan krayon. Sungai adalah coretan biru, gunung adalah segitiga ungu, dan 'Kota Impian' adalah bintang emas raksasa di sudut kanan atas kertas. Adik perempuanku, baru tujuh tahun, menepuknya ke meja dengan otoritas seorang jenderal. 'Kita berangkat subuh,' serunya.\n\nProyek ini bukan hanya tentang menulis cerita; ini tentang menangkap momen dalam waktu. Kami duduk di lantai, dikelilingi pensil warna dan kertas kusut. Aku menulis kata-kata, dia menggambar dunianya. Ceritanya sederhana: dua bersaudara bepergian ke kota ajaib di mana permen tumbuh di pohon dan PR itu ilegal.\n\nTapi saat kami bekerja, ceritanya berkembang. Itu menjadi kurang tentang tujuan dan lebih tentang rintangan. 'Monster Keraguan' (gumpalan hitam dengan mata marah) memblokir jembatan. 'Sungai Kemalasan' (garis biru datar yang sangat panjang) mencoba menidurkan kami. Kami harus melawan mereka.\n\n'Bagaimana kita mengalahkan Monster Keraguan?' tanyaku padanya.\nDia tidak ragu. 'Kita pegangan tangan dan berjalan melewatinya. Kalau kita bersama, itu tidak menakutkan.'\n\nAku berhenti menulis. Aku menatapnya, benar-benar menatapnya. Dalam kepolosannya, dia telah membuka kebenaran yang mendalam. Perjalanan menuju kota impian mana pun—apakah itu menjadi pengembang, seniman, atau hanya orang baik—itu menakutkan jika kau melakukannya sendirian. Tapi dengan kebersamaan, dengan dukungan, monster-monster itu menyusut.\n\nKami menyelesaikan buku itu. Itu bukan buku terlaris. Itu distaples bersama dan sampulnya sedikit robek. Tapi itu adalah harta milikku yang paling berharga. Itu mengingatkanku bahwa Kota Impian bukanlah tempat yang kau temukan; itu adalah tempat yang kau bangun, selangkah demi selangkah, bergandengan tangan."
    }
  },
  {
    id: 'jangan-mundur',
    title: 'Jangan Mundur, Maju Saja',
    subtitle: {
      en: "Don't Back Down, Move Forward",
      id: "Jangan Mundur, Maju Saja"
    },
    excerpt: {
      en: 'An inspiring story about Dapa, a deaf person who proves limitations are not obstacles.',
      id: 'Kisah inspiratif tentang Dapa, seorang teman Tuli yang membuktikan keterbatasan bukan halangan.'
    },
    quote: {
      en: "If you have a dream, you have the will. And if you have the will, you'll surely find a way.",
      id: "Jika kamu punya mimpi, kamu punya kemauan. Dan jika kamu punya kemauan, kamu pasti akan menemukan jalan."
    },
    content: {
      en: "Dapa lives in a world of silence, but his life is the loudest thing I know. I met him at a local community event. While everyone else was chattering away, filling the air with noise, Dapa was observing. His eyes missed nothing. He communicated with his hands, a fluid dance of fingers and expressions that felt more expressive than any spoken word.\n\nPeople often looked at him with pity. 'Poor boy,' they would whisper. 'He can't hear the music.'\nBut they were wrong. Dapa could feel the music. He could feel the bass in the floorboards; he could read the rhythm in the drummer's arms. He didn't lack a sense; he had honed the others to perfection.\n\nOne day, I saw him struggling with a coding problem. He was trying to learn Python. The tutorials were videos, mostly without captions. Frustrating? Yes. Impossible? No. He used auto-translate tools, he read documentation until his eyes burned, he experimented until the code ran.\n\nI asked him via text, 'Why do you try so hard when it's not made for you?'\nHe typed back, 'Because the world won't change for me. I must change the world.'\n\nHe told me his motto: 'Jangan Mundur, Maju Saja' (Don't Back Down, Move Forward). It wasn't just a slogan; it was his survival instinct. When the world put up a wall of sound, he climbed over it in silence. When people ignored him, he forced them to look at his work, which was undeniable.\n\nDapa taught me that 'limitations' are often just lazy excuses we give ourselves. He runs a race with hurdles we can't even see, and he's winning. So what excuse do I have to stop?",
      id: "Dapa hidup di dunia yang sunyi, tapi hidupnya adalah hal paling nyaring yang aku tahu. Aku bertemu dengannya di acara komunitas lokal. Saat orang lain sibuk mengobrol, memenuhi udara dengan kebisingan, Dapa mengamati. Matanya tidak melewatkan apa pun. Dia berkomunikasi dengan tangannya, tarian jari dan ekspresi yang cair yang terasa lebih ekspresif daripada kata-kata yang diucapkan.\n\nOrang-orang sering memandangnya dengan kasihan. 'Kasihan anak itu,' bisik mereka. 'Dia tidak bisa mendengar musiknya.'\nTapi mereka salah. Dapa bisa merasakan musiknya. Dia bisa merasakan bass di papan lantai; dia bisa membaca ritme di lengan drummer. Dia tidak kekurangan indra; dia telah mengasah indra lainnya hingga sempurna.\n\nSuatu hari, aku melihatnya berjuang dengan masalah koding. Dia mencoba belajar Python. Tutorialnya adalah video, sebagian besar tanpa teks. Membuat frustrasi? Ya. Mustahil? Tidak. Dia menggunakan alat terjemahan otomatis, dia membaca dokumentasi sampai matanya perih, dia bereksperimen sampai kodenya berjalan.\n\nAku bertanya padanya lewat teks, 'Kenapa kamu berusaha begitu keras padahal ini tidak dibuat untukmu?'\nDia mengetik balasan, 'Karena dunia tidak akan berubah untukku. Aku yang harus mengubah dunia.'\n\nDia memberitahuku motonya: 'Jangan Mundur, Maju Saja'. Itu bukan sekadar slogan; itu adalah insting bertahan hidupnya. Ketika dunia memasang tembok suara, dia memanjatnya dalam diam. Ketika orang mengabaikannya, dia memaksa mereka melihat karyanya, yang tak terbantahkan.\n\nDapa mengajariku bahwa 'keterbatasan' seringkali hanyalah alasan malas yang kita berikan pada diri sendiri. Dia berlari dalam perlombaan dengan rintangan yang bahkan tidak bisa kita lihat, dan dia menang. Jadi alasan apa yang aku punya untuk berhenti?"
    }
  },
];

export const TIMELINE: Experience[] = [
  { year: '2025', description: { en: 'High School Grade 10 (2025-2026)', id: 'SMA Kelas 10 (2025-2026)' } },
  { year: '2024', description: { en: 'Learning Advanced AI/ML Concepts', id: 'Mempelajari Konsep AI/ML Lanjutan' } },
  { year: '2023', description: { en: 'Started learning AI and ML', id: 'Mulai mempelajari AI dan ML' } },
  { year: '2022', description: { en: 'Began content creation journey', id: 'Memulai perjalanan pembuatan konten' } },
  { year: '2021', description: { en: 'Initiated programming studies', id: 'Memulai belajar pemrograman' } },
];

export const SKILLS: Skill[] = [
  { category: 'AI & ML', percentage: 85, items: ['Google AI Studio', 'Gemini', 'Cursor', 'Agentic Workflow'] },
  { category: 'Creative', percentage: 90, items: ['Photography', 'Graphic Design', 'Writing', 'Storytelling'] },
  { category: 'Development', percentage: 75, items: ['React', 'TypeScript', 'Tailwind', 'Python'] },
  { category: 'Languages', percentage: 80, items: ['Indonesian (Native)', 'English (Fluent)', 'Sundanese', 'Japanese'] },
];