import { Navigate, useSearchParams } from 'react-router-dom';

/** Hotel search lives on the shared search page (Hotels tab). */
export default function HotelsPage() {
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.set('tab', 'hotels');
  return <Navigate to={`/search?${params.toString()}`} replace />;
}
