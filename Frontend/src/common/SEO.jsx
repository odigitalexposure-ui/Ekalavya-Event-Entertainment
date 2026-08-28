import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_DOMAIN = "https://www.ekalavyaevententertainment.com";
const DEFAULT_TITLE = "Ekalavya Event & Entertainment | Best Event Management Company in Kolkata & Howrah";
const DEFAULT_DESC = "Premier event planning company in Kolkata & Howrah specializing in destination weddings, corporate events, decor & production, venue management, hospitality & celebrity coordination.";
const DEFAULT_KEYWORDS = "Event management company in Kolkata, Best event planner Howrah, Destination wedding planner Kolkata, Corporate event organizer, Event decor production, Ekalavya Event Entertainment";
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/logo.png`;

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  jsonLd,
}) {
  const location = useLocation();
  const currentCanonicalUrl = `${DEFAULT_DOMAIN}${canonicalPath || location.pathname}`;

  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper function to update or create meta tags
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to update or create link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');
    setMetaTag('meta[name="author"]', 'name', 'author', 'Ekalavya Event & Entertainment');

    // 3. Canonical Link
    setLinkTag('canonical', currentCanonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentCanonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Ekalavya Event & Entertainment');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 6. JSON-LD Schema Markup
    let scriptElement = document.querySelector('script[id="json-ld-seo"]');
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('id', 'json-ld-seo');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, keywords, currentCanonicalUrl, ogImage, ogType, jsonLd]);

  return null;
}
