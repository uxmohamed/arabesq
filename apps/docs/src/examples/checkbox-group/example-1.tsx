import { CheckboxGroup } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex w-fit flex-col gap-8 text-left">
      <CheckboxGroup
        required
        description={t("form.description")}
        helperText={t("form.helperText")}
        label={t("form.vertical")}
        tooltip={t("form.tooltip")}
      >
        <CheckboxGroup.Item label={t("form.option1")}/>
        <CheckboxGroup.Item defaultChecked label={t("form.option2")}/>
        <CheckboxGroup.Item disabled label={t("form.option3")}/>
        <CheckboxGroup.Item label={t("form.option4")}/>
        <CheckboxGroup.Item label={t("form.option5")} tooltip={t("form.option5Tooltip")}/>
      </CheckboxGroup>

      <CheckboxGroup
        disabled
        description={t("form.disabled")}
        helperText={t("form.helperText")}
        label={t("form.horizontal")}
        orientation="horizontal"
        tooltip={t("form.tooltip")}
      >
        <CheckboxGroup.Item label={t("form.option1")}/>
        <CheckboxGroup.Item defaultChecked label={t("form.option2")}/>
        <CheckboxGroup.Item disabled label={t("form.option3")}/>
      </CheckboxGroup>
    </div>
  );
}
