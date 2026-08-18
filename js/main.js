/* =========================================================
   Nosa Omoragbon — Portfolio
   Vanilla JS: rendering, nav, reveal, gallery, lightbox,
   and the case-study detail loader.
   ========================================================= */
(function () {
  "use strict";

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ---------- SVG icon set ---------- */
  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.07-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.34V8.31z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>',
    twitter: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93z"/></svg>'
  };

  const SOCIAL_ORDER = ["linkedin", "youtube", "twitter"];

  /* ---------- Bold case-study icons (coral + ink outline + gold) ---------- */
  const INK = "#1B1A17";
  const CORAL = "#FF5A3C";
  const GOLD = "#F5B301";

  const CASE_ICONS = {
    search: `<svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="43.5" y="35" width="9" height="26" rx="4.5" transform="rotate(45 48 48)" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <circle cx="28" cy="28" r="16" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <path d="M28 18 L30.6 25.4 L38 28 L30.6 30.6 L28 38 L25.4 30.6 L18 28 L25.4 25.4 Z" fill="#FFFFFF"/>
      <circle cx="36" cy="20" r="3.2" fill="${GOLD}" stroke="${INK}" stroke-width="2"/>
    </svg>`,
    brand: `<svg viewBox="0 0 64 64" aria-hidden="true">
      <line x1="32" y1="10" x2="32" y2="26" stroke="${INK}" stroke-width="3"/>
      <line x1="32" y1="38" x2="32" y2="54" stroke="${INK}" stroke-width="3"/>
      <line x1="10" y1="32" x2="26" y2="32" stroke="${INK}" stroke-width="3"/>
      <line x1="38" y1="32" x2="54" y2="32" stroke="${INK}" stroke-width="3"/>
      <circle cx="32" cy="8" r="6" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <circle cx="32" cy="56" r="6" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <circle cx="8" cy="32" r="6" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <circle cx="56" cy="32" r="6" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <circle cx="32" cy="32" r="11" fill="${GOLD}" stroke="${INK}" stroke-width="2.5"/>
      <path d="M32 25.5 L33.7 30.3 L38.5 32 L33.7 33.7 L32 38.5 L30.3 33.7 L25.5 32 L30.3 30.3 Z" fill="#FFFFFF"/>
    </svg>`,
    funnel: `<svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M11 6 H53 L35 28 L37 46 H27 L29 28 Z" fill="${CORAL}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M32 14 L38 22 H35.2 V28 H28.8 V22 H26 Z" fill="#FFFFFF"/>
      <circle cx="32" cy="55" r="3.4" fill="${GOLD}" stroke="${INK}" stroke-width="2"/>
    </svg>`,
    podcast: `<svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="23" y="9" width="18" height="30" rx="9" fill="${CORAL}" stroke="${INK}" stroke-width="2.5"/>
      <circle cx="32" cy="23" r="5.5" fill="#FFFFFF" stroke="${INK}" stroke-width="2.2"/>
      <path d="M15 30 C16.5 39 23 44 32 44 C41 44 47.5 39 49 30" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="32" y1="44" x2="32" y2="53" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M9 22 H13 M51 22 H55 M11 15 L8 11 M53 15 L56 11" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/>
      <circle cx="32" cy="56" r="4" fill="${GOLD}" stroke="${INK}" stroke-width="2.2"/>
      <path d="M32 53.4 L33.4 56.2 L36 56.5 L34 58.6 L34.5 61.2 L32 59.8 L29.5 61.2 L30 58.6 L28 56.5 L30.6 56.2 Z" fill="#FFFFFF"/>
    </svg>`,
    rocket: `<svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M27 40 H37 L32 56 Z" fill="${GOLD}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M22 30 L10 42 L22 44 Z" fill="${CORAL}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M42 30 L54 42 L42 44 Z" fill="${CORAL}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M32 8 C37.5 8 41 13 41 30 L41 42 H23 L23 30 C23 13 26.5 8 32 8 Z" fill="${CORAL}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
      <circle cx="32" cy="22" r="5.5" fill="#FFFFFF" stroke="${INK}" stroke-width="2.5"/>
      <ellipse cx="28" cy="38.5" rx="2.6" ry="1.9" fill="#FFFFFF"/>
      <rect x="30.2" y="31.5" width="1.7" height="7" rx="0.8" fill="#FFFFFF"/>
      <path d="M31.9 31.5 C34 32.4 34.5 34.2 34.2 35.6 C33.4 34.4 32.6 33.8 31.9 33.5 Z" fill="#FFFFFF"/>
    </svg>`
  };

  function renderSocials(target) {
    if (!target) return;
    target.innerHTML = SOCIAL_ORDER.map((k) =>
      `<a href="${SITE.socials[k]}" target="_blank" rel="noopener" aria-label="${k}">${ICONS[k]}</a>`
    ).join("");
  }

  function slugify(str) {
    return str.toLowerCase().trim();
  }

  /* =======================================================
     NAV
     ======================================================= */
  const nav = $("#nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger");
  const mobileMenu = $("#mobileMenu");
  function setMenu(open) {
    mobileMenu.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    burger.setAttribute("aria-expanded", String(open));
    if (open) {
      const first = mobileMenu.querySelector("a");
      if (first) first.focus();
    } else if (document.activeElement && mobileMenu.contains(document.activeElement)) {
      burger.focus();
    }
  }
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => setMenu(!mobileMenu.classList.contains("open")));
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setMenu(false))
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) setMenu(false);
    });
  }

  /* =======================================================
     REVEAL ON SCROLL
     ======================================================= */
  function observeReveals(scope) {
    const els = $$(".reveal:not(.in)", scope);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  observeReveals(document);

  /* =======================================================
     COUNT-UP
     ======================================================= */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const suffix = el.dataset.suffix || "";
    const dur = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const countEls = $$("[data-count]");
  if (countEls.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    countEls.forEach((el) => cio.observe(el));
  }

  /* =======================================================
     LIGHTBOX
     ======================================================= */
  const lb = $("#lightbox");
  const lbImg = $("#lbImg");
  const lbCap = $("#lbCap");
  let lbCloseHandler = null;

  function openLightbox(src, cap) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = cap || "";
    lbCap.textContent = cap || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  function bindLightbox(scope) {
    $$(".g-item", scope).forEach((item) => {
      const img = $("img", item);
      if (!img) return;
      item.addEventListener("click", () => {
        const img = $("img", item);
        const cap = $(".g-cap .g-title", item) || img;
        openLightbox(img.src, cap ? cap.getAttribute("alt") || cap.textContent : "");
      });
    });
  }

  if (lb) {
    const closeBtn = $("#lbClose");
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    lb.addEventListener("click", (e) => {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* =======================================================
     INDEX PAGE
     ======================================================= */
  const isIndex = !!$("#caseGrid");

  if (isIndex) {
    renderSocials($("#heroSocials"));
    renderSocials($("#footerSocials"));

    /* ---- marquee ---- */
    const marqueeTracks = $$(".marquee-track");
    if (marqueeTracks.length) {
      const chunk = MARQUEE.map((w) => `<span>${w}</span>`).join("");
      marqueeTracks.forEach((track) => (track.innerHTML = chunk + chunk));
    }

    /* ---- working process ---- */
    const processGrid = $("#processGrid");
    if (processGrid) {
      processGrid.innerHTML = PROCESS.map(
        (p) => `
        <div class="process-card reveal">
          <div class="p-num">${p.num}</div>
          <h3>${p.title}</h3>
          <p>${p.text}</p>
        </div>`
      ).join("");
      observeReveals(processGrid);
    }

    /* ---- values ---- */
    const vGrid = $("#valuesGrid");
    if (vGrid) {
      vGrid.innerHTML = VALUES.map(
        (v, i) => `
        <div class="value reveal reveal-delay-${i}">
          <span class="num">${v.num}</span>
          <h3>${v.title}</h3>
          <p>${v.text}</p>
        </div>`
      ).join("");
      observeReveals(vGrid);
    }

    /* ---- case studies grid ---- */
    const caseGrid = $("#caseGrid");
    if (caseGrid) {
      caseGrid.innerHTML = CASE_STUDIES.map(
        (cs) => {
          const media = cs.icon
            ? `<div class="case-icon" aria-hidden="true">${CASE_ICONS[cs.icon] || ""}</div>`
            : `<img src="${cs.cover}" alt="${cs.title}" loading="lazy" />`;
          return `
        <a href="case-study.html?slug=${cs.slug}" class="case-card reveal">
          <div class="case-media">
            <span class="num">${cs.index} / ${String(CASE_STUDIES.length).padStart(2, "0")}</span>
            ${media}
            <span class="arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>
            </span>
          </div>
          <div class="case-body">
            <div class="case-meta">
              <span>${cs.client}</span>
              <span class="divider"></span>
              <span>${cs.category}</span>
            </div>
            <h3>${cs.title}</h3>
            <p>${cs.summary}</p>
          </div>
        </a>`;
        }
      ).join("");
      // observe newly-added reveals
      observeReveals(caseGrid);
    }

    /* ---- showcase (static grids) ---- */
    const showcase = $("#showcase");
    if (showcase) {
      const smmLabel = (g) =>
        g.title || g.file.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
      const card = (sec, g) =>
        g.youtube
          ? `
        <div class="g-item show" data-cat="${sec.name}">
          <iframe class="g-video" src="https://www.youtube-nocookie.com/embed/${g.youtube}"
            title="${smmLabel(g)}" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>`
          : g.video
            ? `
        <div class="g-item show" data-cat="${sec.name}">
          <iframe class="g-video" src="${g.video}"
            title="${smmLabel(g)}" loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen></iframe>
        </div>`
            : /\.(mp4|webm|mov|m4v)$/i.test(g.file)
              ? `
        <div class="g-item show" data-cat="${sec.name}">
          <video class="g-video" src="${SHOWCASE_DIR(sec.dir, g.file)}"
            title="${smmLabel(g)}" preload="metadata" controls></video>
        </div>`
              : `
        <div class="g-item show" data-cat="${sec.name}">
          <img src="${SHOWCASE_DIR(sec.dir, g.file)}" alt="${smmLabel(g)}" loading="lazy" />
        </div>`;

      showcase.innerHTML = SHOWCASE.map((sec, si) => {
        const head = `
          <div class="showcase-head">
            <span class="sec-num">${String(si + 1).padStart(2, "0")}</span>
            <h3>${sec.name}</h3>
            <span class="sec-count">${sec.items.length} ${sec.items.length === 1 ? "item" : "items"}</span>
          </div>`;

        const body = `
              <div class="showcase-grid ${sec.dir}">
                ${sec.items.map((g) => card(sec, g)).join("")}
              </div>`;

        return `
          <div class="showcase-section reveal">
            ${head}
            ${body}
          </div>`;
      }).join("");

      bindLightbox(showcase);

      /* reveal the injected sections (kept hidden by .reveal until observed) */
      observeReveals(showcase);
    }

    /* ---- skills ---- */
    const skillsGrid = $("#skillsGrid");
    if (skillsGrid) {
      skillsGrid.innerHTML = SKILL_GROUPS.map(
        (g) => `
        <div class="skills-col reveal">
          <h3>${g.name}</h3>
          ${g.skills
            .map(
              (s) => `
              <div class="skill-row">
                <div class="skill-top">
                  <span class="name">${s.label}</span>
                  <span class="pct">${s.value}%</span>
                </div>
                <div class="skill-bar"><div class="skill-fill" data-w="${s.value}"></div></div>
              </div>`
            )
            .join("")}
        </div>`
      ).join("");

      const barIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const fill = $(".skill-fill", e.target);
              if (fill) fill.style.width = fill.dataset.w + "%";
              barIO.unobserve(e.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      $$(".skill-row", skillsGrid).forEach((row) => barIO.observe(row));
      observeReveals(skillsGrid);
    }

    /* ---- tools ---- */
    const toolsGrid = $("#toolsGrid");
    if (toolsGrid) {
      toolsGrid.innerHTML = TOOL_GROUPS.map(
        (g) => `
        <div class="tool-cell reveal">
          <h4>${g.name}</h4>
          <ul>${g.tools.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>`
      ).join("");
      observeReveals(toolsGrid);
    }

    /* ---- certs ---- */
    const certs = $("#certs");
    if (certs) {
      certs.innerHTML = CERTIFICATIONS.map(
        (c) => `
        <div class="cert reveal">
          <span class="y">${c.year}</span>
          <div>
            <div class="t">${c.title}</div>
            <div class="i">${c.issuer}</div>
          </div>
        </div>`
      ).join("");
      observeReveals(certs);
    }
    const testiTrack = $("#testiTrack");
    if (testiTrack) {
      const stars = `<div class="stars">${Array(5)
        .fill('<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>')
        .join("")}</div>`;
      testiTrack.innerHTML = TESTIMONIALS.map(
        (t) => `
        <div class="testi-card reveal">
          ${stars}
          <blockquote>${t.quote}</blockquote>
          <div class="who">
            <div class="name">${t.name}</div>
            <div class="role">${t.role}</div>
          </div>
        </div>`
      ).join("");
      observeReveals(testiTrack);
    }
  }

  /* =======================================================
     CASE STUDY DETAIL PAGE
     ======================================================= */
  if ($("#csTitle")) {
    renderSocials($("#footerSocials"));

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const idx = CASE_STUDIES.findIndex((cs) => cs.slug === slug);

    if (idx === -1) {
      window.location.href = "index.html#work";
      return;
    }

    const cs = CASE_STUDIES[idx];
    const prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
    const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

    document.title = `${cs.title} — ${cs.client} | Nosa Omoragbon`;

    const setMeta = (p, c) => {
      const m = document.querySelector(`meta[property="${p}"], meta[name="${p}"]`);
      if (m) m.setAttribute("content", c);
    };
    const ogTitle = `${cs.title} — ${cs.client} | Nosa Omoragbon`;
    setMeta("og:title", ogTitle);
    setMeta("twitter:title", ogTitle);
    setMeta("og:description", cs.summary);
    setMeta("twitter:description", cs.summary);
    if (cs.coverImage) setMeta("og:image", "https://nomoragbon-portfolio.vercel.app/" + cs.coverImage);

    $("#crumbClient").textContent = cs.client;
    $("#chipCategory").textContent = cs.service || cs.category;
    $("#chipPeriod").textContent = cs.period;
    $("#chipClient").textContent = cs.category;
    const chipTag = $("#chipTag");
    if (cs.tag && chipTag) {
      chipTag.textContent = cs.tag;
      chipTag.style.display = "";
    } else if (chipTag) {
      chipTag.style.display = "none";
    }
    $("#csTitle").textContent = cs.title;
    $("#csTagline").textContent = cs.tagline;
    $("#csSummary").textContent = cs.overview || cs.summary;
    $("#csChallenge").textContent = cs.challenge;
    $("#csSolution").textContent = cs.solution;

    /* hero cover: video embed, else an explicitly-set cover image, else the case icon, else fallback */
    const coverVideo = $("#csCoverVideo");
    const coverIcon = $("#csCoverIcon");
    const coverImg = $("#csCover");
    const useImageCover = !!cs.coverImage;
    if (cs.video && coverVideo) {
      coverVideo.innerHTML =
        '<iframe src="' +
        cs.video +
        '" title="' +
        (cs.title + " — case study video") +
        '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>';
      coverVideo.style.display = "";
      if (coverIcon) coverIcon.style.display = "none";
      if (coverImg) coverImg.style.display = "none";
    } else if (useImageCover && coverImg) {
      coverImg.src = cs.coverImage;
      coverImg.alt = cs.title;
      coverImg.style.display = "";
      if (coverIcon) coverIcon.style.display = "none";
      if (coverVideo) coverVideo.style.display = "none";
    } else if (cs.icon && CASE_ICONS[cs.icon] && coverIcon) {
      coverIcon.innerHTML = CASE_ICONS[cs.icon];
      coverIcon.style.display = "";
      if (coverImg) coverImg.style.display = "none";
      if (coverVideo) coverVideo.style.display = "none";
    } else if (coverIcon) {
      coverIcon.style.display = "none";
      if (coverVideo) coverVideo.style.display = "none";
      coverImg.style.display = "";
      coverImg.src = cs.cover;
      coverImg.alt = cs.title;
    }

    /* optional solution list + closing paragraph */
    const solList = $("#csSolutionList");
    if (cs.solutionList && solList) {
      solList.innerHTML = cs.solutionList.map((s) => `<li>${s}</li>`).join("");
      solList.style.display = "";
    } else if (solList) {
      solList.style.display = "none";
    }
    const solAfter = $("#csSolutionAfter");
    if (cs.solutionAfter && solAfter) {
      solAfter.textContent = cs.solutionAfter;
      solAfter.style.display = "";
    } else if (solAfter) {
      solAfter.style.display = "none";
    }

    /* optional AEO strategy section */
    const aeoBlock = $("#csAeoBlock");
    if (cs.aeo && aeoBlock) {
      $("#csAeoSub").textContent = cs.aeoSub || "";
      $("#csAeo").textContent = cs.aeo;
      aeoBlock.style.display = "";
    } else if (aeoBlock) {
      aeoBlock.style.display = "none";
    }

    /* results */
    $("#csResults").innerHTML = cs.results
      .map(
        (r) => `
        <div class="cs-result">
          <div class="v">${r.value}</div>
          <div class="l">${r.label}</div>
          ${r.sub ? `<div class="s">${r.sub}</div>` : ""}
        </div>`
      )
      .join("");

    /* strategies + tools + facts */
    $("#csStrategies").innerHTML = cs.strategies.map((s) => `<li>${s}</li>`).join("");
    $("#csTools").innerHTML = cs.tools.map((t) => `<span class="cs-tool">${t}</span>`).join("");

    const facts = [
      `<li><strong>Client</strong> ${cs.client}</li>`,
      `<li><strong>Industry</strong> ${cs.industry || cs.category}</li>`
    ];
    if (cs.scope) facts.push(`<li><strong>Scope</strong> ${cs.scope}</li>`);
    facts.push(`<li><strong>Timeline</strong> ${cs.timeline || cs.period}</li>`);
    facts.push(`<li><strong>Role</strong> ${cs.role || "Digital Marketing Strategist"}</li>`);
    $("#csFacts").innerHTML = facts.join("");

    /* gallery */
    const csGallery = $("#csGallery");
    const galCount = $("#galCount");
    const galleryWrap = csGallery.closest(".cs-gallery");
    if (cs.gallery.length === 0 && galleryWrap) {
      galleryWrap.style.display = "none";
    }
    csGallery.classList.toggle("count-2", cs.gallery.length === 2);
    csGallery.innerHTML = cs.gallery
      .map(
        (g, i) => `
        <div class="g-item show">
          <img src="${g}" alt="${cs.title} visual ${i + 1}" loading="lazy" />
          <span class="g-cat">${cs.client}</span>
          <div class="g-cap">
            <div class="g-title">${cs.title} — ${String(i + 1).padStart(2, "0")}</div>
            <div class="g-brand">${cs.category}</div>
          </div>
        </div>`
      )
      .join("");
    galCount.textContent = cs.gallery.length + (cs.gallery.length === 1 ? " photo" : " photos");
    bindLightbox(csGallery);

    /* prev / next */
    const prevLink = $("#csPrev");
    const nextLink = $("#csNext");
    prevLink.href = `case-study.html?slug=${prev.slug}`;
    prevLink.querySelector("#csPrevTitle").textContent = prev.title;
    nextLink.href = `case-study.html?slug=${next.slug}`;
    nextLink.querySelector("#csNextTitle").textContent = next.title;

    window.scrollTo(0, 0);
  }
})();
