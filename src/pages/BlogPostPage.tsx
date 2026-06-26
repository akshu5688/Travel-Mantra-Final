import { useParams, Link, Navigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogPosts } from '../data/content';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <PageBanner label="Blog" title={post.title} subtitle={post.date} />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[3/2] rounded-2xl overflow-hidden border border-[#E5E5E5] mb-8">
            <img src={post.image} alt={post.alt} className="img-cover w-full h-full" />
          </div>
          <p className="text-body text-[#4b5b47] leading-relaxed">{post.excerpt}</p>
          <p className="text-body text-[#4b5b47] leading-relaxed mt-4">
            Travels Mantra&apos;s Central Asia specialists can help you plan visa, flights, hotels, and sightseeing for your next trip.
            Contact our team for a customized itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Link to="/" state={{ scrollToEnquiry: true }} className="btn-secondary text-center min-h-[44px]">
              Get Free Trip Plan
            </Link>
            <Link to="/blog" className="btn-outline text-center min-h-[44px]">
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
