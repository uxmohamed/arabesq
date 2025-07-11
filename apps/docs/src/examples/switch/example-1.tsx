import { Switch } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-12">
      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 1 */}
        <Switch label={t("form.label")} tooltip={t("form.tooltip")} />
        {/* Example 2 */}
        <Switch
          description={t("form.disabled")}
          helperText={t("form.helperText")}
          label={t("form.label")}
          tooltip={t("form.tooltip")}
          disabled
        />
      </div>
      <div className="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
        {/* Example 3 */}
        <Switch alignLabel="start" label={t("form.label")} tooltip={t("form.tooltip")} />
        {/* Example 4 */}
        <Switch
          alignLabel="start"
          description={t("form.disabled")}
          helperText={t("form.helperText")}
          label={t("form.label")}
          tooltip={t("form.tooltip")}
          disabled
        />
      </div>
    </div>
  );
}
