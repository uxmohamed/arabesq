import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export function Example() {
  const { t } = useTranslation();
  const wrapper = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select label={t("select.projectStatus")} tooltip={t("form.tooltip")} required>
        <SelectTrigger className="min-w-[192px]">
          <SelectValue placeholder={t("select.selectStatus")} />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal container={wrapper.current}>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="overdue">{t("select.overdue")}</SelectItem>
              <SelectItem value="due-this-week">{t("select.dueThisWeek")}</SelectItem>
              <SelectItem value="upcoming">{t("select.upcoming")}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}

export default Example;
