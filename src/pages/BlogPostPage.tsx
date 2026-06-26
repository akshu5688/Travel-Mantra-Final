import { useParams, Link, Navigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { blogPosts, type BlogSection } from '../data/blogs';

function SectionBlock({ section }: { section: BlogSection }) {
  const HeadingTag = section.level === 2 ? 'h2' : section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h5';
  const headingClass =
    section.level === 2
      ? 'text-2xl font-semibold text-[#1f2a1d] mt-10 mb-4'
      : section.level === 3
        ? 'text-xl font-semibold text-[#1f2a1d] mt-8 mb-3'
        : 'text-lg font-semibold text-[#1f2a1d] mt-6 mb-2';

  return (
    <div>
      {section.heading ? (
        <HeadingTag className={headingClass}>{section.heading}</HeadingTag>
      ) : null}
      {section.paragraphs.map((paragraph, i) => (
        <p key={i} className="text-body text-[#4b5b47] leading-relaxed mt-4 first:mt-0">
          {paragraph}
        </p>
      ))}
      {section.listItems.length > 0 ? (
        <ul className="list-disc pl-6 mt-4 space-y-2 text-[#4b5b47]">
          {section.listItems.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <PageBanner label="Blog" title={post.title} subtitle={post.date} />
      <article className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[3/2] rounded-2xl overflow-hidden border border-[#E5E5E5] mb-8">
            <img src={post.image} alt={post.alt} className="img-cover w-full h-full" />
          </div>
          <div className="prose-travels-mantra">
            {post.sections.map((section, i) => (
              <SectionBlock key={i} section={section} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-10 pt-8 border-t border-[#E5E5E5]">
            <Link to="/build-your-package" className="btn-secondary text-center min-h-[44px]">
              Get Free Trip Plan
            </Link>
            <Link to="/blog" className="btn-outline text-center min-h-[44px]">
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
