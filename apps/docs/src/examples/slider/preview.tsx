import { MinusIcon, PlusIcon } from "@iconicicons/react";
import { Slider } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-12 text-surface-300">
      <Slider
        after={<PlusIcon className="size-6 text-surface-300 dark:text-gray-500" />}
        before={<MinusIcon className="size-6 text-surface-300 dark:text-gray-500" />}
        content={t("form.tooltipContent", "A tooltip is a small box that appears when hovering over a UI element, providing additional information.")}
        defaultValue={[50]}
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.label")}
      />
    </div>
  );
}
