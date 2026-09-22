import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollExperience() {
  if (typeof window === 'undefined') return;

  // 1. Scroll Progress Bar (Top Edge - instantaneous native tracking)
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }

  // 3. Hero Section Parallax & Fade-out on Scroll
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    // Parallax background drift
    const heroSlides = heroSection.querySelectorAll('.hero-bg-parallax');
    if (heroSlides.length > 0) {
      gsap.to(heroSlides, {
        yPercent: 25,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Hero main content fade & drift
    const heroContent = heroSection.querySelector('.hero-content-anim');
    if (heroContent) {
      gsap.to(heroContent, {
        y: -50,
        opacity: 0,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }
  }

  // 4. Section Title & Header Animations
  const sectionHeaders = document.querySelectorAll('.anim-section-header');
  sectionHeaders.forEach((header) => {
    const subtitle = header.querySelector('.anim-subtitle');
    const titleEn = header.querySelector('.anim-title-en');
    const titleJa = header.querySelector('.anim-title-ja');
    const line = header.querySelector('.anim-gold-line');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    if (subtitle) {
      tl.fromTo(
        subtitle,
        { opacity: 0, y: 15, letterSpacing: '0.4em' },
        { opacity: 1, y: 0, letterSpacing: '0.25em', duration: 0.9, ease: 'power3.out' }
      );
    }

    if (titleEn) {
      tl.fromTo(
        titleEn,
        { opacity: 0, y: 25, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' },
        '-=0.7'
      );
    }

    if (titleJa) {
      tl.fromTo(
        titleJa,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );
    }

    if (line) {
      tl.fromTo(
        line,
        { scaleX: 0, transformOrigin: 'center' },
        { scaleX: 1, duration: 1.1, ease: 'expo.out' },
        '-=0.6'
      );
    }
  });

  // 5. Concept Section Parallax & Reveals
  const conceptSection = document.getElementById('concept');
  if (conceptSection) {
    const mainImg = conceptSection.querySelector('.concept-img-main');
    const subImg = conceptSection.querySelector('.concept-img-sub');
    const badge = conceptSection.querySelector('.concept-badge-anim');

    if (mainImg) {
      gsap.fromTo(
        mainImg,
        { y: 30, scale: 0.96 },
        {
          y: -30,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: conceptSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    if (subImg) {
      gsap.fromTo(
        subImg,
        { y: 50 },
        {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: conceptSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    if (badge) {
      gsap.to(badge, {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: conceptSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Text Stagger Reveal
    const textBlocks = conceptSection.querySelectorAll('.concept-text-anim');
    gsap.fromTo(
      textBlocks,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: conceptSection,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // 6. Product Cards & Specialite Cards Stagger Reveal
  const productGrids = document.querySelectorAll('.anim-card-grid');
  productGrids.forEach((grid) => {
    const cards = grid.querySelectorAll('.anim-card-item');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: {
            amount: 0.45,
            from: 'start',
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  });

  // Card Image Inner Parallax
  const parallaxImages = document.querySelectorAll('.card-img-parallax');
  parallaxImages.forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -6, scale: 1.08 },
      {
        yPercent: 6,
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.overflow-hidden') || img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });

  // 7. Chef Section Mask Reveal & Quote Animation
  const chefSection = document.getElementById('chef');
  if (chefSection) {
    const chefImg = chefSection.querySelector('.chef-img-anim');
    const chefQuote = chefSection.querySelector('.chef-quote-anim');
    const chefText = chefSection.querySelectorAll('.chef-body-anim');

    if (chefImg) {
      gsap.fromTo(
        chefImg,
        { clipPath: 'inset(10% 10% 10% 10%)', opacity: 0, scale: 1.1 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: chefSection,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (chefQuote) {
      gsap.fromTo(
        chefQuote,
        { opacity: 0, y: 25, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: chefQuote,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (chefText.length > 0) {
      gsap.fromTo(
        chefText,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: chefText[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // 8. Store Section (Calendar & Info Cascading)
  const storeSection = document.getElementById('store');
  if (storeSection) {
    const calendarCard = storeSection.querySelector('.store-calendar-anim');
    const infoCard = storeSection.querySelector('.store-info-anim');

    if (calendarCard) {
      gsap.fromTo(
        calendarCard,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storeSection,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (infoCard) {
      gsap.fromTo(
        infoCard,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: storeSection,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // 9. News Section Cards
  const newsSection = document.getElementById('news');
  if (newsSection) {
    const newsCards = newsSection.querySelectorAll('.news-card-anim');
    if (newsCards.length > 0) {
      gsap.fromTo(
        newsCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: newsSection,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }

  // Refresh ScrollTrigger once everything is loaded
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
}
