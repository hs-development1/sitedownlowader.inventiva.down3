      // ── Tab switching ─────────────────────────────────────────────
      const tabs = document.querySelectorAll("[data-settings-tab]");
      const panels = document.querySelectorAll(".tab-panel");

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          const target = tab.dataset.settingsTab;

          tabs.forEach((t) => {
            const active = t.dataset.settingsTab === target;
            t.classList.toggle("font-semibold", active);
            t.classList.toggle("text-heading", active);
            t.classList.toggle("border-heading", active);
            t.classList.toggle("font-medium", !active);
            t.classList.toggle("text-muted", !active);
            t.classList.toggle("border-transparent", !active);
          });

          panels.forEach((p) => p.classList.add("hidden"));
          document.getElementById("tab-" + target)?.classList.remove("hidden");
        });
      });

      // ── Toggle switches ───────────────────────────────────────────
      document.addEventListener("click", (e) => {
        const btn = e.target.closest("[role='switch']");
        if (!btn) return;
        const checked = btn.getAttribute("aria-checked") === "true";
        btn.setAttribute("aria-checked", String(!checked));
        btn.classList.toggle("bg-heading", !checked);
        btn.classList.toggle("bg-border", checked);
        const knob = btn.querySelector("span");
        if (knob) {
          knob.classList.toggle("translate-x-5", !checked);
          knob.classList.toggle("translate-x-0", checked);
        }
      });

      // ── Notification mode selector ────────────────────────────────
      document.querySelectorAll("[data-notif-mode]").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("[data-notif-mode]").forEach((b) => {
            b.classList.remove("border-positive", "bg-positive/5", "border-2");
            b.classList.add("border", "border-border");
            b.querySelector("div").classList.remove("bg-positive/15");
            b.querySelector("div").classList.add("bg-subtle");
            b.querySelector("i").classList.remove("text-positive");
            b.querySelector("i").classList.add("text-muted");
          });
          btn.classList.remove("border", "border-border");
          btn.classList.add("border-2", "border-positive", "bg-positive/5");
          const icon = btn.querySelector("div");
          icon.classList.remove("bg-subtle");
          icon.classList.add("bg-positive/15");
          const i = btn.querySelector("i");
          i.classList.remove("text-muted");
          i.classList.add("text-positive");
        });
      });

      // ── Notification accordion ────────────────────────────────────
      document.querySelectorAll(".notif-accordion-trigger").forEach((btn) => {
        btn.addEventListener("click", () => {
          const target = document.getElementById(btn.dataset.target);
          const icon = document.getElementById("icon-" + btn.dataset.target);
          const isOpen = !target.classList.contains("hidden");
          target.classList.toggle("hidden", isOpen);
          icon?.classList.toggle("ph-caret-up", !isOpen);
          icon?.classList.toggle("ph-caret-down", isOpen);
        });
      });

      // ── Teams table data ──────────────────────────────────────────
      const TEAMS = [
        {
          name: "Marketing team",
          desc: "Team in charge of organizing marketing activities included campaign etc",
          members: [
            "assets/images/user2.png",
            "assets/images/user3.png",
            "assets/images/user4.png",
            "assets/images/user5.png",
          ],
          parent: "none",
        },
        {
          name: "Technical team",
          desc: "Manage and maintain technology infrastructure, troubleshooting technic...",
          members: [
            "assets/images/user6.png",
            "assets/images/user7.png",
            "assets/images/user8.png",
            "assets/images/user9.png",
            "assets/images/user10.png",
          ],
          parent: "none",
        },
        {
          name: "IT Operations team",
          desc: "Maintain smooth daily IT operations, network monitoring, system security...",
          members: [
            "assets/images/user3.png",
            "assets/images/user5.png",
            "assets/images/user7.png",
          ],
          parent: "Technical team",
        },
        {
          name: "Development team",
          desc: "Develop, test and implement software and liaise with technical teams to...",
          members: [
            "assets/images/user2.png",
            "assets/images/user4.png",
            "assets/images/user6.png",
            "assets/images/user8.png",
          ],
          parent: "none",
        },
      ];

      function memberAvatars(members) {
        const visible = members.slice(0, 4);
        const extra = members.length - visible.length;
        return `<div class="flex items-center -space-x-2">
          ${visible.map((src) => `<img src="${src}" class="w-7 h-7 rounded-full object-cover border-2 border-card" />`).join("")}
          ${extra > 0 ? `<span class="w-7 h-7 rounded-full bg-subtle border-2 border-card flex items-center justify-center text-xs font-semibold text-muted">+${extra}</span>` : ""}
        </div>`;
      }

      const tbody = document.getElementById("teams-tbody");
      if (tbody) {
        tbody.innerHTML = TEAMS.map(
          (team) => `
          <tr class="hover:bg-subtle/50 transition-colors">
            <td class="px-4 py-4"><input type="checkbox" class="w-4 h-4 rounded border-border" /></td>
            <td class="px-4 py-4 font-medium text-heading whitespace-nowrap">${team.name}</td>
            <td class="px-4 py-4 text-muted max-w-xs truncate">${team.desc}</td>
            <td class="px-4 py-4">${memberAvatars(team.members)}</td>
            <td class="px-4 py-4">
              <div class="relative inline-block" data-dropdown>
                <button data-dropdown-trigger class="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-border bg-card text-sm text-text hover:bg-subtle transition-colors" aria-haspopup="true" aria-expanded="false">
                  <i class="ph ph-users text-sm text-muted"></i>
                  ${team.parent}
                  <i class="ph ph-caret-down text-xs text-muted"></i>
                </button>
                <div data-dropdown-menu class="absolute left-0 top-full mt-1 w-44 card !rounded-xl shadow-xl p-1.5 opacity-0 pointer-events-none scale-95 origin-top-left transition-all duration-200 z-50">
                  <button class="w-full px-3 py-2 rounded-lg text-sm text-text hover:bg-subtle text-left transition-colors">none</button>
                  <button class="w-full px-3 py-2 rounded-lg text-sm text-text hover:bg-subtle text-left transition-colors">Marketing team</button>
                  <button class="w-full px-3 py-2 rounded-lg text-sm text-text hover:bg-subtle text-left transition-colors">Technical team</button>
                  <button class="w-full px-3 py-2 rounded-lg text-sm text-text hover:bg-subtle text-left transition-colors">Development team</button>
                </div>
              </div>
            </td>
            <td class="px-4 py-4">
              <button class="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:bg-subtle hover:text-heading transition-colors text-nowrap">
                <i class="ph ph-dots-three text-lg"></i>
              </button>
            </td>
          </tr>
        `,
        ).join("");
      }
