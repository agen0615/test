import { Project } from '../types';

export const projects: Project[] = [
  // ========================================================
  // 案例: MINUS COSMETICS (Social Case)
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
    description: "A digital-first campaign focusing on the concept of subtraction in beauty routines.",
    problem: "Minus Cosmetics was a new market entrant. The client faced a saturated 'clean beauty' market where every brand looked identical (pastel backgrounds, minimal fonts). They needed a visual identity that felt 'scientific' yet 'organic' to justify a higher price point, but their existing assets were too flat and failed to show texture.",
    solution: "We chose a macro-lens approach with hard, direct lighting to emphasize the physical texture of the cream, proving its density and quality. Instead of the usual soft pastel grading, we pushed for high contrast and deep shadows to create a 'lab-chic' aesthetic. The editing rhythm was synchronized to a heartbeat sound design to stop the scroll on TikTok/Instagram.",
    result: "The campaign established a distinct 'clinical-luxury' visual ID. The hero video achieved a 35% higher retention rate than the industry average on Instagram Reels, directly contributing to their sold-out launch week.",
    credits: [
        { role: "Art Direction", name: "Pair to Pair" },
        { role: "Motion", name: "Studio Team" }
    ],
    gallery: [
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
    description: "A high-contrast editorial campaign exploring the relationship between garment and urban environment.",
    problem: "The designer needed a lookbook for Paris Fashion Week buyers but had a limited budget for set design. The previous season's photos looked too 'commercial catalog' and lacked the high-fashion edge required to get into boutique retailers.",
    solution: "We utilized natural sunlight and architectural shadows as our primary set design, costing $0 but adding immense depth. We cast a model with angular features to mirror the city architecture. The color grading desaturated the environment while boosting the contrast of the garment's black fabrics to ensure the texture wasn't lost in the shadows.",
    result: "The imagery was selected for the 'New Talent' feature on Hypebae. The designer secured orders from three major multi-brand boutiques in Tokyo and NY, citing the 'strong visual identity' as a key factor.",
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
    description: "An energetic campaign connecting the gritty street courts of New York with the global fanbase.",
    problem: "The client wanted to engage Gen-Z fans in Asia who felt disconnected from the polished, TV-broadcast version of the NBA. They needed content that felt 'authentic' and 'underground' rather than corporate.",
    solution: "We abandoned tripods and steady-cams for 16mm-style handheld shooting to mimic the viewer's eye on the court. We cast real streetball players, not actors, to capture genuine movement. The color grading leaned into warm, sodium-vapor tones to evoke the feeling of playing at night in the city.",
    result: "The campaign became the highest-shared social asset for the NBA regional accounts in Q2 2024. Comments praised the 'real NYC vibe,' successfully bridging the cultural gap between the US league and international street culture.",
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
    description: "Documenting the journey of traditional medicine crossing borders to reach a global audience.",
    problem: "Traditional Chinese Medicine (TCM) often suffers from an outdated visual perception in global markets. JD Health needed to show that their supply chain is modern, fast, and high-tech, without losing the cultural heritage.",
    solution: "We juxtaposed slow-motion shots of traditional herbal preparation with fast-paced hyper-lapses of modern logistics (planes, sorting centers). We used a clean, cool-toned lighting setup for the logistics scenes to convey trust and hygiene, contrasting with warm, earthy tones for the product origins. This visual duality solved the 'Old vs. New' conflict.",
    result: "The video was used at key international trade expos. It successfully repositioned the brand's export division as a modern logistics player, helping secure partnerships with two major European distributors.",
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
    description: "A cinematic visual campaign blending traditional symbolism with contemporary motion aesthetics.",
    problem: "The product (a wealth-themed accessory) risked looking tacky or superstitious. The client needed to elevate the concept of 'Fortune' to appeal to a younger, fashion-forward demographic who usually rejects traditional charms.",
    solution: "We treated the product like a high-end jewelry piece. Instead of red and gold overload, we used deep emeralds and spot-lighting to create mystery. We used fluid motion control to visualize 'growth' and 'flow' rather than static wealth symbols. The music was a modern ambient track, removing any traditional folk connotations.",
    result: "The campaign successfully shifted the brand perception from 'souvenir' to 'fashion accessory'. The video garnered over 1M views on Xiaohongshu, with users specifically commenting on the 'premium aesthetic' (高级感).",
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
    description: "A generative visual experiment juxtaposing retro-futurism with hyper-realistic landscapes.",
    problem: "Demonstrating the capability of the new Google Veo model to create high-resolution, coherent vertical video loops for digital signage without expensive 3D rendering costs.",
    solution: "We used specific prompting strategies to lock the camera perspective (the window frame) while generating complex particle effects outside (the snow/arctic). This proved that AI could generate commercially viable 'ambient' content that loops perfectly, replacing traditional stock footage.",
    result: "Served as a proof-of-concept for a digital signage client, reducing their content production timeline from 2 weeks (3D render) to 4 hours (AI generation + Upscaling).",
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
    description: "Exploring the boundaries of vertical storytelling.",
    problem: "Most cinematic content gets cropped awkwardly on mobile. We wanted to prove that you can shoot wide-screen cinematic compositions that are native to the 9:16 vertical frame.",
    solution: "We utilized split-screen layouts and vertical leading lines in our composition. We color-graded for maximum brightness on OLED phone screens.",
    result: "The template created from this project has been adopted for 3 client social accounts.",
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
    description: "A demonstration of using YouTube hosting for longer form content.",
    problem: "The client needed a high-res 4K archive of their runway show accessible globally without buffering issues on their portfolio site.",
    solution: "We integrated a custom YouTube player wrapper that removes distractions, allowing for adaptive bitrate streaming. We shot with cinema lenses to give the digital stream a 'film' look.",
    result: "Zero buffering complaints during the launch event and 4K capability enabled for press outlets.",
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
    description: "Standard project using portrait photography.",
    problem: "Showcasing detail in a mobile-first environment.",
    solution: "Vertical composition with shallow depth of field to guide the eye.",
    result: "High engagement on mobile platforms.",
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
    problem: "Night footage often looks grainy or dark on web compression.",
    solution: "Used Sony A7SIII with fast prime lenses (f1.2) to capture clean low light.",
    result: "Crisp, noise-free night footage that promotes night tourism.",
    credits: [
        { role: "Director", name: "John Doe" }
    ],
    gallery: []
  }
];