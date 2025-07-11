import { ArrowUpRightIcon, CheckIcon, EmojiSadIcon } from "@iconicicons/react";
import { Alert, Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      {/* Example 1 */}
      <Alert color="success" title={t("alert.successUploaded")} before={<CheckIcon />} closable />

      {/* Example 2 */}
      <Alert
        title={t("alert.noCredits")}
        color="warning"
        after={
          <Button
            variant="link"
            className="text-inherit hover:text-surface-900 dark:text-wg-yellow-500 dark:hover:text-yellow-300"
          >
            {t("button.upgrade")}
          </Button>
        }
      >
        {t("alert.upgradeToContinue")}
      </Alert>

      {/* Example 3 */}
      <Alert
        before={<EmojiSadIcon />}
        color="error"
        title={t("alert.submissionProblem")}
        variant="expanded"
      >
        <div>
          <p>{t("alert.mustIncludeNumber")}</p>
          <p>{t("alert.mustIncludeUppercase")}</p>
        </div>
      </Alert>

      {/* Example 4 */}
      <Alert
        title={t("alert.softwareUpdate")}
        closable
        color="info"
        variant="expanded"
        after={
          <Button
            variant="outline"
            className="light:bg-white"
            size="sm"
            after={<ArrowUpRightIcon />}
          >
            {t("button.viewChangelog")}
          </Button>
        }
      />
    </div>
  );
}
