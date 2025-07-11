import { Badge, Tabs, Tooltip } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex w-fit max-w-full flex-col gap-10 overflow-scroll p-2 text-left">
      {/* Example 1 */}
      <Tabs variant="contained-top" defaultValue="examples">
        <Tabs.List>
          <Tabs.Trigger value="examples">{t("tabs.examples")}</Tabs.Trigger>
          <Tabs.Trigger
            value="usage"
            after={<Badge size="sm" color="yellow">{t("tabs.new")}</Badge>}
          >
            {t("tabs.usage")}
          </Tabs.Trigger>
          <Tooltip content={t("form.tooltip")}>
            <Tabs.Trigger value="playground" disabled after={<Badge size="sm">{t("tabs.pro")}</Badge>}>
              {t("tabs.playground")}
            </Tabs.Trigger>
          </Tooltip>
        </Tabs.List>
        {/* Add Tabs.Content for each trigger/tab */}
      </Tabs>
    </div>
  );
}
