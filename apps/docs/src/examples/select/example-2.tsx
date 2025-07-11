import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectSeparator,
  SelectTrigger,
} from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  const wrapper = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
      <Select
        required
        label={t("select.food")}
        defaultValue="potato"
        tooltip={t("form.tooltip")}
        helperText={t("form.helperText")}
      >
        <SelectTrigger className="min-w-[192px] data-[state=open]:border-transparent data-[state=open]:outline-none" />

        <SelectPortal container={wrapper.current}>
          <SelectContent className="max-h-[100px]" position="item-aligned">
            <SelectGroup>
              <SelectLabel>{t("select.fruits")}</SelectLabel>
              <SelectItem value="apple">{t("select.apple")}</SelectItem>
              <SelectItem value="banana">{t("select.banana")}</SelectItem>
              <SelectItem value="orange">{t("select.orange")}</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>{t("select.veggies")}</SelectLabel>
              <SelectItem value="carrot">{t("select.carrot")}</SelectItem>
              <SelectItem value="potato">{t("select.potato")}</SelectItem>
              <SelectItem value="tomato">{t("select.tomato")}</SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>{t("select.meat")}</SelectLabel>
              <SelectItem value="beef">{t("select.beef")}</SelectItem>
              <SelectItem value="chicken">{t("select.chicken")}</SelectItem>
              <SelectItem value="pork">{t("select.pork")}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
}
