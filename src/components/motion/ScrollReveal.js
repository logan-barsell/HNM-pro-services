"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { siteHeaderHeights } from "@/theme/layout";

const REVEAL_SELECTOR = "#main-content section";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function forceScrollTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function getHashTarget() {
  const raw = window.location.hash?.replace(/^#/, "");
  if (!raw) {
    return null;
  }

  try {
    return document.getElementById(decodeURIComponent(raw));
  } catch {
    return null;
  }
}

function headerOffsetPx() {
  return window.matchMedia("(min-width: 900px)").matches
    ? siteHeaderHeights.md + 12
    : siteHeaderHeights.xs + 12;
}

function scrollToHashTarget(target) {
  if (!target) {
    forceScrollTop();
    return;
  }

  const top =
    target.getBoundingClientRect().top + window.scrollY - headerOffsetPx();
  window.scrollTo(0, Math.max(0, top));
}

/**
 * Reveals below-the-fold sections as they enter the viewport.
 *
 * On route changes, scroll is forced to the top (or to a hash target) and
 * held briefly before reveals are armed — so Next's scroll timing cannot
 * scrub sections through the viewport and trigger fade-ins.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let cancelled = false;
    let observer;
    let frameId = 0;
    let attempts = 0;

    const clearRevealState = (sections) => {
      sections.forEach((section) => {
        section.removeAttribute("data-reveal");
        section.removeAttribute("data-revealed");
      });
    };

    const armReveals = () => {
      if (cancelled) {
        return;
      }

      const main = document.getElementById("main-content");
      if (!main) {
        return;
      }

      const sections = Array.from(main.querySelectorAll(REVEAL_SELECTOR));
      if (!sections.length || prefersReducedMotion()) {
        return;
      }

      clearRevealState(sections);

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          });
        },
        {
          root: null,
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.12,
        },
      );

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const onScreen = rect.top < window.innerHeight * 0.92;

        if (onScreen) {
          return;
        }

        section.setAttribute("data-reveal", "true");
        observer.observe(section);
      });
    };

    /**
     * Hold scroll at the intended position for a few frames so framework
     * scroll timing cannot leave us mid-page when reveals are measured.
     */
    const settleThenArm = () => {
      if (cancelled) {
        return;
      }

      const hashTarget = getHashTarget();
      scrollToHashTarget(hashTarget);
      attempts += 1;

      const settled = hashTarget
        ? attempts >= 3
        : window.scrollY <= 0 && attempts >= 2;
      const timedOut = attempts >= 20;

      if (settled || timedOut) {
        scrollToHashTarget(getHashTarget());
        armReveals();
        return;
      }

      frameId = window.requestAnimationFrame(settleThenArm);
    };

    scrollToHashTarget(getHashTarget());
    frameId = window.requestAnimationFrame(settleThenArm);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
