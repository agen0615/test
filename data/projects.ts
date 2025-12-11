import { Project } from '../types';

export const projects: Project[] = [
  /* 
    =================================================================
    使用指南 (HOW TO USE):
    1. 复制下面的 "TEMPLATE START" 到 "TEMPLATE END" 之间的代码块。
    2. 粘贴到数组的末尾。
    
    【关于图片 (IMAGES)】:
    方法 A (简单): 把图片放在项目文件夹的 'public/images/' 里面。
             代码填: image: "/images/my-photo.jpg" 
             (注意：不要写 public，直接以 / 开头)
             
    方法 B (网络): 使用图床或您网站的链接。
             代码填: image: "https://imgur.com/..."
    =================================================================
  */

  /* === 复制起始点 (TEMPLATE START) === */
  {
    id: 1, // 编号: 必须是唯一的数字 (Unique Number)
    title: "Urban Silence", // 项目标题 (Project Title)
    category: "Fashion", // 分类: Fashion, Commercial, Social, Event
    client: "Theory", // 客户名称 (Client Name)
    year: "2024", // 年份 (Year)
    // 封面图: 使用本地图片示例 -> image: "/images/project-01.jpg"
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop",
    // 视频链接: 如果没有视频，请删除下面这行 videoUrl
    // videoUrl: "https://link-to-your-video.mp4", 
    description: "A stark, brutalist exploration of winter fashion in the heart of the Brooklyn Navy Yard.", // 项目介绍 (Description)
    challenge: "The client wanted to strip away the noise of the city and focus purely on texture and silhouette, despite shooting in one of the busiest industrial parks in New York.", // 挑战 (Challenge)
    solution: "We utilized negative space and high-contrast monochrome grading to isolate the subject, turning the industrial background into an abstract canvas.", // 解决方案 (Solution)
    credits: [
        { role: "Creative Director", name: "Alex Chen" }, // 演职人员表 (Credits)
        { role: "Photographer", name: "Sarah Jenkins" },
        { role: "Stylist", name: "Mika Sato" }
    ],
    gallery: [
        // 更多图片链接
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop"
    ]
  },
  /* === 复制结束点 (TEMPLATE END) === */

  {
    id: 2,
    title: "Neon Nights",
    category: "Social",
    client: "Soju Brand",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550921884-2989c3132e18?q=80&w=1786&auto=format&fit=crop",
    description: "A high-energy, vertical-first campaign designed specifically for TikTok and Reels to launch a new flavor.",
    challenge: "Capturing the chaotic energy of a night out while maintaining clear product placement within a 9:16 frame.",
    solution: "We used a custom rig to mount the product to the camera, creating a disorienting yet product-focused POV experience that felt authentic to the platform.",
    credits: [
        { role: "Director", name: "Pair to Pair Studio" },
        { role: "DOP", name: "Marcus Wright" },
        { role: "Edit/Color", name: "Pair to Pair Studio" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=1974&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Future Texture",
    category: "Commercial",
    client: "Tech Start-up",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
    description: "Product visualization for next-gen wearables, focusing on the intersection of biology and technology.",
    challenge: "Making a hard plastic device feel organic and approachable.",
    solution: "We utilized macro cinematography and soft, fluid lighting setups to highlight the curves and tactile nature of the device.",
    credits: [
        { role: "Art Direction", name: "Elena Rossi" },
        { role: "3D Motion", name: "Studio Z" },
        { role: "Photography", name: "Liam O'Connor" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Silk Road Redux",
    category: "Fashion",
    client: "Independent Designer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1740&auto=format&fit=crop",
    description: "Cross-cultural lookbook mixing traditional silk materials with modern, architectural cuts.",
    challenge: "Balancing heritage with hypebeast culture.",
    solution: "We cast models who embodied the 'third culture kid' aesthetic and shot in locations that blended old-world architecture with modern graffiti.",
    credits: [
        { role: "Photographer", name: "Kenji W." },
        { role: "Stylist", name: "Chloe D." }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1529139574466-a302d2052574?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Minimal Living",
    category: "Commercial",
    client: "Lifestyle Brand",
    year: "2023",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    description: "Brand film and still campaign for a new line of sustainable home goods.",
    challenge: "To make sustainability look luxurious rather than rustic.",
    solution: "Clean lines, harsh sunlight, and a focus on the architectural qualities of the objects.",
    credits: [
        { role: "Director", name: "Pair to Pair Studio" },
        { role: "Set Design", name: "Maria V." }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop",
         "https://images.unsplash.com/photo-1595514020180-7b56384a6254?q=80&w=1932&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "City Pulse",
    category: "Event",
    client: "NYFW",
    year: "2022",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    description: "Backstage coverage and influencer content during New York Fashion Week.",
    challenge: "Extremely tight turnaround times (same-day edits) and low-light environments.",
    solution: "A run-and-gun documentary approach using high-sensitivity sensors and fast lenses to capture the raw emotion of the backstage chaos.",
    credits: [
        { role: "Lead Photo", name: "Pair to Pair Studio" },
        { role: "Editor", name: "Pair to Pair Studio" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&w=1979&auto=format&fit=crop",
         "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Velvet Underground",
    category: "Fashion",
    client: "Indie Label",
    year: "2022",
    image: "https://images.unsplash.com/photo-1485230946086-1d99d5433ddb?q=80&w=2070&auto=format&fit=crop",
    description: "Underground fashion showcase featuring avant-garde textures and low-light cinematography.",
    challenge: "Capturing details in extreme low light conditions.",
    solution: "Used custom lighting rigs and high ISO film stock to maintain grain structure.",
    credits: [
        { role: "Director", name: "Pair to Pair Studio" },
        { role: "Photography", name: "Sam K." }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550614000-4b9519e02a48?q=80&w=2000&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Tech Noir",
    category: "Commercial",
    client: "Audio Brand",
    year: "2022",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    description: "Product launch for high-end noise cancelling headphones.",
    challenge: "Visualizing sound in a silent medium.",
    solution: "Used vibration and water ripples to represent sound waves physically.",
    credits: [
        { role: "Director", name: "Pair to Pair Studio" },
        { role: "Sound Design", name: "Echo Lab" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1524678606372-87139ee0927d?q=80&w=1896&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];