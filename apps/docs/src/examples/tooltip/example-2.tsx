import * as React from "react";
import { Tooltip } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-4">
        <Tooltip content={t("tooltip.compact")} />
        <Tooltip color="secondary" content={t("tooltip.compact")} />
        <Tooltip color="soft" content={t("tooltip.compact")} arrow={false} sideOffset={10} />
      </div>
      <div className="flex items-center gap-4">
        <Tooltip content={t("tooltip.compactLong")} size="md" />
        <Tooltip color="secondary" content={t("tooltip.compactLong")} size="md" />
        <Tooltip color="soft" content={t("tooltip.compactLong")} arrow={false} sideOffset={10} size="md" />
      </div>
    </div>
  );
}
