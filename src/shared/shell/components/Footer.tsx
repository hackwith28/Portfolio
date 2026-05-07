import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="container-max py-12">
      <div className="glass noise rounded-2xl px-5 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-extrabold tracking-tight">{profile.name}</div>
            <div className="mt-1 text-xs font-semibold text-fg-muted">
              Built with React • Vite • Tailwind • Motion • Glass UI
            </div>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-semibold text-fg-muted">
            <a className="focus-ring rounded-lg px-2 py-1 hover:text-fg" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="focus-ring rounded-lg px-2 py-1 hover:text-fg" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="focus-ring rounded-lg px-2 py-1 hover:text-fg" href={profile.links.leetcode} target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <a className="focus-ring rounded-lg px-2 py-1 hover:text-fg" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </div>
        <div className="mt-5 border-t border-border/60 pt-4 text-xs font-semibold text-fg-muted">
          © {new Date().getFullYear()} {profile.name}. Designed for product-company recruiting.
        </div>
      </div>
    </footer>
  );
}

