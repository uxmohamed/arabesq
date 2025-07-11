import { DotsHorizontalIcon } from "@iconicicons/react";
import { Button, DropdownMenu } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button isIconOnly size="sm" variant="tertiary">
          <DotsHorizontalIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end" side="top">
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>{t("dropdownMenu.bold")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>B</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>{t("dropdownMenu.italic")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>I</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>{t("dropdownMenu.underline")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>{t("dropdownMenu.strikethrough")}</span>
            <DropdownMenu.Shortcut keys={["command", "option"]}>X</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>{t("dropdownMenu.createLink")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>K</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <span>{t("dropdownMenu.bulletedList")}</span>
            <DropdownMenu.Shortcut keys={["shift", "command"]}>8</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <span>{t("dropdownMenu.numberedList")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>7</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
