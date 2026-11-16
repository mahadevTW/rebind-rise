(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  const isHome = page === "index.html" || page === "";
  const home = "/index.html";
  document.body.classList.add("rr-site");
  document.body.dataset.page = page.replace(".html", "");

  const icon = (name) => {
    const paths = {
      home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
      about: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
      courses: '<path d="m3 7 9-4 9 4-9 4-9-4Z"/><path d="M7 9.2v5.3c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.2"/><path d="M21 7v7"/>',
      ai: '<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
      code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
      career: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/>',
      events: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
      stories: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/>',
      contact: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
      chevron: '<path d="m9 18 6-6-6-6"/>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8h.01M12 16v-5M12 13c.8-2 4-2.2 4 1v2"/>',
      instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
      facebook: '<path d="M15 3h-2a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2Z"/>',
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.arrow}</svg>`;
  };

  const href = (hash) => isHome ? hash : home + hash;
  const currentCourse = page === "ai-engineering-course.html" || page === "java-full-stack-course.html";
  const topbar = document.createElement("header");
  topbar.className = "rr-topbar";
  topbar.innerHTML = `
    <div class="rr-nav-shell">
      <a class="rr-nav-brand" href="${home}" aria-label="Rebind Rise home">
        <img src="/assets/main_logo.png" alt="Rebind Rise — Learn. Build. Lead with AI.">
      </a>
      <nav class="rr-primary-nav" aria-label="Primary navigation">
        <a data-nav="hero" href="${href("#hero")}"><span>Home</span></a>
        <a data-nav="build" href="${href("#build")}"><span>About</span></a>
        <div class="rr-nav-dropdown ${currentCourse ? "is-current" : ""}">
          <button type="button" aria-expanded="false"><span>Courses</span>${icon("chevron")}</button>
          <div class="rr-nav-menu">
            <a class="${page === "ai-engineering-course.html" ? "is-active" : ""}" href="/ai-engineering-course.html">${icon("ai")}<span><strong>Agentic AI Engineering</strong><small>Build production AI systems</small></span></a>
            <a class="${page === "java-full-stack-course.html" ? "is-active" : ""}" href="/java-full-stack-course.html">${icon("code")}<span><strong>Java Full Stack</strong><small>Spring Boot, React and AI</small></span></a>
          </div>
        </div>
        <a class="${page === "career-mentorship.html" ? "is-active" : ""}" href="/career-mentorship.html"><span>Mentorship</span></a>
        <a data-nav="events" class="${path.includes("/workshops/") ? "is-active" : ""}" href="${isHome ? "#events" : "/workshops/jev-10th-october.html"}"><span>Events</span></a>
        <a data-nav="testimonials" href="${href("#testimonials")}"><span>Stories</span></a>
      </nav>
      <div class="rr-nav-actions">
        <a class="rr-nav-contact" href="${href("#contact")}">Contact</a>
        <a class="rr-nav-cta" href="${href("#contact")}"><span>Enquire now</span>${icon("arrow")}</a>
        <button class="rr-menu-button" type="button" aria-label="Open navigation" aria-expanded="false">${icon("menu")}</button>
      </div>
    </div>
    <div class="rr-mobile-drawer">
      <div class="rr-mobile-links">
        <a href="${href("#hero")}">${icon("home")}<span>Home</span></a>
        <a href="${href("#build")}">${icon("about")}<span>About Us</span></a>
        <button class="rr-mobile-course-toggle" type="button" aria-expanded="false">${icon("courses")}<span>Courses</span>${icon("chevron")}</button>
        <div class="rr-mobile-course-menu">
          <a href="/ai-engineering-course.html">${icon("ai")}<span>Agentic AI Engineering</span></a>
          <a href="/java-full-stack-course.html">${icon("code")}<span>Java Full Stack</span></a>
        </div>
        <a href="/career-mentorship.html">${icon("career")}<span>Career Mentorship</span></a>
        <a href="${isHome ? "#events" : "/workshops/jev-10th-october.html"}">${icon("events")}<span>Meetups & Events</span></a>
        <a href="${href("#testimonials")}">${icon("stories")}<span>Testimonials</span></a>
        <a href="${href("#contact")}">${icon("contact")}<span>Contact</span></a>
      </div>
      <div class="rr-mobile-footer">
        <div>
          <a href="https://www.linkedin.com/company/nextrebind" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
          <a href="https://www.instagram.com/rebind_rise" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
          <a href="https://www.facebook.com/rebindrise" target="_blank" rel="noopener" aria-label="Facebook">${icon("facebook")}</a>
        </div>
        <a href="${href("#contact")}">Join the next cohort ${icon("arrow")}</a>
      </div>
    </div>
  `;
  document.body.prepend(topbar);

  const menuButton = topbar.querySelector(".rr-menu-button");
  const setMenu = (open) => {
    document.body.classList.toggle("rr-menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuButton.innerHTML = icon(open ? "close" : "menu");
  };
  menuButton.addEventListener("click", () => setMenu(!document.body.classList.contains("rr-menu-open")));
  topbar.querySelectorAll(".rr-mobile-links a, .rr-mobile-footer a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  const desktopDropdown = topbar.querySelector(".rr-nav-dropdown");
  const desktopDropdownButton = desktopDropdown.querySelector("button");
  desktopDropdownButton.addEventListener("click", () => {
    const open = !desktopDropdown.classList.contains("is-open");
    desktopDropdown.classList.toggle("is-open", open);
    desktopDropdownButton.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("click", (event) => {
    if (!desktopDropdown.contains(event.target)) {
      desktopDropdown.classList.remove("is-open");
      desktopDropdownButton.setAttribute("aria-expanded", "false");
    }
  });

  const mobileCourseToggle = topbar.querySelector(".rr-mobile-course-toggle");
  const mobileCourseMenu = topbar.querySelector(".rr-mobile-course-menu");
  mobileCourseToggle.addEventListener("click", () => {
    const open = !mobileCourseMenu.classList.contains("is-open");
    mobileCourseMenu.classList.toggle("is-open", open);
    mobileCourseToggle.classList.toggle("is-open", open);
    mobileCourseToggle.setAttribute("aria-expanded", String(open));
  });

  const progress = document.createElement("div");
  progress.className = "rr-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.style.setProperty("background", "#102b59", "important");
    contactSection.style.setProperty("background-color", "#102b59", "important");
  }

  const hero = document.querySelector("#hero, .hero-bg, body > section:first-of-type");
  if (hero && !hero.classList.contains("page-wrap")) {
    hero.classList.add("rr-immersive-hero");
    const technical = document.createElement("div");
    technical.className = "rr-technical-field";
    technical.setAttribute("aria-hidden", "true");
    technical.innerHTML = `
      <div class="rr-tech-grid"></div>
      <div class="rr-system-card rr-system-card-a"><span>01</span><strong>AGENT SYSTEM</strong><small>reason / plan / act</small></div>
      <div class="rr-system-card rr-system-card-b"><span>02</span><strong>PRODUCTION CODE</strong><small>build / test / deploy</small></div>
      <svg class="rr-network" viewBox="0 0 520 520" fill="none">
        <circle cx="260" cy="260" r="176" stroke="currentColor" stroke-dasharray="4 10"/>
        <circle cx="260" cy="260" r="92" stroke="currentColor"/>
        <path d="M84 260h352M260 84v352M135 135l250 250M385 135 135 385" stroke="currentColor" stroke-dasharray="2 12"/>
        <circle class="rr-node rr-node-a" cx="260" cy="84" r="8"/><circle class="rr-node rr-node-b" cx="436" cy="260" r="8"/>
        <circle class="rr-node rr-node-c" cx="260" cy="436" r="8"/><circle class="rr-node rr-node-d" cx="84" cy="260" r="8"/>
        <rect x="224" y="224" width="72" height="72" rx="10" stroke="currentColor"/>
        <path d="m245 260 11 11 22-24" stroke="currentColor" stroke-width="3"/>
      </svg>`;
    hero.appendChild(technical);
    hero.querySelectorAll(".hero-cta-primary, .btn-primary").forEach((button) => {
      button.style.setProperty("color", "#102b59", "important");
      button.style.setProperty("-webkit-text-fill-color", "#102b59", "important");
    });
  }

  if (isHome && !document.getElementById("events")) {
    const events = document.createElement("section");
    events.id = "events";
    events.className = "rr-events";
    events.setAttribute("aria-label", "Pune AI Builders Events and Community Workshops");
    events.innerHTML = `
      <div class="container">
        <div class="rr-events-header">
          <div class="rr-section-intro">
            <span class="section-label">Pune AI Builders · Community &amp; Workshops</span>
            <h2>Build in public.<br><span class="hl">Learn with the community.</span></h2>
            <p>Hands-on meetups, workshops, and cohorts for engineers exploring production AI systems, agentic workflows, and real-time experiences.</p>
          </div>
          <div class="rr-events-controls" aria-label="Events carousel navigation">
            <span class="rr-events-counter" aria-live="polite">
              <strong class="rr-events-curr">01</strong> / <span class="rr-events-total">04</span>
            </span>
            <div class="rr-events-nav-btns">
              <button class="rr-carousel-arrow rr-arrow-prev" type="button" aria-label="Previous event" title="Previous event">
                ${icon("arrow")}
              </button>
              <button class="rr-carousel-arrow rr-arrow-next" type="button" aria-label="Next event" title="Next event">
                ${icon("arrow")}
              </button>
            </div>
          </div>
        </div>

        <div class="rr-carousel-wrapper">
          <div class="rr-event-track" tabindex="0" role="region" aria-label="Upcoming Events">
            <!-- 1. WTF is Jev? -->
            <article class="rr-event-card is-active" data-index="0">
              <div class="rr-card-visual">
                <span class="rr-badge-tag">Hands-on</span>
                <a href="/workshops/jev-10th-october.html" tabindex="-1" aria-label="WTF is Jev? event details">
                  <img src="/assets/event-jev.svg" alt="WTF is Jev? Understanding Jev and building production AI systems" loading="lazy">
                </a>
              </div>
              <div class="rr-card-content">
                <div class="rr-card-meta">
                  <span class="rr-meta-date">${icon("events")} 10 October 2026 · 10:00 AM</span>
                  <span class="rr-meta-pill rr-pill-price">&#8377;999 / Seat</span>
                </div>
                <h3 class="rr-card-title"><a href="/workshops/jev-10th-october.html">WTF is Jev?</a></h3>
                <p class="rr-card-desc">A hands-on meetup to understand Jev and build production AI systems from first principles.</p>
                <div class="rr-card-specs">
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Location</span>
                    <span class="rr-spec-val">Online + Hinjawadi, Pune</span>
                  </div>
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Tech Stack</span>
                    <span class="rr-spec-val">Production AI · Evals</span>
                  </div>
                </div>
                <div class="rr-card-actions">
                  <a href="/workshops/jev-10th-october.html" class="rr-card-cta">
                    <span>View Event</span>
                    ${icon("arrow")}
                  </a>
                </div>
              </div>
            </article>

            <!-- 2. Voice Agent -->
            <article class="rr-event-card" data-index="1">
              <div class="rr-card-visual">
                <span class="rr-badge-tag">Live-Coding</span>
                <a href="/workshops/voiceagent-26th-september.html" tabindex="-1" aria-label="Build Your First Voice Agent event details">
                  <img src="/assets/event-voiceagent.svg" alt="Build Your First Voice Agent meetup" loading="lazy">
                </a>
              </div>
              <div class="rr-card-content">
                <div class="rr-card-meta">
                  <span class="rr-meta-date">${icon("events")} 26 September 2026 · 10:30 AM</span>
                  <span class="rr-meta-pill rr-pill-free">Free Meetup</span>
                </div>
                <h3 class="rr-card-title"><a href="/workshops/voiceagent-26th-september.html">Build Your First Voice Agent</a></h3>
                <p class="rr-card-desc">A hands-on, live-coding meetup for real-time AI voice experiences using LiveKit, WebRTC, and sub-500ms audio streaming.</p>
                <div class="rr-card-specs">
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Location</span>
                    <span class="rr-spec-val">Hinjawadi, Pune (In-Person)</span>
                  </div>
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Tech Stack</span>
                    <span class="rr-spec-val">LiveKit · WebRTC · Python</span>
                  </div>
                </div>
                <div class="rr-card-actions">
                  <a href="/workshops/voiceagent-26th-september.html" class="rr-card-cta">
                    <span>View Event</span>
                    ${icon("arrow")}
                  </a>
                </div>
              </div>
            </article>

            <!-- 3. MCP Server -->
            <article class="rr-event-card" data-index="2">
              <div class="rr-card-visual">
                <span class="rr-badge-tag">Workshop</span>
                <a href="/workshops/mcpserver-11th-july.html" tabindex="-1" aria-label="Build Your First MCP Server event details">
                  <img src="/assets/event-mcpserver.svg" alt="Build Your First MCP Server workshop" loading="lazy">
                </a>
              </div>
              <div class="rr-card-content">
                <div class="rr-card-meta">
                  <span class="rr-meta-date">${icon("events")} 11 July 2026 · 11:00 AM IST</span>
                  <span class="rr-meta-pill rr-pill-free">Free Meetup</span>
                </div>
                <h3 class="rr-card-title"><a href="/workshops/mcpserver-11th-july.html">Build Your First MCP Server</a></h3>
                <p class="rr-card-desc">A hands-on workshop building Model Context Protocol servers with Python and FastMCP to connect tools with AI agents.</p>
                <div class="rr-card-specs">
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Format</span>
                    <span class="rr-spec-val">Online + In-Person (Pune)</span>
                  </div>
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Tech Stack</span>
                    <span class="rr-spec-val">FastMCP · JSON-RPC · Python</span>
                  </div>
                </div>
                <div class="rr-card-actions">
                  <a href="/workshops/mcpserver-11th-july.html" class="rr-card-cta">
                    <span>View Event</span>
                    ${icon("arrow")}
                  </a>
                </div>
              </div>
            </article>

            <!-- 4. Master AI Engineering -->
            <article class="rr-event-card" data-index="3">
              <div class="rr-card-visual">
                <span class="rr-badge-tag">Flagship Cohort</span>
                <a href="/ai-engineering-course.html" tabindex="-1" aria-label="Master AI Engineering cohort details">
                  <img src="/assets/event-bootcamp.svg" alt="Master AI Engineering and Build Production AI Systems" loading="lazy">
                </a>
              </div>
              <div class="rr-card-content">
                <div class="rr-card-meta">
                  <span class="rr-meta-date">${icon("career")} 10 Weeks · Weekend Cohort</span>
                  <span class="rr-meta-pill rr-pill-batch">Max 25 Seats</span>
                </div>
                <h3 class="rr-card-title"><a href="/ai-engineering-course.html">Master AI Engineering</a></h3>
                <p class="rr-card-desc">A comprehensive in-person program covering RAG systems, multi-agent reasoning, tool calling, and production deployment.</p>
                <div class="rr-card-specs">
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Location</span>
                    <span class="rr-spec-val">Classroom in Hinjawadi, Pune</span>
                  </div>
                  <div class="rr-spec-item">
                    <span class="rr-spec-label">Outcome</span>
                    <span class="rr-spec-val">Production Systems &amp; Capstone</span>
                  </div>
                </div>
                <div class="rr-card-actions">
                  <a href="/ai-engineering-course.html" class="rr-card-cta">
                    <span>Explore Curriculum</span>
                    ${icon("arrow")}
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div class="rr-carousel-pagination" role="tablist" aria-label="Event slides">
            <button class="rr-carousel-dot is-active" type="button" role="tab" aria-selected="true" aria-label="Slide 1: WTF is Jev?"></button>
            <button class="rr-carousel-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 2: Voice Agent"></button>
            <button class="rr-carousel-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 3: MCP Server"></button>
            <button class="rr-carousel-dot" type="button" role="tab" aria-selected="false" aria-label="Slide 4: Master AI Engineering"></button>
          </div>
        </div>
      </div>`;
    document.getElementById("contact")?.before(events);

    // Initialize interactive carousel engine
    const track = events.querySelector(".rr-event-track");
    const cards = [...track.querySelectorAll(".rr-event-card")];
    const prevBtn = events.querySelector(".rr-arrow-prev");
    const nextBtn = events.querySelector(".rr-arrow-next");
    const currCounter = events.querySelector(".rr-events-curr");
    const dots = [...events.querySelectorAll(".rr-carousel-dot")];

    const getActiveIndex = () => {
      const scrollPos = track.scrollLeft;
      const trackCenter = scrollPos + track.clientWidth / 2;
      let closestIdx = 0;
      let minDiff = Infinity;
      cards.forEach((card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const diff = Math.abs(trackCenter - cardCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      return closestIdx;
    };

    const updateUI = (idx) => {
      if (currCounter) {
        currCounter.textContent = String(idx + 1).padStart(2, "0");
      }
      dots.forEach((dot, i) => {
        const active = i === idx;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", String(active));
      });
      cards.forEach((card, i) => {
        card.classList.toggle("is-active", i === idx);
      });
    };

    const scrollToCard = (index, smooth = true) => {
      const safeIndex = Math.max(0, Math.min(cards.length - 1, index));
      const targetCard = cards[safeIndex];
      if (!targetCard) return;
      const targetScroll = targetCard.offsetLeft - track.offsetLeft;
      track.scrollTo({
        left: targetScroll,
        behavior: smooth && !reduceMotion ? "smooth" : "auto",
      });
      updateUI(safeIndex);
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const current = getActiveIndex();
        const target = current <= 0 ? cards.length - 1 : current - 1;
        scrollToCard(target);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const current = getActiveIndex();
        const target = current >= cards.length - 1 ? 0 : current + 1;
        scrollToCard(target);
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        scrollToCard(idx);
      });
    });

    let scrollTicking = false;
    track.addEventListener("scroll", () => {
      if (!scrollTicking && !isDragging) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          updateUI(getActiveIndex());
          scrollTicking = false;
        });
      }
    }, { passive: true });

    // Drag support
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;
    let dragDistance = 0;

    track.addEventListener("mousedown", (e) => {
      if (e.target.closest("button, a")) return;
      isDragging = true;
      track.classList.add("is-dragging");
      startX = e.pageX;
      scrollStart = track.scrollLeft;
      dragDistance = 0;
      stopAutoPlay();
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const currentX = e.pageX;
      const diff = currentX - startX;
      dragDistance = Math.abs(diff);
      track.scrollLeft = scrollStart - diff;
    });

    window.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove("is-dragging");
      if (dragDistance > 30) {
        scrollToCard(getActiveIndex());
      }
      startAutoPlay();
    });

    track.addEventListener("click", (e) => {
      if (dragDistance > 6) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    // Auto Play
    let autoPlayTimer = null;
    const startAutoPlay = () => {
      if (reduceMotion || autoPlayTimer) return;
      autoPlayTimer = setInterval(() => {
        if (!document.hidden && !events.matches(":hover") && !events.matches(":focus-within")) {
          const current = getActiveIndex();
          const next = (current + 1) % cards.length;
          scrollToCard(next);
        }
      }, 5200);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    };

    events.addEventListener("mouseenter", stopAutoPlay);
    events.addEventListener("mouseleave", startAutoPlay);
    events.addEventListener("focusin", stopAutoPlay);
    events.addEventListener("focusout", startAutoPlay);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoPlay();
      else startAutoPlay();
    });

    startAutoPlay();
  }

  document.querySelectorAll(".course-card").forEach((card) => {
    const outcomes = card.querySelector(".course-outcomes");
    if (!outcomes) return;
    card.classList.add("rr-course-showcase");
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "rr-course-expand";
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = `<span>Preview curriculum</span>${icon("chevron")}`;
    outcomes.before(toggle);
    toggle.addEventListener("click", () => {
      const open = card.classList.toggle("rr-expanded");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector("span").textContent = open ? "Hide curriculum" : "Preview curriculum";
    });
  });

  const revealTargets = document.querySelectorAll(
    "section > .container, .course-card, .card, .wyg-card, .why-card, .roadmap-step, .step-item, .agenda-row, .policy-section, .rr-event-card"
  );
  if (!reduceMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("rr-visible", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.style.setProperty("--rr-direction", entry.boundingClientRect.top > 0 ? "1" : "-1");
      });
    }, { threshold: .12, rootMargin: "-7% 0px -7% 0px" });
    revealTargets.forEach((element, index) => {
      element.classList.add("rr-reveal");
      element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
      revealObserver.observe(element);
    });
  } else {
    revealTargets.forEach((element) => element.classList.add("rr-visible"));
  }

  const enhanceCarousel = (track, label, autoPlay = false) => {
    const items = [...track.children];
    if (items.length < 2 || track.dataset.enhanced) return;
    track.dataset.enhanced = "true";
    track.setAttribute("role", "region");
    track.setAttribute("aria-label", label);
    const actions = document.createElement("div");
    actions.className = "rr-carousel-actions";
    actions.innerHTML = `<span class="rr-carousel-count" aria-live="polite">01 / ${String(items.length).padStart(2, "0")}</span><button class="rr-carousel-btn rr-prev" type="button" aria-label="Previous ${label}">${icon("arrow")}</button><button class="rr-carousel-btn rr-next" type="button" aria-label="Next ${label}">${icon("arrow")}</button>`;
    track.after(actions);
    const amount = () => Math.min(track.clientWidth * .84, 560);
    const count = actions.querySelector(".rr-carousel-count");
    actions.querySelector(".rr-prev").addEventListener("click", () => track.scrollBy({ left: -amount(), behavior: reduceMotion ? "auto" : "smooth" }));
    actions.querySelector(".rr-next").addEventListener("click", () => {
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + amount(), behavior: reduceMotion ? "auto" : "smooth" });
    });
    track.addEventListener("scroll", () => {
      const centers = items.map((item) => Math.abs(item.offsetLeft - track.scrollLeft));
      count.textContent = `${String(centers.indexOf(Math.min(...centers)) + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    }, { passive: true });
    if (autoPlay && !reduceMotion) {
      const timer = window.setInterval(() => {
        if (!document.hidden && !track.matches(":hover") && !track.matches(":focus-within")) actions.querySelector(".rr-next").click();
      }, 5600);
      track.addEventListener("pointerdown", () => clearInterval(timer), { once: true });
    }
  };
  document.querySelectorAll(".testi-grid").forEach((track) => enhanceCarousel(track, "cohort stories", true));
  document.querySelectorAll(".gallery-grid").forEach((track) => enhanceCarousel(track, "meetup gallery"));

  // Inside the AI Engineering Lab Interactive Experience
  const initLabExperience = () => {
    const labSection = document.getElementById("build");
    if (!labSection) return;

    const nodes = [...labSection.querySelectorAll(".rr-lab-node")];
    const states = [...labSection.querySelectorAll(".rr-visual-state")];
    const segs = [...labSection.querySelectorAll(".rr-seg")];
    const railProgress = labSection.querySelector(".rr-rail-progress");
    const currStep = labSection.querySelector(".rr-curr-step");
    const prevBtn = labSection.querySelector(".rr-step-prev");
    const nextBtn = labSection.querySelector(".rr-step-next");
    const stageWrapper = labSection.querySelector(".rr-lab-stage-wrapper");
    const tabVisual = labSection.querySelector('[data-view="visual"]');
    const tabCode = labSection.querySelector('[data-view="code"]');
    const copyBtn = labSection.querySelector(".rr-copy-code-btn");

    if (nodes.length === 0) return;

    let currentIdx = 0;
    let autoPlayTimer = null;

    const setActiveCapability = (index) => {
      currentIdx = (index + nodes.length) % nodes.length;

      nodes.forEach((node, i) => {
        const active = i === currentIdx;
        node.classList.toggle("is-active", active);
        node.setAttribute("aria-selected", String(active));
      });

      states.forEach((state, i) => {
        state.classList.toggle("is-active", i === currentIdx);
      });

      segs.forEach((seg, i) => {
        seg.classList.toggle("is-active", i === currentIdx);
      });

      if (currStep) {
        currStep.textContent = String(currentIdx + 1).padStart(2, "0");
      }

      if (railProgress) {
        const percentage = (currentIdx / (nodes.length - 1)) * 100;
        railProgress.style.height = `${percentage}%`;
      }
    };

    nodes.forEach((node, idx) => {
      node.addEventListener("click", () => {
        if (stageWrapper && stageWrapper.classList.contains("is-code-view")) {
          stageWrapper.classList.remove("is-code-view");
          tabVisual?.classList.add("is-active");
          tabCode?.classList.remove("is-active");
        }
        setActiveCapability(idx);
        stopAutoPlay();
      });
    });

    segs.forEach((seg, idx) => {
      seg.addEventListener("click", () => {
        setActiveCapability(idx);
        stopAutoPlay();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        setActiveCapability(currentIdx - 1);
        stopAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        setActiveCapability(currentIdx + 1);
        stopAutoPlay();
      });
    }

    if (tabVisual && tabCode && stageWrapper) {
      tabVisual.addEventListener("click", () => {
        stageWrapper.classList.remove("is-code-view");
        tabVisual.classList.add("is-active");
        tabCode.classList.remove("is-active");
      });
      tabCode.addEventListener("click", () => {
        stageWrapper.classList.add("is-code-view");
        tabCode.classList.add("is-active");
        tabVisual.classList.remove("is-active");
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        const codeElement = labSection.querySelector(".code-body");
        if (codeElement) {
          navigator.clipboard?.writeText(codeElement.innerText).then(() => {
            const span = copyBtn.querySelector("span");
            if (span) {
              const orig = span.textContent;
              span.textContent = "Copied!";
              setTimeout(() => { span.textContent = orig; }, 2000);
            }
          }).catch(() => {});
        }
      });
    }

    // Scroll-based sequential reveal
    if (!reduceMotion && "IntersectionObserver" in window) {
      const labObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nodes.forEach((node, i) => {
              node.style.transitionDelay = `${i * 70}ms`;
              node.classList.add("rr-visible");
            });
            if (railProgress) {
              railProgress.style.height = `${(currentIdx / (nodes.length - 1)) * 100}%`;
            }
            labObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      labObserver.observe(labSection);
    }

    // Autoplay through capabilities
    const startAutoPlay = () => {
      if (reduceMotion || autoPlayTimer) return;
      autoPlayTimer = setInterval(() => {
        if (!document.hidden && !labSection.matches(":hover") && !labSection.matches(":focus-within")) {
          setActiveCapability(currentIdx + 1);
        }
      }, 5500);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    };

    labSection.addEventListener("mouseenter", stopAutoPlay);
    labSection.addEventListener("mouseleave", startAutoPlay);
    labSection.addEventListener("focusin", stopAutoPlay);
    labSection.addEventListener("focusout", startAutoPlay);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoPlay();
      else startAutoPlay();
    });

    startAutoPlay();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initLabExperience();
      initAudienceExperience();
    });
  } else {
    initLabExperience();
    initAudienceExperience();
  }

  // Interactive Audience Section
  function initAudienceExperience() {
    const audienceSection = document.getElementById("who");
    if (!audienceSection) return;

    const cards = [...audienceSection.querySelectorAll(".who-card")];
    if (cards.length === 0) return;

    const toggleCard = (cardToToggle) => {
      const isAlreadyExpanded = cardToToggle.classList.contains("is-expanded");

      cards.forEach((card) => {
        if (card !== cardToToggle) {
          card.classList.remove("is-expanded");
          card.setAttribute("aria-expanded", "false");
          const hint = card.querySelector(".who-toggle-hint");
          if (hint) hint.textContent = "Click to view outcomes";
        }
      });

      if (isAlreadyExpanded) {
        cardToToggle.classList.remove("is-expanded");
        cardToToggle.setAttribute("aria-expanded", "false");
        const hint = cardToToggle.querySelector(".who-toggle-hint");
        if (hint) hint.textContent = "Click to view outcomes";
      } else {
        cardToToggle.classList.add("is-expanded");
        cardToToggle.setAttribute("aria-expanded", "true");
        const hint = cardToToggle.querySelector(".who-toggle-hint");
        if (hint) hint.textContent = "Click to collapse outcomes";
      }
    };

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        toggleCard(card);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (e.target.closest("a")) return;
          e.preventDefault();
          toggleCard(card);
        }
      });
    });

    if (!reduceMotion && "IntersectionObserver" in window) {
      const whoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              card.style.transitionDelay = `${i * 120}ms`;
              card.classList.add("rr-visible");
            });
            whoObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      whoObserver.observe(audienceSection);
    }
  }

  const roadmapSteps = [...document.querySelectorAll(".roadmap-step, .step-item")];
  roadmapSteps.forEach((step) => {
    step.tabIndex = 0;
    step.setAttribute("role", "button");
  });
  document.querySelectorAll("#faq details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (detail.open) document.querySelectorAll("#faq details[open]").forEach((other) => { if (other !== detail) other.open = false; });
    });
  });

  const sectionLinks = [...topbar.querySelectorAll("[data-nav]")];
  const sections = sectionLinks.map((link) => ({ link, section: document.getElementById(link.dataset.nav) })).filter((item) => item.section);
  let ticking = false;
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    topbar.classList.toggle("is-scrolled", scrollY > 18);
    if (!reduceMotion && hero) hero.style.setProperty("--rr-parallax", `${Math.max(-1, Math.min(1, scrollY / Math.max(hero.offsetHeight, 1))) * 54}px`);
    if (sections.length) {
      let active = sections[0];
      sections.forEach((item) => { if (item.section.getBoundingClientRect().top <= innerHeight * .36) active = item; });
      sectionLinks.forEach((link) => link.classList.toggle("is-active", link === active.link));
    }
    const center = innerHeight * .58;
    roadmapSteps.forEach((step, index) => {
      const passed = step.getBoundingClientRect().top < center;
      const next = roadmapSteps[index + 1];
      step.classList.toggle("rr-passed", passed);
      step.classList.toggle("rr-active", passed && (!next || next.getBoundingClientRect().top >= center));
    });
    ticking = false;
  };
  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateScroll);
    }
  };
  addEventListener("scroll", requestUpdate, { passive: true });
  addEventListener("resize", requestUpdate, { passive: true });
  updateScroll();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", link.getAttribute("href"));
    });
  });
})();
