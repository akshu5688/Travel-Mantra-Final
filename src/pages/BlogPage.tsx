import { Link } from 'react-router-dom';

import PageBanner from '../components/PageBanner';

import { blogPosts } from '../data/content';



export default function BlogPage() {

  return (

    <>

      <PageBanner

        label="Blog"

        title="Travel Guides & Blogs"

        subtitle="Travel tips, destination guides, and tour package insights from our team."

      />

      <section className="py-14 sm:py-20 bg-[#FAFAFA]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {blogPosts.map((post) => (

              <article key={post.slug} className="card-equal flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors">

                <div className="aspect-[3/2] overflow-hidden shrink-0">

                  <img src={post.image} alt={post.alt} className="img-cover w-full h-full" loading="lazy" />

                </div>

                <div className="flex flex-col flex-1 p-6">

                  <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-wider">{post.date}</p>

                  <h3 className="text-card-title font-semibold text-[#1f2a1d] mt-2">{post.title}</h3>

                  <p className="text-sm text-[#4b5b47] mt-2 flex-1 leading-relaxed">{post.excerpt}</p>

                  <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-sm font-semibold text-[#336443] min-h-[44px] flex items-center">

                    Read More →

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </>

  );

}


