import { describe, expect, it } from 'bun:test';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import {
  siteConfig,
  cvDownloadEnabled,
  metricsStrip,
  contractPortfolio,
  featuredContracts,
  contractCategories,
  municipalEntities,
  coreCapabilities,
  experienceTimeline,
  showCipsInProgress,
  credentialsList,
  faqItems,
} from '../src/data/siteData';

describe('executive siteData v2.0 integrity', () => {
  it('uses canonical email and versioned CV path', () => {
    expect(siteConfig.email).toBe('hello@jacobc.co.za');
    expect(siteConfig.cvPath).toBe('/Jacob_Chademwiri_Procurement_Contracts_CV_v4.docx');
    expect(cvDownloadEnabled).toBe(false);
    expect(showCipsInProgress).toBe(false);
  });

  it('contains all 16 verified municipal contracts across 4 entities and 4 categories', () => {
    expect(contractPortfolio.length).toBe(16);
    expect(contractCategories.length).toBe(5); // All + 4 categories
    expect(municipalEntities.length).toBe(5); // All Entities + 4 entities

    const uniqueIds = new Set(contractPortfolio.map((c) => c.id));
    expect(uniqueIds.size).toBe(16);

    expect(featuredContracts.length).toBe(4);
    expect(new Set(featuredContracts.map((c) => c.category)).size).toBe(4);

    contractPortfolio.forEach((c) => {
      expect(c.ref.length).toBeGreaterThan(0);
      expect(c.highlights.length).toBe(3);
    });
  });

  it('has 4 executive metrics, 4 capabilities, 4 career organizations, and 4 FAQs', () => {
    expect(metricsStrip.length).toBe(4);
    expect(coreCapabilities.length).toBe(4);
    expect(experienceTimeline.length).toBe(4);
    expect(experienceTimeline[0].roles.length).toBe(3);
    expect(credentialsList.length).toBe(4);
    expect(faqItems.length).toBe(4);
  });

  it('enforces the Hard Brand Wall with zero forbidden strings', () => {
    const serialized = JSON.stringify({
      siteConfig,
      metricsStrip,
      contractPortfolio,
      coreCapabilities,
      experienceTimeline,
      credentialsList,
      faqItems,
    });

    expect(serialized).not.toContain('Playhouse Media');
    expect(serialized).not.toContain('playhousemedia');
    expect(serialized).not.toContain('Hermanus');
    expect(serialized).not.toContain('hello@jacob.co.za');
  });

  it('enforces the Hard Brand Wall across all text files in src/ and public/', () => {
    const textExts = new Set(['.astro', '.ts', '.tsx', '.svg', '.txt', '.webmanifest', '.json']);
    const forbidden = [
      'Playhouse Media',
      'playhousemedia',
      'Hermanus',
      'hello@jacob.co.za',
      'TenderTrack360',
    ];

    const collectFiles = (dir: string): string[] => {
      const files: string[] = [];
      for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
          files.push(...collectFiles(full));
        } else if (textExts.has(extname(full).toLowerCase())) {
          files.push(full);
        }
      }
      return files;
    };

    const files = [...collectFiles('src'), ...collectFiles('public')];
    expect(files.length).toBeGreaterThan(0);

    for (const file of files) {
      const content = readFileSync(file, 'utf8');
      for (const term of forbidden) {
        expect(content, `${file} contains forbidden term "${term}"`).not.toContain(term);
      }
    }
  });
});
