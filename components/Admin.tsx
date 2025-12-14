import React, { useState } from 'react';
import { Copy, Check, Terminal, Plus, Image as ImageIcon, Layout } from 'lucide-react';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'PROJECT' | 'SERVICE'>('PROJECT');

  // Project Form State
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 1000), // Random ID suggestion
    title: '',
    client: '',
    category: 'Fashion',
    orientation: 'landscape',
    year: new Date().getFullYear().toString(),
    image: '',
    description: '',
    problem: '',
    solution: '',
    result: '',
    creditsRole1: 'Director',
    creditsName1: '',
    creditsRole2: 'Photographer',
    creditsName2: '',
    gallery1: '',
    gallery2: ''
  });

  const [copied, setCopied] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'p2p2024') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Generate the formatted code string
  const generateCode = () => {
    return `  {
    id: ${formData.id},
    title: "${formData.title}",
    category: "${formData.category}",
    orientation: "${formData.orientation}",
    client: "${formData.client}",
    year: "${formData.year}",
    image: "${formData.image}",
    description: "${formData.description}",
    problem: "${formData.problem}",
    solution: "${formData.solution}",
    result: "${formData.result}",
    credits: [
        { role: "${formData.creditsRole1}", name: "${formData.creditsName1}" },
        { role: "${formData.creditsRole2}", name: "${formData.creditsName2}" }
    ],
    gallery: [
        "${formData.gallery1}",
        "${formData.gallery2}"
    ]
  },`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-p2p-black flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white/5 border border-white/10 p-12 text-center">
          <h2 className="text-2xl font-serif text-white mb-6">Studio Internal</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-white/20 p-3 text-white focus:border-p2p-accent outline-none text-center tracking-widest"
              placeholder="ENTER PASSWORD"
            />
            <button className="w-full bg-white text-black py-3 uppercase tracking-widest text-xs font-bold hover:bg-p2p-accent hover:text-white transition-all">
              Access
            </button>
            <p className="text-xs text-gray-600 mt-4">Default: p2p2024</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-p2p-black pt-32 pb-24 text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-serif">Content Manager</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('PROJECT')}
              className={`text-xs uppercase tracking-widest px-4 py-2 ${activeTab === 'PROJECT' ? 'bg-white text-black' : 'border border-white/20 text-gray-400'}`}
            >
              New Project
            </button>
            <button 
              disabled
              className="text-xs uppercase tracking-widest px-4 py-2 border border-white/10 text-gray-600 cursor-not-allowed"
            >
              New Service (Soon)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Side */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/5 p-8 border border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-p2p-accent mb-6 flex items-center gap-2">
                <Plus size={16} /> Project Details
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase">Project Title</label>
                  <input name="title" value={formData.title} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none" placeholder="e.g. Urban Silence" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase">Client</label>
                  <input name="client" value={formData.client} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none" placeholder="e.g. Theory" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none">
                    <option value="Fashion">Fashion</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Social">Social</option>
                    <option value="Event">Event</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase flex items-center gap-2">
                    <Layout size={12} /> Orientation
                  </label>
                  <select name="orientation" value={formData.orientation} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none text-p2p-accent">
                    <option value="landscape">Landscape (16:9)</option>
                    <option value="portrait">Portrait (3:4)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase flex items-center gap-2">
                    <ImageIcon size={14} /> Main Media URL
                  </label>
                  <input name="image" value={formData.image} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none" placeholder="https://..." />
                </div>
                
                <div>
                  <label className="block text-xs text-gray-500 mb-2 uppercase">Short Description (Summary)</label>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none h-20" placeholder="One sentence summary..." />
                </div>

                <div className="space-y-4">
                   <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase text-p2p-accent">The Problem (Background)</label>
                    <textarea name="problem" value={formData.problem} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none h-24" placeholder="What was the client's pain point?" />
                   </div>
                   <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase text-p2p-accent">The Solution (Strategy/Lighting/Tone)</label>
                    <textarea name="solution" value={formData.solution} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none h-24" placeholder="How did you solve it?" />
                   </div>
                   <div>
                    <label className="block text-xs text-gray-500 mb-2 uppercase text-p2p-accent">The Result (ROI/Outcome)</label>
                    <textarea name="result" value={formData.result} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-3 text-sm focus:border-white outline-none h-24" placeholder="What happened after?" />
                   </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <label className="block text-xs text-p2p-accent mb-4 uppercase">Team Credits</label>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <input name="creditsRole1" value={formData.creditsRole1} onChange={handleInputChange} className="bg-black border border-white/20 p-2 text-xs" placeholder="Role 1" />
                    <input name="creditsName1" value={formData.creditsName1} onChange={handleInputChange} className="bg-black border border-white/20 p-2 text-xs" placeholder="Name 1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input name="creditsRole2" value={formData.creditsRole2} onChange={handleInputChange} className="bg-black border border-white/20 p-2 text-xs" placeholder="Role 2" />
                    <input name="creditsName2" value={formData.creditsName2} onChange={handleInputChange} className="bg-black border border-white/20 p-2 text-xs" placeholder="Name 2" />
                  </div>
                </div>
                 
                <div className="border-t border-white/10 pt-6">
                  <label className="block text-xs text-p2p-accent mb-4 uppercase">Gallery Media</label>
                  <div className="space-y-2">
                    <input name="gallery1" value={formData.gallery1} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-2 text-xs" placeholder="Gallery URL 1" />
                    <input name="gallery2" value={formData.gallery2} onChange={handleInputChange} className="w-full bg-black border border-white/20 p-2 text-xs" placeholder="Gallery URL 2" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Code Output Side */}
          <div className="relative group">
            <div className="sticky top-32">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2">
                  <Terminal size={16} /> Generated Code
                </h3>
                <span className="text-[10px] text-gray-600">data/projects.ts</span>
              </div>
              
              <div className="bg-gray-900 rounded-md overflow-hidden border border-white/10 shadow-2xl relative">
                <div className="absolute top-4 right-4 z-10">
                   <button 
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded ${copied ? 'bg-green-500 text-black' : 'bg-white text-black hover:bg-gray-200'}`}
                   >
                     {copied ? <Check size={14} /> : <Copy size={14} />}
                     {copied ? 'Copied!' : 'Copy Code'}
                   </button>
                </div>

                <div className="p-6 overflow-x-auto">
                  <pre className="font-mono text-xs md:text-sm text-green-400 leading-relaxed whitespace-pre-wrap">
                    {generateCode()}
                  </pre>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/5 border border-white/10 text-gray-400 text-sm leading-relaxed">
                <p className="font-bold text-white mb-2">Instructions:</p>
                <ol className="list-decimal pl-4 space-y-2">
                  <li>Fill out the form on the left.</li>
                  <li>Click <strong>Copy Code</strong> above.</li>
                  <li>Go to your GitHub repository.</li>
                  <li>Open <code>data/projects.ts</code>.</li>
                  <li>Paste this code at the bottom.</li>
                </ol>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};