import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  getNamedProviders,
  privacyBusiness,
  privacyContact,
  privacyLastUpdatedCopy,
  privacyPolicy,
  privacySections,
} from "@/content/privacy";
import AppLink from "@/components/shared/AppLink";
import PrivacySection from "@/components/privacy/PrivacySection";
import {
  isApprovedContactValue,
  toMailtoHref,
  toTelHref,
} from "@/utils/contactValues";

function Paragraph({ children }) {
  return (
    <Typography variant="body1" color="text.secondary" component="p">
      {children}
    </Typography>
  );
}

function BulletList({ items }) {
  return (
    <List
      dense
      disablePadding
      sx={{ listStyleType: "disc", pl: 2.75, mb: 1.75 }}
    >
      {items.map((item) => (
        <ListItem
          key={item}
          disableGutters
          sx={{ display: "list-item", py: 0.3 }}
        >
          <Typography variant="body2" color="text.secondary">
            {item}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

function CategoryList({ categories }) {
  return (
    <Stack spacing={2.5} sx={{ mb: 2 }}>
      {categories.map((category) => (
        <Box key={category.title}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ typography: "h6", mb: 1 }}
          >
            {category.title}
          </Typography>
          <BulletList items={category.items} />
        </Box>
      ))}
    </Stack>
  );
}

export default function PrivacyBody() {
  const {
    informationCollected,
    howCollected,
    howUsed,
    serviceProviders,
    cookies,
    sharing,
    retention,
    security,
    choices,
    children,
    externalLinks,
    changes,
  } = privacySections;

  const namedProviders = getNamedProviders();
  const phoneApproved = isApprovedContactValue(privacyBusiness.phone);
  const emailApproved = isApprovedContactValue(privacyBusiness.email);
  const telHref = toTelHref(privacyBusiness.phone);
  const mailHref = toMailtoHref(privacyBusiness.email);
  const lastUpdated = privacyPolicy.lastUpdated?.trim?.() || "";

  return (
    <>
      <PrivacySection
        id={informationCollected.id}
        title={informationCollected.title}
      >
        <Paragraph>{informationCollected.intro}</Paragraph>
        <CategoryList categories={informationCollected.categories} />
        <Typography
          variant="body2"
          color="text.primary"
          component="p"
          sx={{
            fontWeight: 600,
            mb: 1.75,
            p: 2,
            bgcolor: "secondary.main",
            borderRadius: 1,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          {informationCollected.sensitiveReminder}
        </Typography>
        <Paragraph>{informationCollected.technicalNote}</Paragraph>
      </PrivacySection>

      <PrivacySection id={howCollected.id} title={howCollected.title}>
        {howCollected.paragraphs.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph}</Paragraph>
        ))}
      </PrivacySection>

      <PrivacySection id={howUsed.id} title={howUsed.title}>
        <Paragraph>{howUsed.intro}</Paragraph>
        <BulletList items={howUsed.items} />
        <Paragraph>{howUsed.marketingNote}</Paragraph>
      </PrivacySection>

      <PrivacySection id={serviceProviders.id} title={serviceProviders.title}>
        <Paragraph>{serviceProviders.neutralBody}</Paragraph>
        <Paragraph>{serviceProviders.categoriesLabel}</Paragraph>
        <BulletList items={serviceProviders.categories} />
        {namedProviders.length > 0 ? (
          <Box sx={{ mt: 1 }}>
            <Paragraph>Confirmed providers:</Paragraph>
            <List dense disablePadding sx={{ listStyleType: "disc", pl: 2.75 }}>
              {namedProviders.map((provider) => (
                <ListItem
                  key={provider.key}
                  disableGutters
                  sx={{ display: "list-item", py: 0.35 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="span"
                  >
                    {provider.label}:{" "}
                    <Link
                      href={provider.url.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      aria-label={`${provider.name} privacy policy (opens in a new tab)`}
                      sx={{ fontWeight: 600, color: "primary.dark" }}
                    >
                      {provider.name}
                      <OpenInNewIcon
                        fontSize="inherit"
                        sx={{ ml: 0.5, verticalAlign: "middle" }}
                        aria-hidden
                      />
                    </Link>
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        ) : (
          <Paragraph>{serviceProviders.pendingNote}</Paragraph>
        )}
      </PrivacySection>

      <PrivacySection id={cookies.id} title={cookies.title}>
        <Paragraph>{cookies.body}</Paragraph>
        {!privacyPolicy.analyticsEnabled &&
        !privacyPolicy.advertisingCookiesEnabled ? (
          <Paragraph>
            At this time, the site configuration does not enable analytics or
            advertising cookies.
          </Paragraph>
        ) : null}
        <Paragraph>{cookies.noAbsoluteClaim}</Paragraph>
        <Paragraph>{cookies.updateNote}</Paragraph>
      </PrivacySection>

      <PrivacySection id={sharing.id} title={sharing.title}>
        <Paragraph>{sharing.intro}</Paragraph>
        <BulletList items={sharing.items} />
        <Paragraph>{sharing.sellStatement}</Paragraph>
        <Paragraph>{sharing.neverClaimNote}</Paragraph>
      </PrivacySection>

      <PrivacySection id={retention.id} title={retention.title}>
        <Paragraph>{retention.body}</Paragraph>
        <Paragraph>{retention.providerNote}</Paragraph>
      </PrivacySection>

      <PrivacySection id={security.id} title={security.title}>
        <Paragraph>{security.body}</Paragraph>
        <Paragraph>{security.practicesIntro}</Paragraph>
        <BulletList items={security.practices} />
      </PrivacySection>

      <PrivacySection id={choices.id} title={choices.title}>
        <Paragraph>{choices.intro}</Paragraph>
        <BulletList items={choices.items} />
        <Paragraph>{choices.responseNote}</Paragraph>
      </PrivacySection>

      <PrivacySection id={children.id} title={children.title}>
        <Paragraph>{children.body}</Paragraph>
      </PrivacySection>

      <PrivacySection id={externalLinks.id} title={externalLinks.title}>
        <Paragraph>{externalLinks.body}</Paragraph>
      </PrivacySection>

      <PrivacySection id={changes.id} title={changes.title}>
        <Paragraph>{changes.body}</Paragraph>
      </PrivacySection>

      <PrivacySection id={privacyContact.id} title={privacyContact.title}>
        <Paragraph>{privacyContact.body}</Paragraph>
        <Stack spacing={1.5} sx={{ mt: 1, mb: 2 }}>
          {phoneApproved && telHref ? (
            <Button
              component="a"
              href={telHref}
              variant="outlined"
              color="primary"
              aria-label={`Call HNM at ${privacyBusiness.phone}`}
              sx={{ alignSelf: "flex-start", minHeight: 44 }}
            >
              Call HNM
            </Button>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {privacyContact.phoneUnavailable}
            </Typography>
          )}
          {emailApproved && mailHref ? (
            <Button
              component="a"
              href={mailHref}
              variant="outlined"
              color="primary"
              aria-label={`Email HNM at ${privacyBusiness.email}`}
              sx={{ alignSelf: "flex-start", minHeight: 44 }}
            >
              Email HNM
            </Button>
          ) : (
            <Typography variant="body2" color="text.secondary">
              {privacyContact.emailUnavailable}
            </Typography>
          )}
          <AppLink
            href={privacyContact.contactHref}
            underline="hover"
            sx={{
              fontWeight: 600,
              color: "primary.dark",
              width: "fit-content",
            }}
          >
            {privacyContact.contactPageLabel}
          </AppLink>
        </Stack>
      </PrivacySection>

      <Box
        component="aside"
        aria-label="Privacy notice last updated"
        sx={{ pt: { xs: 3, md: 4 }, maxWidth: "42rem" }}
      >
        <Typography variant="body2" color="text.secondary">
          <Box component="span" sx={{ fontWeight: 600, color: "text.primary" }}>
            {privacyLastUpdatedCopy.label}:
          </Box>{" "}
          {lastUpdated || privacyLastUpdatedCopy.pending}
        </Typography>
      </Box>
    </>
  );
}
