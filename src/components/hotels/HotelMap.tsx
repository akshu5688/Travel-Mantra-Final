import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Hotel } from '../../types/hotel';

type HotelMapProps = {
  hotels: Hotel[];
  center: { lat: number; lng: number };
  userLocation?: { lat: number; lng: number } | null;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  height?: string;
  expanded?: boolean;
};

const markerIcon = L.divIcon({
  className: 'hotel-map-marker',
  html: '<div class="hotel-map-pin"></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

const userIcon = L.divIcon({
  className: 'hotel-map-marker',
  html: '<div class="hotel-map-pin hotel-map-pin--user"></div>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

export default function HotelMap({
  hotels,
  center,
  userLocation,
  selectedId,
  onSelect,
  height = '180px',
  expanded = false,
}: HotelMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: expanded,
      attributionControl: expanded,
    }).setView([center.lat, center.lng], expanded ? 12 : 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: expanded ? '&copy; OpenStreetMap' : '',
    }).addTo(map);

    markersRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = null;
    };
  }, [expanded]);

  useEffect(() => {
    const map = mapRef.current;
    const layer = markersRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    hotels.forEach((hotel) => {
      const marker = L.marker([hotel.lat, hotel.lng], { icon: markerIcon });
      marker.bindPopup(`<strong>${hotel.name}</strong><br/>${formatPrice(hotel.price)}/night`);
      marker.on('click', () => onSelect?.(hotel.id));
      if (selectedId === hotel.id) {
        marker.openPopup();
      }
      layer.addLayer(marker);
    });

    if (userLocation) {
      const userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon });
      userMarker.bindPopup('Your location');
      layer.addLayer(userMarker);
    }

    const points: L.LatLngExpression[] = hotels.map((h) => [h.lat, h.lng]);
    if (userLocation) points.push([userLocation.lat, userLocation.lng]);
    if (points.length > 0) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [24, 24], maxZoom: expanded ? 14 : 12 });
    } else {
      map.setView([center.lat, center.lng], expanded ? 12 : 11);
    }
  }, [hotels, center, userLocation, selectedId, onSelect, expanded]);

  return (
    <div
      ref={containerRef}
      className="hotel-map-container w-full rounded-xl overflow-hidden"
      style={{ height: expanded ? 'min(70vh, 520px)' : height }}
    />
  );
}

function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
