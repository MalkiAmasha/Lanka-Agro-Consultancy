const blogPosts = [
  {
    id: 1,
    title: "Best Crops for Urban Gardening in Sri Lanka",
    description:
      "Discover the most suitable crops for urban farming in Sri Lankan climate conditions, including space-efficient varieties and seasonal considerations.",
    readTime: "8 min read",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z",
  },
  {
    id: 2,
    title: "How to Transition to Organic Farming",
    description:
      "A comprehensive guide to converting conventional farms to organic systems, including certification requirements and transition strategies.",
    readTime: "12 min read",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707",
  },
  {
    id: 3,
    title: "Hydroponics vs Traditional Soil Farming",
    description:
      "Compare the benefits and challenges of hydroponic systems versus traditional soil-based farming for different crop types.",
    readTime: "10 min read",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 4,
    title: "Sustainable Livestock Management Practices",
    description:
      "Learn about eco-friendly livestock management techniques that improve animal welfare while reducing environmental impact.",
    readTime: "9 min read",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    id: 5,
    title: "Organic Certification: A Step-by-Step Guide",
    description:
      "Navigate the organic certification process with our detailed guide covering documentation, audits, and compliance requirements.",
    readTime: "15 min read",
    level: "Professional",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 6,
    title: "Climate-Smart Agriculture in Sri Lanka",
    description:
      "Explore climate-resilient farming techniques and adaptation strategies for Sri Lankan agricultural conditions.",
    readTime: "11 min read",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 7,
    title: "Integrated Pest Management for Organic Farms",
    description:
      "Learn natural pest control methods and integrated approaches to maintain healthy crops without chemical pesticides.",
    readTime: "13 min read",
    level: "Intermediate",
    image: "/images/integrated-pest-management.png",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    id: 8,
    title: "Building Profitable Agribusiness Models",
    description:
      "Strategies for developing sustainable and profitable agricultural businesses in the modern market landscape.",
    readTime: "14 min read",
    level: "Professional",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=200&fit=crop&crop=center&auto=format",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: 9,
    title: "Women in Agriculture: Empowerment Strategies",
    description:
      "Explore initiatives and strategies to support and empower women in agricultural sectors across Sri Lanka.",
    readTime: "10 min read",
    level: "Social Impact",
    image: "/images/women-in-agriculture.png",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
]

export default function BlogPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Hub & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, practical guides, and the latest trends in sustainable agriculture. Stay informed with our
            comprehensive resource library.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      post.level === "Beginner"
                        ? "bg-green-100/90 text-green-800"
                        : post.level === "Intermediate"
                          ? "bg-blue-100/90 text-blue-800"
                          : post.level === "Advanced"
                            ? "bg-purple-100/90 text-purple-800"
                            : post.level === "Professional"
                              ? "bg-orange-100/90 text-orange-800"
                              : "bg-pink-100/90 text-pink-800"
                    }`}
                  >
                    {post.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="text-sm font-medium">Read More</span>
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Article Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
              <h3 className="text-xl font-semibold mb-3">Sustainable Agriculture: The Future of Farming</h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                Discover how sustainable farming practices are revolutionizing agriculture worldwide. Learn about
                innovative techniques that protect the environment while maximizing productivity.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Read Full Article
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop&crop=center&auto=format"
                alt="Sustainable Agriculture"
                className="rounded-lg shadow-lg"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Agricultural Insights</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Subscribe to our newsletter for the latest insights in sustainable agriculture, farming innovations, and
              expert tips delivered directly to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">✓ Weekly insights ✓ Expert tips ✓ No spam, unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </div>
  )
}
