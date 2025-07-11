import { SwitchGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-fit text-left">
      <SwitchGroup
        alignLabels="end"
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.groupLabel")}
        tooltip={t("form.tooltip")}
      >
        <SwitchGroup.Item label={t("form.option1")} />
        <SwitchGroup.Item label={t("form.option2")} />
        <SwitchGroup.Item label={t("form.option3")} />
        <SwitchGroup.Item label={t("form.option4")} />
      </SwitchGroup>
    </div>
  );
}
