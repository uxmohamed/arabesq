import * as React from "react";
import {
  BookmarkIcon,
  CheckIcon,
  CloseIcon,
  EmojiHappyIcon,
  FlagIcon,
  HashtagIcon,
  HeartIcon,
  LockIcon,
  MinusIcon,
  PinIcon,
  PinTackIcon,
  PlayIcon,
  ShieldTickIcon,
  SpinnerIcon,
  UndoIcon,
  WifiIcon,
} from "@iconicicons/react";
import { Avatar, Badge } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CheckIcon />} color="green" shape="pill">
          {t("badge.paid")}
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke>
          {t("badge.active")}
        </Badge>

        <Badge before={<CheckIcon />} color="green" shape="pill">
          {t("badge.paid")}
        </Badge>

        <Badge before={<CheckIcon />} color="green" stroke shape="pill">
          200
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CloseIcon />} color="red" shape="pill">
          {t("badge.rejected")}
        </Badge>

        <Badge before={<CloseIcon />} color="red" stroke>
          {t("badge.chargeback")}
        </Badge>

        <Badge before={<MinusIcon />} color="red" shape="pill" stroke>
          {t("badge.disconnected")}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<CloseIcon />} shape="pill">
          {t("badge.void")}
        </Badge>

        <Badge before={<CloseIcon />} stroke>
          {t("badge.expired")}
        </Badge>

        <Badge before={<CloseIcon />}>{t("badge.draft")}</Badge>

        <Badge before={<DotIcon className="text-wg-green" />} shape="pill" stroke>
          {t("badge.online")}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<SpinnerIcon />} color="blue" shape="pill">
          {t("badge.processing")}
        </Badge>

        <Badge before={<FlagIcon />} color="blue" stroke>
          {t("badge.flagged")}
        </Badge>

        <Badge color="blue" shape="pill" stroke>
          {t("badge.washingtonDC")}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge color="pink" shape="pill">
          {t("badge.special")}
        </Badge>

        <Badge color="pink" stroke>
          {t("badge.trial")}
        </Badge>

        <Badge before={<BookmarkIcon />} color="pink">
          {t("badge.bookmarked")}
        </Badge>

        <Badge before={<HashtagIcon />} color="pink" shape="pill" stroke>
          {t("badge.live")}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<UndoIcon />} color="yellow" shape="pill">
          {t("badge.moved")}
        </Badge>

        <Badge color="yellow" stroke>
          {t("badge.new")}
        </Badge>

        <Badge before={<ShieldTickIcon />} color="yellow">
          {t("badge.secure")}
        </Badge>

        <Badge before={<LockIcon />} color="yellow" shape="pill" stroke>
          {t("badge.locked")}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge color="orange" shape="pill">
          {t("badge.beta")}
        </Badge>

        <Badge before={<EmojiHappyIcon />} color="orange" stroke>
          {t("badge.hello")}
        </Badge>

        <Badge before={<PlayIcon />} color="orange">
          {t("badge.oneMinuteThirty")}
        </Badge>

        <Badge before={<PinIcon />} color="orange" shape="pill" stroke>
          {t("badge.pinned")}
        </Badge>

        <Badge color="orange" shape="pill" stroke>
          {t("badge.four")}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-4">
        <Badge before={<HeartIcon />} color="primary" shape="pill">
          {t("badge.designSystems")}
        </Badge>

        <Badge
          before={<Avatar size="xxs" src="https://github.com/ormanclark.png" />}
          color="primary"
          shape="pill"
        >
          {t("badge.ormanclark")}
        </Badge>

        <Badge before={<WifiIcon />} color="primary" shape="pill">
          {t("badge.freeWifi")}
        </Badge>
      </div>
    </div>
  );
}

export function Example2() {
  const { t } = useTranslation();
  return (
    <div className="mx-auto flex max-w-fit flex-col items-start gap-4">
      <Badge
        before={
          <span className="flex h-4 w-4 items-center justify-center rounded-full before:flex before:aspect-square before:w-[6px] before:rounded-full before:bg-wg-green before:content-['']" />
        }
      >
        {t("badge.online")}
      </Badge>

      <Badge before={<SpinnerIcon />} color="blue" shape="pill">
        {t("badge.processing")}
      </Badge>

      <Badge before={<FlagIcon />} color="blue" stroke>
        {t("badge.flagged")}
      </Badge>

      <Badge color="blue" shape="pill" stroke>
        {t("badge.washingtonDC")}
      </Badge>

      <Badge color="red" shape="pill">
        {t("badge.four")}
      </Badge>

      <Badge before={<PinTackIcon />} color="yellow" stroke>
        {t("badge.pinned")}
      </Badge>

      <Badge before={<PlayIcon />} color="pink" shape="pill">
        {t("badge.oneMinuteThirty")}
      </Badge>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
        <Badge color="green" size="sm" shape="pill" stroke>
          {t("badge.newYorkCity")}
        </Badge>

        <Badge color="orange" size="sm" shape="pill">
          {t("badge.one")}
        </Badge>

        <Badge before={<PinTackIcon />} size="sm" color="yellow" stroke>
          {t("badge.pinned")}
        </Badge>

        <Badge before={<PlayIcon />} size="sm" color="pink" shape="pill">
          {t("badge.oneMinuteThirty")}
        </Badge>
      </div>
    </div>
  );
}

/* ---------------------------------- Icons --------------------------------- */
const DotIcon = React.forwardRef<SVGSVGElement, React.SVGAttributes<SVGSVGElement>>(
  (props, ref) => (
    <svg {...props} fill="none" height="24" ref={ref} viewBox="0 0 24 24" width="24">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  )
);
