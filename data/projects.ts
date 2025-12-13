import { Project } from '../types';

export const projects: Project[] = [
  // ========================================================
  // 案例: MINUS COSMETICS (NEW - Social Case)
  // ========================================================
  {
    id: 105, 
    title: "MINUS COSMETICS", 
    category: "Social",         
    client: "Minus Cosmetics", 
    orientation: "portrait", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop", 
    videoUrl: "https://res.cloudinary.com/dhglk4lma/video/upload/minus.cosmetics_2_aal8pe.mp4",
    description: "A digital-first campaign for Minus Cosmetics, focusing on the concept of subtraction in beauty routines. Less ingredients, more impact.",
    challenge: "Conveying the tactile quality and purity of the product through digital screens within the short attention span of social media users.", 
    solution: "High-fidelity texture shots combined with rhythmic editing to create a sensory visual experience that stops the scroll.",
    credits: [
        { role: "Art Direction", name: "Pair to Pair" },
        { role: "Motion", name: "Studio Team" }
    ],
    gallery: [
        // 配合 1+2 布局的三张图
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571781535009-536952d0cb5b?q=80&w=1886&auto=format&fit=crop"
    ]
  },

  // ========================================================
  // 案例: SILHOUETTE / S/S 24 (Fashion Editorial)
  // ========================================================
  {
    id: 104, 
    title: "SILHOUETTE / S/S 24", 
    category: "Fashion",         
    client: "Independent Designer", 
    orientation: "portrait", 
    year: "2024",
    image: "https://res.cloudinary.com/dhglk4lma/image/upload/v1765577092/4160dedbec60d274430f0473a8f3fe87_raojnh.jpg", 
    description: "A high-contrast editorial campaign focusing on texture and form. This series explores the relationship between the garment and the urban environment.",
    challenge: "Capturing the intricate details of the fabric while maintaining a minimalist aesthetic suitable for high-end print media.", 
    solution: "We utilized natural light manipulation and stark architectural backgrounds to emphasize the silhouette, creating a visual dialogue between soft fabrics and hard lines.",
    credits: [
        { role: "Photographer", name: "Pair to Pair" },
        { role: "Styling", name: "Studio Team" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop", 
        "https://images.unsplash.com/photo-1611558709796-cf31e988cc2d?q=80&w=1887&auto=format&fit=crop"
    ]
  },

  // ========================================================
  // 案例: NBA / COURT CULTURE
  // ========================================================
  {
    id: 103, 
    title: "NBA / COURT CULTURE", 
    category: "Commercial",         
    client: "NBA", 
    orientation: "landscape", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop", 
    videoUrl: "https://res.cloudinary.com/dhglk4lma/video/upload/v1765576716/henrylunychl_en_spgjxr.mp4",
    description: "An energetic campaign capturing the pulse of basketball culture. Connecting the gritty street courts of New York with the global fanbase.",
    challenge: "Translating the raw energy of streetball into a polished commercial format that resonates with a global audience.", 
    solution: "Using dynamic camera movement and fast-paced editing to mirror the rhythm of the game, highlighting the shared passion across borders.",
    credits: [
        { role: "Client", name: "NBA" },
        { role: "Production", name: "Pair to Pair" }
    ],
    gallery: []
  },

  // ========================================================
  // 案例: JD HEALTH / TCM GLOBAL
  // ========================================================
  {
    id: 102, 
    title: "JD HEALTH / TCM GLOBAL", 
    category: "Commercial",         
    client: "JD Health", 
    orientation: "landscape", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1544367563-12123d815d19?q=80&w=2070&auto=format&fit=crop", 
    videoUrl: "https://res.cloudinary.com/dhglk4lma/video/upload/%E4%BA%AC%E4%B8%9C%E4%B9%B0%E8%8D%AF%E5%9B%BD%E8%8D%AF%E5%87%BA%E6%B5%B7case_video_Final_0904_hivcpu.mp4",
    description: "A strategic visual campaign for JD Health's 'TCM Global' initiative. Documenting the journey of traditional medicine crossing borders to reach a global audience.",
    challenge: "Modernizing the perception of traditional pharmaceuticals while visualizing the complex logistics of cross-border trade.", 
    solution: "We crafted a narrative highlighting the precision of modern logistics meeting the heritage of ancient wisdom. Bridging culture through visual storytelling.",
    credits: [
        { role: "Client", name: "JD Health" },
        { role: "Production", name: "Pair to Pair" }
    ],
    gallery: []
  },

  // ========================================================
  // 案例: LUCKISLE / 步步生财
  // ========================================================
  {
    id: 101, 
    title: "LUCKISLE / FORTUNE STEPS", 
    category: "Commercial",         
    client: "Luckisle", 
    orientation: "portrait", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", 
    videoUrl: "https://res.cloudinary.com/dhglk4lma/video/upload/v1765490221/LUCKISLE%E6%AD%A5%E6%AD%A5%E7%94%9F%E8%B4%A2_16%E6%AF%949%E7%94%BB%E5%B9%85_f12hag.mp4",
    description: "A cinematic visual campaign for LUCKISLE titled 'Step by Step Prosperity' (步步生财). This piece blends traditional symbolism of growth with contemporary motion aesthetics.",
    challenge: "Translating the traditional concept of 'accumulating wealth' into a modern, high-energy visual language for a younger demographic.", 
    solution: "We utilized fluid transitions and a rhythmic edit structure to visualize the momentum of success, creating a seamless narrative flow.",
    credits: [
        { role: "Director", name: "Pair to Pair" },
        { role: "Motion Design", name: "Studio Team" }
    ],
    gallery: []
  },

  // ========================================================
  // 案例: VEO / WINDOW SCAPES
  // ========================================================
  {
    id: 100, 
    title: "VEO / WINDOW SCAPES", 
    category: "Commercial",         
    client: "AI R&D", 
    orientation: "portrait",
    year: "2024",
    image: "https://images.unsplash.com/photo-1518882570154-189d2d0b5ee2?q=80&w=1974&auto=format&fit=crop", 
    videoUrl: "https://res.cloudinary.com/dhglk4lma/video/upload/v1765486683/%E7%AA%97%E5%A4%96%E9%A3%8E%E6%99%AF%E5%8A%A8%E8%B5%B7%E6%9D%A5%E8%A7%86%E9%A2%91_ndywls.mp4",
    description: "A generative visual experiment using the Veo model. A meditative loop juxtaposing a retro-futuristic interior with a hyper-realistic arctic landscape.",
    challenge: "Creating a seamless, high-fidelity vertical video loop using AI generation.", 
    solution: "Leveraging temporal consistency to build a calming, immersive window-scape perfect for social media storytelling.",
    credits: [
        { role: "Model", name: "Google Veo" },
        { role: "Concept", name: "Pair to Pair" }
    ],
    gallery: []
  },

  // ========================================================
  // 案例: Instagram Reel
  // ========================================================
  {
    id: 99, 
    title: "INSTAGRAM REEL VISUALS", 
    category: "Social",         
    client: "Personal Work", 
    orientation: "portrait", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", 
    description: "Exploring the boundaries of vertical storytelling. This project focuses on high-energy editing tailored for social media algorithms.",
    challenge: "Adapting cinematic quality to a vertical mobile format.", 
    solution: "Fast-paced visual rhythm synchronized with auditory cues.",
    credits: [
        { role: "Director", name: "Pair to Pair" },
        { role: "Editor", name: "Studio Team" }
    ],
    gallery: []
  },

  // ========================================================
  // 案例: Fashion Film Campaign
  // ========================================================
  {
    id: 1,
    title: "FASHION FILM CAMPAIGN", 
    category: "Fashion",         
    client: "Vogue Demo", 
    orientation: "landscape", 
    year: "2024",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    description: "A demonstration of using YouTube hosting for longer form content. This saves bandwidth while maintaining 4K quality capabilities.",
    challenge: "Distributing high-bitrate 4K content globally without high server costs.", 
    solution: "Utilizing external streaming infrastructure integrated seamlessly into the portfolio UI.",
    credits: [
        { role: "Executive Producer", name: "Alex Morgan" },
        { role: "Director", name: "Chloe Zhang" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
    ]
  },

  // ========================================================
  // 案例: Portrait Mode Demo
  // ========================================================
  {
    id: 2,
    title: "PORTRAIT MODE DEMO",
    category: "Social",
    client: "Editorial",
    orientation: "portrait", 
    year: "2023",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    description: "This is a standard project using portrait photography, perfect for social media campaigns.",
    challenge: "Capturing the essence in a vertical frame.",
    solution: "High-contrast editorial photography tailored for mobile screens.",
    credits: [
        { role: "Agency", name: "Pair to Pair Studio" }
    ],
    gallery: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563784462386-044fd95e9852?q=80&w=1974&auto=format&fit=crop"
    ]
  },

  // ========================================================
  // 案例: Cinematic City
  // ========================================================
  {
    id: 3,
    title: "CINEMATIC CITY",
    category: "Commercial",
    client: "City Tourism",
    orientation: "landscape", 
    year: "2023",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2098&auto=format&fit=crop",
    description: "Capturing the soul of the city at night.",
    challenge: "Low light conditions.",
    solution: "Using high-dynamic range cinema cameras.",
    credits: [
        { role: "Director", name: "John Doe" }
    ],
    gallery: []
  }
];