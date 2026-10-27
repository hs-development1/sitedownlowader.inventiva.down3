      // ── App catalog ───────────────────────────────────────────────
      const ALL_APPS = [
        // Featured
        {
          id: "zapier",
          name: "Zapier",
          domain: "zapier.com",
          logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
          icon: "ph-lightning",
          bg: "#FF4A00",
          cat: ["all", "marketing"],
          desc: "Automates workflows by connecting your CRM with other apps.",
          perms: [
            "Access your CRM workflows and triggers",
            "Create and manage automation zaps",
            "Send and receive data from connected apps",
          ],
        },
        {
          id: "make",
          name: "Make",
          domain: "make.com",
          logo: "https://cdn.worldvectorlogo.com/logos/make-logo-rgb-3.svg",
          icon: "ph-intersect",
          bg: "#6D2EF9",
          cat: ["all", "marketing"],
          desc: "Automate complex workflows by integrating your CRM with Make, creating powerful task automations.",
          perms: [
            "Access your CRM data and workflows",
            "Build visual automation scenarios",
            "Connect unlimited apps and services",
          ],
        },
        {
          id: "asana",
          name: "Asana",
          domain: "asana.com",
          logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
          icon: "ph-circles-three",
          bg: "#F06A6A",
          cat: ["all", "marketing"],
          desc: "Connect Asana with your CRM to manage tasks and track project progress seamlessly.",
          perms: [
            "Access Asana tasks and projects",
            "Sync CRM contacts with Asana team members",
            "Create tasks from CRM records",
          ],
        },
        {
          id: "stripe",
          name: "Stripe",
          domain: "stripe.com",
          logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
          icon: "ph-credit-card",
          bg: "#6772E5",
          cat: ["all", "billing"],
          desc: "Simplify payment processing by connecting your CRM to Stripe for real-time transaction tracking.",
          perms: [
            "Access payment and subscription data",
            "Sync customer billing information",
            "Track revenue and transaction history",
          ],
        },
        // Marketing
        {
          id: "hubspot",
          name: "HubSpot",
          domain: "hubspot.com",
          logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
          icon: "ph-broadcast",
          bg: "#FF7A59",
          cat: ["all", "marketing"],
          desc: "Sync contacts, deals, and email campaigns between Clientra and HubSpot seamlessly.",
          perms: [
            "Access HubSpot CRM records",
            "Sync marketing campaigns",
            "Read and write contact properties",
          ],
        },
        {
          id: "mailchimp",
          name: "Mailchimp",
          domain: "mailchimp.com",
          logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg",
          icon: "ph-envelope-open",
          bg: "#FFE01B",
          cat: ["all", "marketing", "communication"],
          desc: "Send targeted email campaigns to your CRM contacts via Mailchimp with one click.",
          perms: [
            "Access contact lists and segments",
            "Send and schedule email campaigns",
            "Read campaign analytics",
          ],
        },
        // Support
        {
          id: "zendesk",
          name: "Zendesk",
          domain: "zendesk.com",
          icon: "ph-headset",
          bg: "#03363D",
          cat: ["all", "support"],
          desc: "Link support tickets in Zendesk directly to CRM contacts and deals.",
          perms: [
            "Access support tickets",
            "Sync ticket status with CRM",
            "View customer interaction history",
          ],
        },
        {
          id: "intercom",
          name: "Intercom",
          domain: "intercom.com",
          icon: "ph-chat-circle-dots",
          bg: "#1F8EED",
          cat: ["all", "support", "communication"],
          desc: "Embed Intercom conversations inside your CRM for seamless customer support.",
          perms: [
            "Access conversation threads",
            "Sync user profiles",
            "Trigger automated messages",
          ],
        },
        // Files
        {
          id: "dropbox",
          name: "Dropbox",
          domain: "dropbox.com",
          logo: "https://cdn.worldvectorlogo.com/logos/dropbox.svg",
          icon: "ph-folder-open",
          bg: "#0061FF",
          cat: ["all", "files"],
          desc: "Integrate Dropbox with your CRM to easily share and manage files for a more organized workflow.",
          perms: [
            "Access and manage files in Dropbox",
            "Share documents linked to CRM records",
            "Sync folder structure",
          ],
        },
        {
          id: "gdrive",
          name: "Google Drive",
          domain: "drive.google.com",
          icon: "ph-google-drive-logo",
          bg: "#4285F4",
          cat: ["all", "files"],
          desc: "Attach and sync Google Drive files directly to CRM contacts, deals, and companies.",
          perms: [
            "Access Google Drive files",
            "Read and write documents",
            "Share files with CRM contacts",
          ],
        },
        // Communication
        {
          id: "slack",
          name: "Slack",
          domain: "slack.com",
          logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
          icon: "ph-slack-logo",
          bg: "#4A154B",
          cat: ["all", "communication"],
          desc: "Enable seamless team collaboration and real-time CRM updates directly within Slack.",
          perms: [
            "Access basic company information",
            "Send messages to Slack channels",
            "Create and manage threads",
            "View and interact with conversations",
            "Add or remove users",
          ],
        },
        {
          id: "gmail",
          name: "Gmail",
          domain: "gmail.com",
          logo: "https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg",
          icon: "ph-envelope-simple",
          bg: "#EA4335",
          cat: ["all", "communication"],
          desc: "Sync Gmail messages with CRM contacts and log emails automatically.",
          perms: [
            "Read and send emails",
            "Access contact information",
            "Log emails to CRM records",
          ],
        },
        // Analytics
        {
          id: "crealbit",
          name: "CrealBit",
          domain: "clearbit.com",
          logo: "https://cdn.worldvectorlogo.com/logos/clearbit.svg",
          icon: "ph-plugs-connected",
          bg: "#2563eb",
          cat: ["all", "analytics"],
          desc: "Enrich your CRM data by integrating with Clearbit for better customer insights and lead generation.",
          perms: [
            "Access basic company information",
            "Enrich contact profiles",
            "Pull firmographic data",
          ],
        },
        {
          id: "amplitude",
          name: "Amplitude",
          domain: "amplitude.com",
          icon: "ph-chart-line-up",
          bg: "#1677FF",
          cat: ["all", "analytics"],
          desc: "Analyze CRM user behavior and product usage with Amplitude's powerful analytics.",
          perms: [
            "Access event data",
            "Sync user properties",
            "Read funnel and retention metrics",
          ],
        },
        // E-commerce
        {
          id: "shopify",
          name: "Shopify",
          domain: "shopify.com",
          icon: "ph-storefront",
          bg: "#96bf48",
          cat: ["all", "ecommerce"],
          desc: "Sync Shopify orders and customer data with your CRM for a full e-commerce view.",
          perms: [
            "Access order and customer data",
            "Sync product catalog",
            "Track abandoned carts",
          ],
        },
        {
          id: "woocommerce",
          name: "WooCommerce",
          domain: "woocommerce.com",
          icon: "ph-shopping-cart",
          bg: "#7F54B3",
          cat: ["all", "ecommerce"],
          desc: "Pull WooCommerce sales and orders into your CRM contacts and deals.",
          perms: [
            "Access WooCommerce orders",
            "Sync customer data",
            "Read product and inventory data",
          ],
        },
        // Calendar
        {
          id: "gcal",
          name: "Google Calendar",
          domain: "calendar.google.com",
          icon: "ph-calendar",
          bg: "#4285F4",
          cat: ["all", "calendar"],
          desc: "Schedule meetings with CRM contacts and sync events to Google Calendar automatically.",
          perms: [
            "Read and write calendar events",
            "Access contact calendars",
            "Create meeting invites",
          ],
        },
        {
          id: "calendly",
          name: "Calendly",
          domain: "calendly.com",
          icon: "ph-clock",
          bg: "#006BFF",
          cat: ["all", "calendar"],
          desc: "Let contacts book meetings through Calendly and sync automatically with your CRM.",
          perms: [
            "Access scheduling data",
            "Sync bookings to CRM",
            "Read invitee contact information",
          ],
        },
        // Leads
        {
          id: "linkedin",
          name: "LinkedIn",
          domain: "linkedin.com",
          icon: "ph-linkedin-logo",
          bg: "#0A66C2",
          cat: ["all", "leads", "social"],
          desc: "Import LinkedIn leads and enrich CRM contacts with professional profile data.",
          perms: [
            "Access public profile data",
            "Import lead information",
            "Sync connection activity",
          ],
        },
        {
          id: "fb-leads",
          name: "Facebook Leads",
          domain: "facebook.com",
          icon: "ph-facebook-logo",
          bg: "#1877F2",
          cat: ["all", "leads", "social"],
          desc: "Capture Facebook Lead Ad submissions directly into your CRM contacts.",
          perms: [
            "Access Facebook lead forms",
            "Read lead ad submissions",
            "Sync contact data",
          ],
        },
      ];

      const SECTIONS = [
        {
          key: "all",
          label: "Featured apps",
          sub: "Streamline work, save your time and growth easier",
        },
        {
          key: "marketing",
          label: "Marketing Automation",
          sub: "Be Easier doing a business with best automations",
        },
        {
          key: "support",
          label: "Customer Support",
          sub: "Keep your customers happy and resolve issues faster",
        },
        {
          key: "billing",
          label: "Sales and Billing",
          sub: "Manage payments and track revenue effortlessly",
        },
        {
          key: "communication",
          label: "Email & Communication",
          sub: "Stay connected with your team and customers",
        },
        {
          key: "analytics",
          label: "Data & Analytics",
          sub: "Make smarter decisions with real-time data insights",
        },
        {
          key: "ecommerce",
          label: "E-commerce",
          sub: "Connect your store and sync orders automatically",
        },
        {
          key: "calendar",
          label: "Calendar & Scheduling",
          sub: "Never miss a meeting or follow-up again",
        },
        {
          key: "leads",
          label: "Lead Management",
          sub: "Capture and nurture leads from every channel",
        },
        {
          key: "social",
          label: "Social Media",
          sub: "Manage social interactions alongside your CRM",
        },
      ];

      let activeCategory = "all";
      let searchQuery = "";

      function appIconEl(app, cls = "w-10 h-10") {
        if (app.logo) {
          return `<div class="${cls} rounded-xl flex items-center justify-center shrink-0 bg-card border border-border overflow-hidden p-1.5">
            <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain" onerror="this.parentElement.style.background='${app.bg}';this.parentElement.style.border='none';this.parentElement.style.padding='0';this.parentElement.innerHTML='<i class=\\'ph ${app.icon} text-lg text-white\\'></i>'">
          </div>`;
        }
        return `<div class="${cls} rounded-xl flex items-center justify-center shrink-0" style="background:${app.bg}">
          <i class="ph ${app.icon} text-lg text-white"></i>
        </div>`;
      }

      function appCardHTML(app) {
        return `<div class="card p-4 flex items-start gap-3 hover:shadow-sm transition-shadow cursor-pointer" data-app-id="${app.id}">
          ${appIconEl(app)}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5">
              <p class="text-sm font-bold text-heading truncate">${app.name}</p>
            </div>
            <a class="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors" href="#">
              ${app.domain} <i class="ph ph-arrow-square-out text-[11px]"></i>
            </a>
            <p class="text-xs text-muted mt-1.5 leading-relaxed line-clamp-2">${app.desc}</p>
          </div>
        </div>`;
      }

      function render() {
        const body = document.getElementById("explore-body");
        const emptyEl = document.getElementById("explore-empty");
        const q = searchQuery.toLowerCase();

        const sectionsToShow =
          activeCategory === "all"
            ? SECTIONS
            : SECTIONS.filter((s) => s.key === activeCategory);

        const rendered = sectionsToShow
          .map((section) => {
            const apps = ALL_APPS.filter((app) => {
              const matchCat = app.cat.includes(section.key);
              const matchSearch =
                !q ||
                app.name.toLowerCase().includes(q) ||
                app.desc.toLowerCase().includes(q);
              return matchCat && matchSearch;
            });
            return { section, apps };
          })
          .filter((r) => r.apps.length > 0);

        if (rendered.length === 0) {
          body.innerHTML = "";
          emptyEl.style.display = "flex";
          return;
        }
        emptyEl.style.display = "none";

        body.innerHTML = rendered
          .map(
            ({ section, apps }) =>
              `<div>
            <div class="mb-3">
              <h2 class="text-base font-bold text-heading">${section.label}</h2>
              <p class="text-xs text-muted mt-0.5">${section.sub}</p>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
              ${apps.map(appCardHTML).join("")}
            </div>
          </div>`,
          )
          .join("");

        // Wire card clicks → connect modal
        body.querySelectorAll("[data-app-id]").forEach((card) => {
          card.addEventListener("click", () => {
            const app = ALL_APPS.find((a) => a.id === card.dataset.appId);
            if (app) openModal(app);
          });
        });
      }

      function openModal(app) {
        document.getElementById("modal-title").textContent =
          `Connect Clientra with ${app.name}`;
        document.getElementById("modal-url").textContent =
          `app.Clientra.com/integrations/${app.id}`;

        const iconEl = document.getElementById("modal-icon-app");
        iconEl.style.background = app.logo ? "var(--color-card)" : app.bg;
        iconEl.style.border = app.logo
          ? "1px solid var(--color-border)"
          : "2px solid var(--color-card)";
        iconEl.style.padding = app.logo ? "10px" : "0";
        iconEl.innerHTML = app.logo
          ? `<img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain" onerror="this.parentElement.style.background='${app.bg}';this.parentElement.style.border='2px solid var(--color-card)';this.parentElement.style.padding='0';this.parentElement.innerHTML='<i class=\\'ph ${app.icon} text-2xl text-white\\'></i>'">`
          : `<i class="ph ${app.icon} text-2xl text-white"></i>`;

        document.getElementById("modal-perms").innerHTML = app.perms
          .map(
            (p) => `<li class="flex items-start gap-2.5 text-sm text-text">
            <i class="ph-fill ph-check-circle text-base text-positive shrink-0 mt-0.5"></i>${p}
          </li>`,
          )
          .join("");

        const backdrop = document.getElementById("connect-modal-backdrop");
        const modal = document.getElementById("connect-modal");
        backdrop.classList.remove("opacity-0", "pointer-events-none");
        modal.classList.remove("scale-95");
        modal.classList.add("scale-100");
      }

      function closeModal() {
        const backdrop = document.getElementById("connect-modal-backdrop");
        const modal = document.getElementById("connect-modal");
        backdrop.classList.add("opacity-0", "pointer-events-none");
        modal.classList.remove("scale-100");
        modal.classList.add("scale-95");
      }

      document.addEventListener("DOMContentLoaded", () => {
        render();

        // Category nav
        document.querySelectorAll(".cat-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            activeCategory = btn.dataset.category;
            document.querySelectorAll(".cat-btn").forEach((b) => {
              const active = b.dataset.category === activeCategory;
              b.classList.toggle("bg-subtle", active);
              b.classList.toggle("text-heading", active);
              b.classList.toggle("font-semibold", active);
              b.classList.toggle("font-medium", !active);
              b.classList.toggle("text-muted", !active);
            });
            render();
          });
        });

        // Search
        document
          .getElementById("explore-search")
          .addEventListener("input", (e) => {
            searchQuery = e.target.value.trim();
            render();
          });

        // Modal
        document
          .getElementById("connect-modal-close")
          ?.addEventListener("click", closeModal);
        document
          .getElementById("connect-modal-cancel")
          ?.addEventListener("click", closeModal);
        document
          .getElementById("connect-modal-backdrop")
          ?.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) closeModal();
          });
        document
          .getElementById("modal-copy-btn")
          ?.addEventListener("click", () => {
            const url = document.getElementById("modal-url")?.textContent;
            navigator.clipboard?.writeText(url).catch(() => {});
            const btn = document.getElementById("modal-copy-btn");
            btn.innerHTML = `<i class="ph ph-check text-base"></i> Copied!`;
            setTimeout(() => {
              btn.innerHTML = `<i class="ph ph-copy text-base"></i> Copy link`;
            }, 2000);
          });
      });
