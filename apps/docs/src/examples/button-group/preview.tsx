import { PlusIcon } from "@iconicicons/react";
import { ButtonGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <ButtonGroup>
      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        {t("buttonGroup.button")}
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        {t("buttonGroup.button")}
      </ButtonGroup.Item>

      <ButtonGroup.Item after={<PlusIcon />} before={<PlusIcon />}>
        {t("buttonGroup.button")}
      </ButtonGroup.Item>
    </ButtonGroup>
  );
}
