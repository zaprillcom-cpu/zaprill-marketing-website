"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  className?: string;
  markerTitle?: string;
}

const MAP_STYLES = {
  light: "https://tiles.basemaps.cartocdn.com/gl/positron-gl-style/style.json",
  dark: "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
} as const;

export function Map({
  latitude,
  longitude,
  zoom = 12,
  className,
  markerTitle = "Zaprill Office"
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const { resolvedTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: MAP_STYLES[currentTheme],
      center: [longitude, latitude],
      zoom: zoom,
      attributionControl: false
    });

    map.current.on("load", () => {
      setIsLoaded(true);
      
      // Add a marker
      if (map.current) {
        const popupLabel = document.createElement("h3");
        popupLabel.textContent = markerTitle;

        new maplibregl.Marker({ color: "#b9442d" })
          .setLngLat([longitude, latitude])
          .setPopup(
            new maplibregl.Popup({ offset: 25 }).setDOMContent(popupLabel),
          )
          .addTo(map.current);
      }
    });

    // Add navigation controls
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [latitude, longitude, zoom, markerTitle, resolvedTheme]);

  // Update style when theme changes
  useEffect(() => {
    if (!map.current || !isLoaded) return;
    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
    map.current.setStyle(MAP_STYLES[currentTheme]);
  }, [resolvedTheme, isLoaded]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-muted", className)}>
      <div
        ref={mapContainer}
        className="h-full w-full"
        aria-label={`Map showing ${markerTitle}`}
      />
      {!isLoaded ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-muted"
          role="status"
          aria-label="Loading map"
        >
          <div className="size-7 animate-spin rounded-full border-2 border-signal border-t-transparent" />
        </div>
      ) : null}
    </div>
  );
}
