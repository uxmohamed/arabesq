import * as React from "react";
import { SpinnerIcon } from "@iconicicons/react";
import { ProgressBar } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value + 1) % 101);
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="inline-block w-full max-w-[400px]">
      <ProgressBar
        afterIndicator={<SpinnerIcon className="animate-spin" />}
        helperText={t("progressBar.helperText")}
        indicator={value + "%"}
        label={t("progressBar.label")}
        tooltip={t("progressBar.tooltip")}
        value={value}
        max={100}
      />
    </div>
  );
}
