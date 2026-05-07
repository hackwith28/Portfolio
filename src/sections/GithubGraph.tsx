import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";

import { profile } from "@/content/profile";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/card";

function usernameFromUrl(url: string) {
  try {
    const u = new URL(url);
    const p = u.pathname.replace(/^\/+|\/+$/g, "");
    return p.split("/")[0] || "reeteshsahu1828";
  } catch {
    return "reeteshsahu1828";
  }
}

export function GithubGraph() {
  const username = usernameFromUrl(profile.links.github);
  const year = new Date().getFullYear();

  return (
    <section id="github" className="container-max py-20 sm:py-24">
      <SectionHeader
        kicker="GitHub"
        title="Consistency beats intensity."
        description="I like shipping small, clean iterations. This is a quick snapshot of my public activity cadence."
      />

      <div className="mt-12">
        <Reveal as="div">
          <Card className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-fg-muted">
                <Github className="h-4 w-4" />
                <a className="focus-ring rounded-md px-1.5 py-1 hover:text-fg hover:bg-bg-elevated/30" href={profile.links.github} target="_blank" rel="noreferrer">
                  {username}
                </a>
              </div>
              <div className="text-xs font-semibold text-fg-muted">
                Tip: press <span className="rounded-md border border-border/60 bg-bg-elevated/30 px-1.5 py-0.5 font-mono text-[10px]">/</span>{" "}
                for search
              </div>
            </div>

            <div className="mt-6 overflow-auto">
              <div className="min-w-[720px]">
                <GitHubCalendar
                  username={username}
                  year={year}
                  blockSize={13}
                  blockMargin={5}
                  fontSize={12}
                  showWeekdayLabels
                  theme={{
                    light: ["#eef2ff", "#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1"],
                    dark: ["#0b1020", "#2b164b", "#4c1d95", "#7c3aed", "#4fd1ff"]
                  }}
                />
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

