      document.addEventListener("DOMContentLoaded", () => {
        // ── Toast helper ───────────────────────────────────────────
        function showToast(message, type = "success") {
          const existing = document.getElementById("detail-toast");
          if (existing) existing.remove();
          const icons = {
            success: "ph-check-circle",
            info: "ph-info",
            warning: "ph-warning",
          };
          const colors = {
            success: "text-positive",
            info: "text-accent",
            warning: "text-warn",
          };
          const toast = document.createElement("div");
          toast.id = "detail-toast";
          toast.className =
            "fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-4 py-3 rounded-xl card shadow-xl border border-border text-sm font-medium text-heading min-w-[260px] max-w-sm opacity-0 translate-y-2 transition-all duration-300";
          toast.innerHTML = `<i class="ph-fill ${icons[type]} text-xl ${colors[type]} shrink-0"></i><span class="flex-1">${message}</span><button class="text-muted hover:text-heading ml-2 shrink-0" onclick="this.parentElement.remove()"><i class="ph ph-x text-base"></i></button>`;
          document.body.appendChild(toast);
          requestAnimationFrame(() => {
            toast.classList.remove("opacity-0", "translate-y-2");
          });
          setTimeout(() => {
            toast.classList.add("opacity-0", "translate-y-2");
            setTimeout(() => toast.remove(), 300);
          }, 3500);
        }

        // ── Tab switching ──────────────────────────────────────────
        const tabs = document.querySelectorAll('[role="tab"]');
        const panels = {
          activity: document.getElementById("tab-activity"),
          tasks: document.getElementById("tab-tasks"),
          email: document.getElementById("tab-email"),
          document: document.getElementById("tab-document"),
          notes: document.getElementById("tab-notes"),
        };

        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            const key = tab.dataset.tab;
            tabs.forEach((t) => {
              const on = t === tab;
              t.setAttribute("aria-selected", on);
              t.classList.toggle("font-semibold", on);
              t.classList.toggle("text-heading", on);
              t.classList.toggle("border-heading", on);
              t.classList.toggle("font-medium", !on);
              t.classList.toggle("text-muted", !on);
              t.classList.toggle("border-transparent", !on);
            });
            Object.entries(panels).forEach(([k, el]) => {
              if (el) el.classList.toggle("hidden", k !== key);
            });
          });
        });

        // ── Collapsible sidebar sections ───────────────────────────
        [
          {
            toggle: "more-about-toggle",
            body: "more-about-body",
            icon: "more-about-icon",
          },
          {
            toggle: "contact-assoc-toggle",
            body: "contact-assoc-body",
            icon: "contact-assoc-icon",
          },
          {
            toggle: "company-assoc-toggle",
            body: "company-assoc-body",
            icon: "company-assoc-icon",
          },
        ].forEach(({ toggle, body, icon }) => {
          const btn = document.getElementById(toggle);
          const content = document.getElementById(body);
          const ico = document.getElementById(icon);
          if (!btn || !content) return;
          btn.addEventListener("click", () => {
            const open = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !open);
            content.classList.toggle("hidden", open);
            if (ico)
              ico.className = open
                ? "ph ph-caret-down text-base text-muted transition-transform duration-200"
                : "ph ph-caret-up text-base text-muted transition-transform duration-200";
          });
        });

        // ── Document folder collapse/expand ────────────────────────
        document.querySelectorAll("[data-folder]").forEach((folder) => {
          const btn = folder.querySelector("[data-folder-toggle]");
          const body = folder.querySelector("[data-folder-body]");
          const icon = folder.querySelector("[data-folder-icon]");
          if (!btn || !body) return;
          btn.addEventListener("click", () => {
            const open = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !open);
            body.classList.toggle("hidden", open);
            if (icon) {
              icon.className = open
                ? "ph ph-caret-down text-sm text-muted transition-transform duration-200"
                : "ph ph-caret-up text-sm text-muted transition-transform duration-200";
            }
          });
        });

        // ── Document tab action buttons ────────────────────────────
        document
          .querySelector("#tab-document [data-action='create-folder']")
          ?.addEventListener("click", () => {
            showToast("Folder creation coming soon.", "info");
          });
        document
          .querySelector("#tab-document [data-action='add-file']")
          ?.addEventListener("click", () => {
            showToast("File upload coming soon.", "info");
          });

        // ── Download buttons ───────────────────────────────────────
        document
          .getElementById("tab-document")
          ?.addEventListener("click", (e) => {
            const btn = e.target.closest("button:has(.ph-download-simple)");
            if (btn) {
              const name =
                btn
                  .closest("div.flex")
                  ?.querySelector("p.text-sm")
                  ?.textContent?.trim() ?? "file";
              showToast(`Downloading "${name}"…`, "info");
            }
          });
      });
