import { ChevronDownIcon, CopyIcon, DownloadIcon, EditIcon } from "@iconicicons/react";
import { ButtonGroup, Tooltip } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <ButtonGroup size="sm">
      <Tooltip
        align="center"
        animation={false}
        content={t("buttonGroup.viewRawCode")}
        delayDuration={0}
        side="top"
      >
        <ButtonGroup.Item>{t("buttonGroup.raw")}</ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content={t("buttonGroup.copy")} delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <CopyIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip content={t("buttonGroup.download")} delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <DownloadIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content={t("buttonGroup.edit")} delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <EditIcon />
        </ButtonGroup.Item>
      </Tooltip>

      <Tooltip align="center" animation={false} content={t("buttonGroup.more")} delayDuration={0}>
        <ButtonGroup.Item isIconOnly>
          <ChevronDownIcon />
        </ButtonGroup.Item>
      </Tooltip>
    </ButtonGroup>
  );
}
