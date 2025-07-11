import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText={t("progressBar.helperText")}
        indicator="50%"
        label={t("progressBar.label")}
        tooltip={t("progressBar.tooltip")}
        value={50}
      />

      <ProgressBar helperText={t("progressBar.helperText")}
        value={50} />

      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        variant="inline"
        indicator="50%"
        label={t("progressBar.label")}
        tooltip={t("progressBar.tooltip")}
        value={50}
      />
    </div>
  );
}
