type PageBannerProps = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function PageBanner({ label, title, subtitle }: PageBannerProps) {
  return (
    <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 bg-[#1f2a1d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">{label}</p>
        <h1 className="text-section-title font-semibold text-white">{title}</h1>
        {subtitle && <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
