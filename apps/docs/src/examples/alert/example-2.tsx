import { ArrowUpRightIcon, CheckIcon, EmojiSadIcon } from "@iconicicons/react";
import { Alert, Button } from "@lemonsqueezy/wedges";
import { useTranslation } from "react-i18next";

export default function Example() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-6">
      {/* Example 1 */}
      <Alert color="success" title={t("alert.successUploaded", "Successfully uploaded!")} before={<CheckIcon />} closable />

      {/* Example 2 */}
      <Alert
        title={t("alert.noCredits", "You have no credits left!")}
        color="warning"
        after={
          <Button
            variant="link"
            className="text-inherit hover:text-surface-900 dark:text-wg-yellow-500 dark:hover:text-yellow-300"
          >
            {t("button.upgrade", "Upgrade")}
          </Button>
        }
      >
        {t("alert.upgradeToContinue", "Upgrade to continue.")}
      </Alert>

      {/* Example 3 */}
      <Alert
        before={<EmojiSadIcon />}
        color="error"
        title={t("alert.submissionProblem", "There was a problem with your submission")}
        variant="expanded"
      >
        <div>
          <p>{t("alert.mustIncludeNumber", "Must include at least 1 number")}</p>
          <p>{t("alert.mustIncludeUppercase", "Must include at least 2 uppercase letters")}</p>
        </div>
      </Alert>

      {/* Example 4 */}
      <Alert
        title={t("alert.softwareUpdate", "A new software update is available. See what's new.")}
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
            {t("button.viewChangelog", "View the changelog")}
          </Button>
        }
      />
    </div>
  );
}
