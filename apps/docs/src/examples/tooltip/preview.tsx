import { Tooltip } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <Tooltip
      animation={true}
      content={t("form.tooltip.info")}
      delayDuration={0}
    />
  );
}
