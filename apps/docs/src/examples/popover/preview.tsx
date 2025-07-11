import { ChevronDownIcon } from "@iconicicons/react";
import { Button, CheckboxGroup, Popover } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="tertiary" size="sm" after={<ChevronDownIcon />} shape="pill">
          {t("popover.showPopover")}
        </Button>
      </Popover.Trigger>

      <Popover.Content className="min-w-[140px]">
        <CheckboxGroup label={t("popover.groupLabel")}>
          <CheckboxGroup.Item label={t("popover.option1")} />
          <CheckboxGroup.Item label={t("popover.option2")} />
          <CheckboxGroup.Item label={t("popover.option3")} />
          <CheckboxGroup.Item label={t("popover.option4")} />
        </CheckboxGroup>
      </Popover.Content>
    </Popover>
  );
}
