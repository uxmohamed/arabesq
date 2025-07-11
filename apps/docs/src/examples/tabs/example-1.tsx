import { BoxIcon, ClockIcon, SpinnerIcon } from "@iconicicons/react";
import { Badge, Tabs } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex w-fit max-w-full flex-col gap-10 overflow-scroll p-2 text-left">
      {/* Example 1 */}
      <Tabs variant="underlined" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">24</Badge>}
            value="actions"
            before={<SpinnerIcon />}
          >
            {t("tabs.inProgress")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">19</Badge>}
            before={<BoxIcon className="text-wg-green" />} value="Shipped"
          >
            {t("tabs.shipped")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">3</Badge>}
            before={<ClockIcon className="text-wg-red" />} value="delayed"
          >
            {t("tabs.security")}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>
      {/* Example 2 */}
      <Tabs variant="contained-bottom" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">24</Badge>}
            value="actions"
            before={<SpinnerIcon />}
          >
            {t("tabs.inProgress")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">19</Badge>}
            before={<BoxIcon className="text-wg-green" />} value="Shipped"
          >
            {t("tabs.shipped")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">3</Badge>}
            before={<ClockIcon className="text-wg-red" />} value="delayed"
          >
            {t("tabs.security")}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>
      {/* Example 3 */}
      <Tabs variant="fill" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">24</Badge>}
            value="actions"
            before={<SpinnerIcon />}
          >
            {t("tabs.inProgress")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">19</Badge>}
            before={<BoxIcon className="text-wg-green" />} value="Shipped"
          >
            {t("tabs.shipped")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">3</Badge>}
            before={<ClockIcon className="text-wg-red" />} value="delayed"
          >
            {t("tabs.security")}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>
      {/* Example 4 */}
      <Tabs variant="contained-top" defaultValue="actions">
        <Tabs.List>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">24</Badge>}
            value="actions"
            before={<SpinnerIcon />}
          >
            {t("tabs.inProgress")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">19</Badge>}
            before={<BoxIcon className="text-wg-green" />} value="Shipped"
          >
            {t("tabs.shipped")}
          </Tabs.Trigger>
          <Tabs.Trigger
            after={<Badge stroke size="sm" shape="pill">3</Badge>}
            before={<ClockIcon className="text-wg-red" />} value="delayed"
          >
            {t("tabs.security")}
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
