"use client";

import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useId, useState } from "react";
import { contactFormCopy } from "@/content/contact";
import {
  formProvider,
  isFormSubmissionEnabled,
  optionLabel,
} from "@/content/forms";
import { routes } from "@/content/routes";
import AppLink from "@/components/shared/AppLink";
import {
  onGreenFormSx,
  onGreenSubmitButtonSx,
} from "@/theme/formSurfaces";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emptyValues = {
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
};

function validate(values) {
  const { fields } = contactFormCopy;
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = fields.fullName.requiredMessage;
  }

  if (!values.email.trim()) {
    errors.email = fields.email.requiredMessage;
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = fields.email.invalidMessage;
  }

  if (!values.inquiryType) {
    errors.inquiryType = fields.inquiryType.requiredMessage;
  }

  if (!values.message.trim()) {
    errors.message = fields.message.requiredMessage;
  }

  return errors;
}

export default function GeneralContactForm() {
  const formId = useId();
  const submissionEnabled = isFormSubmissionEnabled(
    formProvider.contactEndpoint,
  );
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const statusId = `${formId}-status`;
  const privacyId = `${formId}-privacy`;

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
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      setFormMessage("Please correct the highlighted fields and try again.");
      return;
    }

    if (!submissionEnabled) {
      setStatus("inactive");
      setFormMessage(contactFormCopy.inactiveNotice);
      return;
    }

    setStatus("submitting");
    setFormMessage("");

    const inquiryTypeLabel = optionLabel(
      contactFormCopy.inquiryTypes,
      values.inquiryType,
    );

    try {
      const response = await fetch(formProvider.contactEndpoint.trim(), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Full name": values.fullName.trim(),
          // Keep `email` so Formspree Reply-To works by default.
          email: values.email.trim(),
          Phone: values.phone.trim() || "Not provided",
          "Inquiry type": inquiryTypeLabel,
          Message: values.message.trim(),
          _subject: `HNM contact: ${inquiryTypeLabel}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setValues(emptyValues);
      setErrors({});
      setStatus("success");
      setFormMessage(contactFormCopy.successMessage);
    } catch {
      setStatus("error");
      setFormMessage(
        "Something went wrong while sending your message. Please try again, or use the phone or email above once available.",
      );
    }
  };

  const { fields } = contactFormCopy;

  return (
    <Box
      component="section"
      aria-labelledby="contact-form-heading"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "primary.dark",
        color: "common.white",
      }}
    >
      <Container maxWidth="md">
        <Typography
          id="contact-form-heading"
          variant="h2"
          component="h2"
          sx={{ mb: 1.5, color: "common.white" }}
        >
          {contactFormCopy.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, maxWidth: "36rem", color: "rgba(255,255,255,0.9)" }}
        >
          {contactFormCopy.supporting}
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          aria-label="General contact form"
          aria-describedby={privacyId}
          sx={onGreenFormSx}
        >
          <Stack spacing={2.5}>
            <TextField
              id={`${formId}-fullName`}
              name={fields.fullName.name}
              label={fields.fullName.label}
              value={values.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              error={Boolean(errors.fullName)}
              helperText={errors.fullName}
              required
              autoComplete="name"
              disabled={status === "submitting"}
            />

            <TextField
              id={`${formId}-email`}
              name={fields.email.name}
              label={fields.email.label}
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
              autoComplete="email"
              disabled={status === "submitting"}
            />

            <TextField
              id={`${formId}-phone`}
              name={fields.phone.name}
              label={fields.phone.label}
              type="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              autoComplete="tel"
              disabled={status === "submitting"}
            />

            <TextField
              id={`${formId}-inquiryType`}
              name={fields.inquiryType.name}
              label={fields.inquiryType.label}
              select
              value={values.inquiryType}
              onChange={(event) =>
                updateField("inquiryType", event.target.value)
              }
              error={Boolean(errors.inquiryType)}
              helperText={errors.inquiryType}
              required
              disabled={status === "submitting"}
            >
              <MenuItem value="">
                <em>Select an inquiry type</em>
              </MenuItem>
              {contactFormCopy.inquiryTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id={`${formId}-message`}
              name={fields.message.name}
              label={fields.message.label}
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              error={Boolean(errors.message)}
              helperText={errors.message}
              required
              multiline
              minRows={5}
              disabled={status === "submitting"}
            />

            <Typography
              id={privacyId}
              variant="body2"
              sx={{ lineHeight: 1.65, color: "rgba(255,255,255,0.82)" }}
            >
              {contactFormCopy.privacyNotice}{" "}
              <AppLink
                href={routes.privacy}
                underline="hover"
                sx={{ fontWeight: 600, color: "common.white" }}
              >
                {contactFormCopy.privacyLinkLabel}
              </AppLink>
              .
            </Typography>

            <Box id={statusId} aria-live="polite">
              {formMessage && status === "success" ? (
                <Alert severity="success">{formMessage}</Alert>
              ) : null}
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
              disabled={status === "submitting"}
              sx={onGreenSubmitButtonSx}
            >
              {status === "submitting"
                ? "Sending…"
                : contactFormCopy.submitLabel}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
