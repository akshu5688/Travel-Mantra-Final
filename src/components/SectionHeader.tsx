type SectionHeaderProps = {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
};

export default function SectionHeader({ label, title, subtitle, dark }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">{label}</p>
      <h2 className={`text-section-title font-semibold ${dark ? 'text-white' : 'text-[#336443]'}`}>{title}</h2>
      {subtitle && <p className={`text-body mt-4 ${dark ? 'text-white/75' : 'text-[#4b5b47]'}`}>{subtitle}</p>}
      <div className="h-px max-w-xs mx-auto mt-6 bg-gradient-to-r from-transparent via-[#85AB8B]/70 to-transparent" />
    </div>
  );
}
