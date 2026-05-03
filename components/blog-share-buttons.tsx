"use client";

import { useState, useEffect } from "react";
import { Check, Copy, Share2, Twitter, Linkedin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface BlogShareButtonsProps {
  url: string;
  title: string;
  className?: string;
  variant?: "ghost" | "outline" | "secondary";
  size?: "sm" | "icon" | "default";
  showLabel?: boolean;
}

export function BlogShareButtons({ 
  url, 
  title, 
  className, 
  variant = "outline", 
  size = "sm",
  showLabel = true 
}: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanShare(true);
    }
  }, []);

  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy link");
    }
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: title,
        url: fullUrl,
      });
    } catch (err) {
      // User cancelled share or it failed, ignore
      if (err instanceof Error && err.name !== "AbortError") {
        console.error("Error sharing", err);
      }
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + fullUrl)}`,
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant={variant}
        size={size}
        onClick={handleCopy}
        className="rounded-full gap-2 transition-all active:scale-95"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {showLabel && <span>{copied ? "Copied" : "Copy"}</span>}
      </Button>

      {canShare ? (
        <Button
          variant={variant}
          size={size}
          onClick={handleNativeShare}
          className="rounded-full gap-2 transition-all active:scale-95"
        >
          <Share2 className="h-4 w-4" />
          {showLabel && <span>Share</span>}
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger 
            className={cn(
              buttonVariants({ variant, size }), 
              "rounded-full gap-2 transition-all active:scale-95 cursor-pointer inline-flex items-center"
            )}
          >
            <Share2 className="h-4 w-4" />
            {showLabel && <span>Share</span>}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 rounded-xl border-border/50 backdrop-blur-xl">
            <DropdownMenuItem className="cursor-pointer gap-2 py-2.5" onClick={() => window.open(shareLinks.twitter, "_blank")}>
              <Twitter className="h-4 w-4" />
              <span>Twitter / X</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-2 py-2.5" onClick={() => window.open(shareLinks.linkedin, "_blank")}>
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer gap-2 py-2.5" onClick={() => window.open(shareLinks.whatsapp, "_blank")}>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}
