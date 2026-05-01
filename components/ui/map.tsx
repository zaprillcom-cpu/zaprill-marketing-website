"use client";

import React, { useEffect, useRef, useState } from "react";
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

export function Map({
  latitude,
  longitude,
  zoom = 12,
  className,
  markerTitle = "Zaprill Office"
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const { theme, resolvedTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // Style URLs for MapLibre (CartoDB Positron for light, Dark Matter for dark)
  const styles = {
    light: "https://tiles.basemaps.cartocdn.com/gl/positron-gl-style/style.json",
    dark: "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
  };

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: styles[currentTheme],
      center: [longitude, latitude],
      zoom: zoom,
      attributionControl: false
    });

    map.current.on("load", () => {
      setIsLoaded(true);
      
      // Add a marker
      if (map.current) {
        new maplibregl.Marker({ color: "hsl(var(--primary))" })
          .setLngLat([longitude, latitude])
          .setPopup(new maplibregl.Popup({ offset: 25 }).setHTML(`<h3>${markerTitle}</h3>`))
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
    map.current.setStyle(styles[currentTheme]);
  }, [resolvedTheme, isLoaded]);

  return (
    <div className={cn("relative w-full h-full rounded-xl overflow-hidden border border-border shadow-md", className)}>
      <div ref={mapContainer} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-[2px]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  );
}
