import { Link } from 'react-router-dom';

type PackageCardProps = {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
  inclusions: string[];
  href?: string;
};

export default function PackageCard({ title, subtitle, duration, price, image, alt, inclusions, href = '/contact-us' }: PackageCardProps) {
  return (
    <article className="card-equal flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-lg transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden shrink-0">
        <img src={image} alt={alt} className="img-cover w-full h-full" loading="lazy" />
      </div>
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="text-card-title font-semibold text-[#1f2a1d] leading-snug">
          {title}
          {subtitle && <span className="block text-sm font-normal text-[#4b5b47] mt-0.5">{subtitle}</span>}
        </h3>
        <p className="text-sm text-[#4b5b47] mt-1.5">{duration}</p>
        <p className="text-[#336443] font-semibold text-lg mt-2">{price === 'ON REQUEST' ? 'ON REQUEST' : `From ${price}`}</p>
        <div className="flex flex-wrap gap-1.5 mt-3 flex-1 content-start">
          {inclusions.map((badge) => (
            <span key={badge} className="text-[10px] font-semibold uppercase tracking-wide text-[#336443] bg-[#85AB8B]/15 px-2 py-1 rounded">
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-4 border-t border-[#E5E5E5]">
          <Link to={href} className="btn-primary flex-1 text-center min-h-[44px]">
            View Package
          </Link>
          <Link to="/" state={{ scrollToEnquiry: true }} className="btn-outline flex-1 text-center min-h-[44px]">
            Send Enquiry
          </Link>
        </div>
      </div>
    </article>
  );
}

