import { Slider } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col items-stretch gap-12">
      <Slider
        after="100"
        before="0"
        content={t("form.tooltipContent")}
        defaultValue={[50]}
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.label")}
        disabled
      />
    </div>
  );
}

export default Example;
