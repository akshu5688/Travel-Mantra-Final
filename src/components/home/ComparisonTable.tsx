import SectionHeader from '../SectionHeader';
import { destinationComparison } from '../../data/content';

export default function ComparisonTable() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Compare"
          title="Compare Top Destinations"
          subtitle="Quick facts to help you choose the perfect Central Asia journey."
        />

        <div className="hidden md:block overflow-x-auto rounded-2xl border border-[#E5E5E5] bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1f2a1d] text-white">
                <th className="text-left px-5 py-4 font-semibold">Destination</th>
                <th className="text-left px-5 py-4 font-semibold">Duration</th>
                <th className="text-left px-5 py-4 font-semibold">Starting Price</th>
                <th className="text-left px-5 py-4 font-semibold">Visa</th>
              </tr>
            </thead>
            <tbody>
              {destinationComparison.map((row, i) => (
                <tr key={row.destination} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                  <td className="px-5 py-4 font-medium text-[#1f2a1d]">{row.destination}</td>
                  <td className="px-5 py-4 text-[#4b5b47]">{row.duration}</td>
                  <td className="px-5 py-4 text-[#336443] font-semibold">{row.price}</td>
                  <td className="px-5 py-4 text-[#4b5b47]">{row.visa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-4">
          {destinationComparison.map((row) => (
            <div key={row.destination} className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-[#1f2a1d]">{row.destination}</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4b5b47]">Duration</dt>
                  <dd className="font-medium text-[#1f2a1d]">{row.duration}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4b5b47]">Starting Price</dt>
                  <dd className="font-semibold text-[#336443]">{row.price}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#4b5b47]">Visa</dt>
                  <dd className="font-medium text-[#1f2a1d]">{row.visa}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
