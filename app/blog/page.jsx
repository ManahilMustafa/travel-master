import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Backpacking in Southeast Asia',
    excerpt: 'Discover the best routes, budget tips, and hidden gems for backpacking across Thailand, Vietnam, and Cambodia.',
    author: 'Sarah Johnson',
    date: 'March 1, 2025',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: '7 Best Destinations for Solo Travelers',
    excerpt: 'Explore seven incredible destinations that are perfect for solo adventurers seeking safety, culture, and unforgettable experiences.',
    author: 'Michael Chen',
    date: 'February 28, 2025',
    category: 'Destinations',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Travel Photography Tips: Capture Your Best Moments',
    excerpt: 'Learn professional photography techniques to capture stunning travel photos without expensive equipment.',
    author: 'Emma Williams',
    date: 'February 25, 2025',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Sustainable Travel: Making a Positive Impact',
    excerpt: 'Learn how to travel responsibly and make positive contributions to the communities and environments you visit.',
    author: 'David Martinez',
    date: 'February 20, 2025',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'Luxury vs Budget Travel: Finding Your Sweet Spot',
    excerpt: 'Explore the pros and cons of different travel styles and find the approach that works best for you.',
    author: 'Sarah Johnson',
    date: 'February 15, 2025',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1512453475868-c21d88b1a57f?w=600&q=80',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'Winter Travel Destinations: Chase the Snow',
    excerpt: 'Discover magical winter destinations with stunning snow landscapes and exciting cold-weather activities.',
    author: 'Michael Chen',
    date: 'February 10, 2025',
    category: 'Destinations',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    readTime: '6 min read',
  },
]

export default function BlogPage() {
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-1 text-foreground mb-4">Travel Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Stories, tips, and inspiration from our team of travel experts. Learn how to travel smarter, safer, and more sustainably.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                  {blogPosts[0].category}
                </div>
                <h2 className="heading-2 text-foreground mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 text-lg mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`} className="btn-primary w-fit flex items-center gap-2">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2 text-foreground mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-600">{post.readTime}</span>
                  </div>

                  <h3 className="heading-3 text-foreground mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>{post.author}</span>
                    </div>
                    <span>{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-white mb-4">Never Miss a Travel Story</h2>
          <p className="text-white/90 text-lg mb-8">
            Subscribe to our blog and get weekly travel tips, destination guides, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button type="submit" className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
