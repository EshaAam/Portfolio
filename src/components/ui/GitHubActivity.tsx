"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

const purpleTheme = {
  dark: ["#16161f", "#4c1d95", "#6d28d9", "#8b5cf6", "#c4b5fd"],
};

/**
 * Live GitHub contribution calendar.
 * Scrolls horizontally on narrow screens instead of clipping.
 */
export function GitHubActivity() {
  return (
    <Reveal className="mt-20 border-t border-white/[0.06] pt-14">
      <h3 className="mx-auto mb-8 w-fit text-center text-xl font-semibold tracking-tight">
        <span className="gradient-text">Days I code</span>
      </h3>
      <div className="no-scrollbar overflow-x-auto">
        <div className="mx-auto w-max px-1 text-foreground-muted">
          <GitHubCalendar
            username={SITE.githubUsername}
            colorScheme="dark"
            theme={purpleTheme}
            blockSize={12}
            blockMargin={4}
            blockRadius={3}
            fontSize={12}
            labels={{ totalCount: "{{count}} contributions in the last year" }}
          />
        </div>
      </div>
    </Reveal>
  );
}
