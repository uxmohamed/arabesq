import { Tooltip } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="top"
        />
        <Tooltip
          align="center"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="top"
        />
        <Tooltip
          align="end"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="top"
        />
      </div>
      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="bottom"
        />
        <Tooltip
          align="center"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="bottom"
        />
        <Tooltip
          align="end"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="bottom"
        />
      </div>
      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="left"
        />
        <Tooltip
          align="center"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="left"
        />
        <Tooltip
          align="end"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="left"
        />
      </div>
      <div className="flex items-center gap-4">
        <Tooltip
          align="start"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="right"
        />
        <Tooltip
          align="center"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="right"
        />
        <Tooltip
          align="end"
          animation={true}
          content={t("tooltip.info")}
          delayDuration={0}
          side="right"
        />
      </div>
    </section>
  );
}
