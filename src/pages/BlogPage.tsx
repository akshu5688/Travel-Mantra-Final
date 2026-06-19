import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogPosts } from '../data/content';

export default function BlogPage() {
  return (
    <>
      <PageBanner label="Blog" title="Travel tips & guides" subtitle="Expert advice for planning your next international holiday." />
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <article key={post.title} className="card-equal p-6 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors">
                <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-wider">{post.date}</p>
                <h3 className="text-card-title font-semibold text-[#1f2a1d] mt-2">{post.title}</h3>
                <p className="text-sm text-[#4b5b47] mt-2 flex-1 leading-relaxed">{post.excerpt}</p>
                <Link to="/contact" className="inline-block mt-4 text-sm font-semibold text-[#336443]">Read More →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
