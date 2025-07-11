import { BookIcon, LockIcon, VideoIcon } from "@iconicicons/react";
import { Tabs } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto w-fit text-left">
      <Tabs variant="contained-bottom" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger before={<VideoIcon />} value="actions">
            {t("tabs.actions")}
          </Tabs.Trigger>

          <Tabs.Trigger before={<BookIcon />} value="wiki">
            {t("tabs.wiki")}
          </Tabs.Trigger>

          <Tabs.Trigger before={<LockIcon />} value="security">
            {t("tabs.security")}
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="actions">{t("tabs.actionsTabContent")}</Tabs.Content>
        <Tabs.Content value="wiki">{t("tabs.wikiTabContent")}</Tabs.Content>
        <Tabs.Content value="security">{t("tabs.securityTabContent")}</Tabs.Content>
      </Tabs>
    </div>
  );
}

export default Example;
