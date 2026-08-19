import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { brand, font } from './theme';

export interface ContactNotificationProps {
  name: string;
  email: string;
  projectLabel: string;
  message: string;
  receivedAt: Date;
}

const dateFormatter = new Intl.DateTimeFormat('en-ZA', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Africa/Johannesburg',
});

const label = {
  margin: '0 0 4px',
  fontFamily: font.mono,
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: brand.accent,
};

const value = {
  margin: '0',
  fontFamily: font.sans,
  fontSize: '15px',
  lineHeight: '1.5',
  color: brand.text,
};

export function ContactNotification({
  name,
  email,
  projectLabel,
  message,
  receivedAt,
}: ContactNotificationProps) {
  return (
    <Html lang="en">
      <Head />
      {/* Shows in the inbox list before the message is opened. */}
      <Preview>{`${projectLabel} — ${name} <${email}>`}</Preview>
      <Body style={{ margin: 0, padding: '24px 12px', backgroundColor: brand.bg }}>
        <Container
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            padding: '32px',
            backgroundColor: brand.surface,
            borderRadius: '8px',
            border: `1px solid ${brand.edge}`,
          }}
        >
          <Text style={label}>New enquiry</Text>
          <Heading
            as="h1"
            style={{
              margin: '0 0 6px',
              fontFamily: font.sans,
              fontSize: '24px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              color: brand.text,
            }}
          >
            {name}
          </Heading>
          <Link
            href={`mailto:${email}`}
            style={{ fontFamily: font.sans, fontSize: '15px', color: brand.accent }}
          >
            {email}
          </Link>

          <Hr style={{ margin: '24px 0', border: 'none', borderTop: `1px solid ${brand.edge}` }} />

          <Section style={{ marginBottom: '20px' }}>
            <Text style={label}>About</Text>
            <Text style={value}>{projectLabel}</Text>
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Text style={label}>Received</Text>
            <Text style={{ ...value, fontFamily: font.mono, fontSize: '14px' }}>
              {dateFormatter.format(receivedAt)} SAST
            </Text>
          </Section>

          <Text style={label}>Message</Text>
          <Section
            style={{
              padding: '16px 18px',
              backgroundColor: brand.bg,
              borderRadius: '6px',
              borderLeft: `2px solid ${brand.accent}`,
            }}
          >
            <Text
              style={{
                margin: 0,
                fontFamily: font.sans,
                fontSize: '15px',
                lineHeight: '1.65',
                color: brand.text2,
                whiteSpace: 'pre-wrap',
              }}
            >
              {message}
            </Text>
          </Section>

          <Hr style={{ margin: '28px 0 16px', border: 'none', borderTop: `1px solid ${brand.edge}` }} />

          <Text
            style={{
              margin: 0,
              fontFamily: font.sans,
              fontSize: '13px',
              lineHeight: '1.6',
              color: brand.text3,
            }}
          >
            Reply to this email to answer {name.split(' ')[0]} directly — it goes to{' '}
            <span style={{ fontFamily: font.mono }}>{email}</span>, not to the website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactNotification;
