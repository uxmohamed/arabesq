import { ToggleGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <ToggleGroup type="multiple" size="sm" defaultValue={["mon", "wed"]}>
      <ToggleGroup.Item value="mon">{t("toggleGroup.mon")}</ToggleGroup.Item>
      <ToggleGroup.Item value="tue">{t("toggleGroup.tue")}</ToggleGroup.Item>
      <ToggleGroup.Item value="wed">{t("toggleGroup.wed")}</ToggleGroup.Item>
      <ToggleGroup.Item value="thu">{t("toggleGroup.thu")}</ToggleGroup.Item>
      <ToggleGroup.Item value="fri">{t("toggleGroup.fri")}</ToggleGroup.Item>
      <ToggleGroup.Item value="sat" disabled>
        {t("toggleGroup.sat")}
      </ToggleGroup.Item>
      <ToggleGroup.Item value="sun" disabled>
        {t("toggleGroup.sun")}
      </ToggleGroup.Item>
    </ToggleGroup>
  );
}
