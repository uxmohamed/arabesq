import { CheckCircleIcon, CloseCircleIcon, CloseIcon, SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="inline-flex w-full max-w-[400px] flex-col gap-y-12">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText={`27MB ${t("progressBar.of") } 60MB`}
        indicator="50%"
        label={t("progressBar.uploading")}
        tooltip={t("progressBar.tooltip")}
        value={50}
      />

      <ProgressBar
        afterIndicator={<CheckCircleIcon className="text-wg-green" />}
        color="green"
        helperText={`60MB ${t("progressBar.of") } 60MB`}
        indicator="100%"
        label={t("progressBar.uploadingComplete")}
        tooltip={t("progressBar.tooltip")}
        value={100}
      />

      <ProgressBar
        afterIndicator={<CloseCircleIcon className="text-wg-red" />}
        color="red"
        helperText={<span className="text-destructive">{t("progressBar.oops")}</span>}
        label={t("progressBar.uploadingFailed")}
        tooltip={t("progressBar.tooltip")}
        value={100}
      />

      <ProgressBar
        color="green"
        indicator="368"
        label={t("progressBar.classA")}
        max={500}
        value={368}
        variant="inline"
      />

      <ProgressBar
        color="orange"
        indicator="211"
        label={t("progressBar.classB")}
        max={500}
        value={211}
        variant="inline"
      />

      <ProgressBar
        color="red"
        indicator="96"
        label={t("progressBar.classC")}
        max={500}
        value={96}
        variant="inline"
      />

      <ProgressBar
        afterIndicator={<CloseIcon />}
        color="secondary"
        description="(23.6MB)"
        indicator={<span className="text-surface-500">{`50% (9 ${t("progressBar.seconds")} ${t("progressBar.remaining")})`}</span>}
        label={t("progressBar.designSystemFig")}
        tooltip={t("progressBar.tooltip")}
        value={50}
      />

      <ProgressBar indicator="70%" label={t("progressBar.pleaseWait")}
        value={70} color="secondary" />

      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        indicator="50%"
        label={t("progressBar.progress")}
        tooltip={t("progressBar.tooltip")}
        value={50}
        variant="inline"
      />

      <ProgressBar indicator={`50% ${t("progressBar.complete")}`}
        value={50} variant="inline" color="blue" />

      <ProgressBar
        afterIndicator={<CloseIcon />}
        description="35%"
        value={35}
        variant="inline"
        color="yellow"
      />

      <ProgressBar value={70} color="pink" helperText={`(650MB/1.12GB) · 17 ${t("progressBar.seconds")} ${t("progressBar.remaining")}`} />
    </div>
  );
}
