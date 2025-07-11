import { AvatarGroup, Checkbox } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="m-auto flex w-fit flex-col gap-6 text-left">
      <Checkbox.Root
        asChild
        className="flex w-80 cursor-pointer items-center justify-between rounded-lg border border-surface-100 px-4 py-3 shadow-wg-xs outline-2 -outline-offset-1 outline-primary wg-bg-white dark:wg-bg-neutral-900 [&:has([data-state=checked])]:outline"
      >
        <label>
          <Checkbox.Item />

          <div className="flex grow items-center justify-between text-sm">
            <span className="select-none">{t("checkbox.shareToUsers")}</span>

            <AvatarGroup
              items={[
                {
                  initials: "W",
                },
                {
                  initials: "D",
                },
                {
                  initials: "G",
                },
              ]}
              size="xs"
            />
          </div>
        </label>
      </Checkbox.Root>
    </div>
  );
}
