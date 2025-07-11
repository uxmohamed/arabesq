import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@iconicicons/react";
import { Button, DropdownMenu } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>{t("dropdownMenu.openMenu")}</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Item disabled>
            <RedoIcon />
            <span>{t("dropdownMenu.reply")}</span>
            <DropdownMenu.Shortcut keys={["option"]}>R</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <PinIcon />
            <span>{t("dropdownMenu.pin")}</span>
            <DropdownMenu.Shortcut keys={["option"]}>P</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <DownloadIcon />
            <span>{t("dropdownMenu.saveMessage")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>S</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <EyeOffIcon />
            <span>{t("dropdownMenu.markAsUnread")}</span>
            <DropdownMenu.Shortcut keys={["command", "option"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <MailIcon />
            <span>{t("dropdownMenu.shareViaEmail")}</span>
            <DropdownMenu.Shortcut keys={["command"]}>U</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
