/* ==========================================================================
   Paola Tumambing — Portfolio Interactive Script (Vanilla JS)
   Handles:
   1. Multi-page switching (Home, Work, About, Services, Contact)
   2. Interactive 6-stage UX Case Study walkthroughs (Recipe Blog & Atelier Inquiry Flow)
   3. Contact & Inquiry form validation + Formspree / mailto submission
   ========================================================================== */

// Optional: Set your Formspree Form ID here (e.g. "xvgpkqzb") for direct POST submissions.
// Leave empty "" to use the automatic mailto: fallback.
const FORMSPREE_ID = "mrpppvll";
const CONTACT_EMAIL = "melbpascua@yahoo.com";

/* --------------------------------------------------------------------------
   Case Studies Data (Edit copy, metrics, personas, or stages here)
   -------------------------------------------------------------------------- */
const CASE_STUDIES = [
  {
    id: "recipe-blog",
    title: "Recipe Blog",
    tag: "Web",
    role: "UX research, UI design, front-end build",
    year: "2025",
    tagline: "A recipe site that gets cooks to the method with fast, real-time recipe scaling function",
    image:
      "media/laderly-fullUIdesign.jpg",
    metric: "-48%",
    metricLabel: "time to first recipe step",
    problem: [
      "Cooking for a few people you care about should feel generous, not stressful. But most recipe sites are built for volume: pop-ups, long life stories before the ingredients, and servings you cannot adjust without doing math at the stove.",
      "For people hosting supper clubs, brunch circles, or small dinners, that friction adds up.", 
      "They need recipes that are clear, seasonal, and flexible enough to feed four on Friday and ten on Sunday.",
      "Design challenge: How might we make cooking for a crowd feel as calm as the meal itself?"
    ],
    research: [
      "how people actually cook for small groups: what they search for, where they get stuck, and what makes them abandon a recipe mid-prep.",
      "Five short interviews and a review of four competing blogs.",
      "Finding: most readers skip the story and look for ingredients first.",
    ],
    personas: [
      {
        name: "Mika, the weeknight cook",
        role: "Cooks daily, shops local when possible, follows slow food values on a real schedule.",
        quote: "I just need the ingredients and the steps, fast.",
        needs: ["Large, scannable steps", "Ingredient scaling"],
      },
      {
        name: "Lola Mara, the keeper",
        role: "Hosts a monthly table of six to ten. Cares about seasonal, organic ingredients. Needs scaling and make-ahead guidance.",
        quote: "I want to save the ones my family loves.",
        needs: ["Readable type", "Clear categories"],
      },
    ],
    wires: [
      { label: "v1 · story first", blocks: ["nav", "hero", "list", "grid"] },
      { label: "v2 · recipe first", blocks: ["nav", "hero", "side", "list"] },
    ],
    iterations: [
      {
        version: "v1",
        change: "Moved ingredients above the story.",
        why: "Testers scrolled past the intro looking for them.",
      },
      {
        version: "v2",
        change: "Added recipe scaling function",
        why: "It kept the primary task one tap away on mobile.",
      },
      {
        version: "v3",
        change: "Steps became are listed cleanly with less clutter and larger type.",
        why: "Cooks lost their place when their hands were busy.",
      },
    ],
    final: [
      "Minimal, scannable recipe cards with inline scaling.",
      "Step-by-step cooking mode with large type.",
      "Warm photography with a calm, editorial grid.",
    ],
    learnings: [
      "Content order is a design decision, not an afterthought.",
      "Test on the device and in the context of use.",
      "Keep the author's story separate and never make it a gate.",
      "Future Improvements: Add a 'make-ahead' filter, a 'save and print' feature and Author story excerpt on hover of hero image.",
    ],
  },
  {
    id: "audreys-website",
    title: "Audrey's Shopify Website",
    tag: "Web",
    role: "Creative Strategy, Content Strategy, UI design",
    year: "2025",
    tagline:
      "Content and creative strategy for a pastry studio serving multiple kinds of clients.",
    image:
      "media/audreys-fullUIdesign.jpg",
    metric: "2x",
    metricLabel: "immediate, sales conversion on high-ticket featured service",
    problem: [
      "The studio received vague inquiries with no date, budget or location.",
      "Audrey’s clients arrive at two different stages. Those with a clear vision want a bespoke partner they can trust.", 
      "Those without one need direction, and the site gave them neither packages nor price references to start from.", 
      "The challenge was to convert undecided clients through standard design options and transparent pricing without diluting the expertise and customization that Audrey’s ideal clients value.",
      "Design challenge: Which platform and what structure, lets us guide the undecided to book while keeping Audrey's bespoke promise for clients who know their vision?",
    ],
    research: [
      "Reviewed how couples, hosts, and event teams browse and book celebration vendors, and where they hesitate",
      "Audited the current storefront: its collections, bundles, tasting options, press features, and testimonials",
      "Finding: Clients want to see pricing and packages early, then ask for customization.",
      "Tasting sessions and samplers are a major trust-builder, but were easy to miss.",
      "Most visitors browse on their phones, often while comparing several vendors.",
    ],
    personas: [
      {
        name: "Jam and Rina, the couple",
        role: "Planning a wedding in eight months",
        quote: "We want to know quickly if they are free and in budget.",
        needs: ["Availability", "Pricing range", "Warm tone"],
      },
      {
        name: "Ana, Audrey's Customer Relations Officer",
        role: "Replies to every inquiry herself",
        quote: "Everyone is asking how much at the onset but I need the design, date and place before I can say yes.",
        needs: ["Structured details", "Fewer back-and-forths", "Spam control"],
      },
    ],
    wires: [
      { label: "v1 · traditional", blocks: ["nav", "side", "form", "cta"]},
      { label: "v2 · long form", blocks: ["nav", "hero", "form", "cta"]},
      { label: "v3 · comprehensive", blocks: ["nav", "hero", "grid", "list", "cta"]},
    ],
    iterations: [
      {
        version: "v1",
        change: "Entry points got clearer.",
        why: "Browsing by life milestone, such as weddings, birthdays, and baby showers, matched how clients think. Collections like Modest, Opulence, and Tower Cakes became the bespoke route.",
      },
      {
        version: "v2",
        change:
          "Bundles moved forward. Reservation-ready for decided clients",
        why: "Open budget fields caused hesitation. Curated packages help clients decide quickly and keep the details in order, so they were surfaced earlier. An e-commerce platform such as Shopify was chosen to support the quicker conversion.",
      },
      {
        version: "v3",
        change: "Trust moved up the page.",
        why: "Press logos and client reviews now appear before the long product grids, not after.",
      },
      {
        version: "v4",
        change: "Tasting became a path, not a footnote.",
        why: "Samplers and consultation bookings were given their own prominent place in the navigation and the page.",
      },
    ],
    final: [
      "Soft, natural tones, generous whitespace, and photography-led layouts keep the focus on the cakes, spreads, and carts.",
      "Two clear routes: shop by milestone for fast booking, explore collections for bespoke",
      "Color-led browsing for style-first clients and tasting or consultation entry points woven into the journey",
    ],
    learnings: [
      "One site can serve two speeds. Fast buyers and bespoke clients both succeed when each has an obvious path.",
      "Trust belongs near the top. For high-stakes purchases, proof of quality reassures before the browsing begins.",
      "Structure is part of the aesthetic. On a minimal site, order and spacing do the work that decoration would otherwise do.",
      "Platform constraints are design material. Working within Shopify’s structure pushed us toward clearer hierarchy and simpler decisions.",
      "Next improvements: a guided “plan my event” flow, guest-count-based package suggestions, and a streamlined consultation booking step.",
    ],
  },
];

const STAGES = [
  ["problem", "Problem"],
  ["research", "Research & personas"],
  ["wires", "Wireframes"],
  ["iterations", "Iterations"],
  ["final", "Final UI"],
  ["learnings", "Learnings"],
];

/* --------------------------------------------------------------------------
   1. Navigation & Page Switching
   -------------------------------------------------------------------------- */
const VALID_PAGES = ["home", "work", "about", "services", "contact"];

function showPage(pageId, pushHash = true) {
  const target = VALID_PAGES.includes(pageId) ? pageId : "home";
  document.querySelectorAll(".page-view").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-page") === target);
  });
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.closest(".topbar")) {
      if (link.getAttribute("data-nav") === target) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  });
  if (pushHash) {
    history.pushState({ page: target }, "", `#${target}`);
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* --------------------------------------------------------------------------
   2. Interactive Case Studies Widget
   -------------------------------------------------------------------------- */
function renderWireframeDiagram(blocks) {
  return `<div class="x-wf" aria-hidden="true">${blocks
    .map((b) => {
      let inner = "";
      if (b === "nav" || b === "grid" || b === "list" || b === "form") {
        inner = "<b></b><b></b><b></b>";
      } else if (b === "side") {
        inner = "<b></b><b></b>";
      }
      return `<i class="x-wf-${b}">${inner}</i>`;
    })
    .join("")}</div>`;
}

function renderStageBody(study, stageId) {
  if (stageId === "problem") {
    return `
      <div class="x-stage">
        <h3>Problem statement</h3>
        ${study.problem
          .map(
            (p, i) =>
              `<p class="${i === study.problem.length - 1 ? "x-lead" : ""}">${p}</p>`
          )
          .join("")}
      </div>`;
  }
  if (stageId === "research") {
    return `
      <div class="x-stage">
        <h3>User research &amp; personas</h3>
        <ul class="x-points">
          ${study.research.map((r) => `<li>${r}</li>`).join("")}
        </ul>
        <div class="x-personas">
          ${study.personas
            .map(
              (p) => `
            <article>
              <h4>${p.name}</h4>
              <small>${p.role}</small>
              <blockquote>&ldquo;${p.quote}&rdquo;</blockquote>
              <ul class="x-tags">
                ${p.needs.map((n) => `<li>${n}</li>`).join("")}
              </ul>
            </article>`
            )
            .join("")}
        </div>
      </div>`;
  }
  if (stageId === "wires") {
    return `
      <div class="x-stage">
        <h3>Wireframes</h3>
        <div class="x-wires">
          ${study.wires
            .map(
              (w) => `
            <figure>
              ${renderWireframeDiagram(w.blocks)}
              <figcaption>${w.label}</figcaption>
            </figure>`
            )
            .join("")}
        </div>
      </div>`;
  }
  if (stageId === "iterations") {
    return `
      <div class="x-stage">
        <h3>Iteration decisions</h3>
        <ol class="x-iter">
          ${study.iterations
            .map(
              (it) => `
            <li>
              <span>${it.version}</span>
              <div>
                <strong>${it.change}</strong>
                <p>${it.why}</p>
              </div>
            </li>`
            )
            .join("")}
        </ol>
      </div>`;
  }
  if (stageId === "final") {
    return `
      <div class="x-stage x-final">
        <h3>Final UI</h3>
        <figure class="x-shot">
          <img src="${study.image}" alt="${study.title} final interface" />
        </figure>
        <div>
          <ul class="x-points">
            ${study.final.map((f) => `<li>${f}</li>`).join("")}
          </ul>
          <p class="x-metric">
            <strong>${study.metric}</strong> ${study.metricLabel}
          </p>
        </div>
      </div>`;
  }
  return `
    <div class="x-stage">
      <h3>Key learnings</h3>
      <ol class="x-learn">
        ${study.learnings.map((l) => `<li>${l}</li>`).join("")}
      </ol>
    </div>`;
}

function initCaseStudyWidget(container) {
  let activeStudyId = CASE_STUDIES[0].id;
  let activeStageId = "problem";

  const detailPanel = container.querySelector("[data-detail-panel]");
  const cards = container.querySelectorAll("[data-study-id]");

  function update() {
    const study =
      CASE_STUDIES.find((c) => c.id === activeStudyId) || CASE_STUDIES[0];
    const stageIdx = STAGES.findIndex((s) => s[0] === activeStageId);

    cards.forEach((card) => {
      const isCurrent = card.getAttribute("data-study-id") === study.id;
      card.classList.toggle("active", isCurrent);
      card.setAttribute("aria-pressed", String(isCurrent));
    });

    detailPanel.innerHTML = `
      <div class="x-detail-head">
        <h3>${study.title}</h3>
        <p>${study.role}</p>
      </div>
      <div class="x-tabs" role="tablist" aria-label="Case study stages">
        ${STAGES.map(
          ([id, label], i) => `
          <button
            type="button"
            role="tab"
            data-stage-tab="${id}"
            aria-selected="${activeStageId === id}"
            class="${activeStageId === id ? "active" : ""}"
          >
            <small>${i + 1}</small>
            ${label}
          </button>`
        ).join("")}
      </div>
      ${renderStageBody(study, activeStageId)}
      <div class="x-stage-nav">
        <button type="button" data-stage-prev ${stageIdx === 0 ? "disabled" : ""}>
          &larr; Back
        </button>
        <span>${stageIdx + 1} / ${STAGES.length}</span>
        <button type="button" data-stage-next ${
          stageIdx === STAGES.length - 1 ? "disabled" : ""
        }>
          Next &rarr;
        </button>
      </div>
    `;

    detailPanel.querySelectorAll("[data-stage-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeStageId = btn.getAttribute("data-stage-tab");
        update();
      });
    });

    const prevBtn = detailPanel.querySelector("[data-stage-prev]");
    const nextBtn = detailPanel.querySelector("[data-stage-next]");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (stageIdx > 0) {
          activeStageId = STAGES[stageIdx - 1][0];
          update();
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (stageIdx < STAGES.length - 1) {
          activeStageId = STAGES[stageIdx + 1][0];
          update();
        }
      });
    }
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      activeStudyId = card.getAttribute("data-study-id");
      activeStageId = "problem";
      update();
    });
  });

  update();
}

/* --------------------------------------------------------------------------
   3. Contact & Inquiry Form Validation & Submission
   -------------------------------------------------------------------------- */
function initInquiryForm(mountEl) {
  const detailed = mountEl.getAttribute("data-form-container") === "detailed";
  const prefix = detailed ? "f-d" : "f-s";

  function renderForm() {
    mountEl.innerHTML = `
      <form class="x-form" novalidate>
        <div class="x-field" data-field="name">
          <label for="${prefix}-name">Name</label>
          <input id="${prefix}-name" name="name" type="text" autocomplete="name" />
          <span class="x-error" id="${prefix}-name-err" role="alert" hidden></span>
        </div>
        <div class="x-field" data-field="email">
          <label for="${prefix}-email">Email</label>
          <input id="${prefix}-email" name="email" type="email" autocomplete="email" />
          <span class="x-error" id="${prefix}-email-err" role="alert" hidden></span>
        </div>
        ${
          detailed
            ? `
          <div class="x-field" data-field="phone">
            <label for="${prefix}-phone">Phone <em>(optional)</em></label>
            <input id="${prefix}-phone" name="phone" type="tel" autocomplete="tel" />
          </div>
          <div class="x-field" data-field="type">
            <label for="${prefix}-type">I'm inquiring about</label>
            <select id="${prefix}-type" name="type">
              <option value="">Select one</option>
              <option value="Brand identity">Brand Identity</option>
              <option value="Web design & development">Web design &amp; development</option>
              <option value="Digital Ecosystem Design & Automation">Digital Ecosystem Design & Automation</option>
              <option value="Something else">Something else</option>
            </select>
            <span class="x-error" id="${prefix}-type-err" role="alert" hidden></span>
          </div>
          <div class="x-field" data-field="budget">
            <label for="${prefix}-budget">Budget range <em>(optional)</em></label>
            <select id="${prefix}-budget" name="budget">
              <option value="">Not sure yet</option>
              <option>Under $1,000</option>
              <option>$1,000 - $3,000</option>
              <option>$3,000 - $6,000</option>
              <option>$6,000+</option>
            </select>
          </div>
          <div class="x-field" data-field="timeline">
            <label for="${prefix}-timeline">Ideal timeline <em>(optional)</em></label>
            <select id="${prefix}-timeline" name="timeline">
              <option value="">Flexible</option>
              <option>Within a month</option>
              <option>1 - 3 months</option>
              <option>3+ months</option>
            </select>
          </div>`
            : ""
        }
        <div class="x-field wide" data-field="message">
          <label for="${prefix}-message">Project details</label>
          <textarea id="${prefix}-message" name="message" rows="${detailed ? 7 : 4}"></textarea>
          <span class="x-error" id="${prefix}-message-err" role="alert" hidden></span>
        </div>
        <input class="x-trap" type="text" tabindex="-1" autocomplete="off" aria-hidden="true" name="_gotcha" />
        ${
          detailed
            ? `
          <div class="x-field wide" data-field="consent">
            <label class="x-check" for="${prefix}-consent">
              <input type="checkbox" id="${prefix}-consent" name="consent" value="yes" />
              I agree to be contacted about this inquiry.
            </label>
            <span class="x-error" id="${prefix}-consent-err" role="alert" hidden></span>
          </div>`
            : ""
        }
        <div class="x-submit wide">
          <button class="x-btn" type="submit">Send message</button>
          ${
            !FORMSPREE_ID
              ? `<small>Demo mode: set FORMSPREE_ID in script.js to send via Formspree. Until then, sending opens your email app.</small>`
              : ""
          }
        </div>
      </form>
    `;

    const form = mountEl.querySelector("form");
    const touched = {};

    function getValues() {
      const fd = new FormData(form);
      return {
        name: (fd.get("name") || "").toString(),
        email: (fd.get("email") || "").toString(),
        phone: (fd.get("phone") || "").toString(),
        type: (fd.get("type") || "").toString(),
        budget: (fd.get("budget") || "").toString(),
        timeline: (fd.get("timeline") || "").toString(),
        message: (fd.get("message") || "").toString(),
        consent: form.querySelector('[name="consent"]')?.checked ? "yes" : "",
        _gotcha: (fd.get("_gotcha") || "").toString(),
      };
    }

    function validate(v) {
      const errs = {};
      if (!v.name.trim()) errs.name = "Please enter your name.";
      if (!v.email.trim()) errs.email = "Please enter your email address.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
        errs.email = "Enter a valid email, like name@example.com.";
      if (detailed && !v.type) errs.type = "Choose what you are inquiring about.";
      if (!v.message.trim()) errs.message = "Tell me a little about your project.";
      else if (v.message.trim().length < 20)
        errs.message = "Please add a little more detail (at least 20 characters).";
      if (detailed && v.consent !== "yes")
        errs.consent = "Please agree so I can reply to you.";
      return errs;
    }

    function syncErrors() {
      const errs = validate(getValues());
      ["name", "email", "type", "message", "consent"].forEach((key) => {
        const wrapper = form.querySelector(`[data-field="${key}"]`);
        if (!wrapper) return;
        const errEl = wrapper.querySelector(".x-error");
        const inputEl = wrapper.querySelector("input, select, textarea");
        const msg = touched[key] ? errs[key] : undefined;
        wrapper.classList.toggle("has-error", Boolean(msg));
        if (errEl) {
          errEl.textContent = msg || "";
          errEl.hidden = !msg;
        }
        if (inputEl) {
          if (msg) inputEl.setAttribute("aria-invalid", "true");
          else inputEl.removeAttribute("aria-invalid");
        }
      });
      return errs;
    }

    form.querySelectorAll("input, select, textarea").forEach((el) => {
      el.addEventListener("blur", () => {
        touched[el.name] = true;
        syncErrors();
      });
      el.addEventListener("input", () => {
        if (touched[el.name]) syncErrors();
      });
      el.addEventListener("change", () => {
        if (touched[el.name]) syncErrors();
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      ["name", "email", "type", "message", "consent"].forEach((k) => {
        touched[k] = true;
      });
      const errs = syncErrors();
      const firstBad = Object.keys(errs)[0];
      if (firstBad) {
        form.querySelector(`[name="${firstBad}"]`)?.focus();
        return;
      }
      const values = getValues();
      if (values._gotcha) return;

      if (!FORMSPREE_ID) {
        const body = Object.entries(values)
          .filter(([k, v]) => v && k !== "_gotcha" && k !== "consent")
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          "Portfolio inquiry from " + values.name
        )}&body=${encodeURIComponent(body)}`;
        renderSuccess("mailto");
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = "Sending...";
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        renderSuccess("sent");
      } catch {
        btn.disabled = false;
        btn.textContent = "Send message";
      }
    });
  }

  function renderSuccess(mode) {
    mountEl.innerHTML = `
      <div class="x-success" role="status">
        <h3>${mode === "sent" ? "Thank you." : "Almost there."}</h3>
        <p>${
          mode === "sent"
            ? "Your message is on its way. Expect a reply within two working days."
            : `Your email app should open with your message ready to send. If it did not, write to ${CONTACT_EMAIL}.`
        }</p>
        <button type="button" data-reset-form>Send another message</button>
      </div>
    `;
    mountEl
      .querySelector("[data-reset-form]")
      ?.addEventListener("click", renderForm);
  }

  renderForm();
}

/* --------------------------------------------------------------------------
   4. Initialize Everything on DOMContentLoaded
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Wire up navigation links
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      const targetPage = link.getAttribute("data-nav");
      showPage(targetPage, true);
    });
  });

  // Wire up smooth scroll anchors (e.g. "View case studies" on Home)
  document.querySelectorAll("[data-scroll]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-scroll");
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Wire up Back to top link
  document.querySelectorAll("[data-back-to-top]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Initialize Case Study interactive widgets (Home and Work pages)
  document
    .querySelectorAll("[data-cases-widget]")
    .forEach((widget) => initCaseStudyWidget(widget));

  // Initialize Contact & Inquiry forms (Home short form and Contact detailed form)
  document
    .querySelectorAll("[data-form-container]")
    .forEach((container) => initInquiryForm(container));

  // Sync initial page with URL hash if present
  const initialHash = window.location.hash.replace("#", "");
  if (VALID_PAGES.includes(initialHash)) {
    showPage(initialHash, false);
  }

  window.addEventListener("popstate", () => {
    const h = window.location.hash.replace("#", "") || "home";
    showPage(h, false);
  });
});
