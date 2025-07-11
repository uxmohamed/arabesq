import { ChevronDownIcon } from "@iconicicons/react";
import { Button, CheckboxGroup, Popover } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="tertiary" size="sm" after={<ChevronDownIcon />} shape="pill">
          {t("popover.showPopover", "Show Popover")}
        </Button>
      </Popover.Trigger>

      <Popover.Content className="min-w-[140px]">
        <CheckboxGroup label={t("popover.groupLabel", "Group Label")}>
          <CheckboxGroup.Item label={t("popover.option1", "Option 1")} />
          <CheckboxGroup.Item label={t("popover.option2", "Option 2")} />
          <CheckboxGroup.Item label={t("popover.option3", "Option 3")} />
          <CheckboxGroup.Item label={t("popover.option4", "Option 4")} />
        </CheckboxGroup>
      </Popover.Content>
    </Popover>
  );
}
