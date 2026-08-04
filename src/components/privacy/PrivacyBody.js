import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Box from "@mui/material/Box";
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
import ContactValueLink from "@/components/shared/ContactValueLink";
import PrivacySection from "@/components/privacy/PrivacySection";
import ServiceBoundaryNote from "@/components/services/ServiceBoundaryNote";
import { brandRadii } from "@/theme/brandTokens";
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

function NamedProvidersList({ providers, intro }) {
  if (!providers.length) {
    return null;
  }

  return (
    <Box
      sx={{
        mt: 2,
        p: { xs: 2.5, md: 3 },
        borderRadius: `${brandRadii.card}px`,
        bgcolor: "secondary.main",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="overline"
        component="p"
        sx={{ color: "primary.dark", mb: 1.5 }}
      >
        {intro}
      </Typography>
      <Stack spacing={1.25} component="ul" sx={{ m: 0, p: 0, listStyle: "none" }}>
        {providers.map((provider) => (
          <Box
            component="li"
            key={provider.key}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              component="span"
              sx={{ minWidth: { sm: "9.5rem" }, fontWeight: 600 }}
            >
              {provider.label}
            </Typography>
            <Link
              href={provider.url.trim()}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              aria-label={`${provider.name} privacy policy (opens in a new tab)`}
              sx={{
                fontWeight: 600,
                color: "primary.dark",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {provider.name}
              <OpenInNewIcon
                fontSize="inherit"
                sx={{ ml: 0.5, verticalAlign: "middle" }}
                aria-hidden
              />
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
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
        <Box sx={{ mb: 1 }}>
          <ServiceBoundaryNote
            title={informationCollected.sensitiveReminderTitle}
            tone="cream"
          >
            {informationCollected.sensitiveReminder}
          </ServiceBoundaryNote>
        </Box>
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
          <NamedProvidersList
            providers={namedProviders}
            intro={serviceProviders.namedProvidersIntro}
          />
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
        <Stack spacing={1.5} sx={{ mt: 2.5, mb: 2, alignItems: "flex-start" }}>
          {phoneApproved && telHref ? (
            <ContactValueLink
              href={telHref}
              icon={PhoneOutlinedIcon}
              label={privacyContact.phoneActionLabel}
              value={privacyBusiness.phone}
              tone="cream"
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              {privacyContact.phoneUnavailable}
            </Typography>
          )}
          {emailApproved && mailHref ? (
            <ContactValueLink
              href={mailHref}
              icon={EmailOutlinedIcon}
              label={privacyContact.emailActionLabel}
              value={privacyBusiness.email}
              tone="cream"
            />
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
              mt: 0.5,
            }}
          >
            {privacyContact.contactPageLabel}
          </AppLink>
        </Stack>
      </PrivacySection>

      <Box
        component="aside"
        aria-label="Privacy notice last updated"
        sx={{
          mt: { xs: 2, md: 3 },
          pt: { xs: 3, md: 4 },
          maxWidth: "42rem",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
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
