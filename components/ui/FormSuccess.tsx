import type { FormSuccessUI } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

type FormSuccessProps = {
  name: string;
  title: string;
  message: string;
  leaving: boolean;
  visibleFor: number;
  onClose: () => void;
  ui: FormSuccessUI;
  className?: string;
};

/** Thank-you card shown after a (dummy) form submission; fades out on its own */
export const FormSuccess = ({ name, title, message, leaving, visibleFor, onClose, ui, className = "" }: FormSuccessProps) => {
  const heading = name ? title.replace("{name}", name) : title.replace(", {name}", "").replace("{name}", "");

  return (
    <div
      role="status"
      aria-live="polite"
      className={`relative overflow-hidden rounded-[12px] border border-[var(--color-pricing-border)] bg-[var(--color-bg-mint-soft)] pb-5 pl-4 pr-11 pt-4 text-left shadow-[0_10px_28px_-16px_var(--color-shadow-card-35)] animate-fade-in transition-[opacity,transform] ease-[ease] 2xl:pb-6 2xl:pl-5 2xl:pr-14 2xl:pt-5 ${
        // fades in when shown; fades out (duration = fadeFor in useDummySubmit) before it is removed
        leaving ? "-translate-y-[6px] opacity-0 duration-[400ms]" : "duration-[450ms]"
      } ${className}`}
    >
      <div className="flex items-start gap-3 2xl:gap-4">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-form-accent)] text-[var(--color-white)] 2xl:h-10 2xl:w-10" aria-hidden="true">
          <Icon name={ui.successIcon} className="h-4 w-4 2xl:h-5 2xl:w-5" strokeWidth={3} />
        </span>
        <div className="min-w-0">
          <p className="text-[17px] font-bold leading-snug text-[var(--color-title)] 2xl:text-[20px] 3xl:text-[22px]">{heading}</p>
          <p className="mt-1 text-[14.5px] leading-relaxed text-[var(--color-text-grey)] 2xl:text-[16px] 3xl:text-[18px]">{message}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label={ui.closeLabel}
        className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-text-grey)] transition-colors hover:bg-[var(--color-bg-mint)] 2xl:right-3.5 2xl:top-3.5 2xl:h-9 2xl:w-9"
      >
        <Icon name={ui.closeIcon} className="h-4 w-4 2xl:h-5 2xl:w-5" strokeWidth={2.4} />
      </button>
      {/* time left before the message closes itself */}
      <span
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--color-form-accent)] opacity-60 animate-shrink-width"
        style={{ animationDuration: `${visibleFor}ms` }}
        aria-hidden="true"
      />
    </div>
  );
};

/** small spinner for the submit button while the dummy request runs */
export const Spinner = ({ name, className = "" }: { name: string; className?: string }) => (
  <Icon name={name} motion="" className={`animate-spin ${className}`} strokeWidth={2.4} />
);
