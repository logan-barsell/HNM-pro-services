"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useId, useRef, useState } from "react";
import {
  consultationFormCopy,
  consultationTimeframeOptions,
  referralSourceOptions,
  serviceNeededOptions,
  serviceTimeframeOptions,
} from "@/content/consultation";
import {
  formProvider,
  isFormSubmissionEnabled,
  optionLabel,
} from "@/content/forms";
import { routes } from "@/content/routes";
import AppLink from "@/components/shared/AppLink";
import ConsultationSuccess from "@/components/consultation/ConsultationSuccess";
import {
  onCreamFormSx,
  onCreamSubmitButtonSx,
} from "@/theme/formSurfaces";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues = {
  fullName: "",
  email: "",
  phone: "",
  serviceNeeded: "",
  location: "",
  consultationTimeframe: "",
  serviceTimeframe: "",
  needs: "",
  referralSource: "",
};

function validate(values) {
  const { fields } = consultationFormCopy;
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = fields.fullName.requiredMessage;
  }

  if (!values.email.trim()) {
    errors.email = fields.email.requiredMessage;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = fields.email.invalidMessage;
  }

  if (!values.serviceNeeded) {
    errors.serviceNeeded = fields.serviceNeeded.requiredMessage;
  }

  if (!values.location.trim()) {
    errors.location = fields.location.requiredMessage;
  }

  if (!values.consultationTimeframe) {
    errors.consultationTimeframe = fields.consultationTimeframe.requiredMessage;
  }

  if (!values.serviceTimeframe) {
    errors.serviceTimeframe = fields.serviceTimeframe.requiredMessage;
  }

  if (!values.needs.trim()) {
    errors.needs = fields.needs.requiredMessage;
  }

  return errors;
}

function FieldGroup({ title, children }) {
  return (
    <Box component="fieldset" sx={{ border: "none", m: 0, p: 0 }}>
      <Typography
        component="legend"
        variant="h3"
        sx={{
          typography: "h6",
          mb: 2,
          float: "none",
          width: "100%",
          padding: 0,
          color: "text.primary",
        }}
      >
        {title}
      </Typography>
      <Stack spacing={2.5}>{children}</Stack>
    </Box>
  );
}

export default function ConsultationForm() {
  const formId = useId();
  const successHeadingRef = useRef(null);
  const submissionEnabled = isFormSubmissionEnabled(
    formProvider.consultationEndpoint,
  );
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const statusId = `${formId}-status`;
  const privacyId = `${formId}-privacy`;
  const locationHelperId = `${formId}-location-helper`;
  const consultationHelperId = `${formId}-consultation-helper`;
  const needsHelperId = `${formId}-needs-helper`;
  const needsNoticeId = `${formId}-needs-notice`;

  useEffect(() => {
    if (status === "success" && successHeadingRef.current) {
      successHeadingRef.current.focus();
    }
  }, [status]);

  const updateField = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      setFormMessage(consultationFormCopy.invalidMessage);
      return;
    }

    if (!submissionEnabled) {
      setStatus("inactive");
      setFormMessage(consultationFormCopy.inactiveNotice);
      return;
    }

    setStatus("submitting");
    setFormMessage("");

    const serviceNeededLabel = optionLabel(
      serviceNeededOptions,
      values.serviceNeeded,
    );

    try {
      const response = await fetch(formProvider.consultationEndpoint.trim(), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Full Name": values.fullName.trim(),
          "Email Address": values.email.trim(),
          "Phone Number": values.phone.trim() || "Not provided",
          "Service Needed": serviceNeededLabel,
          "Service location or zip code": values.location.trim(),
          "Preferred consultation timeframe": optionLabel(
            consultationTimeframeOptions,
            values.consultationTimeframe,
          ),
          "When service may be needed": optionLabel(
            serviceTimeframeOptions,
            values.serviceTimeframe,
          ),
          "Tell me a little about what you need": values.needs.trim(),
          "How did you hear about me?": optionLabel(
            referralSourceOptions,
            values.referralSource,
            "Not provided",
          ),
          _subject: `HNM Consultation: ${serviceNeededLabel}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setValues(emptyValues);
      setErrors({});
      setStatus("success");
      setFormMessage("");
    } catch {
      setStatus("error");
      setFormMessage(consultationFormCopy.errorMessage);
    }
  };

  const { fields, groups } = consultationFormCopy;
  const isSubmitting = status === "submitting";

  return (
    <Box
      component="section"
      aria-labelledby={
        status === "success"
          ? "consultation-success-heading"
          : "consultation-form-heading"
      }
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        {status === "success" ? (
          <ConsultationSuccess headingRef={successHeadingRef} />
        ) : (
          <>
            <Typography
              id="consultation-form-heading"
              variant="h2"
              component="h2"
              sx={{ mb: 1.5 }}
            >
              {consultationFormCopy.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: "40rem" }}
            >
              {consultationFormCopy.supporting}
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              aria-label="Consultation request form"
              aria-describedby={privacyId}
              sx={onCreamFormSx}
            >
              <Stack spacing={4}>
                <FieldGroup title={groups.contact}>
                  <TextField
                    id={`${formId}-fullName`}
                    name={fields.fullName.name}
                    label={fields.fullName.label}
                    value={values.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    error={Boolean(errors.fullName)}
                    helperText={errors.fullName}
                    required
                    autoComplete="name"
                    disabled={isSubmitting}
                  />

                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        id={`${formId}-email`}
                        name={fields.email.name}
                        label={fields.email.label}
                        type="email"
                        value={values.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        required
                        autoComplete="email"
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        id={`${formId}-phone`}
                        name={fields.phone.name}
                        label={fields.phone.label}
                        type="tel"
                        value={values.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        autoComplete="tel"
                        disabled={isSubmitting}
                      />
                    </Grid>
                  </Grid>
                </FieldGroup>

                <FieldGroup title={groups.service}>
                  <TextField
                    id={`${formId}-serviceNeeded`}
                    name={fields.serviceNeeded.name}
                    label={fields.serviceNeeded.label}
                    select
                    value={values.serviceNeeded}
                    onChange={(event) =>
                      updateField("serviceNeeded", event.target.value)
                    }
                    error={Boolean(errors.serviceNeeded)}
                    helperText={errors.serviceNeeded}
                    required
                    disabled={isSubmitting}
                  >
                    <MenuItem value="">
                      <em>Select a service</em>
                    </MenuItem>
                    {serviceNeededOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id={`${formId}-location`}
                    name={fields.location.name}
                    label={fields.location.label}
                    value={values.location}
                    onChange={(event) =>
                      updateField("location", event.target.value)
                    }
                    error={Boolean(errors.location)}
                    helperText={errors.location || fields.location.helperText}
                    required
                    disabled={isSubmitting}
                    slotProps={{
                      formHelperText: { id: locationHelperId },
                      htmlInput: {
                        "aria-describedby": locationHelperId,
                      },
                    }}
                  />

                  <TextField
                    id={`${formId}-consultationTimeframe`}
                    name={fields.consultationTimeframe.name}
                    label={fields.consultationTimeframe.label}
                    select
                    value={values.consultationTimeframe}
                    onChange={(event) =>
                      updateField("consultationTimeframe", event.target.value)
                    }
                    error={Boolean(errors.consultationTimeframe)}
                    helperText={
                      errors.consultationTimeframe ||
                      fields.consultationTimeframe.helperText
                    }
                    required
                    disabled={isSubmitting}
                    slotProps={{
                      formHelperText: { id: consultationHelperId },
                    }}
                  >
                    <MenuItem value="">
                      <em>Select a timeframe</em>
                    </MenuItem>
                    {consultationTimeframeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id={`${formId}-serviceTimeframe`}
                    name={fields.serviceTimeframe.name}
                    label={fields.serviceTimeframe.label}
                    select
                    value={values.serviceTimeframe}
                    onChange={(event) =>
                      updateField("serviceTimeframe", event.target.value)
                    }
                    error={Boolean(errors.serviceTimeframe)}
                    helperText={errors.serviceTimeframe}
                    required
                    disabled={isSubmitting}
                  >
                    <MenuItem value="">
                      <em>Select when service may be needed</em>
                    </MenuItem>
                    {serviceTimeframeOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FieldGroup>

                <FieldGroup title={groups.additional}>
                  <Box>
                    <TextField
                      id={`${formId}-needs`}
                      name={fields.needs.name}
                      label={fields.needs.label}
                      value={values.needs}
                      onChange={(event) =>
                        updateField(
                          "needs",
                          event.target.value.slice(0, fields.needs.maxLength),
                        )
                      }
                      error={Boolean(errors.needs)}
                      helperText={errors.needs || fields.needs.helperText}
                      required
                      multiline
                      minRows={4}
                      maxRows={8}
                      disabled={isSubmitting}
                      slotProps={{
                        formHelperText: { id: needsHelperId },
                        htmlInput: {
                          maxLength: fields.needs.maxLength,
                          "aria-describedby": `${needsHelperId} ${needsNoticeId}`,
                        },
                      }}
                    />
                    <Typography
                      id={needsNoticeId}
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        display: "block",
                        mt: 1,
                        lineHeight: 1.5,
                      }}
                    >
                      {fields.needs.sensitiveNotice}
                    </Typography>
                  </Box>

                  <TextField
                    id={`${formId}-referralSource`}
                    name={fields.referralSource.name}
                    label={fields.referralSource.label}
                    select
                    value={values.referralSource}
                    onChange={(event) =>
                      updateField("referralSource", event.target.value)
                    }
                    disabled={isSubmitting}
                  >
                    <MenuItem value="">
                      <em>Select an option (optional)</em>
                    </MenuItem>
                    {referralSourceOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FieldGroup>

                <Typography
                  id={privacyId}
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.65 }}
                >
                  {consultationFormCopy.privacyNotice}{" "}
                  <AppLink
                    href={routes.privacy}
                    underline="hover"
                    sx={{ fontWeight: 600, color: "primary.dark" }}
                  >
                    {consultationFormCopy.privacyLinkLabel}
                  </AppLink>
                  .
                </Typography>

                <Box id={statusId} aria-live="polite">
                  {formMessage && status === "error" ? (
                    <Alert severity="error" role="alert">
                      {formMessage}
                    </Alert>
                  ) : null}
                  {formMessage &&
                  (status === "inactive" || status === "invalid") ? (
                    <Alert
                      severity={status === "invalid" ? "warning" : "info"}
                      role="alert"
                    >
                      {formMessage}
                    </Alert>
                  ) : null}
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  sx={onCreamSubmitButtonSx}
                >
                  {isSubmitting
                    ? consultationFormCopy.submittingLabel
                    : consultationFormCopy.submitLabel}
                </Button>
              </Stack>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}
