import { SwitchGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex w-fit flex-col gap-8 text-left">
      {/* Example 1 */}
      <SwitchGroup
        alignLabels="end"
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.groupLabel")}
        tooltip={t("form.tooltip")}
      >
        <SwitchGroup.Item defaultChecked label={t("form.option1")} />
        <SwitchGroup.Item disabled label={t("form.option2")} />
        <SwitchGroup.Item label={t("form.option3")} />
        <SwitchGroup.Item description={t("form.description")} helperText={t("form.helperText")} label={t("form.option4")} tooltip={t("form.tooltip")} />
      </SwitchGroup>
      {/* Example 2 */}
      <SwitchGroup
        alignLabels="start"
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.groupLabel")}
        tooltip={t("form.tooltip")}
      >
        <SwitchGroup.Item defaultChecked label={t("form.option1")} />
        <SwitchGroup.Item disabled label={t("form.option2")} />
        <SwitchGroup.Item label={t("form.option3")} />
        <SwitchGroup.Item description={t("form.description")} helperText={t("form.helperText")} label={t("form.option4")} tooltip={t("form.tooltip")} />
      </SwitchGroup>
    </div>
  );
}
