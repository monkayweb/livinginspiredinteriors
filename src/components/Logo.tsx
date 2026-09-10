export type LogoVariant = "inline" | "stacked";

const VIEWBOX: Record<LogoVariant, string> = {
  inline: "0 0 1404 156",
  stacked: "0 0 572 264",
};

/**
 * Renders a shared lockup sprite. "inline" is the single line mark at nine to
 * one, "stacked" is the three line block at roughly two to one. Size by height
 * or width and the aspect follows. Pass a label only when the logo is the sole
 * content of an interactive element that has no label of its own.
 */
export default function Logo({
  variant = "inline",
  className = "",
  label,
}: {
  variant?: LogoVariant;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      viewBox={VIEWBOX[variant]}
      className={className}
      {...(label
        ? { role: "img", "aria-label": label }
        : { "aria-hidden": true, focusable: "false" as const })}
    >
      <use href={`#lii-logo-${variant}`} />
    </svg>
  );
}
